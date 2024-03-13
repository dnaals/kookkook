import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';

export const option = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID as string,
            clientSecret: process.env.NAVER_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: 'Username', type: 'text', placeholder: 'cwkim' },
        //         password: { label: 'Password', type: 'password' },
        //     },
        //     async authorize(credentials, req) {
        //         const user = { id: '1', name: 'cwkim', email: 'cwkim@gmail.com' }
        //         if (user) { return user }
        //         else { return null }
        //     },
        // })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            return { ...token, ...user };
        },
        async session({ session, token }: any) {
            session.user = token;
            return session;
        },
    },
    
    // pages: {
    //     signIn: "/member/login",
    // },
    
}
const handler = NextAuth(option)

export { handler as GET, handler as POST }