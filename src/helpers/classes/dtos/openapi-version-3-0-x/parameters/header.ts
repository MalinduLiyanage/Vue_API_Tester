import type {Schema} from "@/helpers/classes/dtos/openapi-version-3-0-x/schemas/schema.ts";
import type {Example} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/example.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";
import type {MediaType} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/mediaType.ts";

export class Header {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: Schema | Reference;
  example?: any;
  examples?: { [media: string]: Example | Reference };
  content?: { [media: string]: MediaType };
}
