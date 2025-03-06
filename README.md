## 🌦️ Weather Dashboard

## 📌 Description

The Weather Dashboard is a web application that allows users to retrieve and display current and 5-day weather forecasts for cities worldwide. This application utilizes the OpenWeather API to fetch real-time weather data and provides a search history feature for quick access to previously searched cities. The application is built using Node.js, Express, and the OpenWeather API.

## 🚀 Features

🔍 Search for weather conditions in any city

🌡️ View current weather details (temperature, humidity, wind speed, and conditions)

📅 View a 5-day forecast with relevant weather details

📌 Save search history to quickly access previously searched cities

🏙️ Click on a city in the search history to retrieve its weather data again

## 🛠️ Installation

Clone the repository:

git clone https://github.com/YOUR-GITHUB-USERNAME/weather-dashboard.git

Navigate to the project directory:

cd weather-dashboard

Install dependencies:

yarn install

Set up a .env file with your OpenWeather API key:

OPENWEATHER_API_KEY=your_api_key_here

Run the application:

yarn start

## 🔗 API Routes

GET * - Serves the index.html file

GET /api/weather/history - Returns all saved cities from searchHistory.json

POST /api/weather - Saves a city to searchHistory.json and returns its weather data

DELETE /api/weather/history/:id (Bonus) - Removes a city from the search history

## 📖 Usage

Open the application in your browser.

Enter a city name in the search input.

View current and forecasted weather data.

Click a saved city to re-fetch its weather information.

## 🎥 Demo

https://drive.google.com/file/d/1otaZz_1Sh39Uqulps6hOC8J2GXdIV5sF/view

## 🌍 Deployment

https://nimbus-the-weather-dashboard-2.onrender.com

## 🏗️ Technologies Used

Node.js

Express.js

OpenWeather API

JSON file storage for search history

Render for deployment

## 📜 License

This project is licensed under the MIT License.

## 📬 Contact

GitHub: Mahdi-196
Email: mahdighaleb196@gmail.com