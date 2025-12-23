import type {Contact} from "@/helpers/classes/dtos/openapi-version-3-0-x/info/contact.ts";
import type {License} from "@/helpers/classes/dtos/openapi-version-3-0-x/info/license.ts";

export class Info {
  title!: string;
  version!: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
}
