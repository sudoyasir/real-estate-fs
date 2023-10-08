import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    <div className="wrapper">
      <div className="flexCenter paddings">
        <span>Error while fetching the property details</span>
      </div>
    </div>;
  }
  return (
    <div className="wrapper">
      <div className="flexCenter paddings innerWidth property-container">
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Property;
