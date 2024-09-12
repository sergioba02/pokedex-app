const Search = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => {
            console.error('Error:', error);
        });
        console.log(data)
}
Search()

export default Search