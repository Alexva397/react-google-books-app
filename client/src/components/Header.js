import { AppBar, Typography, Button, Toolbar } from '@material-ui/core';


 function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h3" edge="start">
                Google Books Search
                </Typography>
                <Button color="inherit">Search</Button>
                <Button color="inherit">Saved</Button>
            </Toolbar>
        </AppBar>

    );
 }

 export default Header;