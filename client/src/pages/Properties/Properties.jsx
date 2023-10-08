import React from 'react'
import "./Properties.css"
import SearchBar from "../../components/SearchBar/SearchBar"

const Properties = () => {
  return (
    <div>
        <div className="wrapper">
            <div className="flexColCenter paddings innerWidth properties-container">
              <SearchBar />
            </div>
        </div>
    </div>
  )
}


export default Properties