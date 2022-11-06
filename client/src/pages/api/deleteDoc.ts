import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../utils/supabaseClient'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase   
  .from('docs')
  .delete()
  .eq('id', req.body.id)

  if (error != null) {
    res.status(400).send('error')
  } else {
    res.status(200).send('deleted')
  }
}