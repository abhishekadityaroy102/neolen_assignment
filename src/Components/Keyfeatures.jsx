import React from 'react'
import dataarray from "../Keyfeaturesdata/data.json"
import CustomKeyfeatures from './CustomKeyfeatures'
const Keyfeatures = ({ }) => {
    // console.log(data)
    
  return (
      <div>
          {
        dataarray.data.map((el, index) => index % 2 == 0 ? <CustomKeyfeatures el={el} float="1" imagefloat="2" textalign="start"/> : <CustomKeyfeatures el={ el} float="2" imagefloat="1" textalign="end"/>)
          }
    </div>
  )
}

export default Keyfeatures