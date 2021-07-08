import axios from 'axios';
import React, { useState } from 'react'
import styled from "styled-components";
import City from './components/City';
import Weather from './components/Weather';

const API_KEY = "a0d210a51321ec28478ec57821fdafd0"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    box-shadow:0 3px 6px 0 #555 ;
    padding: 20px 10px;
    border-radius: 4px;
    width: 380px;
    background: white;
    font-family: Montserrat;
`;

// const CityComponent = styled.div`
//     display: flex;
//     flex-direction: column;

// `;
// const WeatherComponent = styled.div`
//     display: flex;
//     flex-direction: column;

// `;

const AppLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

const App = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        
        setWeather(response.data);
    };


    return (
        <Container>
            <AppLabel>React Weather App</AppLabel>
            {city && weather?<Weather weather={weather} city={city}/>:<City setCity = {setCity} fetchWeather={fetchWeather} />}
            {/* <Weather/> */}
        </Container>
    );
}

export default App;