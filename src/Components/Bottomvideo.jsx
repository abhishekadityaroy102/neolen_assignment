import React,{useState,useRef} from 'react';
import styles from "../Stylesfolder/Bottomvideo.module.css"
import {BsPlayCircleFill} from "react-icons/bs"
import {TbPlayerPauseFilled} from "react-icons/tb"
import videosrc from "../../public/videoofbottom.mp4"
const Bottomvideo = () => {
  const [isplaying, setisplaying] = useState(false);
 
  const videoref = useRef(null)
  const toogleplay = () => {
    if (isplaying) {
      videoref.current.pause()
    }
    else {
      videoref.current.play()
    }
    setisplaying(!isplaying)
  }
  return (
    <div className={styles.main_div}>
      <video width="100%" height="100%" controls ref={videoref}>
              <source src={videosrc} type="video/mp4"></source>
        </video>
      <div onClick={toogleplay} className={styles.play_pause_button}>
        {
          isplaying?<TbPlayerPauseFilled/>:<BsPlayCircleFill/>
        }

      
          
        </div>
    </div>
  )
}

export default Bottomvideo