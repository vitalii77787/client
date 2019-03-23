import React from 'react';
import { Characteristics } from '../Header/Characteristics';
import { NewProducts } from './NewArrivals';



export class Index extends React.Component {
    render() {
        return (
            <div> 
                <NewProducts/>
                <Characteristics/>
            </div>
           
        )
    }
}