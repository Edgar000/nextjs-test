import React, {Fragment} from 'react';
import Router from 'next/router'

const BadPage = () => (
    <Fragment>
        <h1>Bad Page 🤨</h1>
        <button onClick={() => Router.back()}>Go back</button>
    </Fragment>
);

export default BadPage;
