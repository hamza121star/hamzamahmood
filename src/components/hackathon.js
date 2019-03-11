import React, {Component} from 'react';

class Hackathon extends Component { 
    render(){    
        return (
            <div className="philosophy-blog">
                <p>
                It was the break of autumn in my campus dormitory, reading Brad Stone’s highly descriptive book on Amazon, “The Everything Store”. The day started off well and was only going to get better as I got a call from my good friend Jay, who excitedly asked whether I had any commitments for the day.
                </p>
                
                <p>I casually replied, “No, but what’s up? You seem excited!”</p>

                <p>It was that time of the semester when my senior colleagues were actively looking for jobs and internships. So, I sheepishly 
                    thought he was about to let me in on getting an offer or something. However, the question he asked was unique.</p>

                <p>“Do you want to attend a hackathon in St. Louis?”, he fervently asked.</p>
                <p>Now, Jay had my attention. “Tell me more about it…”, I said.</p>
                <p>While he explained the situation, the first thing that came to mind was that it had been ages since I last attended a 
                    hackathon, and secondly, there was a surge of excitement that flowed through my nerves as this was a chance to do something 
                    meaningful and productive.</p>

                <p>“The winning prize is 15 grand, by the way!”, Jay added. This was it for me. This was too good an opportunity not to miss. 
                    Jay was already in touch with our soon-to-be third teammate, Abhishek. The plan was set in motion, we booked our flights, 
                    got done with our homework well in advance and were ready to depart to the home of the Cardinals.
                </p>
                <h4>ENTERING ST. LOUIS</h4>
                <p>
                The place where the team had to rendezvous was located in mid-west. To give a very brief summary of the place, the city was 
                ranked as the 3rd worst crime rate in the country in 2017. Missouri , where the city is situated, is also considered as a 
                ‘red’ state or conservative-leaning, with residents more susceptible to racism and bigotry. The folk back at home were not 
                really in favor of me traveling there and for good reason, but that did not stop me.
                </p>
                <div className="blog-sub-image">
                    <img src={require('../images/hackathon-arena.png')}/>
                </div>
                <p>
                The event was set in a very nice part of town as a matter-of-fact. We were to spend 3 days in the Chaifetz Arena, 
                which was the property of the fabled St. Louis University. The arena overlooked the gateway arch (see the picture 
                below). The weather was slightly chillier than in New York and remained overcast for the duration of my stay there.
                </p>
                <p>A moment of self-reflection here.</p>
                <p>
                    There were moments in time where I pictured myself connecting with people from all four corners of the United
                    States, to meet the smartest engineers, designers, data wranglers of my generation. To get acquainted with the 
                    much talked about startup culture, inspired by Silicon Valley. This was the chance, here I was about to get what I 
                    dreamed of.
                </p>
                <h4>THE PROBLEM STATEMENT</h4>
                <p>As I fiddled with my Rubik cube to pass the time, the event head took the stage, shortly. The voice was coming from far off
                    where we were sitting. It was an enthusiastic bellowing voice to which the participants responded with a massive cacophony of 
                    sounds.
                </p>
                <p>
                After going through the rudimentary details, we got to the meaty part of the speech. The scope was to design an app or a system that
                assisted <strong>new immigrants to reach out to a community in times of needs</strong>, to promote a <strong>sense of social 
                belonging</strong>. A platform that could <strong>foster local communities</strong> and help them <strong>go beyond 
                geographic, lingual, economic and cultural boundaries</strong>, with the ability for people to <strong>share lived 
                experiences.</strong>
                </p>
                <h4>OUR APPROACH</h4>
                <p>From the get-go, we wanted to be super effective with our time and started to discuss our roles. I was to handle the front-end 
                    and documentation part of the application, while Jay took care of integrating AI and writing service-level REST code and 
                    Abhishek chose to code the backend portion. No task was easier than the other as the presentation layer of the product was 
                    critical and how seamlessly it worked with the variety of users which it was to target.
                </p>
                <p>
                Although we had 48 hours to build a solution, we first took out 4–5 hours to brainstorm and conceptualize the idea itself, 
                asking mentors and engineers part of the industry for advice and key elements to consider when building the solution. We were 
                highly tempted to start implementing the prototype but we chose not to and this was Jay’s call, and we as a team placed our trust in
                him.
                </p>
                <p>
                First, we mapped out the workflow of the app, to explore what was already out there, where the user pain points existed and how to 
                accomplish the user’s goal with as little intrusion as possible. Our understanding of the problem was that each ‘community’, 
                represented by their faith, culture, and race had a particular messaging app of choice. For instance, people from the Chinese 
                community are regular users of WeChat and they would not unnecessarily jump onto a different service. Also, immigrants who belong to
                an older age bracket have a limited understanding of such apps, so they will resort to using more traditional methods of 
                communication such as SMS or phone call.
                </p>
                <h4>WHAT WE DESIGNED</h4>
                <p>
                It was not long before we found our Eureka moment. We were not to make any new app and instead decided to go ‘platform-less’. 
                We innovated a system that integrated with existing technologies to help immigrants connect across multiple platforms. We 
                implemented a ‘one click’ sharing of data, news, and events based on the preference of the user, who may choose to get relevant 
                information from any part of the world or from their nearby current location in the States. This functioned like a subscription or 
                ‘opt-in’ model where getting information is fast and easy.
                </p>
                <p>
                The cross-platform nature of the system allowed communities to inter-mingle with other communities, to plan out social gatherings 
                or to help find jobs. People in difficult position can take advantage of the system’s Multi-Lingual helpline that can be accessed 
                from any popular communication app. The user can ask questions, talk about worries, seek advice/guidance, get doubts cleared by 
                simply dropping an anonymous audio or text message to the helpline.
                </p>
                <p>
                In the first pass, our AI system will try to sift through a repository of FAQs. If it is able to find the closely matched question, 
                the autogenerated voice will send the user a possible solution to the query. If that does not work (considering the limitation of 
                AI), the question will be forwarded to a verified person who is allowed to answer the query. At no stage is the person aware of who 
                he/she is helping, to maintain anonymity.
                </p>
                <h4>THE VERDICT</h4>
                <p>
                There were three rounds in total. First one was the most nerve-racking as a mere 30% of the participants were going to pass 
                through. As a group of judges came to our table, we were able to successfully explain our idea. We gauged their reaction and it 
                seemed pretty much in the positive, receiving enthusiastic nods and surprised murmurs as we presented our idea.
                </p>
                <p>We passed the first round with flying colors. That boosted our morale and the next round was the investors round, in which we 
                    had 10 mins to explain and showcase a demo of our prototype. We had a buffer time of 2 hours to test for any bugs and fix them
                    before pitching to the judges. I was personally tense but I tried not to get the best of me. Like in the previous round, we got 
                    the judges turning their heads to each other over our idea.
                </p>
                <p>
                If we passed this round, we were sure shot getting a prize at the very least. We did not expect to reach this far in the 
                competition.
                </p>
                <p>
                Yet when the time came for the announcements, we made it to top 3. During this point, we were confident about winning it big. The 
                last round involved the final 3 teams to pitch their idea to the audience and the positions were to be decided based on that. We 
                gave it our best and the rest we placed our trust in God.
                </p>
                <p>
                <em>“The first position goes to: Team ConnectUS!” </em>— the voice of the event-head reached the depths of my soul. 
                We had officially won $15,000 in cash prize.
                </p>
                <p>
                It was no small feat and we were proud of this achievement. My folks back home were ecstatic with joy and soon a barrage of 
                congratulatory messages came my way as I broadcasted this win on social media. It was a satisfying feeling all in all.
                </p>
                <hr className="section-divider"></hr>
                <h4>TECHNOLOGY STACK</h4>
                <p>
                    The system was composed of a chatbot built on all platforms, connected to a single backend powered by Twilio, a
                    communication Platform-as-a-Service. We made use of an autogenerated voice and messaging system to assist new 
                    immigrants arriving in the US. We designed the system to support a bare minimum level of communication using SMS, 
                    MMS, or traditional phone call services. We used Twilio's free tier to build the chatbot and extend them across 
                    popular messaging applications such as Whatsapp, Facebook Messenger, and even WeChat.
                </p>
                <p>
                To host our backend we used Google Cloud Platform, utilizing a Python-based environment as we wrote the application in 
                Flask. The same technology was used to power our Natural Language processing and multi-lingual query processing. Our 
                database, user management system is based on Firebase.
                </p>
                <h4>CHALLENGES</h4>
                <p>In my opinion, time was a big constraint since we had 48 hours to build a functioning application to woo the judges. Generally, 
                    the lifecycle of a well-curated app spans from weeks to months, or even years depending upon the complexity and dimensions of 
                    the problem being addressed. We had to bootstrap quickly, with little room for error in decision making and quickly code up our 
                    prototype.
                </p>
                <p>
                We also faced technological challenges. Our ambition was to cover as many platforms as possible to showcase the potential impact of
                our system which required insane amounts of computational resources. Also, properly handling the AI engine was difficult given the 
                lack of data available online. Our strategy also entailed handling different dialects of a certain language but as of yet, even the 
                best NLP frameworks (GCP/AWS) struggle to give accurate results.
                </p>
                <h4>KEY TAKEAWAY</h4>
                <p>
                I feel that the whole event was a big morale booster. It made me realize the importance of collaboration, putting trust on your 
                teammates to work towards a great looking solution.
                </p>
                <p>
                The Hackathon allowed me to tap into my inner computer geek, to write code fast and accurately. But it also strengthened 
                my belief in the importance of brainstorming and ideation; all design thinking techniques, that allow a team to create the 
                ‘right’ thing in the first try. It was big leverage as we did not have to iterate through our prototype multiple times.
                </p>
                <p>
                Finally, and most importantly, this episode brought with it a self-belief, that one could do much more than they imagine if they 
                put their thoughts into actions. One needs to have a self-starter mentality to accomplish goals, however big or small they are. 
                Just put yourself out there and do the best you can.
                </p>
                <h4>LINKS</h4>
                <ul>
                    <li><a href="https://github.com/hamza121star/connectUS">https://github.com/hamza121star/connectUS</a></li>
                    <li><a href="https://devpost.com/software/some-name-for-global-hacks-7">https://devpost.com/software/some-name-for-global-hacks-7</a></li>
                    <li><a href="https://www.slideshare.net/HamzaMahmood9/connect-us">https://www.slideshare.net/HamzaMahmood9/connect-us</a></li>
                </ul>
                <hr className="section-divider"></hr>
            </div>
        )  
    }
}

export default Hackathon;