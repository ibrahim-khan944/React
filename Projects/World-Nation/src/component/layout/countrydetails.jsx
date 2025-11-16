import { useTransition, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getcountryinddata } from "../../api/postapi.js";
import Loader from "../UI/loader";

export const Countrydetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setcountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      let res = await getcountryinddata(params.id);
      console.log(res.data[0]);

      if (res.status === 200) {
        setcountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-detail">
      {country && (
        <div className="country-container">
          <div className="country-flag">
            <img src={country.flags.svg} alt="flags" />
          </div>

          <div className="country-info">
            <p className="country-name-main">{country.name.common}</p>

            <div className="country-data">
              <p>
                <span >Native Name : </span>
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>

              <p>
                <span>Population : </span> {country.population}
              </p>

              <p>
                <span>Region : </span> {country.subregion}
              </p>

              <p>
                <span>Capital : </span> {country.capital.join(", ")}
              </p>

              <p>
                <span>Top Level Domain : </span> {country.tld[0]}
              </p>

              <p>
                <span>Currencies : </span>{" "}
                {Object.keys(country.currencies)
                  .map((curelem) => country.currencies[curelem].name)
                  .join(", ")}
              </p>

              <p>
                <span>Languages : </span>{" "}
                {Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")}
              </p>
            </div>

            <NavLink to="/country" className="back-link">
              <button className="back-btn">Go back</button>
            </NavLink>
          </div>
        </div>
      )}
    </section>
  );
};
