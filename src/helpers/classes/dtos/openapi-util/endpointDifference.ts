import type {Operation} from "@/helpers/classes/dtos/openapi-version-3-0-x/paths/operation.ts";
import type {DifferenceType} from "@/helpers/types/utilTypes.ts";

export class EndpointDifference {
  path!: string;
  method!: string;
  type!: DifferenceType;
  oldValue?: Operation;
  newValue?: Operation;
  changes?: string[]; // Specific fields that changed
}
