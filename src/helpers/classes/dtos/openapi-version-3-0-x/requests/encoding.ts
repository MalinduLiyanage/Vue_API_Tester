import type {Header} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/header.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";

export class Encoding {
  contentType?: string;
  headers?: { [header: string]: Header | Reference };
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}
