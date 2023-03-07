import React from 'react'
import styles from "../Stylesfolder/CustomKeyfeatures.module.css"
const CustomKeyfeatures = ({ el,float,imagefloat,textalign }) => {
    console.log(el.imageoflogo)
  return (
      <div className={styles.main_container} >
          <div className={styles.text_content_box}style={{textAlign:textalign,order:float}} >
        <strong>{el.title}</strong>
        <br/>
          <b>{el.content_bold}</b>
          <p>{el.content}</p>
         </div>
          <div className={styles.image_content_box} style={{order:imagefloat}}>
              <img src={el.imageoflogo} ></img>
          </div>
    </div>
  )
}

export default CustomKeyfeatures