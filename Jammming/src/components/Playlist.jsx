import Song from './Song';

import '../styles/Playlist.css';

function Playlist(props){
    const {name, handleNameChange, playlist, handleRemove, handleSave} = props;
    return(
        <form id="playlist" onSubmit={handleSave}>
            <div>
                <input 
                    id="playlist-name" 
                    type="text" 
                    placeholder='Playlist' 
                    value={name} 
                    onChange={handleNameChange}
                />
                <ul>
                    {playlist.map((song) => (
                        <li><Song key={song} song={song} handler={handleRemove} type="subtract" /></li>
                    ))}
                </ul>
            </div>
            <button id="save-playlist" type="submit">SAVE TO SPOTIFY</button>
        </form>
    )
}

export default Playlist;