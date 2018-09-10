import React, {Fragment} from 'react';
import {withRouter} from 'next/router';

const Number = ({router}) => {
    return (
        <Fragment>
            <h2>Number:</h2>
            <h1>{router.query.number}</h1>
        </Fragment>
    )
};

export default withRouter(Number);
