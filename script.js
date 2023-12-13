'use strict';

// const { render } = require("react-dom/cjs/react-dom.production.min");

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function (country) {

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//     request.send(); // This works asynchronously

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data)

//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}m people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>
        `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const renderError = function (message) {
    countriesContainer.insertAdjacentText('afterend', message);
    countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = function (country) {

//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//     request.send(); // This works asynchronously

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data)

//         //Render country 1
//         renderCountry(data);

//         //Get neighbour country(2)
//         const neighbour = data.borders?.[0]

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`);
//         request2.send(); // This works asynchronously

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryAndNeighbour('portugal');

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(`${errorMsg} ${response.status}`);
//         }
//         return response.json();
//     });
// };

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`,
//         'Country not found')
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0]

//             if (!neighbour) throw new Error(`${country} has no neighbouring countries`);

//             // Country 2
//             return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`, 'Country not found');
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(error => {
//             console.log(`${error} failed`)
//             renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// }

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`)
//             }
//             return response.json();
//         })
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders?.[0]

//             // Country 2
//             return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found (${response.status})`)
//             }
//             return response.json()
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(error => {
//             console.log(`${error} failed`)
//             renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// }

// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     });
// };


// const whereAmI = function () {

//     getPosition()
//         .then(position => {
//             const { latitude: lat, longitude: lng } = position.coords;

//             return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found ${response.status}`)
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.country}`);

//             return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.country}`)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Country not found ${response.status}`)
//             }
//             return response.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(error => {
//             console.error(`${error.message}`)
//         })
// }

// btn.addEventListener('click', whereAmI);

// btn.addEventListener('click', () => {
//     getCountryData('ireland');
// });


// const wait = function (seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', () => {
//             imgContainer.append(img);
//             resolve(img)
//         });

//         img.addEventListener('error', function () {
//             reject(new Error('Image not found'))
//         })
//     })
// }

// let currentImg;
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('image 1 loaded');
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded')
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-3.jpg');
//     })
//     .then((img) => {
//         currentImg = img;
//         console.log('image 3 loaded')
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => { console.error(err) });

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
};

const whereAmI = async function () {
    try {
        // Geoloaction
        const position = await getPosition()
        const { latitude: lat, longitude: lng } = position.coords;
        //Reverse geo coding
        const geoCode = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!geoCode.ok) throw new Error('Error! AAAAAAGGHHH')
        const dataGeo = await geoCode.json()

        //Country data
        const response = await fetch(`https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`)
        if (!geoCode.ok) throw new Error('Error! AAAAAAGGHHH')
        const data = await response.json()
        console.log(data);
        renderCountry(data[0]);
    } catch (error) {
        console.error(error)
        renderError(`💥💥 ${error.message}`);
    }
}

whereAmI()