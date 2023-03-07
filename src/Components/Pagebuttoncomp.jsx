import React from 'react';
import {FcNext,FcPrevious} from "react-icons/fc"
import styles from "../Stylesfolder/Pagebuttoncomp.module.css"
export const Pagebuttoncomp = ({ total,handlepage,currentpage }) => {
    const value = Array(Math.ceil(total / 10)).fill(1);
    console.log(currentpage,"currentpage")
    console.log(value.length,"value.length")
  return (
      <div className={styles.Button_main_comp}>
          <button disabled={currentpage<=1} onClick={()=>handlepage(currentpage-1)}><FcPrevious/></button>
          {
              value.map((el,index) => <button style={index+1==currentpage?{backgroundColor:"skyblue"}:{backgroundColor:"white"}} onClick={()=>handlepage(index+1)}>{ index+1}</button>)
          }
          <button disabled={currentpage==value.length} onClick={()=>handlepage(currentpage+1)}><FcNext/></button>
    </div>
  )
}
