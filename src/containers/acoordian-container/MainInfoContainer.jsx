// AccordianContainer.jsx
import { useState } from "react";
import styles from "./GeneralInfo.module.css";
import FamilyMembersInOrganization from "../../components/accordians/FamilyMembersIn Organization";
// import PreviousMedicalRecordAccordian from "../../components/accordians/FamilyMembersIn Organization";
import generalInformationIcon from "../../asserts/general_information_icon.svg";
import bottomdecoration from "../../asserts/bottomdecoration.svg"
import ReferenceDetails from "../../components/accordians/Referencedetails";
import FamilyDetails from "../../components/accordians/FamilyDetails";
import PresentAddress from "../../components/accordians/PresentAddress";
import PermanentAddress from "../../components/accordians/PermanentAddress";

const MainInfo = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.accordian_container}>
      

      <div className={styles.accordians}>
        <PresentAddress
          expanded={expanded === "presentAddress"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "presentAddress" : null)}
        />
        <PermanentAddress
          expanded={expanded === "permanentAddress"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "permanentAddress" : null)}
        />
      </div>
   
    </div>
  );
};

export default MainInfo;