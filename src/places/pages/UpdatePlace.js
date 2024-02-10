import React from 'react';
import { useParams } from 'react-router-dom';

import './PlaceForm.css';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/util/validators';
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

    return <form className='place-form'>
        <Input id="title" element='input' type='text' label='title' validators={[VALIDATOR_REQUIRE()]} errorText="Please enter valid title" onInput={()=> {}} value={identifiedPlace.title} valid={true}/>

        <Input id="description" element='text' label='Description' validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter valid description (min 5 characters)" onInput={()=> {}} value={identifiedPlace.description} valid={true}/>

        <Button type='submit' disabled={true}>Update Place</Button>
    </form>
}

export default UpdatePlace;