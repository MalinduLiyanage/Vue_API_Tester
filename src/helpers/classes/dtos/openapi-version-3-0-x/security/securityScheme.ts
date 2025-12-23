import type {OAuthFlows} from "@/helpers/classes/dtos/openapi-version-3-0-x/security/oAuthFlows.ts";

export class SecurityScheme {
  type!: 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';
  description?: string;
  name?: string;
  in?: 'query' | 'header' | 'cookie';
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlows;
  openIdConnectUrl?: string;
}
