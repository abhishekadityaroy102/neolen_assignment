import React from 'react'
import ContractSinglerow from './ContractSinglerow'
import Contracttablehead from './Contracttablehead'
import styles from "../Stylesfolder/Contracttable.module.css"
const Contracttable = ({showdata}) => {
    const newarray = Array(30).fill(1);
    
  return (
      <div >
          <table className={styles.main_table}>
              <tr>
              <Contracttablehead />
              </tr>
              {
                  showdata.map((el)=><tr><ContractSinglerow/></tr>)
              }
         </table>
    </div>
  )
}

export default Contracttable