import React from "react";
import BaseColors from "../../../constant";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const Tcards = (props) => {
  return (
    <div style={{ maxWidth: "13vw" }}>
      <img
        src={props.cardimg}
        alt=""
        style={{ height: "37vh", maxWidth: "12vw" }}
        className="rounded shadow-1 mb-2 "
      />
      <div className="text-2 text-white">{props.head}</div>
      <h6 style={{ color: BaseColors.textGrey }}>{props.year}</h6>
      <div className=" d-flex justify-content-between">
        <div className="d-flex">
          <FaStar size={12} color={BaseColors.yellow} />
          <h5 className="px-2 text-1" style={{ color: BaseColors.yellow }}>
            7.3
          </h5>
        </div>
        <div className="d-flex">
          <LuEye size={16} color={BaseColors.white} className="me-2" />
          <IoMdHeart size={16} color={BaseColors.danger} className="me-1" />
        </div>
      </div>
    </div>
  );
};

export default Tcards;
