import { GetServerSideProps } from 'next';
import { Redirect } from 'src/components';
import { knex } from 'src/knex';
import { Postmortem } from 'src/models';

export default function Random({ link }) {
    return <Redirect to={link} />;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const entry = await Postmortem.query()
        .select()
        .orderBy(knex.raw('RANDOM()'))
        .limit(1)
        .first();
    
    if (res) {
        res.writeHead(302, { Location: entry.link });
        res.end();
    }

    return {
        props: {
            link: entry.link,
        },
    };
}
