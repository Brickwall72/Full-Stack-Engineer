import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

import { useState } from 'react';

import './styles/App.css'

function App(){
    const searchResults = [
        {id: 1, name: 'Song 1', artist: 'Artist 1'},
        {id: 2, name: 'Song 2', artist: 'Artist 2'},
        {id: 3, name: 'Song 3', artist: 'Artist 3'},
    ];

    const [playlist, setPlaylist] = useState([]);

    const handleAddSong = (song) => {
        if (song && !playlist.find(s => s.id === song.id)){
            setPlaylist([...playlist, song]);
        }
    };
    const handleRemoveSong = (song) => {
        setPlaylist(playlist => playlist.filter((s) => s.id !== song.id));
    }

    const [playlistName, setPlaylistName] = useState('');
    const handleNameChange = ({target}) => {
        setPlaylistName(target.value);
    };

    const handleSavePlaylist = (e) => {
        e.preventDefault();
        if(!playlistName.trim()){
            alert('Please enter a playlist name');
            return;
        }
        if(playlist.length === 0){
            alert('Please add at least one song to the playlist');
            return;
        }
        alert(`Saving playlist: ${playlistName}`);
    };

    return (
        <div>
            <Header />
            <main>
                <SearchBar />
                <div id="results-playlist">
                    <SearchResults 
                        id="search-results" 
                        results={searchResults} 
                        handleAdd={handleAddSong} 
                    />
                    <Playlist 
                        id="playlist" 
                        name={playlistName} 
                        handleNameChange={handleNameChange} 
                        playlist={playlist} handleRemove={handleRemoveSong} 
                        handleSave={handleSavePlaylist} 
                    />
                </div>
            </main>
        </div>
    );
}

export default App;