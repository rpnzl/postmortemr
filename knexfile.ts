
export default {
    client: 'sqlite3',
    connection: {
        filename: './db.sqlite3',
    },
    debug: process.env.NODE_ENV !== 'production',
    migrations: {
        directory: './src/db/migrations',
        extension: 'ts',
        loadExtensions: ['.ts'],
        stub: './src/db/migrations/migration.stub',
        tableName: 'migrations',
    },
    seeds: {
        directory: './src/db/seeds',
        extension: 'ts',
        loadExtensions: ['.ts'],
        stub: './src/db/seeds/seed.stub',
    },
    useNullAsDefault: true,
};
