import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="about-page">

            <div
                className="about-hero"
                style={{ backgroundImage: `url('/CONFIDENCE_1.png')` }}
            >
                {/* <div className="overlay">
                    <img src="/logo_new.png" alt="INWENS Logo" className="logo" />
                    <p>Step into comfort. Walk with confidence.</p>
                </div> */}
            </div>


            <div className="about-section">
                <div className="about-text" data-aos="fade-right">
                    <h2>Our Story</h2><p>
                        Founded with a passion for premium footwear, <b>INWENS</b> was built to
                        bridge the gap between fashion and function. Whether you're heading
                        to work, the gym, or a night out — we've got shoes that fit every
                        step of your journey.
                    </p>
                    <p>
                        Our collections are designed in-house, using eco-conscious materials
                        and ethical production. Every shoe tells a story — and it begins
                        with you.
                    </p>
                    <p>
                        Whether you're heading to a morning meeting, exploring the outdoors, or stepping into a night out, our footwear is built to match your pace and elevate your presence. Every collection is crafted in-house by a passionate team focused on precision, performance, and personality.

                        We’re proud to use eco-conscious materials and maintain ethical production standards, ensuring that every pair of shoes not only feels good — but does good. Our designs reflect individuality, confidence, and a modern lifestyle that values sustainability without compromise.
                    </p>
                    {/* <h2>About INWENS</h2>
                    <p>

                        At INWENS, we believe footwear is more than just fashion — it’s a reflection of your journey, personality, and purpose. Founded with a passion for premium shoes, our mission is to bridge the gap between style and function, creating footwear that adapts to every moment of your life.

                        Whether you’re powering through a workday, exploring the outdoors, hitting the gym, or stepping out for the night, INWENS designs shoes that move with you — elevating your presence at every step.

                        What Makes Us Different

                        Designed In-House – Every pair is thoughtfully crafted by our passionate team, blending precision, performance, and personality.

                        Eco-Conscious Materials – We’re committed to sustainability, ensuring our footwear looks good, feels good, and does good.

                        Ethical Production – From concept to creation, we uphold responsible practices that respect people and the planet.

                        Our Philosophy

                        At INWENS, every collection tells a story — and it begins with you. We design for individuals who value confidence, comfort, and conscious choices. With us, you don’t have to choose between fashion and responsibility — you can have both.

                        Step into INWENS. Step into your story.
                    </p> */}
                </div>
                <div className="about-image" data-aos="fade-left">
                    <img src="/NEW_BANNER.png" alt="Banner" />
                </div>
            </div>

            <div className="cta-section" data-aos="zoom-in">
                <h2>Ready to walk in style ?</h2>
                <a href="/#product" className="cta-button">Explore Our Collection</a>
            </div>
        </div>
    );
};

export default About;