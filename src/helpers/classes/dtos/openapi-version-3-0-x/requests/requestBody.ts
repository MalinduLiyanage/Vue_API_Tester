import type {MediaType} from "@/helpers/classes/dtos/openapi-version-3-0-x/requests/mediaType.ts";

export class RequestBody {
  content!: { [media: string]: MediaType };
  description?: string;
  required?: boolean;
}
