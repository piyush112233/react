import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  console.log("currency", currency);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => {
        console.log("response", response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => setData(response[currency]))
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  console.log("data", data);
  return data;

}

export default useCurrencyInfo;