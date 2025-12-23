import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";

export class Responses {
  [statusCode: string]: Response | Reference;
}
