import React from 'react';
import {Grid} from 'react-mdl';
import Portfolio from './portfolio';
import displayPicture from '../assets/images/hamza-mahmood-full.png';
import SurkhiPage from '../assets/images/Surkhi-website-page.png';
import AmazonCaseStudy from '../assets/images/Amazon-Case-Study.png';
import Resume from '../assets/documents/Product_Designer_Resume_Hamza_Mahmood.pdf'
import { Link } from 'react-router-dom';

const LandingPage = () => {
        const [modalShow, setModalShow] = React.useState(false);
        return(
            <div>
                <section className="main-content-side">
                    <Grid className="landing-grid">
                        <div className="contact-section col-lg-12">
                            <div className="my-3">
                                <div className="contactButton button-pad btn"><a href={Resume} target="_blank" rel="noopener noreferrer">My Resume</a></div>
                                <div className="contactButton button-pad btn">
                                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hamza.mahmood1993@gmail.com&su=Contacting%20through%20Website&body=Dear%20Hamza,%0A&tf"  target="_blank" rel="noopener noreferrer">Contact Me</a>
                                    </div>
                                {/* <div className="contactButton button-pad btn" onClick={() => setModalShow(true)}>Contact Me</div> */}
                                
                            </div>
                            {/* <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /> */}
                        </div>
                        <div className="first col-md-6 col-lg-6">
                            <div className="banner-text">
                                <h3 className="hello">👋</h3>
                                <h2>Hello, I am Hamza.</h2>
                                <p>
                                    A Product Designer and UX Researcher from Pakistan, currently based in New York City. 
                                </p>    
                                <p>
                                    I am currently working on designing the next generation fact-checking platform for <a href="https://www.facebook.com/SURKHI.pk/" target="_blank" rel="noopener noreferrer">Surkhi</a> and
                                    leading a wonderful team of engineers and designers.
                                </p>
                                <div className="button-center mt-5">
                                    <div className="contactButton btn"><a href="https://www.linkedin.com/in/hmahmood93/" target="_blank" rel="noopener noreferrer">Connect with me on Linkedin</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="second display-picture col-md-6 col-lg-6">                        
                                <img src={displayPicture} />
                        </div>
                    </Grid>
                    <div className="my-4 d-flex justify-content-center">
                        <hr style={{width:'720px', borderColor:'#4B1248'}}/> 
                    </div>
                    <Grid className="about-section">
                        <div className="col-12 col-md-6">
                            <section className="project-left-section">
                                <div className="project-image">
                                    <img src={SurkhiPage} />
                                </div>
                            </section>
                        </div>
                        <div className="col-12 col-md-6">
                            <section className="project-right-section">
                                <h2>Surkhi.pk </h2>
                                <h3>Product Designer Lead (April 2018 -  Present)</h3>
                                <p>  Co-founded Surkhi which started out with an Instagram page that flaired false news within the 
                                    subcontinent. Currently leading a talented young team of designers and engineers in partnership
                                    with policy researchers and institutes to battle fake news using technology.  </p>
                                <p>- Incorporated Design Thinking practices within the product development team to showcase a 'move fast, iterate rapidly'
                                    strategy with a clear goal in mind while prioritizing quality. </p>
                                <p>- I also expanded design capability to support all business needs including product, visual and marketing design.</p>
                                <p>- Designed the visual identity and framework to help align creative and marketing with the brand. </p>
                                <p>- Collaborated with engineers in developing the pipeline of the platform from design to launch. </p>
                                <p>- Created all infographics, visualizations and marketing content for the company's <a href="https://www.instagram.com/surkhi.pk/" target="_blank" rel="noopener noreferrer">Instagram</a> page.</p>
                                <div className="button-center mt-5">
                                    <div className="contactButton button-pad btn"><a href="https://www.behance.net/gallery/83009489/Surkhi-Visual-Identity-Brand-Guidelines" target="_blank" rel="noopener noreferrer">Learn More</a></div>
                                </div>
                            </section>
                        </div>
                    </Grid>
                    <div className="my-4 d-flex justify-content-center">
                        <hr style={{width:'720px', borderColor:'#4B1248'}}/> 
                    </div>
                    <Grid className="about-section">
                        <div className="first col-12 col-md-6">
                            <section  className="project-right-section">
                                <h2>UX Case Study: Amazon Mobile App</h2>
                                <h3>Usability Researcher (Jan 2019 - Apr 2019)</h3>
                                <p>- Designed a concept of the Amazon mobile app that follows the company's timeless branding, includes structured placement 
                                    of information, optimized checkout process, prioritized 'scan item' feature and dark mode. </p>
                                <p>- Carried out usability study to understand pain points and goals of the users through conducting interviews, 
                                    storyboarded scenarios, and online surveys.</p>
                                <p>- Designed an accessible and functional high fidelity prototype that aligned with the persona based on the 
                                    user research data.</p>
                                <p>- Validated results by testing the new design with volunteers who showed acceptibility of the prototype </p>
                                <div className="mt-5">
                                    <div className="contactButton button-pad btn"><Link to={'/' + 'amazon-usability-study'}>Learn More</Link></div>
                                </div>
                            </section>
                        </div>
                        <div className="second col-12 col-md-6">
                            <section className="project-left-section">
                                <div className="project-image">
                                    <img src={AmazonCaseStudy} />
                                </div>
                            </section>
                        </div>
                    </Grid>
                    <div className="my-4 d-flex justify-content-center">
                        <hr style={{width:'720px', borderColor:'#4B1248'}}/> 
                    </div>
                </section>
                <div>
                    <Portfolio />
                </div>
            </div>       
        )
}

export default LandingPage;