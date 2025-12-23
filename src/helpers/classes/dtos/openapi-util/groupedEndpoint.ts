import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";

export class GroupedEndpoint {
  [path: string]: {
    [method: string]: Omit<Operation, 'tags'>;
  };
}
