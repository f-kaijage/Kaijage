import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLinux, FaWindows, FaDatabase, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss';

const jobSummaryText = `
With a Bachelor's in Computer Applications, I'm a motivated System Administrator and Data Analyst skilled in optimizing IT infrastructure and extracting data insights. I bridge technology and business needs by designing and maintaining robust systems and using data analysis for informed decision-making. Proficient in various programming languages, operating systems, networking, and security, I'm a quick learner, effective communicator, and dedicated to continuous growth, ready to contribute significantly to any organization.
`;

const personalInformation = [
    { label: "Name", value: "Faustine Francis Kaijage" },
    { label: "Designation", value: "System Administrator & Data Analyst" },
    { label: "Address", value: "University of Kerala, Thiruvananthapuram, Kerala, India 695033" },
    { label: "Phone Number", value: "+91 808 927 0374" },
    { label: "Email", value: "kaijage1275@gmail.com" }
];

const About = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__container">
                {/* LEFT SECTION */}
                <div className="about__content">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{ transform: "translateX(-900px)", opacity: 0 }}
                        end={{ transform: "translateY(0px)", opacity: 1 }}
                    >
                        <h3>System Administrator & Data Analyst</h3>
                        <p>{jobSummaryText}</p>
                        <div className="dotted-line"></div>
                    </Animate>

                    <h3>Personal Information</h3>
                    <ul>
                        {personalInformation.map((item, index) => (
                            <li key={index}>
                                <span className="title">{item.label}: </span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT SECTION */}
                <div className="about__animation">
                    <div className="circle">
                        <FaLinux className="icon linux" />
                        <FaWindows className="icon windows" />
                        <FaDatabase className="icon database" />
                        <FaNetworkWired className="icon network" />
                        <FaShieldAlt className="icon security" />
                    </div>
                </div>
            </div>

            {/* Scroll Button */}
            <div className="about__scroll-btn" onClick={scrollToContent}>
                ⬇️ Scroll Down
            </div>
        </section>
    );
};

export default About;

