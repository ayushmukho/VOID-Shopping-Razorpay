import React from 'react';
import Layout from './shared/layout.component';

const NotFound = () => {

    const style = {
        fontWeight: 'bold',
        textAlign: 'center',
    }

    return (
        <Layout>
            <p style={style}>Can't find that page</p>
        </Layout>
    )
}

export default NotFound;