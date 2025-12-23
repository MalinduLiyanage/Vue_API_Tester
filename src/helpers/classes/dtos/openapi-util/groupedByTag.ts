import type {GroupedEndpoint} from "@/helpers/classes/dtos/openapi-util/groupedEndpoint.ts";

export class GroupedByTag {
  tag!: string;
  endpoints!: GroupedEndpoint[];
}
