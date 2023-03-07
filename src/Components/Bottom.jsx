import React from 'react'
import Bottomvideo from './Bottomvideo'
import Bottomwithoutvideo from './Bottomwithoutvideo'
import styles from "../Stylesfolder/Bottom.module.css"
const Bottom = () => {
  return (
      <div className={styles.Bottom_main_div}>
          <div>
              <Bottomwithoutvideo/>
          </div>
          <div>
              <Bottomvideo/>
          </div>
    </div>
  )
}

export default Bottom