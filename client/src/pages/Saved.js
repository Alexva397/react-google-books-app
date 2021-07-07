import React, { useState, useEffect } from "react";
import API from "../utils/API";
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


function Saved() {
    const classes = useStyles();
    const [saved, setSaved] = useState([]);


    useEffect(() => {
        loadSaved();
    }, [])

    const loadSaved = () => {
        API.generateSaved()
            .then(res => setSaved(res.data))
            .catch(err => console.log(err));
    }

    const deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => loadSaved())
            .catch(err => console.log(err));
    }

    return (
        <Grid container alignItems="center" justify="center">
            {saved.length ? (
                <div>
                    {saved.map((book, index) => {
                        return (
                            <Grid item key={book._id}>
                                <Card className={classes.root} variant="outlined">
                                    <CardMedia
                                        className={classes.cover}
                                        image={book.image}
                                        title={book.title}
                                    />
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography component="h5" variant="h5">
                                                {book.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {book.authors === undefined ? "No listed authors." : book.authors.map((author, index) => {
                                                        return <span key={index}> {author}{index < book.authors.length - 1 ? "," : ""}</span>;
                                                })}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" color="primary" href={book.link}>
                                                View
                                            </Button>
                                            <Button variant="contained" color="secondary" onClick={() => deleteBook(book._id)}>
                                                Delete
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
                            No saved Books
                        </Typography>
                        <Typography color="textSecondary" variant="body1" component="p">
                            Start searching to add to your saved books.
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Grid>
    );
}

export default Saved;
