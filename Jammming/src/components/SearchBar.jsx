import { useState } from 'react';

import '../styles/SearchBar.css';

function SearchBar(){

    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = ({target}) => {
        setSearchTerm(target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(searchTerm);
    }

    return (
        <form className="SearchBar" onSubmit={handleSubmit}>
            <input 
                placeholder="Enter A Song, Album, or Artist" 
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit" className="SearchButton">SEARCH</button>
        </form>
    );
}

export default SearchBar;