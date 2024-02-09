import React from 'react';
import { useParams } from 'react-router-dom';

const DUMMY_PLaces =  [{id:'p1',title:'Empire State',description:'One of the most famous skyscrapers in the world!',imageUrl:'https://d3rcx32iafnn0o.cloudfront.net/Pictures/1024x536/6/9/8/1709698_tirau1.jpg',address:'20 W 34th St, New York, NY 10001',location:{
lat:40.748405,
lng:-73.9878584
}, creator:'u1'},
{id:'p2',title:'Empire State',description:'One of the most famous skyscrapers in the world!',imageUrl:'https://d3rcx32iafnn0o.cloudfront.net/Pictures/1024x536/6/9/8/1709698_tirau1.jpg',address:'20 W 34th St, New York, NY 10001',location:{
lat:40.748405,
lng:-73.9878584
}, creator:'u2'}];

const UpdatePlace = props => {
    const placeId  = useParams().placeId;
    const identifiedPlace = DUMMY_PLaces.find(p=>p.id===placeId)

    if(!identifiedPlace){
        return <div className='center'><h2>Could not find place!</h2></div>
    }

    return <h2> Update Place</h2>
}

export default UpdatePlace;