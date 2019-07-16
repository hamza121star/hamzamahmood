import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {

    render() {
        const surkhi = [{item: 'Formulated a deep learning model using Python and Tensorflow. Detects a news article is false or true upto 84% accuracy. Trained our model using Google Collab (a cloud-based Jupyter notebook).'},
        {item: 'Created a web application on Angular with a simplistic UI that predicts fake news upon user input of news URL.'},
        {item: 'Created benchmark dataset of annotated news article that are classified as fake, unverified, plausible or true.'},
        {item: 'Integrated Facebook ads and analytics to maximize user engagement. Reached 80K+ audience since launch.'}]
        
        const imsi = [{item: 'Designed the company’s website using Angular and React from design to launch.'},
        {item: 'Optimized the company’s HR portal using MySQL and implementing caching. Operation time improved by 40%.'},
        {item: 'Integrated a custom automatic dashboard generation for employee evaluation.'},
        {item: 'Carried out weekly training sessions for teams who wanted to learn latest digital tools and web technologies.'}]

        const netsol = [{item: 'Enhanced and maintained the company’s finance software suite using ASP.NET and Javascript technology'},
        {item: 'Designed 30% of the front-end of the software suite to be pitched to future clients. (HTML5/CSS3, Javascript)'},
        {item: 'Implemented business logic of 5 mission critical modules using SQL triggers and procedures.'},
        {item: 'Performed unit testing of 25% of the modules within the software suite deployed in Beijing. (Selenium)'}]

        return(
            <div>
                <Grid className="resume-page">
                    <Cell className="resume-left-side" col={4}>
                        <div style={{textAlign:'center', paddingTop: '40px'}}>
                            <div className="profileImage"></div>
                        </div>
                        <div style={{padding:'0 35px'}}>
                            <h2 className="resume-name">Hamza Mahmood</h2>
                            <hr style={{borderTop: '5px dotted #2E182D', margin: '10px 40px'}} />
                            <p>
                            I specialise in a multi-disciplined approach to incorporate design and development together. With 3+ years of functional 
                            experience with Javascript technologies, Python and Java, I aim to raise the bar in building cross-platform applications that 
                            integrate seamlessly with users. I love to tackle novel problems while keeping in mind the customer pain-points in 
                            the digital age. I have led a machine learning based startup in the journalism space, comprising a team of 10 talented
                            members working towards curbing deceptive news using AI and providing consultancy services to research agencies. 
                            </p>
                            <p>I am actively looking for a role in software development which involves front-end design 
                            and development, where I am able to collaborate with cross functionally with design, engineering and data science teams to achieve
                            success.
                            </p>
                            <hr style={{borderTop: '5px dotted #2E182D', margin: '10px 40px'}} />
                        </div>
                        <Grid className="contact-info clearfix">
                            <Cell className="left-details" col={4}>
                                <ul className="list-titles" style={{listStyle: 'None'}}>
                                    <li>Phone</li>
                                    <li>Mail</li>
                                    <li>Home</li>
                                    <li>Web</li>
                                    <li>Twitter</li>
                                </ul> 
                            </Cell>
                            <Cell className="right-details" col={8}>
                                <ul className="list-content" style={{listStyle: 'None'}}>
                                    <li>+1 646 589 9101</li>
                                    <li> hamza.mahmood1993@gmail.com</li>
                                    <li>New York City, NY</li>
                                    <li>www.hamzamahmood.com</li>
                                    <li>@mahmooyo</li>
                                </ul>
                            </Cell>
                        </Grid>
                        

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h3 class="experience-title">Skills</h3>
                        <Grid>
                            <Cell col={6}>
                                <p style={{fontWeight:'900', fontSize:'1.2em'}}>Full Stack Developer Specific Skills</p>
                                <div style={{marginRight: '55px'}}>
                                    {/* <Skill skillset = "React & Redux" percentage = {100}/>
                                    <Skill skillset = "HTML5, CSS3 & Sass" percentage = {100}/>
                                    <Skill skillset = "Angular" percentage = {90}/>
                                    <Skill skillset = "Java" percentage = {80}/>
                                    <Skill skillset = "Python" percentage = {80}/> */}
                                </div>
                            </Cell>
                            <Cell col={6}>
                                <p style={{fontWeight:'900', fontSize:'1.2em'}}>UX Designer Specific Skills</p>
                                <div style={{marginRight: '25px'}}>
                                    {/* <Skill skillset = "High Fidelity Prototyping" percentage = {100}/>
                                    <Skill skillset = "Wireframing and Mockup generation" percentage = {95}/>
                                    <Skill skillset = "Usability Study and Data Analysis" percentage = {90}/>
                                    <Skill skillset = "UI Conceptualization" percentage = {90}/>
                                    <Skill skillset = "Motion Design" percentage = {80}/> */}
                                </div>
                            </Cell>
                        </Grid>
                        <hr style={{borderTop: '5px dotted #efc07a', margin: '25px 50px'}}/>
                        <h3 class="experience-title">Work Experience</h3>
                        <Experience
                            startYear = "Apr 2018"
                            endYear = "Present"
                            company = "Surkhi"
                            companyRole = "Front End Developer & UX Designer"
                            jobDesc = {surkhi}
                        />

                        <Experience
                            startYear = "Jun 2017"
                            endYear = "Jan 2018"
                            company = "IMSI Design"
                            companyRole = "Front End Developer"
                            jobDesc = {imsi}
                        />

                        <Experience
                            startYear = "Sep 2016"
                            endYear = "Jun 2017"
                            company = "NetSol Technologies"
                            companyRole = "Software Developer"
                            jobDesc = {netsol}
                        />
                        <hr style={{borderTop: '5px dotted #efc07a', margin: '25px 50px'}}/>

                        <h3 class="experience-title">Education</h3>
                        <Education 
                            startYear = {2018}
                            endYear = "2019 (Expected)"
                            schoolName = "Stony Brook University (SUNY)"
                            schoolDescription = "MS in Technological Systems Management. Courses taken: Data Mining, Natural Language Processing, Data Analysis and Visualization"
                        />
                        <Education 
                            startYear = {2012}
                            endYear = {2016}
                            schoolName = "Lahore University of Management Sciences (LUMS)"
                            schoolDescription = "BS in Computer Science. Courses taken: Data Structures and Algorithms, Software Engineering, Service Oriented Computing, Advanced Programming"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;