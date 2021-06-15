import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      scope: "r_emailaddress r_liteprofile"
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY,
  },

  callbacks: {
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    },
    async signIn(user, account, profile) {

      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
