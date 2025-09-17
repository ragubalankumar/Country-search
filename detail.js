let dark = document.getElementById("dark");

const country = JSON.parse(localStorage.getItem("selectedCountry"));
const user = document.getElementById("output");

function goBack() {
  window.location.href = "Country.html";
}

if (!country) {
  user.style.display = "none";
} else {
  user.innerHTML = "";
  user.style.display = "block";
  user.innerHTML += `
    <div>
    <div style="display: flex; align-items: center; gap:50px; margin-left:90px; margin-top:30px">
      <div>
    <img src="${country.flags?.png || ""}" alt="Flag of ${
    country.name
  }" width="350px" height="270px" style="display: block" />
    </div>
    <div>
    <p style="font-weight: bold; font-size:25px">${country.name}</p>
    <p style="margin-top:30px; font-size:15px">Population: ${
      country.population
    }</p>
    <p style="margin-top:6px; font-size:15px">Region: ${country.region}</p>
    <p  style="margin-top:6px; font-size:15px">Sub region: ${
      country.subregion
    }</p>
    <p  style="margin-top:6px; font-size:15px">Capital: ${country.capital}</p>
    <p style="margin-top:6px; font-size:15px">Borders: ${
      country.borders?.join(", ") || "None"
    }</p>
    </div>
    <div>
    <p style="margin-top:6px; font-size:15px">Area: ${country.area}</p>
    <p style="margin-top:6px; font-size:15px">Languages: ${
      country.languages
        ? Object.values(country.languages)
            .map((lang) => lang.name)
            .join(", ")
        : "N/A"
    }</p>
    <p style="margin-top:6px; font-size:15px">Currencies:${
      country.currencies
        ?Object.values(country.currencies)
            .map(cur => `${cur.name} (${cur.symbol})`)
            .join(', ')
        : 'N/A'
    }</p>
    <p style="margin-top:6px; font-size:15px">cioc:${country.cioc}</p>
    <p style="margin-top:6px; font-size:15px">calling codes: +${
      country.callingCodes
    }</p>
    </div>
    </div>
    </div>
  `;
}

dark.addEventListener("click", (event) => {
  let win = document.body;
  if (event) {
    win.classList.toggle("darkmode");
    head.classList.toggle("color");
    dark.classList.toggle("btncolor");
    lg.classList.toggle("lg");
  }
});

console.log(country.borders);
