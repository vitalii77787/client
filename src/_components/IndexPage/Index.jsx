import React from 'react';
import { Characteristics } from '../Header/Characteristics';
import { NewArrivals } from './NewArrivals';



export class Index extends React.Component {
    render() {
        return (
            <div> 
                <NewArrivals/>
                <Characteristics/>
            </div>
           
        )
    }
}