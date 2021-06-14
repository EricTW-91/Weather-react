import React, { createContext, useState, useEffect } from 'react';
import {v1 as uuidv1} from 'uuid'; // Get random id. (npm install uuid)

export const Context = createContext();

export default function Provider(props) {
    const key = '1bfe440130f8c34a9a26a845a5c49429';
    const [unit, setUnit] = useState('metric');
    const [showCity, setShowCity] = useState('vancouver'); // From the header/input.
    const [cityList, setCityList] = useState([
        { city: 'vancouver', id: 1 }
    ]);
    // const [coords, setCoords] = useState({});
    const [weatherData, setWeatherData] = useState({})

    const fetchData = async (city) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
        const data = await response.json()
        setWeatherData(data);
    }

    useEffect(() => {
        // fetchData(showCity);

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${showCity}&appid=${key}`)
            .then(res => {
                res.json().then(data => {
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=${unit}&appid=${key}`)
                        .then(res => {
                            res.json().then(data => {
                                console.log('Context.jsx: ', data);
                                setWeatherData(data); // ???
                                localStorage.setItem('data', JSON.stringify(data))
                            })
                        })
                        
                        .catch(error => console.log('Error: ', error))
                })
             })
            
            .catch(error => console.log('Error: ', error))
        
    }, [showCity])

    const addCity = (city) => {
        console.log('Click addCity', showCity)
        console.log(cityList)
        if (!checkCity(city)) {
            setCityList([...cityList, { city, id: uuidv1() }]); // Shorthand of { city: city }.
        }
    }

    const removeCity = (city) => {
        if (checkCity(city)) {
            setCityList(cityList.filter((obj) => obj.city !== city));
        }
        console.log('Click removeCity', showCity)
        console.log(cityList)
    }

    const checkCity = (city) => {
        return cityList.some(obj=>obj.city === city)
    }

    return (
        <Context.Provider value={{
            // fetchData,
            showCity,
            setShowCity,
            cityList,
            addCity,
            removeCity,
            weatherData
        }}>
            {props.children}
        </Context.Provider>
    );
}

// export const Consumer = Context.Consumer;