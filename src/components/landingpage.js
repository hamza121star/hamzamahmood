import React from 'react';
import {Grid} from 'react-mdl';
import Portfolio from './portfolio';
import displayPicture from '../assets/images/hamza-mahmood-full.png';
import SurkhiPage from '../assets/images/Surkhi-website-page.png';
import AmazonCaseStudy from '../assets/images/Amazon-Case-Study.png';
import Resume from '../assets/documents/Product_Designer_Resume_Hamza_Mahmood.pdf'
import {Form, Modal, Button} from 'react-bootstrap';


// function MyVerticallyCenteredModal(props) {
//     return (
//     <Modal
//         {...props}
//         size="md"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//     >
//         <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//                 Modal heading
//             </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form classnetlify netlify-honeypot="bot-field" hidden>
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" name="email" placeholder="Enter email" />
//                 <Form.Text className="text-muted">
//                     I will be able to reply back to you with your email! <span role="img">😊</span>
//                 </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>Your Message</Form.Label>
//                 <Form.Control as="textarea" name="message" rows="3" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//         </Modal.Body>
//         <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//     </Modal>
//     );
// }

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
                                    <div className="contactButton button-pad btn"><a href="https://suspicious-euclid-efb30f.netlify.com/" target="_blank" rel="noopener noreferrer">Learn More</a></div>
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
                                    <div className="contactButton button-pad btn"><a href="https://uxdesign.cc/i-felt-the-amazon-app-was-outdated-so-i-redesigned-it-using-design-thinking-a-ux-case-study-549c5880d9be" target="_blank" rel="noopener noreferrer">Learn More</a></div>
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
                {/* <Grid className="why-me">
                    <div>
                        <h1> Strengths</h1>
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
                </Grid> */}
            </div>       
        )
}

export default LandingPage;