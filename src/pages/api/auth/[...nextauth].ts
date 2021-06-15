import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
  ],
  jwt:{
      signingKey: process.env.SIGNING_KEY
  },
  callbacks:{
    async signIn(user, account, profile){

        try{
            return true;
        }  catch{
            return false;
        }
    },
  }
})