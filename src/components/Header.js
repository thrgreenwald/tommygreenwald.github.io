import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header(props) {
    const {title, sections} = props;
    const pages = ["LinkedIn", "Github"]

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{background: "#757575"}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                    variant="h5"
                    component="a"
                    color="inherit"
                    align="center"
                    href="/"
                    noWrap
                    sx={{ display: {xs: "none", md: "flex"}, mr: 2, textDecoration: "none" }}
                    >
                    {title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}> 
                                <Button href={sections.linkedin.link} target="_blank">
                                    <Typography textAlign="center" color="grey.600">LinkedIn</Typography>
                                </Button>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}> 
                                <Button href={sections.github.link} target="_blank">
                                    <Typography textAlign="center" color="grey.600">GitHub</Typography>
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                    variant="h5"
                    component="a"
                    color="inherit"
                    align="center"
                    href="/"
                    noWrap
                    sx={{ flexGrow: 1, display: {xs: "flex", md: "none"},
                    ml: 6, textDecoration: "none"}}
                    >
                    {title}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                                href={sections.linkedin.link}
                                target="_blank"
                                sx={{ color: 'white', display: 'block' }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                                href={sections.github.link}
                                target="_blank"
                                sx={{ color: 'white', display: 'block' }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                    
                    <Box sx={{ flexGrow: 0 }}>
                        <Button href={sections.contact.link} size="medium" 
                        startIcon={<ContactMailIcon />} sx={{p: 0, color: "white"}}>
                        Email Me
                        </Button>
                    </Box>

{/* 
                    <Button component={Link} to={sections.home.link} size="medium" 
                    startIcon={<HomeIcon />} sx={{color: "black", maxWidth: "100%"}}>
                        Home
                    </Button>
                    <IconButton href={sections.linkedin.link} target="_blank" size="medium">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href={sections.github.link} target="_blank" size="medium">
                        <GitHubIcon />
                    </IconButton> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;