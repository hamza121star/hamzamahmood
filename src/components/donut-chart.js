import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {Doughnut} from 'react-chartjs-2';


class DonutChart extends Component {
    render(){
        return (
            <div className="chart">
                <Doughnut 
                    data = {[75,35]}
                    labels ={['Male', 'Female']}
                    options={{
                        title:{
                            display:true,
                            text: this.props.company,
                            fontSize: 25
                        },
                        backgroundColor: [
                            '#E3D5B8',
                            '#D03958',
                        ]
                    }}
                />

            </div>
        )
    }
}

export default DonutChart;

