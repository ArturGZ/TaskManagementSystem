import NextAuth from 'next-auth/next';
import FacebookProvider from "next-auth/providers/facebook";

const authOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
