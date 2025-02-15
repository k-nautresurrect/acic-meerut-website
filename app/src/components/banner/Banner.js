import React from "react";
import { Button, Fab, Alert, Stack ,AlertTitle} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';


import acicMiet from "../../assets/acicMiet.png";
import "./banner.css";
import { useLinkClickHandler } from "react-router-dom";

const Banner = (props) => {

  const clicked = () => {
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>


    window.location.href = "/apply";



  }
  return (
    <div
      className="Banner"
      style={{
        display: "flex",
        width: "100vw",
        height: "70vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="Logo"
        src={acicMiet}
        alt="acicLogo"
        style={{ width: "22rem" }}
      />
      <div className="incubation-wrapper">
        <h1 className="incubation">INCUBATION CENTRE MIET MEERUT</h1>
      </div>
      <div>
        <Fab
          className="apply"
          color="primary"
          variant="extended"
          size="large"
          style={{ fontWeight: 600 }}
          id='btnapp'
          aria-label="add"

          onClick={() => { clicked() }}

        >
          <LinkIcon sx={{ mr: 1 }} />
          <p>Apply Now</p>

        </Fab>
      </div>
    </div>
  );
};

export default Banner;
