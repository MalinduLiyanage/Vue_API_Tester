import {
  OpenAPIDocument
} from "@/helpers/classes/dtos/openapi-version-3-0-x/root/openAPIDocument.ts";

export default class OpenApiUtil {

  static stringifyDocument(obj: OpenAPIDocument): string {
    return JSON.stringify(obj, null, 2);
  }

  static logInputDocument(objectString: string): string {

    const parsed = JSON.parse(objectString)
    return Object.assign(new OpenAPIDocument(), parsed);
  }

}
