import React, { useState, useEffect } from "react";
import SavedCard from "../components/SavedCard";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        display: "flex",
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
                    {saved.map((book) => {
                        return (
                            <SavedCard key={book._id} 
                            deleteBook={deleteBook}
                            _id={book._id}
                            title={book.title}
                            image={book.image}
                            authors={book.authors}
                            description={book.description}
                            link={book.link}
                            />
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
