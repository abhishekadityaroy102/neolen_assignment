import React, { useState} from 'react'
import ContractSinglerow from './ContractSinglerow'
import Contracttable from './Contracttable'
import Contracttablehead from './Contracttablehead'
import { Pagebuttoncomp } from './Pagebuttoncomp'
import styles from "../Stylesfolder/Contract.module.css"
const Contract = () => {
    const newarray = Array(37).fill(1);
    const [showdata, setshowdata] = useState(newarray.slice(0, 10))
    const [currentpage,setcurrentpage]=useState(1)
    const handlepage = (i) => {
        let newvalue = newarray.slice((i-1) * 10, (i ) * 10)
        setcurrentpage(i)
        setshowdata(newvalue)
    }
  return (
      <div className={styles.main_div}>
          <div className={styles.contract_text_content_div}>
          <h5>Live View</h5>
          <h3>Contract Specifications</h3>
          <p>From forex to energies, Finowiz offers you the potential to enhance and diversify your trading possibilities.</p>
         </div>
          <Contracttable showdata={showdata} />
          <Pagebuttoncomp total={newarray.length} handlepage={ handlepage} currentpage={currentpage} />
          
    </div>
  )
}

export default Contract