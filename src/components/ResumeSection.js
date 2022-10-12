import React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkIcon from '@mui/icons-material/Work';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

function ResumeSection(props) {
    const {img, title, date, bullets} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
      };

    return (
    <React.Fragment>
        <Grid item xs={12} sm={12} md={6} lg={4} sx={{textAlign: "center",
        marginTop: "4vh"}}>
            <Button onClick={handleClick}>
                <Box component="img" src={img} sx={{
                border: 2,
                borderColor: "grey.600",
                borderRadius: "15%",
                maxWidth: "100%"}} />
            </Button>
            <Box sx={{ position: "relative", zIndex: 1}}>
                <Popper open={open} anchorEl={anchorEl} placement="bottom" disablePortal transition>
                    {({ TransitionProps }) => (
                     <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{bgcolor: "grey.600",
                        color: "grey.50",
                        border: 2,
                        borderColor: "grey.900",
                        borderRadius: "8%"
                        }}>
                            <List>
                            {bullets.map((bullet) => (
                                <ListItem sx={{justifyContent: "center"}}>
                                <ListItemIcon sx={{color: "grey.50"}}>
                                    <StarBorderIcon />
                                </ListItemIcon>
                                {bullet}
                                </ListItem>
                            ))}
                            </List>
                        </Box>
                    </Fade>
                    )}
                </Popper>
            </Box>
            <Grid container spacing={0} direction="column">
                <Grid item xs={6}>
                    <WorkIcon fontSize="small" sx={{paddingTop: 0.75}}/>
                    <Typography variant="h7">{title}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <DateRangeIcon fontSize="small" sx={{paddingTop: 0.75}}/>
                    <Typography variant="h7">{date}</Typography>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
    );
}

export default ResumeSection;