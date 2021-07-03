import { Input, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: 10,
    },
});

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <form onSubmit={handleFormSubmit}>
                <Input fullWidth
                    placeholder="Search by Title, Author, Keywords, etc."
                    type="search"
                    style={{ margin: 8 }}
                    value={search}
                    onChange={handleInputChange}
                    inputProps={{ 'aria-label': 'book keywords' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >Search</Button>
            </form>
        </Container>
    );
}

export default SearchForm;
