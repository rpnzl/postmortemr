import { GetServerSideProps } from 'next';
import { knex } from 'src/knex';
import { Postmortem } from 'src/models';

export default function Random() {}

export const getServerSideProps: GetServerSideProps = async () => {
    const entry = await Postmortem.query()
        .select()
        .orderBy(knex.raw('RANDOM()'))
        .limit(1)
        .first();

    return {
        redirect: {
            destination: entry.link,
            permanent: false,
        },
    };
}
