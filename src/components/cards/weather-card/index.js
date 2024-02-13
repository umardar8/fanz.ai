import useSWR from 'swr';
import { useState } from 'react';
import '../../../App.css';

const WeatherCard = () => {

    // location of user for use in API call.
    // const [location, setLocation] = useState({});
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // get current location of visitor.
    navigator.geolocation.getCurrentPosition(success, err)

    function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log("latitude: " + latitude + " longitude: " + longitude);
    }

    function err() {
        console.log("Unable to retrieve your location");
    }

    // Method and Variables for API call to get weather.
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const api = {
        base: 'http://api.weatherapi.com/v1/current.json',
        key: '3aa4bf838d804c0cb33120407240902'
    }

    // Making API call and saving weather data.
    const {
        data: weather,
        error,
        isValidating,
    } = useSWR(`${api.base}?key=${api.key}&q=${latitude},${longitude}&aqi=no`, fetcher);

    // Handles error and loading state
    if (error) return <div className='failed'>failed to load</div>;
    if (isValidating) return <div className="Loading">Loading...</div>;

    // splitting date and time from fetched data.
    const [date, time] = weather.location.localtime.split(" ");

    // convert API returned time-data into desired format.
    function convert24to12(time24) {
        var [h, m] = time24.split(":");
        var H = h > 12 ? h - 12 : h;
        if (H === 0) { H = 12 }
        var ampm = h > 11 ? " pm" : " am";
        var converted = H + ":" + m + ampm;
        return converted;
    };

    return (
        <div className='weatherCard'>
            <div className='temperature' style={{ paddingRight: 10, paddingTop: 20 }}>
                <img src={weather.current.condition.icon} alt='weather icon' style={{ height: 35, width: 35 }} />
                <p style={{ display: 'flex', justifyContent: 'center', fontSize: 10, fontWeight: 400 }}>{weather.current.temp_f} °F</p>
            </div>
            <p style={{ fontSize: 16, fontWeight: 600, paddingRight: 60, paddingTop: 10 }}>{weather.location.name}</p>
            <div className='dateTime' style={{ paddingTop: 20 }}>
                <p style={{ fontSize: 22, fontWeight: 600, textAlign: 'left' }}>{convert24to12(time)}</p>
                <p style={{ fontSize: 10, fontWeight: 400, textAlign: 'right', marginTop: -20 }}>Friday, 26 Nov</p>
            </div>
        </div>
    );
};

export default WeatherCard;