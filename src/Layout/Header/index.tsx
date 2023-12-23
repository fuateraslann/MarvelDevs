import { AppBar, Toolbar, Grid, useTheme } from '@mui/material'
import Logo from 'assets/Marvel_Logo.png'
const Header = () => {
  const theme = useTheme()
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={4} sm={4}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </Grid>
          <Grid item xs={5} sm={5} sx={{ textAlign: 'center', color: 'black' }}>
            <h1 style={{ color: theme.palette.primary.main }}>Marvel Devs </h1>
          </Grid>
          <Grid item xs={3} sm={3}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
