import type {ExternalDocumentation} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/externalDocumentation.ts";
import type {Parameter} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/parameter.ts";
import type {RequestBody} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/requestBody.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";
import type {Responses} from "@/helpers/classes/dtos/openapi-version-3-0-x/responses/responses.ts";
import type {Callback} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/callback.ts";
import type {SecurityRequirement} from "@/helpers/classes/dtos/openapi-version-3-0-x/security/securityRequirement.ts";
import type {Server} from "@/helpers/classes/dtos/openapi-version-3-0-x/servers/server.ts";

export class Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: (Parameter | Reference)[];
  requestBody?: RequestBody | Reference;
  responses!: Responses;
  callbacks?: { [callback: string]: Callback | Reference };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
}
