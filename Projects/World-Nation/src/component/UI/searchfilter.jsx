
function SearchFilter({ search, setsearch, filter, setfilter, countries, setcountries }) {

  const handlesearch = (event) => {
    event.preventDefault();
    setsearch(event.target.value)
  }
  const handleFilter = (event) => {
    event.preventDefault();
    setfilter(event.target.value)
  }

  const sortcountries = (value) => {
    const sortcountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    });
    setcountries(sortcountry)
  };


  return (
    <>
    <div className="c-div">
      <h1 className="c-heading">World All Countries</h1>
    </div>
  <section className="search-filter">
      <div className="search-box">
        <input
          type="text"
          value={search}
          placeholder="Search country..."
          onChange={handlesearch}
        />
      </div>

      <div className="sort-buttons">
        <button onClick={() => sortcountries("asc")}>ASC</button>
        <button onClick={() => sortcountries("dec")}>DESC</button>
      </div>

      <div className="filter-select">
        <select value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
    </>
  )
}
export default SearchFilter;