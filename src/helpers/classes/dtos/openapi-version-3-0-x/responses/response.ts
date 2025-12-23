import type {Header} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/header.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";
import type {MediaType} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/mediaType.ts";
import type {Link} from "@/helpers/classes/dtos/openapi-version-3-0-x/responses/link.ts";

export class Response {
  description!: string;
  headers?: { [header: string]: Header | Reference };
  content?: { [media: string]: MediaType };
  links?: { [link: string]: Link | Reference };
}
