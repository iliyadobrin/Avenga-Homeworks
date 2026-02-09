const tableBody = document.querySelector("#planetsTable tbody");
const loadBtn = document.getElementById("loadBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const firstPageUrl = "https://swapi.py4e.com/api/planets/?page=1";
const secondPageUrl = "https://swapi.py4e.com/api/planets/?page=2";

// gi fechnue planetite
async function fetchPlanets(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

// gi printa
function printPlanets(planets) {
    tableBody.innerHTML = "";

    planets.forEach(p => {
        const row = `
            <tr>
                <td>${p.name}</td>
                <td>${p.population}</td>
                <td>${p.climate}</td>
                <td>${p.gravity}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Load first planets 
loadBtn.addEventListener("click", async () => {
    const planets = await fetchPlanets(firstPageUrl);
    printPlanets(planets);

    nextBtn.style.display = "inline";
    prevBtn.style.display = "none";
});

nextBtn.addEventListener("click", async () => {
    const planets = await fetchPlanets(secondPageUrl);
    printPlanets(planets);

    nextBtn.style.display = "none";
    prevBtn.style.display = "inline";
});

prevBtn.addEventListener("click", async () => {
    const planets = await fetchPlanets(firstPageUrl);
    printPlanets(planets);

    prevBtn.style.display = "none";
    nextBtn.style.display = "inline";
});