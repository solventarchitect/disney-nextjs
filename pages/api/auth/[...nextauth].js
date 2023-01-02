import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  }),
    // ...add more providers here
  ],

  adapter: FirebaseAdapter(db),
  // pages: {
  //   signIn: '/auth/signin',
  // },

});
