import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </>
    )
}

export default Layout;
