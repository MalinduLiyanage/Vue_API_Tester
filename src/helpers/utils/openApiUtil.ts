import {
  OpenAPIDocument
} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";
import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";
import type {PathItem} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/pathItem.ts";
import type {GroupedByTag} from "@/helpers/classes/dtos/openapi-util/groupedByTag.ts";
import type {GroupedEndpoint} from "@/helpers/classes/dtos/openapi-util/groupedEndpoint.ts";

export default class OpenApiUtil {

  static stringifyDocument(obj: OpenAPIDocument): string {
    return JSON.stringify(obj, null, 2);
  }

  static logInputDocument(objectString: string): OpenAPIDocument {
    const parsed = JSON.parse(objectString)
    return Object.assign(new OpenAPIDocument(), parsed);
  }

  static orderByTags(obj: OpenAPIDocument): GroupedByTag[] {
    const tagMap = new Map<string, GroupedEndpoint[]>();

    Object.entries(obj.paths).forEach(([path, pathItem]: [string, PathItem]) => {
      const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'] as const;

      methods.forEach(method => {
        const operation: Operation | undefined = pathItem[method];
        if (operation) {
          const tags = operation.tags || ['Untagged'];
          tags.forEach(tag => {
            if (!tagMap.has(tag)) {
              tagMap.set(tag, []);
            }
            const { tags: _, ...operationWithoutTags } = operation;
            const endpointObj: GroupedEndpoint = {
              [path]: {
                [method]: operationWithoutTags
              }
            };
            tagMap.get(tag)!.push(endpointObj);
          });
        }
      });
    });

    return Array.from(tagMap.entries())
      .sort(([tagA], [tagB]) => tagA.localeCompare(tagB))
      .map(([tag, endpoints]) => ({
        tag,
        endpoints
      }));
  }

}
