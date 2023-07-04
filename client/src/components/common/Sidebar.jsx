import { Box, Drawer, IconButton, List, ListItemButton, Typography } from '@mui/material'
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import React from 'react'
import assets from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    //Getting user info with userSlice.
    const user = useSelector((state) => state.user.value);

    //Logout (just removing JWT token and redirect to login)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

  return (
    <Drawer 
        container={window.document.body}
        variant='permanent'
        open={true}
        sx={{width: 250, height: "100vh"}}
    >
        <List 
            sx={{
                width: 250, 
                height: "100vh", 
                backgroundColor: assets.colors.secondary,
            }}
        >
            <ListItemButton>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body2" fontWeight="700">
                        {user.username}
                    </Typography>
                    <IconButton onClick={logout}>
                        <LogoutOutlinedIcon />
                    </IconButton>
                </Box>
            </ListItemButton>
            <Box sx={{paddingTop: "10px"}}></Box>
            <ListItemButton>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body2" fontWeight="700">
                        Favorite
                    </Typography>
                </Box>
            </ListItemButton>
            <Box sx={{paddingTop: "10px"}}></Box>
            <ListItemButton>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body2" fontWeight="700">
                        Private
                    </Typography>
                    <IconButton>
                        <AddBoxOutlinedIcon fontSize="small" />
                    </IconButton>
                </Box>
            </ListItemButton>
            <ListItemButton
                sx={{ pl: "20px" }} 
                component={Link} 
                to="/memo/123123123"
            >
                <Typography>📝 temp memo</Typography>
            </ListItemButton>
            <ListItemButton
                sx={{ pl: "20px" }} 
                component={Link} 
                to="/memo/123123123"
            >
                <Typography>📝 temp memo</Typography>
            </ListItemButton>
            <ListItemButton
                sx={{ pl: "20px" }} 
                component={Link} 
                to="/memo/123123123"
            >
                <Typography>📝 temp memo</Typography>
            </ListItemButton>
        </List>
    </Drawer>
  );
};

export default Sidebar