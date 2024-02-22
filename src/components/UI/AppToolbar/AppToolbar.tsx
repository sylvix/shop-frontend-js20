import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, styled, Toolbar, Typography } from '@mui/material';

const Link = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit'
  },
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            <Link to="/">CompStore</Link>
          </Typography>
          <Button component={NavLink} to="/register" color="inherit">Sign Up</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;