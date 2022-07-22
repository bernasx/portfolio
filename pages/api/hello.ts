// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"
type Data = {
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const session = await getSession({ req })
  
  if (session?.user.isAdmin) {
    res.send({
      content:
        "This is protected content. You can access this content because you are an admin",
    })
  } else {
    res.send({
      content: "You must be an admin to view the protected content on this page.",
    })
  }

}
