import React from 'react';
import Dog from './Dog';
import PropTypes from "prop-types";

const DogList = (props) =>{
    const dogComponents = props.dogData.map((dog) => {
        return(
            <Dog name={dog.name} caretaker={dog.caretaker} woofCount={dog.woofCount} />
            );
        });

        return (
            <section>
            <h2> Woof count: {props.dogData.length}</h2>
            <ul>{dogComponents}</ul>;
            </section>
        );
        };
DogList.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DogList;