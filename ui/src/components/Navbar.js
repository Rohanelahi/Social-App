import { AppBar, Toolbar, Box, IconButton, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  borderBottom: '1px solid #dbdbdb',
  boxShadow: 'none',
});

const LogoText = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '24px',
  fontWeight: '500',
  color: '#000',
  '& svg': {
    fontSize: '28px',
  },
});

function Navbar() {
  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 6 } }}>
        <LogoText>
          <CameraAltOutlinedIcon />
          Visage
        </LogoText>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
