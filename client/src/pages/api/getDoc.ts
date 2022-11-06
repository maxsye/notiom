import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  let { data: docs, error } = await supabase
  .from('docs')
  .select("*").eq('id', req.query.id)
  console.log(docs)
  
  if (error != null) {
    res.status(400).send('error')
  } else {
    res.status(200).send(docs)
  }
}