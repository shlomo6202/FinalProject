import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import React, { useContext,useEffect } from 'react';
import {
  StyledAppBar,
  LogoTypography,
  StyledTab,
  StyledTabs,
} from "./navbar.styled";

import {buttonContext} from "../App"


export default function NavBarComponent({ tabs }) {
  const locationName = useLocation().pathname.substring(1);

  const {visible,setVisible}= useContext(buttonContext);

  useEffect(() => {
    if(visible){
      setVisible(true);
    }
    else{setVisible(false);}

  }, [visible]);
 
  const handleClick = () => {
    localStorage.setItem("connectEmail", JSON.stringify(""));
    
    setVisible(false);

    setTimeout(function() {
     window.location.href = "/home";
   }, 0.5); // 0.5 seconds 

  };

  return (
    
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <LogoTypography>
            <img
              src="./chart-646.svg"
              style={{ color: "white", height: 20 }}
              alt="logo"
            ></img>
            &nbsp;EXPENSES
          </LogoTypography>

          <StyledTabs
            TabIndicatorProps={{
              style: { background: "white" },
            }}
            value={locationName}
          >
            {tabs.map((tab) => (    
              <StyledTab
                value={tab}
                label={tab}
                key={tab}
                href={"/" + tab}
              ></StyledTab>
            ))}
          </StyledTabs>

          
          {visible && (
          <Button variant="outlined" color="error" onClick={handleClick}>disconnect</Button>
          )}
          

        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
