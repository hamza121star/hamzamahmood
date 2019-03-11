import React from 'react';
import Philosophy from '../components/philosophy';
import Hackathon from '../components/hackathon';

const initState = {
    posts: [
        {id: '1', title: 'Intersecting Philosophy and Text Mining', 
        summary: 'Analyzing trends withing philosophical works, extract key insights by using natural language processing techniques and various statistical analyses',
        body:  <Philosophy />, 
        disp: 'philosophy.png', disp_alt: 'a'},
        
        
        {id: '2', 
        title: 'GlobalHacks VII, Conquered',
        summary: 'How a team of three brown dudes won $15,000 in cash prize at a Social Policy Reform Hackathon Event in St. Louis.',
        body: <Hackathon />, 
        disp: 'hackathon.jpg', 
        disp_alt: 'cb'},
        
        
        
        {id: '3', title: 'Much ado about nothing', body: 'Yeh hai scene', disp: 'write.png', disp_alt: 'c'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;