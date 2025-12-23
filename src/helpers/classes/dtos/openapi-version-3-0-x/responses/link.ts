import type {Server} from "@/helpers/classes/dtos/openapi-version-3-0-x/servers/server.ts";

export class Link {
  operationRef?: string;
  operationId?: string;
  parameters?: { [parameter: string]: any };
  requestBody?: any;
  description?: string;
  server?: Server;
}
