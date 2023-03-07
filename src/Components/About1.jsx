import React from 'react'
import { RiArrowUpDownFill } from "react-icons/ri";
import {HiOutlineStar} from "react-icons/hi"
import styles from "../Stylesfolder/About1.module.css"
import Aboutcustomcomp from './Aboutcustomcomp'
import About1Imagesection from './About1Imagesection';
export const About1 = () => {
  return (
    <div className={styles.about_div}>
      <div className={styles.main_about_div}>
          <div className={styles.text_content_div}>
          <div className={styles.text_all_taginside}>
              <h3>
              Why Choose Finowiz for <b>Trades</b>?
              </h3>
              <p>Choose Finowiz for fast and easy account opening, a wide range of trading instruments, competitive spreads, advanced trading platforms, expert educational resources, and exceptional customer support.</p>
          </div>
          <Aboutcustomcomp icons={<RiArrowUpDownFill />} textbold={"Access Global Markets"} textcontent={"Diversify your portfolio and increase your exposure to the world's top financial markets." } />
          <Aboutcustomcomp icons={<HiOutlineStar />} textbold={"Pricing and Liquidity"} textcontent={"Our pricing engine aggregates live prices, in real-time, from our liquidity providers and calculates a mid-point."} />
          </div>
          <div className={styles.image_content_div}>
              <About1Imagesection/>
          </div>

    </div>
      </div>
  )
}
