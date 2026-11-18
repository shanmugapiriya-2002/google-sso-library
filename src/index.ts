import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export interface GoogleSSOConfig {
  clientId: string;
  clientSecret: string;
  secret: string;
}

export function createGoogleSSO(config: GoogleSSOConfig) {
  return NextAuth({
    secret: config.secret,
    providers: [
      Google({
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      }),
    ],
  });
}
