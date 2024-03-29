import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList'

const DUMMY_PLaces =  [
    {id:'p1',title:'Empire State',description:'One of the most famous skyscrapers in the world!',imageUrl:'https://d3rcx32iafnn0o.cloudfront.net/Pictures/1024x536/6/9/8/1709698_tirau1.jpg',address:'20 W 34th St, New York, NY 10001',location:{
lat:40.748405,
lng:-73.9878584
}, creator:'u1'},
{id:'p2',title:'Empire Dog State',description:'One of the most famous skyscrapers in the world!',imageUrl:'https://d3rcx32iafnn0o.cloudfront.net/Pictures/1024x536/6/9/8/1709698_tirau1.jpg',address:'20 W 34th St, New York, NY 10001',location:{
lat:40.748405,
lng:-73.9878584
}, creator:'u2'}
];

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLaces.filter(place=>place.creator===userId)
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;