// let image = document.getElementById('image')
// let para = document.getElementById('cname')
// let pop = document.getElementById('pop')
// let square = document.getElementById('sq')
// let wrap = document.getElementById("divi")
let search = document.getElementById("search");
let drop = document.getElementById("country");
let option = document.getElementById("option");
let dark = document.getElementById("dark");
let head = document.getElementById("head");
// let output = document.getElementById("output");
let lg = document.getElementById("lg");
let division = document.getElementById("divi");
let data = [];

async function create() {
  try {
    let response = await fetch("data.json", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("country is not found");
    }
    data = await response.json();
    rendered(data);
    dropdown(data);
    // wrapping(data);
    searchs();
  } catch (err) {
    console.log(err.message);
  }
}

function rendered(data) {
  division.classList.add("highlight");
  division.innerHTML = "";

  data.forEach((user) => {
    let divisions = document.createElement("div");
    divisions.classList.add("high");
    divisions.innerHTML = `
      <img src="${user.flags?.png || ''}" alt="Flag of ${user.name}" width="220px" height="120px" style="display: block" />
      <div style="margin-left: 20px">
        <p style="font-weight: bold;margin-top:10px">${user.name}</p>
        <p style="margin-top:5px">Population: ${user.population}</p>
        <p style="margin-top:5px">Region: ${user.region}</p>
        <p style="margin-top:5px">Capital: ${user.capital}</p>
      </div>
    `;
    divisions.addEventListener('click', () => {
      localStorage.setItem("selectedCountry", JSON.stringify(user))
      window.location.href = "detail.html";
    })
    
    division.appendChild(divisions);
  });
}

async function dropdown() {
  let regions = new Set();

  data.forEach((user) => {
    if (user.region) {
      regions.add(user.region);
    }
  });
  option.innerHTML = `<option value="">Search By Region</option> 
  `;
  // console.log(regions)

  regions.forEach((reg) => {
    let opt = document.createElement("option");
    opt.value = reg;
    opt.textContent = reg;
    option.appendChild(opt);
  });

  option.addEventListener("change", () => {
    let currentregion = option.value;
    let filter = currentregion
      ? data.filter((c) => c.region === currentregion)
      : data;
    console.log(currentregion);
    console.log(filter);
    rendered(filter);
  });
}

function searchs() {
  search.addEventListener("input", () => {
    let keyword = search.value.toLowerCase();

    let filtered = data.filter((country) =>
      country.name.toLowerCase().includes(keyword)
    );
    console.log(filtered);
    display(filtered);
    // if(keyword === ""){
    //   document.getElementById("divi").style.display = "none";
    //   output.style.display = "block";

    // } else{
    //   document.getElementById("divi").style.display = "grid"
    //   output.style.display = "none";
    // }
  });
}

function display(data) {
  data.innerHTML = "";
  // let divi = document.createElement('div')
  // data.forEach((country) => {
  //   output.innerHTML +=`
  //   <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="220px" height="120px" style=" display: block"/>
  //   <p>${country.name.common}</p>
  //   <p>Population:${country.population}</p>
  //   <p>Capital:${country.capital}</p>
  //   `
  //   // divi.appendChild('output')
  // })

  rendered(data);
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


create();
