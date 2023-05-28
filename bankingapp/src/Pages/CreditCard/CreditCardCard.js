
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

function CreditCardCard({creditCard,handleClick}){
  const [focus,setFocus] = useState( 'name')

  const handleMouseEnter = () => {
    setFocus( 'cvc' );
  };

  const handleMouseLeave = () => {
    setFocus( 'name' );
  };

    return (
      <div
        id="PaymentForm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={()=>{handleClick(creditCard.id)}}>

        <Cards
          cvc={creditCard.cvc}
          expiry={creditCard.expiry}
          focused={focus}
          name={creditCard.name}
          number={creditCard.number}
          placeholders={{ name: 'Full Name' }}
          preview={true}
          issuer={creditCard.issuer}
        />
      </div>
    );
  

}
export default CreditCardCard;


