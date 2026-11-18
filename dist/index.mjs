// src/index.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
function createGoogleSSO(config) {
  return NextAuth({
    secret: config.secret,
    providers: [
      Google({
        clientId: config.clientId,
        clientSecret: config.clientSecret
      })
    ]
  });
}
export {
  createGoogleSSO
};
