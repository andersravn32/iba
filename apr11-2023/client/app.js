const countries = [];

const getCountries = async () => {
  const request = await fetch("http://127.0.0.1:3000/countries", {
    method: "GET",
  }).then((res) => res.json());

  document.querySelector("#countrylist").innerHTML = "";

  request.forEach((country) => {
    document.querySelector(
      "#countrylist"
    ).innerHTML += `<li>${country.code} - ${country.name}</li>`;
  });
};

const createCountry = async (name, countrycode, district, population) => {
  const request = await fetch("http://127.0.0.1:3000/countries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, countrycode, district, population }),
  }).then((res) => res.json());

  return request
};

window.addEventListener("load", async () => {
  await getCountries();
});

document.querySelector("#create-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Create country using data from form
  let response = await createCountry(
    e.target[0].value,
    e.target[1].value,
    e.target[2].value,
    e.target[3].value
  );

  // Reset form inputs
  e.target[0].value = null;
  e.target[1].value = null;
  e.target[2].value = null;
  e.target[3].value = null;

  document.querySelector("#create-response").innerHTML = JSON.stringify(response)
});
