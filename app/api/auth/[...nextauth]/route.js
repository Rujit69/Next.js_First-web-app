// app/api/auth/[...nextauth]/route.js

import NextAuth from "@node_modules/next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {
    try{
      //serverless

    }

  },
});

export { handler as GET, handler as POST };
