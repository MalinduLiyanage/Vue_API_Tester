import type {ExternalDocumentation} from "@/helpers/classes/dtos/openapi-version-3-0-x/common/externalDocumentation.ts";

export class Tag {
  name!: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
}
