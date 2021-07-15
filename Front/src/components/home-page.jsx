import React from 'react';
import Layout from './shared/layout.component';
import Hero from './hero/hero.component';
import MainSection from './main-section/main-section.component';
import FeaturedCollection from './featured-collection/featured-collection.component';


const Homepage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection />
            </Layout>
        </>
    )
}

export default Homepage;
