import React, { useEffect } from 'react';
import './YoutubeHomePageSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const YoutubeHomePageSection = () => {

    useEffect(() => {
        Aos.init({ duration: 2800 });
    }, []);

    return (
        <div className='youtube-home-section mb-5'>
            <div data-aos="flip-right">
                <a className="youtube-icon-container" target="_blank" href="https://www.youtube.com/watch?v=86CPucKQ11M"><i class="fas fa-caret-right youtube-icon"></i></a>
            </div>
            <h6 data-aos="fade-up">MODERN AGRICULTURE TYPES</h6>
            <h1 data-aos="fade-up">AGRICULTURE MATTERS TO THE <br />FUTURE OF DEVELOPMENT</h1>
        </div>
    );
};

export default YoutubeHomePageSection;