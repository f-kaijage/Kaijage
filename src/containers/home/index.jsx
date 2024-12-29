import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    };

    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1>Mambo!, I'm Kaijage.</h1>
                <h2>System Administrator and Data Analyst.</h2>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{ transform: "translateY(50px)", opacity: 0 }}
                    end={{ transform: "translateY(0px)", opacity: 1 }}
                >
                    <div className="home__contact-me">
                        <button className="home__button" onClick={handleNavigateToContactMePage}>Hire Me</button>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Home;
