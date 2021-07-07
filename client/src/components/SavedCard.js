import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActions, CardContent, Button, Typography, CardMedia} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 800,
        display: "flex",
        margin: 10,
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    content: {
        width: 400,
        flex: "1 0 auto",
    },
    cover: {
        width: 200,
        height: 300,
        margin: 10,
    },
});

function SavedCard({ deleteBook, _id, title, image, authors, description, link }) {
    const classes = useStyles();

    return (
        <Grid item key={_id}>
            <Card className={classes.root} variant="outlined">
                <CardMedia
                    
                    className={classes.cover}
                    image={image}
                    title={title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {authors === undefined ? "No listed authors." : authors.map((author, index) => {
                                    return <span key={index}> {author}{index < authors.length - 1 ? "," : ""}</span>;
                            })}
                        </Typography>
                            <Typography component="p" color="textSecondary">
                                {description}
                            </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" href={link}>
                            View
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => deleteBook(_id)}>
                            Delete
                        </Button>
                    </CardActions>
                </div>
            </Card>

            {/* <Card className={classes.root} variant="outlined">
                <Grid container direction="row">
                    <CardMedia
                        className={classes.cover}
                        image={image}
                        title={title}
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {authors === undefined ? "No listed authors." : authors.map((author, index) => {
                                        return <span key={index}> {author}{index < authors.length - 1 ? "," : ""}</span>;
                                })}
                            </Typography>
                            <Typography component="p" color="textSecondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" href={link}>
                                View
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteBook(_id)}>
                                Delete
                            </Button>
                        </CardActions>
                    </div>
                </Grid>
            </Card> */}



        </Grid>
    );
}

export default SavedCard;