import {
  OpenAPIDocument
} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";
import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";
import type {PathItem} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/pathItem.ts";
import type {GroupedByTag} from "@/helpers/classes/dtos/openapi-util/groupedByTag.ts";
import type {GroupedEndpoint} from "@/helpers/classes/dtos/openapi-util/groupedEndpoint.ts";

/**
 * Utility class for working with OpenAPI 3.0.x documents
 * Provides methods for parsing, stringifying, and organizing OpenAPI specifications
 */
export default class OpenApiUtil {

  /**
   * Converts an OpenAPIDocument object to a formatted JSON string
   * @param obj - The OpenAPI document to stringify
   * @returns Formatted JSON string with 2-space indentation
   * @example
   * const jsonStr = OpenApiUtil.stringifyDocument(openApiDoc);
   * console.log(jsonStr); // Pretty-printed JSON
   */
  static stringifyDocument(obj: OpenAPIDocument): string {
    return JSON.stringify(obj, null, 2);
  }

  /**
   * Parses a JSON string and converts it to an OpenAPIDocument instance
   * @param objectString - JSON string representation of an OpenAPI document
   * @returns OpenAPIDocument instance with parsed data
   * @throws {SyntaxError} If the input string is not valid JSON
   * @example
   * const doc = OpenApiUtil.logInputDocument('{"openapi": "3.0.0", ...}');
   */
  static logInputDocument(objectString: string): OpenAPIDocument {
    const parsed = JSON.parse(objectString)
    return Object.assign(new OpenAPIDocument(), parsed);
  }

  /**
   * Recursively resolves $ref references in an OpenAPI object
   * Traverses through objects and arrays to find and replace all $ref properties
   * with their actual schema definitions from the components section
   *
   * @param obj - Object that may contain $ref references
   * @param document - Complete OpenAPI document containing component definitions
   * @returns Resolved object with all $ref references replaced by actual schemas
   *
   * @example
   * // Input: { "$ref": "#/components/schemas/User" }
   * // Output: { "type": "object", "properties": { "id": {...}, "name": {...} } }
   *
   * @remarks
   * - Handles nested references (references within referenced schemas)
   * - Supports references in format: #/components/schemas/SchemaName
   * - Returns original object if reference cannot be resolved
   * - Recursively processes arrays and nested objects
   */
  private static resolveRefs(obj: PathItem, document: OpenAPIDocument): any {
    // Base case: return primitives and null/undefined as-is
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    // If object contains a $ref property, resolve it
    if (obj.$ref) {
      // Parse the reference path (e.g., "#/components/schemas/User" -> ["components", "schemas", "User"])
      const refPath = obj.$ref.replace('#/', '').split('/');
      let resolved: any = document;

      // Navigate through the document structure to find the referenced schema
      for (const key of refPath) {
        resolved = resolved?.[key];
      }

      // Recursively resolve the found schema (in case it contains more $refs)
      return resolved ? this.resolveRefs(resolved, document) : obj;
    }

    // Handle arrays: resolve references in each array element
    if (Array.isArray(obj)) {
      return obj.map(item => this.resolveRefs(item, document));
    }

    // Handle objects: recursively resolve all property values
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = this.resolveRefs(value, document);
    }
    return result;
  }

  /**
   * Groups API endpoints by their tags and resolves all schema references
   * Organizes the OpenAPI paths by tag, removes redundant tag properties,
   * and replaces all $ref references with actual schema definitions
   *
   * @param obj - Complete OpenAPI document to process
   * @returns Array of objects grouped by tag, each containing resolved endpoints
   *
   * @example
   * const grouped = OpenApiUtil.orderByTags(openApiDoc);
   * // Returns:
   * // [
   * //   {
   * //     tag: "Users",
   * //     endpoints: [
   * //       {
   * //         "/api/users": {
   * //           "get": { summary: "...", responses: {...} }
   * //         }
   * //       }
   * //     ]
   * //   },
   * //   { tag: "Products", endpoints: [...] }
   * // ]
   *
   * @remarks
   * - Endpoints with multiple tags will appear under each tag
   * - Endpoints without tags are grouped under "Untagged"
   * - Results are sorted alphabetically by tag name
   * - All $ref references in request/response schemas are fully resolved
   * - The 'tags' property is removed from individual operations to avoid redundancy
   * - Supports all HTTP methods: GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH, TRACE
   */
  static orderByTags(obj: OpenAPIDocument): GroupedByTag[] {
    // Map to store endpoints grouped by tag
    const tagMap = new Map<string, GroupedEndpoint[]>();

    // Iterate through all API paths in the document
    Object.entries(obj.paths).forEach(([path, pathItem]: [string, PathItem]) => {
      // All possible HTTP methods to check
      const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'] as const;

      // Check each HTTP method for this path
      methods.forEach(method => {
        const operation: Operation | undefined = pathItem[method];

        // Process only if this method exists for the current path
        if (operation) {
          // Get tags for this operation, default to 'Untagged' if none specified
          const tags = operation.tags || ['Untagged'];

          // Process each tag (an operation can have multiple tags)
          tags.forEach(tag => {
            // Initialize array for this tag if not exists
            if (!tagMap.has(tag)) {
              tagMap.set(tag, []);
            }

            // Remove the 'tags' property to avoid redundancy in the grouped structure
            const { tags: _, ...operationWithoutTags } = operation;

            // Resolve all $ref references in the operation (request/response schemas)
            const resolvedOperation = this.resolveRefs(operationWithoutTags, obj);

            // Create the endpoint object in the desired structure
            const endpointObj: GroupedEndpoint = {
              [path]: {
                [method]: resolvedOperation
              }
            };

            // Add this endpoint to the tag's collection
            tagMap.get(tag)!.push(endpointObj);
          });
        }
      });
    });

    // Convert Map to array and sort by tag name alphabetically
    return Array.from(tagMap.entries())
      .sort(([tagA], [tagB]) => tagA.localeCompare(tagB))
      .map(([tag, endpoints]) => ({
        tag,
        endpoints
      }));
  }

}
