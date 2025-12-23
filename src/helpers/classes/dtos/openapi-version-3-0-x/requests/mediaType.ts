import type {Schema} from "@/helpers/classes/dtos/openapi-version-3-0-x/schemas/schema.ts";
import type {Example} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/example.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";
import type {Encoding} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/encoding.ts";

export class MediaType {
  schema?: Schema | Reference;
  example?: any;
  examples?: { [media: string]: Example | Reference };
  encoding?: { [property: string]: Encoding };
}
