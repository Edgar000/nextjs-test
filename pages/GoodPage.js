import React, {Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

const GoodPage = ({someData}) => (
    <Fragment>
        <Head>
            <title>Good Page</title>
            <meta property="twitter:card" content="player" />
        </Head>
        <h1>Good Page 👍</h1>
        <br/>
        {someData.time}
        <br/>
        {someData.date}
        <br/>
        <Link href="/">
            <button>Go back</button>
        </Link>
    </Fragment>
);


GoodPage.getInitialProps = async () => {
    const res = await fetch('http://time.jsontest.com');
    const someData = await res.json();

    return {
        someData
    }
};

export default GoodPage;
