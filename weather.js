class Weather {
    constructor(city, country) {
        this.apiKey = '9ace698b8e0f54be4c3e75c349dcbcf3';
        this.city = city;
        this.country = country; 
    }

    // Fetch weather from api
    async getWeather () {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`)

        const responseDate = await response.json();
        return responseDate; 
    }
    // Change weather Location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}