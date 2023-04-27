import { useEffect, useState } from "react";

export const fetchCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      headers: {
        "x-cscapi-key": "api_key",
      },
      redirect: "follow",
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return countries;
};
