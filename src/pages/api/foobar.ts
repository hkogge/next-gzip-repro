import { NextApiHandler } from 'next';
import loremIpsum from '@/lorem-ipsum';

const foo: NextApiHandler = async (req, res) => {
    console.log('accept-encoding', req.headers['accept-encoding']);

    res.status(200).json(loremIpsum);
};

export default foo;
