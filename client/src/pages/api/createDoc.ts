import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != 'POST') {
    res.status(400).send('error')
  }
  else {
    const { data, error } = await supabase
    .from('docs')
    .insert([
      {
        id: req.body.id,
        user_id: req.body.user_id,
        title: req.body.title,
        body: req.body.body,
        timestamp: req.body.timestamp,
      },
    ])
    if (error != null) {
      res.status(400).send('error')
    } else {
      res.status(200).send('created')
    }
  }
}