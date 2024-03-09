import React, { useState } from "react";
import Layout from "../../layout/web-layout";
import HomeHeroBanner from "../../section/home-hero-banner";
import PrimaryButton from "../../components/button";
import { FaAngleDown } from "react-icons/fa6";
import WeatherPanel from "../../components/weather-panel/weatherPanel";
import InputField from "../../components/input-field";
import BaseColors from "../../constant";
import PrimaryModal from "../../components/modal";
import PrimaryCarousel from "../../components/carousel";
import { HeroImage } from "../../assets";
import PriceListCard from "../../components/cards/price-list-card";
import { GrUp } from "react-icons/gr";
import AdsCard from "../../components/cards/ads-card";

const cardData = [
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
];

export default function Home() {
  return (
    <Layout>
      <HomeHeroBanner />
      <div className="position-relative d-flex row m-0 p-0">
        {/* row 1 */}
        <div
          className="row position-absolute m-0 p-0 justify-content-between"
          style={{ top: -85, height: "100%" }}
        >
          <div
            className="col-4  d-flex flex-column justify-content-between"
            style={{ height: "100%" }}
          >
            <WeatherPanel />
            <AdsCard />
          </div>
          <div className="col-2 ">
            <GrUp
              size={30}
              style={{
                // opacity: isSliderHovered ? "0.8" : "0",
                color: BaseColors.white,
                transition: "opacity 0.3s ease",
              }}
            />
            <PriceListCard />
          </div>
        </div>
        {/* row 2 */}
        <div
          className="row mx-0 justify-content-end p-0 "
          style={{
            background: `linear-gradient(to right, #000000 14%, rgb(255, 255, 255, 0) 62%)`,
            marginTop: -101,
          }}
        >
          <div
            className="col-10 py-2 px-4 "
            style={{ background: "rgb(0, 0, 0, 0.9)" }}
          >
            <div
              className="row m-0 justify-content-start p-0 px-5"
              style={{
                background: `linear-gradient(to bottom, rgb(20, 28, 41, 0.1) 25%, rgb(20, 28, 41)   62%)`,
                TopLeftRadius: 50,
                BottomLeftRadius: 50,
              }}
            >
              <div className="col-10">
                <PrimaryCarousel
                  title="Shows You Must Watch"
                  autoplay={true}
                  autoplaySpeed={3000}
                  cardData={cardData}
                />
              </div>
            </div>
            <div className="row m-0 justify-content-start p-0 px-5">
              <div className="col-10">
                <PrimaryCarousel
                  title="Recommended For You"
                  cardData={cardData}
                />
                <PrimaryCarousel title="Top Tech Trend" cardData={cardData} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2 mb-4">
          <PrimaryButton
            label="Show More"
            rightIcon={<FaAngleDown />}
            fontSize="1.3rem"
            marginRight="5px"
            padding="20px 60px"
          />
        </div>
        <div
          className="row text-center mx-0"
          style={{
            maxHeight: "5vh",
            color: `rgb(255, 219, 43, 0.8)`,
          }}
        >
          <h5>
            Breaking New's! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h5>
        </div>
      </div>
    </Layout>
  );
}
