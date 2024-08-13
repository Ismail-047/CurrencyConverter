import React, { useId } from 'react';
import "./Card.css";

function Card({
   value,
   amount,
   label,
   required,
   readOnly,
   onAmountChange,
   onCurrencyChange,
   currencyOptions = []
}) {

   const uniqueId1 = useId();
   const uniqueId2 = useId();

   return (
      <div className="card">

         <div className="leftCard">

            <label
               htmlFor={uniqueId2}
            >
               Currency Type
            </label>

            <select
               value={value}
               id={uniqueId2}
               className='selects'
               onChange={onCurrencyChange}
            >
               {currencyOptions.map((currency) => (
                  <option
                     key={currency}
                     value={currency}
                  >
                     {currency.toUpperCase()}
                  </option>)
               )};
            </select>

         </div>


         <div className="rightCard">

            <label
               htmlFor={uniqueId1}
            >
               {label}
            </label>

            <input
               type="number"
               value={amount}
               id={uniqueId1}
               className='inputs'
               readOnly={readOnly}
               onChange={onAmountChange}
            />

         </div>

      </div>
   )
}

export default Card;
