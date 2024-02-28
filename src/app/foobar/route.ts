import loremIpsum from '@/lorem-ipsum';

export const GET = async (request: Request) => {
    console.log('accept-encoding', request.headers.get('Accept-Encoding'))

    return Response.json(loremIpsum);
};
