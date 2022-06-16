import React, {useState} from 'react';
import PropTypes from 'prop-types'

const Dog = (props)=>{
    const[woofCount, setWoofCount] = useState(0);
    
    const petDog = () => {
        setWoofCount (woofCount + 1);
    }
    return(
       <li>
           <h3>{props.name}</h3>
           <h4>Caretake: {props.caretaker}</h4>
           <h4>Woof count: {woofCount}</h4>
           <button onClick={petDog}> Pet Dog</button>       
        </li>
    );
};

Dog.propTypes = {
    name: PropTypes.string
}
export default Dog;

