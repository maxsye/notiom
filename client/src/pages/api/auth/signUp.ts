import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../../utils/supabaseClient'

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
    const { data: docs, error } = await supabase.auth.signUp({
        email: req.body.email,
        password: req.body.password,
    })
    if (error != null) {
        res.status(400).send(error)
    } else {
        res.status(200).send('signed up')
    }
    // doing res.send() is a return statement
}