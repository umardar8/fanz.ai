import React from "react";
import Layout from "../../layout/web-layout";
import HomeHeroBanner from "../../section/home-hero-banner";
import TrendCards from "../../components/cards/trend-cards";
import WeatherPanel from "../../components/weather-panel/weatherPanel";

export default function Home() {
  return (
    <Layout>
      <HomeHeroBanner />
      <div className="homeContent" style={{ display: 'flex', background: '#000' }}>
        <WeatherPanel />
        {/* <TrendCards /> */}
      </div>
    </Layout>
  );
}
