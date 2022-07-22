import NextAuth from "next-auth/next";
import User, { IUser } from '../../../models/User'
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../lib/mongodb"
const bcrypt = require('bcrypt')

type UserType = {
  username: string,
  isAdmin: boolean
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        connectDB();
        //IUser since this is the database object
        const user = await User.findOne({
          username: credentials?.username
        }) as IUser

        if (user) {
          return bcrypt.compare(credentials?.password, user.password).then(function (result: boolean) {
            if (result) {
              // using UserType here since it's the return object and we don't want to leak the hashed password
              return { username: user.username, isAdmin: user.isAdmin} as UserType;
            } else {
              return null;
            }
          });
        }
        else {
          return null;
        }
      }

    })
  ],

  callbacks: {
    session({ session, token }) {
      if (token) {
        session.user = token.user as UserType;
      }
      return session
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    }
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt'
  }
})