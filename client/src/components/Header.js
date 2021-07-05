import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

 function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" edge="start">
                Google Books Search
                </Typography>
                <Button component={Link} to="/" color="inherit">Search</Button>
                <Button component={Link} to="/saved" color="inherit">Saved</Button>
            </Toolbar>
        </AppBar>

    );
 }

 export default Header;