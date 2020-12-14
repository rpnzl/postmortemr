
module.exports = {
    async redirects() {
        return [
            {
                source: '/tags/:key',
                destination: '/tags',
                permanent: true,
            },
        ];
    },
};
