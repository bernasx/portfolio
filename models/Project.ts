import mongoose from 'mongoose'

export interface IProject {
    name: string,
    status: string,
    description: string,
    image: string | undefined,
    stack: string[]
  }

  export const projectSchema = new mongoose.Schema<IProject>({
    name: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
}, {timestamps: true})

export default mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema, 'Project')