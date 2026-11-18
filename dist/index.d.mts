import * as next_auth from 'next-auth';

interface GoogleSSOConfig {
    clientId: string;
    clientSecret: string;
    secret: string;
}
declare function createGoogleSSO(config: GoogleSSOConfig): next_auth.NextAuthResult;

export { createGoogleSSO };
export type { GoogleSSOConfig };
