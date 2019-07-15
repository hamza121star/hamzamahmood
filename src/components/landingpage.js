import React, {Component} from 'react';
import FixedSide from './fixed-side';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import About from './about-me';
import Portfolio from './portfolio';
import displayPicture from '../images/hamza-mahmood-full.png';
import SurkhiPage from '../images/Surkhi-website-page.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '75%', margin: 'auto', float:'right'}}>
                <FixedSide />
                <section>
                    <Grid className="landing-grid">
                        <Cell col={6}>
                            {/* <img 
                                src = {require('../images/hamza-mahmood.png')} alt="avatar" className="avatar-img"
                            /> */}
                            <div className="banner-text">
                                <h2>Hello, I am Hamza.</h2>
                                <p>
                                    A Product Designer and UX Researcher from Pakistan, currently based in New York City. 
                                </p>    
                                <p>
                                    I am currently working on designing the next generation fact-checking platform for <a href="https://www.facebook.com/SURKHI.pk/" target="_blank" rel="noopener noreferrer">Surkhi</a> and
                                    leading a wonderful team of engineers and designers.
                                </p>
                                <div className="mt-5">
                                    <div className="contactButton btn"><a href="https://www.linkedin.com/in/hmahmood93/" target="_blank" rel="noopener noreferrer">Connect with me on Linkedin</a></div>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={6}>
                            {/* <img 
                                src = {require('../images/hamza-mahmood.png')} alt="avatar" className="avatar-img"
                            /> */}
                            <div className="display-picture">
                                <img src={displayPicture} />
                            </div>
                        </Cell>
                    </Grid>
                    <Grid className="about-section">
                        <Cell col={6}>
                            <section className="project-left-section">
                                <div className="project-image">
                                    <img src={SurkhiPage} />
                                </div>
                            </section>
                        </Cell>
                        <Cell col={6}>
                            <section  className="project-right-section">
                                <h2>Surkhi.pk </h2>
                                <h3>UX Design Lead (April 2018 -  Present)</h3>
                                <p className="about-right-sec">
                                Helped found Surkhi which started out as a Instagram page that flaired false news within the subcontinent</p>
                                <p>-  an organizational model for the design org paired with solid vision, team culture, hiring strategy and obsession to quality. I also expanded design capability to support all business needs including product, industrial and marketing design.</p>
                                <p>- Designed the visual identity and framework to help align creative and marketing with the brand </p>
                                <p>- Collaborated with engineers in developing the pipeline of the platform from design to launch </p>
                                <p>- Created all infographics, visualizations and marketing content for the company's <a href="https://www.instagram.com/surkhi.pk/" target="_blank" rel="noopener noreferrer">Instagram</a> page</p>
                            </section>
                        </Cell>
                    </Grid>
                </section>
                <Grid>
                    <Portfolio />
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