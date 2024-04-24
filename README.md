# Weather App

This is a simple weather app that allows users to check the current weather conditions of any city. It provides users with the flexibility to either search for a specific city or let the app automatically fetch weather data based on their geolocation.

## Features

- **Search Functionality**: Users can enter the name of a city in the search bar to fetch its current weather data.

- **Geolocation**: The app utilizes the Geolocation API to automatically fetch weather data based on the user's geolocation city name if available. This feature enhances user experience by providing instant weather updates without requiring manual input.

- **Responsive Design**: The app is designed to work seamlessly across different devices, including desktops, tablets, and mobile phones. It adjusts its layout and styling to ensure optimal user experience on various screen sizes.

- **Random Weather Quotes**: In cases where the user's geolocation is unavailable or there is an error fetching the weather data, the app displays a random weather quote. This feature adds a touch of creativity and engagement to the user interface.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces. React provides a component-based architecture that simplifies the development of interactive web applications.

- **Axios**: Promise-based HTTP client for making API requests. Axios allows the app to communicate with external APIs, such as the OpenWeatherMap API, to fetch weather data.

- **OpenWeatherMap API**: External API used to fetch weather data for cities worldwide. The app utilizes the API's endpoints to retrieve real-time weather information based on user input or geolocation.

- **Geolocation API**: Web API provided by browsers to obtain the user's geographical location. The app leverages this API to fetch the user's geolocation coordinates and derive the city name for weather data retrieval.

- **CSS**: Cascading Style Sheets used for styling the user interface. CSS rules define the visual appearance and layout of elements, ensuring a cohesive and aesthetically pleasing design.

## Getting Started

1. **Clone the repository**: Begin by cloning the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   
2. **Install dependencies**: Navigate to the project directory and install the necessary dependencies by running:

cd weather-app
npm install


3. **Start the development server**: Launch the development server to run the app locally. Execute the following command:

npm start

4.**Open the app in your browser**: Once the development server is running, open your web browser and go to the following URL:

http://localhost:3000
