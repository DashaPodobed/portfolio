import React from 'react'
import style from './Home.module.scss'
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


const particlesOptions = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

const Home = () => {
    return (
        <div id="home" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions}/>
            <Fade>
                <div className={style.container}>
                    <div className={style.greeting}
                    >
                        <span>Hello</span>
                        <span>I am Darya <span>Podobed</span></span>
                        <ReactTypingEffect
                            text={"Frontend Developer"}
                            speed={100}
                            eraseSpeed={100}
                            typingDelay={2000}
                            eraseDelay={3000}
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 10}}>
                        <div className={style.photo}>
                            <div className={style.image}></div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    )
}

export default Home;