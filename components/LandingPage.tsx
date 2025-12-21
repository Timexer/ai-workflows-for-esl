import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Audience from './Audience';
import ValuePillars from './ValuePillars';
import Curriculum from './Curriculum';
import Research from './Research';
import Pricing from './Pricing';
import SignUp from './SignUp';
import FreeResource from './FreeResource';
import Bio from './Bio';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Audience />
                <ValuePillars />
                <Curriculum />
                <Research />
                <Pricing />
                <SignUp />
                <FreeResource />
                <Bio />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
