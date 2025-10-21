import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./PermanentAddress.module.css"; // Using the CSS module

const PermanentAddress = ({ expanded, onChange, addressData = {}, emergencyContact = {} }) => {
  const {
    name = "Suresh Raina",
    address = "Infinity Towers, Plot No 2-91/31, near N Convention Road",
    pin = "500081",
    city = "Hyderabad",
    state = "Telangana",
    country = "India",
  } = addressData;

  const {
    contactName = "Kondreddi Vamsi Ramana",
    relationship = "Father",
  } = emergencyContact;

  return (
    <div className={styles.present_container}>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        className={styles.accordionRoot}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="present-content"
          id="present-header"
          className={styles.accordionSummary} // This class is now controlled by the logic in the CSS
        >
          <Typography component="span">
            <Box className={styles.headerBox}>
              <RemoveCircleOutlineIcon className={styles.headerIcon} />
              <Typography variant="h6" className={styles.headerTitle}>
                Permanent Address
              </Typography>
            </Box>
          </Typography>
        </AccordionSummary>

        <AccordionDetails id="present-content">
          <Typography component="div" className={styles.detailsContainer}>
            {/* --- Row 1: Name and Address --- */}
            <div className={styles.infoRow}>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Name
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{name}</Typography>
              </div>
              <div className={styles.infoItem} style={{ flexBasis: "66.66%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Address
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{address}</Typography>
              </div>
            </div>

            {/* --- Row 2: Pin, City, State --- */}
            <div className={styles.infoRow}>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Pin
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{pin}</Typography>
              </div>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  City
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{city}</Typography>
              </div>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  State
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{state}</Typography>
              </div>
            </div>

            {/* --- Row 3: Country, Emergency Contact, Relationship --- */}
            <div className={styles.infoRow}>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Country
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{country}</Typography>
              </div>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Emergency Contact Number:
                </Typography>
                <Box className={styles.contactContainer}>
                  <Typography variant="body1" className={styles.fieldValue}>
                    {contactName}
                  </Typography>
                  <Tooltip title="Call Emergency Contact" arrow>
                    <IconButton className={styles.phoneIcon} size="small">
                      <PhoneIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </div>
              <div className={styles.infoItem} style={{ flexBasis: "33.33%" }}>
                <Typography variant="subtitle2" className={styles.fieldLabel}>
                  Relationship:
                </Typography>
                <Typography variant="body1" className={styles.fieldValue}>{relationship}</Typography>
              </div>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PermanentAddress;