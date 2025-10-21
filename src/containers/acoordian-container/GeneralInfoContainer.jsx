// AccordianContainer.jsx
import { useState } from "react";
import styles from "./GeneralInfo.module.css";
import FamilyMembersInOrganization from "../../components/accordians/FamilyMembersIn Organization";
// import PreviousMedicalRecordAccordian from "../../components/accordians/FamilyMembersIn Organization";
import generalInformationIcon from "../../asserts/general_information_icon.svg";
import bottomdecoration from "../../asserts/bottomdecoration.svg"
import ReferenceDetails from "../../components/accordians/Referencedetails";
import FamilyDetails from "../../components/accordians/FamilyDetails";

const GeneralInfoContainer = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className={styles.accordian_container}>
      <figure>
        <img src={generalInformationIcon} alt="Accordion header" />
        <p className={styles.accordian_header_text}>General Information</p>
      </figure>

      <div className={styles.accordians}>
        <FamilyMembersInOrganization
          expanded={expanded === "lastvisited"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "lastvisited" : null)}
        />
        <ReferenceDetails
          expanded={expanded === "previousrecord"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "previousrecord" : null)}
        />
        <FamilyDetails
          expanded={expanded === "familyDetails"}
          onChange={(e, isOpen) => setExpanded(isOpen ? "familyDetails" : null)}
        />
      </div>
      <figure className={styles.bottom_decoration}>
        <img src={bottomdecoration} alt="Bottom Decoration" />
      </figure>
    </div>
  );
};

export default GeneralInfoContainer;