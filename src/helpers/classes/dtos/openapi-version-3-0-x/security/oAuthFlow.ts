export class OAuthFlow {
  scopes!: { [scope: string]: string };
  authorizationUrl?: string;
  tokenUrl?: string;
  refreshUrl?: string;
}
