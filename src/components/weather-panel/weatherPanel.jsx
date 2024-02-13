import WeatherCard from '../cards/weather-card';
import '../../App.css';

const WeatherPanel = () => {
    return (
        <div className='weatherPanel'>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
        </div>
    );
};

export default WeatherPanel;