import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  }

  return (
    <Box>
      <AppBar position="static" sx={ { boxShadow: 0, pr: 0 } }>
        <Toolbar sx={ { justifyContent: 'space-between', alignItems: 'center' } }>
          <Link to="/" style={ navbarBrandStyle }>
            <ForumIcon color="inherit" />
            <Typography variant="h1">
              Random Chat App
            </Typography>
          </Link>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={ logout }
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

const navbarBrandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: `${3*8}px`
}