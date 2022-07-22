import mongoose from 'mongoose'

export interface IUser {
    username: string,
    password: string,
    isAdmin: boolean
  }

export const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type:Boolean
    }
}, {timestamps: true})

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema, 'User') //third is DB collection name because mongoose pluralizes