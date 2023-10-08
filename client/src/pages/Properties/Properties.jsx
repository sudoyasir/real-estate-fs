import React from 'react'
import "./Properties.css"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useProperties } from '../../components/hooks/useProperties'

const Properties = () => {
  const {data, isError, isLoading} = useProperties()
  console.log(data);
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