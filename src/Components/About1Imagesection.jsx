import React from 'react';
import styles from "../Stylesfolder/About1Imagesection.module.css"
import image1 from "../../public/About1images/image_1.jpg"
import image2 from "../../public/About1images/image_2.jpg"
import image3 from "../../public/About1images/image_5.jpg"
const About1Imagesection = () => {
  return (
      <div className={styles.aboutimage_main_div}>
          <div className={styles.firstimage}>
              <img src={image1}></img>
          </div>
          <div className={styles.secondimage}>
              <img src={image2}></img>
          </div>
          <div className={styles.thirdimage}>
              <img src={image3}></img>
          </div>
    </div>
  )
}

export default About1Imagesection