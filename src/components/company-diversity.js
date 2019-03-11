import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import chartData from '../data/Employer_Diversity.json'
import DonutChart from './donut-chart.js';

class CompanyDiversity extends Component {  
    render(){    
        console.log(chartData); 
        return (
            <Grid>
                <DonutChart 
                    company = 'Amazon'
                    
                />
            </Grid>
        )
    }
}

export default CompanyDiversity;