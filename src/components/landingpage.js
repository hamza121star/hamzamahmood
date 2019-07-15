import React, {Component} from 'react';
import FixedSide from './fixed-side';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import About from './about-me';
import Portfolio from './portfolio';
import displayPicture from '../images/hamza-mahmood-full.png';

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
                                    A UX Designer and Product Developer from Pakistan, currently based in New York City. 
                                </p>    
                                <p>
                                    I am working on designing the next generation fact-checking platform for <Link to="https://www.facebook.com/SURKHI.pk/">Surkhi</Link> and
                                    leading a wonderful team of engineers and designers.
                                </p>
                                <div className="mt-5">
                                    <div className="contactButton btn"><Link to="https://www.linkedin.com/in/hmahmood93/">Connect with me on Linkedin</Link></div>
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
                            <div className="to-pad-right">
                                <h4 className="about-left-sec">
                                    
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