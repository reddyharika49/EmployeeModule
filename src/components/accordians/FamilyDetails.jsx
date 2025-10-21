import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FamilyDetails.module.css";
import accordionheadericon from "../../asserts/accordionheadericon.svg";
import EmployeeDetailsCard from "../../widgets/DetailsCard/EmployeeDetailsCard";
import rightDividerIcon from "../../asserts/right_divider_icon.svg";
import leftDividerIcon from "../../asserts/left_divider_icon.svg";
import profileIcon from "../../asserts/profile.svg";

const FamilyDetails = ({ expanded, onChange }) => {
  return (
    <div className={styles.family_container}>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        sx={{
          "& .MuiAccordionDetails-root ": { padding: "0px 16px 16px" },
          "&&": {
            "--Paper-shadow": "none",
            boxShadow: "none",
            borderRadius: "10px",
            border: "1px solid #E6E4F0",
            background: "rgba(255, 255, 255, 0.40)",
            backdropFilter: "blur(9.1px)",
          },
          "&::before": { display: "none" },
          "& .MuiButtonBase-root": {
            alignItems: "start",
            padding: "15px 18px 0px 18px",
          },
          "&.Mui-expanded": {
            borderRadius: "10px",
            border: "1px solid #B4BCFF",
            background: "rgba(255, 255, 255, 0.30)",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)",
            backdropFilter: "blur(9.1px)",
            margin: "0px",
          },
          "& .MuiButtonBase-root": {
            minHeight: "50px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="driver-content"
          id="driver-content"
          sx={{
            "& .MuiAccordionSummary-content": { margin: "0px !important" },
            "&.Mui-expanded .MuiAccordionSummary-content": {
              margin: "0px !important",
            },
          }}
        >
          <Typography component="span">
            <figure className={styles.header_figure}>
              <img src={accordionheadericon} alt="accordion icon" />
              <p className={styles.header_text}>
                Family Details
              </p>
              {!expanded && (
                <Chip
                  label="+2 members"
                  size="small"
                  sx={{
                    marginLeft: 1,
                    backgroundColor: "#B4BCFF",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    height: "20px",
                    "& .MuiChip-label": {
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    },
                  }}
                />
              )}
            </figure>
          </Typography>
        </AccordionSummary>

        <AccordionDetails id="driver-content">
          <Typography component="div">
            <div className={styles.driver_cards}>
              <EmployeeDetailsCard
                name="Vamsi"
                emp_id="HYD OUT 123456"
                leftDividerIcon={leftDividerIcon}
                rightDividerIcon={rightDividerIcon}
                profileIcon={profileIcon}
                titleLable={"Referred By"}
                role="Testing Engineer"
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FamilyDetails;