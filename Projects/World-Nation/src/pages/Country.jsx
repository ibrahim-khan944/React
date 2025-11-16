import { useEffect, useTransition } from "react";
import { getcountrydata } from "../api/postapi";
import { useState } from "react";
import Loader from "../component/UI/loader";
import { Countrycard } from "../component/layout/countrycard";
import '../../src/App.css';
import SearchFilter from "../component/UI/searchfilter";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setcountries] = useState();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    startTransition(async () => {
      let res = await getcountrydata();
      setcountries(res.data)
    });
  }, []);

  // console.log(search,filter);
  if (isPending) return <Loader />

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country;
  };

  const searchRegion = (country) => {
    if (filter === "all") {
      return country;
    } return country.region === filter;

  }
  const filterCountries = countries?.filter(
    (country) => searchCountry(country) && searchRegion(country));
  return (
    
    <section>
      <SearchFilter search={search} setsearch={setSearch}
        filter={filter} setfilter={setFilter} 
        countries = {countries} setcountries = {setcountries}
        />

      <ul className="country-grid">
        {
          filterCountries?.map((curcountry, index) => (
            <li className="country-item" key={index}>
              <Countrycard country={curcountry} />
            </li>
          ))
        }
      </ul>

    </section>
  )
}
export default Country;