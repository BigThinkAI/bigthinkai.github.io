import Particles from 'react-tsparticles';
import "./Particles.module.css";

const ParticlesBG = () => {
    const particlesInit = (main: any) => {
        console.log(main)
    }

    const particlesLoaded = (container: any) => {
        console.log(container);
    }

    return (
        <div className="background">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{
                    zIndex: -1,
                    backgroundColor: 'green'
                }}
                options={{
                    background: {
                        color: {
                            value: "#EFEFEF",
                        },
                    },
                    fpsLimit: 90,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 5,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#242325",
                        },
                        links: {
                            color: "#2D82B7",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 1000,
                            },
                            value: 120,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 1,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default ParticlesBG;