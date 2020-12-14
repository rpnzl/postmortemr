
module.exports = {
    plugins: [
        'postcss-import',
        'tailwindcss',
        [
            'postcss-preset-env',
            {
                features: {
                    'nesting-rules': true,
                },
            },
        ],
    ],
};
