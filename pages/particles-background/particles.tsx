import Particles from 'react-tsparticles';
import styles from "./Particle.module.css";

const ParticlesApp = ({children} : {children: any}) => {
    const particlesInit = (main: any) => {
        console.log(main)
    }

    const particlesLoaded = (container: any) => {
        console.log(container);
    }

    return (
        <div className="App">
            <Particles
                id={styles.tsparticles}
                init={particlesInit}
                loaded={particlesLoaded}
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
                            value: 150,
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
            {children}
        </div>
    );
}

export default ParticlesApp;
