
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

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

function Results({ results }) {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justify="center">
            {results.length ? (
                <div>
                    {results.map(book => {
                        return (
                            <Grid item key={book.id}>
                                <Card className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.cover}
                                        image={book.volumeInfo.imageLinks.smallThumbnail}
                                        title={book.volumeInfo.title}
                                    />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5" variant="h5">
                                                {book.volumeInfo.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {book.volumeInfo.authors}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" color="primary" href={book.volumeInfo.canonicalVolumeLink}>
                                                View
                                            </Button>
                                            <Button variant="contained" color="primary" href="#contained-buttons">
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