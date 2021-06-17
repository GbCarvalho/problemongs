import axios from "axios";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import mongoConnect from '../../../services/mongodb'
import User from "../../../models/User";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
      scope: "r_emailaddress r_liteprofile",
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
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

    async signIn(user, account) {

      if(account.provider === 'linkedin'){
        
        try{
          const emailResponse = await axios.get(
            "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
            {
              headers: {
                Authorization: `Bearer ${account.accessToken}`,
              },
            }
          );

          if(!user.email){
            user.email = emailResponse.data.elements[0]["handle~"].emailAddress;
          }
  
        }catch(err){
          console.error(err);
          return false;
        }

      }

      try{

          await mongoConnect();

          const oldUser = await User.findOne({email:user.email}).exec();
    
          if(!oldUser){
            const newUser = new User({
              name: user.name,
              email: user.email,
            });
            await newUser.save();
            
          }
        return true;

      }catch(err){
        console.error(err);
        return false;
      }
    },
  },
});
