import React, {Component} from 'react';

class Philosophy extends Component {    
    render(){    
        return (
            <div className="philosophy-blog">
                <p>
                    Having learned R through a Big Data course, I was given hands-on training on essential tools and techniques required to extract 
                    useful information and move towards creating meaningful visualizations through graphs, cluster diagrams or hierarchical trees. 
                    One of the key learning objectives of the course was performing text mining over sample sets of text data. As hopeful as I was 
                    about deeply learning about this topic, the concepts were taught at a very abstract level and as disconcerting it was, the 
                    tutor only spent two classes out of total fourteen on this module. The situation spoke for itself. We were to carry out the 
                    burdensome task of research on what text to analyze for our project. However; to me personally, this freedom worked in my favor
                    as I was able to achieve a better learning experience than expected by the end of the course.
                </p>
                <p>
                    Talking about the process, I initially went on a Google search binge for the first week, racking up useful resources
                    on text mining, existing pieces of work and ‘open’ problems that are out there. Once I was comfortable with the
                    material to get started on the project, I had to look for a text data set that not only piqued my interest but also
                    one which hasn’t been already used before. So, as part of my project, I wanted to evaluate pieces of literature that 
                    I read at some point in time, either as part of courses I opted for in the past or through my random explorations 
                    into philosophy while browsing the internet. These books are descriptive but touch upon different aspects of life. 
                    Others involve esoteric theories, ideologies and set of premises that I simply do not have enough time to go over
                    all of them. Instead, to make life easier for me, my main concern was to understand the gist of what each philosopher 
                    tried to convey in their writings. So, by writing a few lines of code, I will be able to make sense of verbosely written 
                    text through the help of a few eye-catching visualizations.
                </p>
                <p>
                    For the sake of keeping this piece as concise and readable as possible, I have analyzed only 6 different sets of texts written 
                    by renowned philosophers whose theories and ideas have historical significance, namely:
                </p>
                <ol>
                    <li><strong>The Principles of Philosophy</strong> — Rene Descartes (Translated by Steve Harris, Charles Frank, version published 2003)</li>
                    <li><strong>The Critique of Pure Reason</strong> — Immanuel Kant (Translated by J. M. D. Meiklejohn, version published 2003)</li>
                    <li><strong>Essays: The First Series</strong> — Ralph Waldo Emerson (Version published 2001)</li>
                    <li><strong>The Communist Manifesto</strong> — Karl Marx, Friedrich Engels (Transcribed by Allen Lutins & Jim Tarzia, version published 2005)</li>
                    <li><strong>Genealogy of Morals</strong> — Friedrich Nietzsche (Translated by Horace B. Samuel & J. M. Kennedy, Edited by Dr. Oscar Levy, first published 1913)</li>
                    <li><strong>Beyond Good and Evil </strong> — Friedrich Nietzsche (Translated by Helen Zimmern, version published 2009)</li>
                </ol>
                <p>
                    [Notice the last two books are written by the same author. This is intentionally done to further my evaluation]
                </p>
                <p>
                Finding the mentioned books was not an arduous task, a major thanks to open source repositories especially the <a href="http://www.gutenberg.org/">Gutenberg Project</a>. The website has a collection of 56,000 uploaded ebooks which are ready to download. In order to extract useful terminologies and 
                key insights, different statistical or natural language processing (NLP) procedures are needed to be carried out, only then we will 
                be able to produce the visualizations that we talked about. I have ordered different sections based on the method employed, which 
                are the following:
                </p>
                <ol>
                    <li>Word cloud creation for keyword analysis</li>
                    <li>Similarities across text samples</li>
                    <li>Term Frequency and TF-IDF plots of most repeated Bi-grams included in the selected text to understand word rank</li>
                    <li>Sentiment analysis to understand the context of the data and establish a correlation between the given texts.</li>
                </ol>
                <h4> Section 0: Data Import and Housekeeping</h4>
                <p>To start off with my R program, I usually clean up all my global and local variables using the following 
                    command:
                </p>
                <pre className="code-pre">
                    rm(list=ls())
                </pre>
                <p>
                Once executed, you’ll have a fresh start with your code. Since we are using the Gutenberg project and have to read .txt files 
                into our variables we will import the following libraries to utilize certain important functions:
                </p>
                
                <pre className="code-pre">
                    require(readtext)<br />
                    require(gutenbergr)<br />
                    require(quanteda)<br/>
                </pre>
            </div>
        )
    }
}

export default Philosophy;