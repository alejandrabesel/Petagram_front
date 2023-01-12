import React from "react";
import { Link } from "react-router-dom";

const PetInfo = ({ profilePicture, petName, gender }) => {
  return (
    <div className="flex h-24 items-center rounded-t-xl bg-white p-4">
      <div className="h-[60px] w-[60px] rounded-full ring-4 ring-primary_600">
        <img
          className="h-[60px] w-[60px] rounded-full border-4 border-white object-cover"
          src={profilePicture}
          alt=""
        />
      </div>
      <div className="pl-4 text-left">
        <Link>
          <h4 className="font-subtitle text-xl font-bold text-neutral_800">
            {petName}
          </h4>
        </Link>
        <p className="font-body ">{gender}</p>
      </div>
    </div>
  );
};

export default PetInfo;
