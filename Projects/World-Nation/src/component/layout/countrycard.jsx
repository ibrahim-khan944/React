import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const Countrycard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <div className="country-card">
      <img src={flags.svg} alt={`${name.common} flag`} className="country-flag" />
      <div className="country-details">
        <h2 className="country-name">{name.common}</h2>
        <p>
          <span className="label">Capital:</span>{capital?.[0]}
        </p>
        <p>
          <span className="label">Population:</span> {population.toLocaleString()}
        </p>
        <p>
          <span className="label">Region:</span> {region}
        </p>
        <NavLink to={`/country/${name.common}`}>
          <button className="country-button">See Details <FaArrowRight /></button>
        </NavLink>
      </div>
    </div>
  );
};
