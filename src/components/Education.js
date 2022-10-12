import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import FlagIcon from '@mui/icons-material/SportsScore';

import NEU from "../assets/northeastern.png"

const courses = ["Artificial Intelligence",
"Software Development",
"Machine Learning/Data Mining",
"Programming Languages",
"Algorithms and Data Structures",
"Networks and Distributed Systems",
"Theory of Computation",
"Linear Algebra",
"Probability and Statistics"]

function Education() {
  return (
    <Grid container 
    spacing={0} 
    direction="row" 
    justifyContent="center"
    alignItems="center"
    sx = {{
      border: 1,
      borderColor: "grey.600",
      borderRadius: "10%",
      boxShadow: 12,
      paddingBottom: "4vh",
      marginTop: "2vh"
    }}
    >
        <Grid item xs={12} md={4} sx={{textAlign: "center",
        marginTop: "4vh"}}>
            <Box component="img" src={NEU} sx={{
                maxWidth: "100%"}} />
        </Grid>
        <Grid item xs={12} md={8} sx={{textAlign: "left",
        marginTop: "4vh"}}>
            <Grid container spacing={0} 
            direction="row"
            alignItems="center"
            sx={{justifyContent: {xs: "center", md: "flex-start"},
            marginLeft: {xs: 5, md: 0}}}>
                <Grid item xs={1}>
                    <SchoolIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5" fontWeight="bold">Northeastern University</Typography>
                </Grid>
                <Grid item xs={1}>
                    <LocationOnIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5">Boston, MA</Typography>
                </Grid>
                <Grid item xs={1}>
                    <ComputerIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h5" fontStyle="italic">Khoury College of Computer Science</Typography>
                </Grid>
                <Grid item xs={1} sx={{marginTop: 1.5, marginBottom: 1.5}}>
                    <MenuBookIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={11} sx={{marginTop: 1.5, marginBottom: 1.5}}>
                    <Typography variant="h5" sx={{ width: {xs:"85%", md: "95%"}}}>
                        <Box fontWeight="bold" display="inline">
                        Courses: </Box>
                        {courses.map((course, idx) => {
                        if (idx != courses.length - 1)
                            return (course + ", ")
                        else return (course)
                    })}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <TrophyIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h5"> 
                        <Box fontWeight="bold" display="inline">
                        Honors: </Box>
                        Dean's Scholar, Dean's List
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <FlagIcon fontSize="large" sx={{paddingTop: 0.75}}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="h5"> 
                        <Box fontWeight="bold" display="inline">
                        GPA: </Box>
                        3.6/4.0
                    </Typography></Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Education;