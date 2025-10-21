import React from "react";
import FamilyAddressInfoHeader from './FamilyAddressInfoHeader';
import MainInfo from '../../containers/acoordian-container/MainInfoContainer';

import styles from './FamilyAddressInfoFormLeft.module.css'
const FamilyAddressInfoFormRight=()=>{

    return (
        <div className={styles.whole_medical_container}>
          <FamilyAddressInfoHeader/>
        <MainInfo />
          {/* <MedicalRecordDetails/> */}
        </div>
      )
}
export default FamilyAddressInfoFormRight;