import dotenv from 'dotenv';
dotenv.config();

interface Coordinates {
  lat: number;
  lon: number;
}

class Weather {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;

  constructor(city: string, data: any) {
    this.city = city;
    this.temperature = data.main.temperature;
    this.humidity = data.main.humidity;
    this.windSpeed = data.wind.speed;
    this.description = data.weather[0].description;
    this.icon = data.weather[0].icon;
  }
}

class WeatherService {
  private baseURL = process.env.API_BASE_URL + 'data/2.5/forecast';
  private apiKey = process.env.OPENWEATHER_API_KEY;

  private async fetchLocationData(query: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
  }

  private destructureLocationData(locationData: any): Coordinates {
    return { lat: locationData[0].lat, lon: locationData[0].lon };
  }

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.apiKey}&units=metric`;
  }

  private async fetchWeatherData(coordinates: Coordinates) {
    const url = this.buildWeatherQuery(coordinates);
    const response = await fetch(url);
    return response.json();
  }

  async getWeatherForCity(city: string) {
    const locationData = await this.fetchLocationData(city);
    if (!locationData.length) {
      throw new Error('City not found');
    }
    const coordinates = this.destructureLocationData(locationData);
    const weatherData = await this.fetchWeatherData(coordinates);
    return new Weather(city, weatherData);
  }
}

export default new WeatherService();
