import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import chartData from '../data/Employer_Diversity.json'

class CompanyDiversity extends Component {  
    render(){    
        console.log(chartData); 
        return (
            <Grid>
            </Grid>
        )
    }
}

export default CompanyDiversity;