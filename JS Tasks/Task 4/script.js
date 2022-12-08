/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const result = document.querySelector('#output');

const fetchData = async () => {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const cars = await response.json();
            return cars;
        }
    } catch (error) {
        console.error(error);
    }
};

function init() {
    fetchData().then(cars => displayData(cars))
  };

init();

function displayData(car) {
    car.forEach(car => {
        result.innerHTML += 
            `
            <div class='cars' id='cars'>
                <div class='brand' id='brand'> ${car.brand}</div> 
                <div class='models' id='models'> ${car.models}</div>
            </div>
            `
    });
}