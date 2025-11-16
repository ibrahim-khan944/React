
import countries from "../api/countrydata.json"

function About() {
  
  return (
    <section className="section-about container">
      <h1 className="container-title">
        Here are The Interesting Facts <br />
        We're Proud of
      </h1>
      <div className="gtadient-card">
        {
          countries.map((country) => {

            return (
              <div className="card" key={country.id}>
                <div className="container-card">
                  <p className="card-title">{country.name}</p>
                  <p>
                    <span className="card-description">Capital : </span>
                    {country.capital}
                  </p>
                  <p>
                    <span className="card-description">Population : </span>
                    {country.population}
                  </p>
                  <p>
                    <span className="card-description">Interesting Fact :</span>
                    {country.fact}
                  </p>
                </div>
              </div>
            )
          })
        }


      </div>
    </section>
  );
}

export default About;
