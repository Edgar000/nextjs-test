import React, {Fragment} from 'react';
import Router from 'next/router'

const NeutralPage = () => (
    <Fragment>
        <h1>Neutral Page 🤨</h1>
        <button onClick={() => Router.back()}>Go back</button>
    </Fragment>
);

export default NeutralPage;
