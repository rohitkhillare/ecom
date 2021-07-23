import React, { Fragment } from 'react';
import { FC } from 'react';
import Headers from '../components/headers/Headers';

const Appcontainer: FC = ({ children }) => {
    return <Fragment>
        <header>
            <Headers />
        </header>
        <body>
            {children}
        </body>

    </Fragment>
}
export default Appcontainer