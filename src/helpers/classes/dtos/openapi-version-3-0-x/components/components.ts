import type {Schema} from "@/helpers/classes/dtos/openapi-version-3-0-x/schemas/schema.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";
import type {Parameter} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/parameter.ts";
import type {Example} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/example.ts";
import type {RequestBody} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/requestBody.ts";
import type {Header} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/header.ts";
import type {SecurityScheme} from "@/helpers/classes/dtos/openapi-version-3-0-x/security/securityScheme.ts";
import type {Link} from "@/helpers/classes/dtos/openapi-version-3-0-x/responses/link.ts";
import type {Callback} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/callback.ts";

export class Components {
  schemas?: { [schema: string]: Schema | Reference };
  responses?: { [response: string]: Response | Reference };
  parameters?: { [parameter: string]: Parameter | Reference };
  examples?: { [example: string]: Example | Reference };
  requestBodies?: { [requestBody: string]: RequestBody | Reference };
  headers?: { [header: string]: Header | Reference };
  securitySchemes?: { [securityScheme: string]: SecurityScheme | Reference };
  links?: { [link: string]: Link | Reference };
  callbacks?: { [callback: string]: Callback | Reference };
}
