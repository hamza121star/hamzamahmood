import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import About from './about-me';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src = {require('../images/hamza-mahmood.png')} alt="avatar" className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Engineer & UX Designer</h1>
                            <hr />
                            <p> Java | React | Javascript | HTML/CSS | Product Prototyping</p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a id="social" href="https://www.linkedin.com/in/hmahmood93/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a id="social" href="https://github.com/hamza121star" rel="noopener noreferrer" target="_blank" >
                                <i className="fab fa-github-square"  aria-hidden="true" ></i>
                                </a>

                                {/* Medium */}
                                <a id="social" href="https://medium.com/@hamzamahmood" rel="noopener noreferrer" target="_blank" >
                                    <i className="fab fa-medium" aria-hidden="true"></i>
                                </a>
                                
                                {/* Behance */}
                                <a id="social" href="https://www.behance.net/hamzamahmo2b65" rel="noopener noreferrer" target="_blank" >
                                <i className="fab fa-behance-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <Grid className="about-section">
                    <Cell col={6}>
                        <div className="to-pad-right">
                            <h4 className="about-left-sec">
                                Hi. I am Hamza, a Front End Developer and UX Designer based in New York City. I am a recent graduate from Stony Brook University with a Masters degree in Technological Systems Management with a focus in product design.
                            </h4>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div  className="to-pad-left">
                            <p className="about-right-sec">
                            I am passionate about solving problems, building solutions that positively impact the lives of those around
                            me. I have done extensive work in UI development and with in depth understanding of UX, I have the ability to take applications
                            from start to launch. 
                            <br />
                            <br />
                            Recently done several UX-focused projects that include exploratory data analysis, designing UI concept, design language creation
                            has given me the ability to provide product based consultancy and analytics backed advice on creating awesome product and design solutions. 
                            </p>
                        </div>
                    </Cell>
                </Grid>
                <Grid className="why-me">
                    <div style={{textAlign: 'center', padding:'5px'}}>
                            <h1> WHY ME?</h1>
                    </div>
                    <div style={{padding: '0px'}}>
                        <About 
                            color = '#fefbfe'
                            logo = 'fas fa-fist-raised'
                            heading = 'Self Starter'
                            description = "Right after I graduated from college, I dreamt of building my own startup from scratch, to learn the required tools and skills to launch a company from the bottoms up. With no external push, I dedicated myself to take my small firm in my home country of Pakistan and steadily bring it to a technological standard as practiced by Silicon Valley companies. I accomplished that by committing myself to research and applying my coding knowledge to design and implement an AI-based tool that aims to tackle deceptive news on the digital space."
                        />
                        <About 
                            color = '#faebf9'
                            logo = 'fas fa-handshake'
                            heading = 'Collaborative'
                            description = "I have worked with small and large cross-functional teams in building scalable solutions for company clients who want to achieve actionable results. I proactively assist my peers for us to collectively succeed and deliver on crucial deadlines. For instance, the marketing department at one of the company I worked with required the engineering team to set up an API to allow targeted email marketing on their web-based platform, which my engineering team willingly assisted with."
                        />
                        <About 
                            color = '#f6dbf5'
                            logo ='fas fa-lightbulb'
                            heading = 'Curious Thinker'
                            description = "I am always open to challanges and healthy discussions that pique my mind and allow me to reflect upon the contemporary problems of today, what solutions work and which ones do not. This allows me to achieve a more in-depth understanding of the world around me and to form possible out-of-the-box solutions while keeping the assumptions and expectations of the stakeholder in check. My approach involves treating existing problems as if they are unique, which always gives way to learning something new."
                        />
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing;