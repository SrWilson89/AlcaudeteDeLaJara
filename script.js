// API del Clima
function fetchWeather() {
    const apiKey = 'TU_API_KEY'; // Reemplaza con tu API Key de OpenWeatherMap
    const city = 'Alcaudete de la Jara';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    axios.get(url)
        .then(response => {
            const weather = response.data;
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <p><strong>Clima:</strong> ${weather.weather[0].description}</p>
                <p><strong>Temperatura:</strong> ${weather.main.temp}°C</p>
                <p><strong>Humedad:</strong> ${weather.main.humidity}%</p>
                <p><strong>Viento:</strong> ${weather.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// API de Google Maps
function initMap() {
    const location = { lat: 39.7909, lng: -4.8718 }; // Coordenadas de Alcaudete de la Jara
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Formulario de Contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    // Aquí podrías añadir código para enviar el formulario a un servidor
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
    initMap();
});