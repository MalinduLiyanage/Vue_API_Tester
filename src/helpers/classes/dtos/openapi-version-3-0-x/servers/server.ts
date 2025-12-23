import type {ServerVariable} from "@/helpers/classes/dtos/openapi-version-3-0-x/servers/serverVariable.ts";

export class Server {
  url!: string;
  description?: string;
  variables?: { [variable: string]: ServerVariable };
}
