const initState = {
    posts: [
        {id: '1', title: 'Intersecting Philosophy and Text Mining', 
        body: 'This is how to do it and stuff etc etc etc', 
        disp: 'philosophy.png', disp_alt: 'a'},
        
        
        {id: '2', title: 'My first Website', body: 'This is how I wrote my first website', disp: 'write.png', disp_alt: 'cb'},
        
        
        
        {id: '3', title: 'Much ado about nothing', body: 'Yeh hai scene', disp: 'write.png', disp_alt: 'c'}
    ]
}
const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;