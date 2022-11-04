import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    categories: Category[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const categories = await sanityClient.fetch(query)
}