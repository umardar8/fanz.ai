import React from "react";
import Layout from "../../layout/web-layout";
import HomeHeroBanner from "../../section/home-hero-banner";
import TrendCards from "../../components/cards/trend-cards";
import { HeroImage } from "../../assets";
import BaseColors from "../../constant";
import WeatherPanel from "../../components/weather-panel/weatherPanel";

export default function Home() {
  return (
    <Layout>
      <HomeHeroBanner />

      <div
        className="row mx-0 justify-content-end"
        style={{
          background: `linear-gradient(to right, #000000 14%, rgb(255, 255, 255, 0) 62%)`,
          marginTop: -101,
        }}
      >
        <div
          className="col-11 py-2 px-0"
          style={{ background: "rgb(0, 0, 0, 0.9)" }}
        >
          <div
            className="row m-0 justify-content-center p-0"
            style={{
              background: `linear-gradient(to bottom, rgb(20, 28, 41, 0.1) 25%, rgb(20, 28, 41)   62%)`,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <div className="col-9">
              <div className="text-2 text-white ps-5 py-3 ">
                Show You Must Watch
              </div>
              <TrendCards />
            </div>
          </div>
          <div className="row m-0 justify-content-center">
            <div className="col-9">
              <div className="text-2 text-white ps-5 py-3 ">
                Show You Must Watch
              </div>
              <TrendCards />
              <div className="text-2 text-white ps-5 py-3 ">
                Show You Must Watch
              </div>
              <TrendCards />
              <div className="text-2 text-white ps-5 py-3 ">
                Show You Must Watch
              </div>
              <TrendCards />
            </div>
          </div>
        </div>
      <div className="homeContent" style={{ display: 'flex', background: '#000' }}>
        <WeatherPanel />
        {/* <TrendCards /> */}
      </div>
    </Layout>
  );
}
