import { Input, Container, Button } from '@material-ui/core';

function SearchForm({ search, handleInputChange, handleFormSubmit }) {  
    return (
        <Container>
            <form>
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
                    onClick={handleFormSubmit}
                >Search</Button>
            </form>
        </Container>
    );
}

export default SearchForm;
