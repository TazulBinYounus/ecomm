import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password, phone } = credentials as {
          email: string;
          password: string;
          phone: string;
        };
        // perform you login logic
        // find out user from db
        if (email === "john@gmail.com" && password === "1234") {
            return {
                id: "1234",
                name: "John Doe",
                email: "tazul@gmail.com",
                phone: "01932245768",
                role: "admin",
              };
        }else{
            throw new Error("invalid credentials");
        }

        // if everything is fine

      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);