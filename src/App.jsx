import useCurrencyInfo from "./hooks/useCurrencyInfo/useCurrencyInfo";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Card from "./components/Card/Card";
import { useState } from "react";
import "./App.css";


function App() {
   const [convertTo, setConvertTo] = useState("usd");
   const [convertFrom, setConvertFrom] = useState("pkr");
   const [amountToConvert, setAmountToConvert] = useState(0);
   const [convertedAmount, setConvertedAmount] = useState(0);

   const currenciesInfo = useCurrencyInfo(convertFrom);
   const currencyOptions = Object.keys(currenciesInfo);

   const swap = () => {
      setConvertFrom(convertTo);
      setConvertTo(convertFrom);
      setAmountToConvert(convertedAmount);
      setConvertedAmount(amountToConvert);
   }
   const convert = () => {
      setConvertedAmount((amountToConvert * currenciesInfo[convertTo]).toFixed(2));
   }

   return (
      <>
         <main className="mainContainer">

            <div className="cardContainer">

               <h1>Currency Convertor </h1>

               <Card
                  readOnly={false}
                  value={convertFrom}
                  amount={amountToConvert}
                  label="Amount To Convert"
                  currencyOptions={currencyOptions}
                  onCurrencyChange={(event) => setConvertFrom(event.target.value)}
                  onAmountChange={(event) => setAmountToConvert(Number(event.target.value))}
               />

               <button
                  id='swap'
                  onClick={swap}
                  aria-label='Swap'
               >
                  <SwapVertIcon id="swapIcon" />
               </button >

               <Card
                  readOnly={true}
                  value={convertTo}
                  label="Converted Amount"
                  amount={convertedAmount}
                  currencyOptions={currencyOptions}
                  onCurrencyChange={(event) => (setConvertTo(event.target.value))}
               />

               <button
                  id='convertBtn'
                  onClick={convert}
               >
                  {`Convert ${convertFrom.toUpperCase()} To ${convertTo.toUpperCase()}`}
               </button>

            </div>

         </main>
      </>
   )
}

export default App;
