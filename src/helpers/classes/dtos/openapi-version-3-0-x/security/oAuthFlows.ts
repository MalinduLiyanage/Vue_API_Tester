import type {OAuthFlow} from "@/helpers/classes/dtos/openapi-version-3-0-x/security/oAuthFlow.ts";

export class OAuthFlows {
  implicit?: OAuthFlow;
  password?: OAuthFlow;
  clientCredentials?: OAuthFlow;
  authorizationCode?: OAuthFlow;
}
