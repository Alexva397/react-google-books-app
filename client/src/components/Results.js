import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Button, Typography, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        display: 'flex',
        margin: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        margin: 10,
    },
});

function Results({ results, handleBookSave }) {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center">
            {results.length ? (
                <div>
                    {results.map((book, index) => {
                        return (
                            <Grid item key={book.id}>
                                <Card className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.cover}
                                        image={book.volumeInfo.imageLinks === undefined ? "https://via.placeholder.com/200" : book.volumeInfo.imageLinks.smallThumbnail}
                                        title={book.volumeInfo.title}
                                    />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5" variant="h5">
                                                {book.volumeInfo.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {book.volumeInfo.authors === undefined ? "No listed authors." : book.volumeInfo.authors.map((author, index) => {
                                                    return <span key={index}> {author}{index < book.volumeInfo.authors.length - 1 ? "," : ""}</span>;
                                                })}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" href={book.volumeInfo.infoLink}>
                                                View
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={() => handleBookSave(index)}>
                                                Save
                                            </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            </Grid>
                        );
                    })}
                </div>
            ) : (
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography component="h2" varient="h2" align="center" gutterBottom>
                            No Results
                        </Typography>
                        <Typography color="textSecondary" variant="body1" component="p">
                            Please try different search terms.
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Grid>
    );
}

export default Results;