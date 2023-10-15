import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import "./Property.css";

import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";

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

        <img src={data?.image} alt="" />

        <div className="flexCenter property-details">
          {/* Left Side */}
          <div className="flexColStart left">
            {/* Head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                {data?.price}
              </span>
            </div>

            {/* Facalities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                {/* Bathrooms */}
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/* Parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} Parkings</span>
              </div>
              {/* Rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Rooms</span>
              </div>
            </div>

            {/* Description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* Address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>

            {/* Booking Buttons */}

            <button className="button">Book your visit</button>
          </div>

          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
