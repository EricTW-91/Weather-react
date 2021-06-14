import React, { useState, useEffect, useContext } from 'react';
import './Forecast.scss';
import { Spinner } from 'react-bootstrap';
import { Context } from './Context';
import {Button, Card} from 'react-bootstrap'

export default function Forcast(props) {
    const { fetchData, showCity, addCity, removeCity, cityList, weatherData } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const data = JSON.parse(localStorage.getItem('data'))
    
    useEffect(() => {
        // fetchData('vancouver');
        console.log(data)
    }, [])

    return !weatherData ? (
        <Spinner/>
    ):(

        <main>
            <Card>
                {/* <Card.Img variant='top' src={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`}></Card.Img> */}
                <Card.Body>
                    <Card.Title size='lg' style={{textTransform: 'capitalize'}}>{showCity}</Card.Title>
                        <img src={`http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`}></img>
                        <Card.Subtitle>{ data.current.weather[0].description }</Card.Subtitle>
                    <Card.Text>
                        <ul>
                            <li>Temerature: {data.current.temp}&deg;C</li>
                            <li>Humidity: {data.current.humidity}%</li>
                            <li>Clouds: {data.current.clouds}</li>
                            <li>Pressmure: {data.current.pressure}hPa</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
                {cityList.some(obj => obj.city === showCity) ? (
                    <Button variant='warning' size='sm' onClick={() => removeCity(showCity)}>Remove</Button>
                    
                ): (
                    <Button variant='primary' size='sm' onClick={() => addCity(showCity)}>Add</Button>
                            
                )}
            </Card>
        </main>
    )
        
}
// http://openweathermap.org/img/w/10d.png