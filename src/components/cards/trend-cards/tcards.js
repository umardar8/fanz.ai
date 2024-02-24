import React from "react";
import BaseColors from "../../../constant";
import { FaStar } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuEye } from "react-icons/lu";

const Tcards = (props) => {
  return (
    <div className="">
      <img
        src={props.cardimg}
        alt=""
        style={{ height: "34vh", maxWidth: "11vw" }}
        className="rounded shadow-lg"
      />
      <div className="text-2 text-white">{props.head}</div>
      <p className="text-1 text-white">{props.year}</p>
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
