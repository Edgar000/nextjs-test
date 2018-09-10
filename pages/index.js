import React, {Fragment} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import BlueButton from "../components/BlueButton";
import RedButton from "../components/RedButton";
import Numbers from "../components/Numbers";

const Index = () => (
    <Fragment>
        <h1>Hello world</h1>
        <Link href="/GoodPage" as="good-page">
            <BlueButton title="Go to good page"/>
        </Link>
        <RedButton title="Go to bad page" onClick={() => Router.push('/BadPage', 'bad-page')}/>
        <Numbers/>
    </Fragment>
);

export default Index;
