import React from "react";
import styles from "./EmployeeDetailsCard.module.css";
// import busIcon from "../../asserts/bus_icon.svg";
import callIcon from "../../asserts/call_icon.svg";
import mailIcon from "../../asserts/mail_icon.svg";

// import rightDividerIcon from "../../asserts/right_divider_icon.svg";
// import leftDividerIcon from "../../asserts/left_divider_icon.svg";
const EmployeeDetailsCard = ({
  name,
  emp_id,
  leftDividerIcon,
  rightDividerIcon,
  profileIcon,
  titleLable,
  role = "Driver", // default value if not provided
}) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.driver_box}>
        <div className={styles.left_section}>
          <figure className={styles.bus_icon}>
            <img src={profileIcon} alt="Bus" />
          </figure>
          <div>
            <p className={styles.driver_details}>{titleLable}</p>
            <p className={styles.driver_name}>{name}</p>
            <p className={styles.driver_details}>{emp_id}</p>
          </div>
        </div>

        <div className={styles.right_section}>
          <figure>
            <img src={callIcon} alt="Call" />
          </figure>
          <figure>
            <img src={mailIcon} alt="Mail" />
          </figure>
        </div>
      </div>

      <div className={styles.blue_divider}>
        <figure>
          <img src={leftDividerIcon} alt="Left Divider" />
        </figure>
        <p className={styles.divider_text}>{role}</p>
        <figure>
          <img src={rightDividerIcon} alt="Right Divider" />
        </figure>
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;
