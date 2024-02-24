import useSWR from 'swr';
import { useState } from 'react';
import '../../../App.css';

const WeatherCard = ({ weather, time }) => {

    return (
        <div className='weatherCard'>
            <div className='temperature' style={{ paddingRight: 10, paddingTop: 20 }}>
                <img src={weather.current.condition.icon} alt='weather icon' style={{ height: 35, width: 35 }} />
                <p style={{ display: 'flex', justifyContent: 'center', fontSize: 10, fontWeight: 400 }}>{weather.current.temp_f} °F</p>
            </div>
            <p style={{ fontSize: 16, fontWeight: 600, paddingRight: 60, paddingTop: 10 }}>{weather.location.name}</p>
            <div className='dateTime' style={{ paddingTop: 20 }}>
                <p style={{ fontSize: 22, fontWeight: 600, textAlign: 'left' }}>{time}</p>
                <p style={{ fontSize: 10, fontWeight: 400, textAlign: 'right', marginTop: -20 }}>Saturday, 24 Feb</p>
            </div>
        </div>
    );
};

export default WeatherCard;