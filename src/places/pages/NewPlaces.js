import React, {useCallback, useReducer} from 'react';

import Input from '../../shared/components/FormElements/Input';
import './PlaceForm.css';
import Button from '../../shared/components/FormElements/Button'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../shared/util/validators'

const formReducer= (state,action)=>{
    switch(action.type){
        case'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs){
                if(inputId===action.inputId){
                    formIsValid=formIsValid && action.isValid;
                } else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid:action.isValid}
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlaces = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs:{
            title:{
                value:'',
                isValid:false
            },
            description:{
                value:'',
                isValid:false
            },
            address:{
                value:'',
                isValid:false
            }
        },
        isValid:false
    });
    const InputHandler = useCallback((id,value, isValid) =>{
        dispatch({type: 'INPUT_CHANGE', value:value, isValid:isValid, inputId:id})
    },[dispatch]);

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input id = 'title' element = 'input' type="text" label='Title' validators = {[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title"  onInput={InputHandler}/>

        <Input id = 'description' element = 'textarea' type="Description" label='Title' validators = {[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid description (at least 5 characters)"  onInput={InputHandler}/>

        <Input id = 'address' element = 'input' type="Address" label='Title' validators = {[VALIDATOR_REQUIRE(0)]} errorText="Please enter a valid address"  onInput={InputHandler}/>

        <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>;
};

export default NewPlaces;