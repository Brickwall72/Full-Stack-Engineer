import Song from './Song';

import '../styles/SearchResults.css';

function SearchResults({results, handleAdd}){
    return(
        <div id="search-results">
            <h2>Results</h2>
            <ul>
                {results.map((song) => (
                    <li><Song key={song} song={song} handler={handleAdd} type="add" /></li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;