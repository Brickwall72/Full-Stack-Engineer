import '../styles/Song.css';

function Song({song, handler, type}) {
    const handleClick = (e) => {
        handler(song);
    };
    return (
        <div id={song.id} className="song">
            <div id="song-info">
                <h3>{song.name || 'Untitled'}</h3>
                <p>{song.artist || 'Unknown Artist'}</p>
            </div>
            <button type="button" className={type + '-button'} onClick={handleClick}>{type === 'add' ? '+' : '-'}</button>
        </div>
    );
}

export default Song;