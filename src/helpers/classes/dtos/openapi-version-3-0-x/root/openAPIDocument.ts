import type {Paths} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/paths.ts";
import type {Info} from "@/helpers/classes/dtos/openapi-version-3-0-x/info/info.ts";
import type {Server} from "@/helpers/classes/dtos/openapi-version-3-0-x/servers/server.ts";
import type {Components} from "@/helpers/classes/dtos/openapi-version-3-0-x/components/components.ts";
import type {SecurityRequirement} from "@/helpers/classes/dtos/openapi-version-3-0-x/security/securityRequirement.ts";
import type {Tag} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/tag.ts";
import type {ExternalDocumentation} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/externalDocumentation.ts";

export class OpenAPIDocument {
  openapi: string = '3.0.0';
  info!: Info;
  paths!: Paths;
  servers?: Server[];
  components?: Components;
  security?: SecurityRequirement[];
  tags?: Tag[];
  externalDocs?: ExternalDocumentation;
}
