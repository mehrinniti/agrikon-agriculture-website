import React from 'react';
//import './ParticlesBanner.css';
//import Particles from 'react-particles-js';
import Particles from "react-tsparticles";

const ParticlesBanner = () => {


    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (


        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 300,
                            duration: 2,
                            opacity: 0.5,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 90,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ebffa1",
                    },
                    links: {
                        color: "cee87e",
                        distance: 150,
                        enable: false,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: true,
                        speed: 3.3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 750,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 7,
                    },
                },
                detectRetina: true,
            }}
        />

    );
};

export default ParticlesBanner;