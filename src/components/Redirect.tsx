import { useRouter } from 'next/router';
import { useEffect } from 'react';

// @link https://github.com/vercel/next.js/issues/11797#issuecomment-621538365
export function Redirect({ to, action = 'push' }) {
    const router = useRouter();

    useEffect(() => {
        router[action](to);
    });

    return <p>Redirecting to {to}...</p>;
}
