// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import User, { IUser } from '../../models/User'
const bcrypt = require('bcrypt')

type Data = {
  content: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const username = req.query.username;
    const password = req.query.password;
    console.log(req.query)
    await bcrypt.hash(password, 10).then(function(hash:string) {
        //const user = new User({username:username,password:hash,isAdmin:false})
        //user.save()
    });

    res.send({
        content:
          "User Created",
    })

}