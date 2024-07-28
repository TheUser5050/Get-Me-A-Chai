import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOpt = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { authOpt as GET, authOpt as POST };
