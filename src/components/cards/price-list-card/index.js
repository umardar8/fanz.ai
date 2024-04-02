import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { mi } from "../../../assets";

export default function PriceListCard() {
  return (
    <>
      <div
        class="card pricingCard"
        style={{
          backgroundColor: "#282828",
          borderRadius: "15px",
          marginBottom: "15px",
          padding: "10px",
        }}
      >
        <div class="card-body" style={{ margin: "auto" }}>
          <div
            className="pricing-card"
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              width: "193px",
              height: "87px",
              background: "linear-gradient(to bottom, #5436A9, #000000)",
              marginBottom: "20px",
            }}
          >
            <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <p style={{ position: "relative", top: "6px" }}>Xiomi</p>
              <p>$134.6</p>
            </div>
            <FaCircleArrowRight
              style={{ color: "white", backgroundColor: "transparent" }}
            />
          </div>

          <div
            className="pricing-card"
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              width: "193px",
              height: "87px",
              background: "linear-gradient(to bottom, #5436A9, #000000)",
              marginBottom: "20px",
            }}
          >
            <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <p style={{ position: "relative", top: "6px" }}>Xiomi</p>
              <p>$134.6</p>
            </div>
            <FaCircleArrowRight
              style={{ color: "white", backgroundColor: "transparent" }}
            />
          </div>

          <div
            className="pricing-card"
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              width: "193px",
              height: "87px",
              background: "linear-gradient(to bottom, #5436A9, #000000)",
              marginBottom: "20px",
            }}
          >
            <img src={mi} alt="" style={{ width: "22px", height: "22px" }} />
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <p style={{ position: "relative", top: "6px" }}>Xiomi</p>
              <p>$134.6</p>
            </div>
            <FaCircleArrowRight
              style={{ color: "white", backgroundColor: "transparent" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
