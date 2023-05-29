import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// console.log({
//   GOOGLE_ID: process.env.GOOGLE_ID,
//   GOOGLE_SECRET: process.env.GOOGLE_SECRET,
// });

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
