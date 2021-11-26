import React from 'react';
// import './cardStyle.css'
import Cards from './card-component';

const Cardlist = (props) => {
    return (
        <div className='card-list'>
      { props.rocket.map((rocket,i) =>
      <Cards key={rocket.flight_number} rocket={rocket}/>)}
        </div>
    );
};

export default Cardlist;