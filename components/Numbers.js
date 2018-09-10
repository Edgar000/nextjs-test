import React, {Fragment} from 'react';
import Link from 'next/link';

const Numbers = () => {
    const numbers = [0, 1, 2, 3, 4, 5];

    return (
        <Fragment>
            <h2>Numbers</h2>
            {numbers.map(number => (
                <Link href={`/Number?number=${number}`} as={`/numbers/${number}`}>
                    <button>{number}</button>
                </Link>
            ))}
        </Fragment>
    )
};

export default Numbers;
