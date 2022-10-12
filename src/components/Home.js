import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography';

import Tetons from '../assets/grandtetons.jpg'
import Tommy from '../assets/tommy.jpg'

import Header from "./Header.js"
import Resume from "./Resume.js"
import Education from "./Education.js"

const sections = {
    home: {link: "/"},
    contact: {link: "mailto:thrgreenwald@gmail.com"},
    linkedin: {link: "https://www.linkedin.com/in/t-greenwald/"},
    github: {link: "https://github.com/tommygreenwald"}
}

function Home() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Header title="Not Tom Greenwald" sections={sections} />
                <Container sx={{textAlign: "center", position: "relative"}}>
                    <Box component="img" src={Tetons} sx={{
                        maxWidth: "100%", 
                        height: "auto",
                        opacity: "0.7"}} />
                    <Box component="img" src={Tommy} sx={{
                        border: "0.2vw solid",
                        color: "grey.600",
                        borderRadius: "50%",
                        maxWidth: "20%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                        }}/>
                </Container>
                <Resume />
                <Education />
            </Container>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default Home;