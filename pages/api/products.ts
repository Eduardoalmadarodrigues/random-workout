import type { NextApiRequest, NextApiResponse } from 'next'

 type Data = {
  name: string,
} 

// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
      host     : 'projecttest.shop',
      database : 'u322110491_lojinhatest',
      user     : 'u322110491_lojinhatest',
      password : 'Lojinhatest123'
    }
  })

  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    let results = mysql.query('SELECT * FROM products')
    mysql.end()
    res.status(200).json(results)
  }


