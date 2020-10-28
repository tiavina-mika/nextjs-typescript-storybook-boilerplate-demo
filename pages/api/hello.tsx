import React from 'react';
import { NextApiResponse } from 'next'

export default (_: any, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
