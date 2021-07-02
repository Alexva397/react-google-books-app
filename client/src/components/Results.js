import { Grid, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
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
        <Grid container>
            {results.length ? (
            <div>
                {results.map(book => {
                    return (
                        <Grid item key={book.id}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.cover}
                                    image={book.volumeInfo.imageLinks.smallThumbnail}
                                    title="Live from space album cover"
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
                                </div>
                            </Card>
                        </Grid>
                    );
                })}
            </div>
            ) : (
                <h3>No results</h3>
            )}
        </Grid>
    );
}

export default Results;