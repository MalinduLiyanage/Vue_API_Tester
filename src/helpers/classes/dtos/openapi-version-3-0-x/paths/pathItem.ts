import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";
import type {Server} from "@/helpers/classes/dtos/openapi-version-3-0-x/servers/server.ts";
import type {Parameter} from "@/helpers/classes/dtos/openapi-version-3-0-x/parameters/parameter.ts";
import type {Reference} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/reference.ts";

export class PathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  servers?: Server[];
  parameters?: (Parameter | Reference)[];
}
