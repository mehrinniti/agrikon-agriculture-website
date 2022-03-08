import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import AboutCompany from '../AboutCompany/AboutCompany';
import AgricultureInfo from '../Agri-Info/AgricultureInfo';
import AgriculturistHomeSection from '../AgriculturistHomeSection/AgriculturistHomeSection';
import HomeBannar from '../Bannar/HomeBannar';
import ClientHomeSection from '../ClientHomeSection/ClientHomeSection';
import FarmersHomePage from '../FarmersHomePage/FarmersHomePage';
import HomeSecondBannar from '../Home-second-bannar/HomeSecondBannar';
import OurPartnersHomeSection from '../OurPartnersHomeSection/OurPartnersHomeSection';
import ProductProvideHomeSection from '../ProductProvideHomeSection/ProductProvideHomeSection';
import WhyChooseUsHomeSection from '../WhyChooseUsHomeSection/WhyChooseUsHomeSection';
import WhyWeAreDifferent from '../WhyWeAreDifferent/WhyWeAreDifferent';
import YoutubeHomePageSection from '../YoutubeHomePageSection/YoutubeHomePageSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <HomeBannar></HomeBannar>
                <AboutCompany></AboutCompany>
                <AgricultureInfo></AgricultureInfo>
                <HomeSecondBannar></HomeSecondBannar>
                <AgriculturistHomeSection></AgriculturistHomeSection>
                <ProductProvideHomeSection></ProductProvideHomeSection>
                <FarmersHomePage></FarmersHomePage>
                <YoutubeHomePageSection></YoutubeHomePageSection>
                <WhyWeAreDifferent></WhyWeAreDifferent>
                {/* <ClientHomeSection></ClientHomeSection> */}
                <WhyChooseUsHomeSection></WhyChooseUsHomeSection>
                <OurPartnersHomeSection></OurPartnersHomeSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;