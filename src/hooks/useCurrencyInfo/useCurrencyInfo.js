import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
   const [currenciesData, setCurrenciesData] = useState({});

   useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then((res) => { return res.json(); })
         .then((res) => { setCurrenciesData(res[currency]); })
         .catch((error) => { console.error("ERROR! Fetching Data: " + error); })
   }, [currency]);
   return currenciesData;
}

export default useCurrencyInfo;