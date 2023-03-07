import React from 'react'
import styles from "../Stylesfolder/Aboutcustomcomp.module.css"
const Aboutcustomcomp = ({icons,textbold,textcontent}) => {
  return (
      <div className={styles.aboutcustom_main_div}>
          <div>{icons}</div>
          <h3>{ textbold}</h3>
          <h5>{ textcontent}</h5>
    </div>
  )
}

export default Aboutcustomcomp