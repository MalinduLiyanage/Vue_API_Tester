import type {EndpointDifference} from "@/helpers/classes/dtos/openapi-util/endpointDifference.ts";

export class GroupedDifferences {
  tag!: string;
  differences!: EndpointDifference[];
}
