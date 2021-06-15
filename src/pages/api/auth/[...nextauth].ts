import axios from "axios";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      scope: "r_emailaddress r_liteprofile",
    }),
  ],
  jwt: {
    signingKey: process.env.SIGNING_KEY,
  },

  callbacks: {
    async session(session, token) {
      // Add property to session, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn(user, account, profile) {
      try {
        //TODO: Arrumar o display da profile Pic
        const profileResponse = await axios.get(
          "https://api.linkedin.com/v2/me?projection=(profilePicture(displayImage~:playableStreams))",
          {
            headers: {
              Authorization: `Bearer ${account.accessToken}`,
            },
          }
        );

        const emailResponse = await axios.get(
          "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
          {
            headers: {
              Authorization: `Bearer ${account.accessToken}`,
            },
          }
        );

        const email = emailResponse.data.elements[0]["handle~"].emailAddress;
        const profilePicture =
          profileResponse.data.profilePicture["displayImage~"].elements[0].data;

        console.log(email);
        console.log(profilePicture);

        const isAllowedToSignIn = true;

        if (isAllowedToSignIn) {
          return true;
        } else {
          return false;
          // Or you can return a URL to redirect to:
          // return '/unauthorized'
        }
      } catch (err) {
        console.error(err);
        return false;
      }
    },
  },
});
