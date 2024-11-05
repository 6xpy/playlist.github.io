const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get('name');
document.getElementById('artist-name').innerText = artistName;

const songs = {
    "Brennan Jones": [
        { title: "rip corbin", file: "songs/brennan_jones/rip_corbin.mp3" }
    ],
    // Add other artists and their songs
};

const songList = document.getElementById('song-list');
if (songs[artistName]) {
    songs[artistName].forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song-container';
        songDiv.innerHTML = `
            <p>${song.title}</p>
            <audio controls>
                <source src="${song.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <a href="${song.file}" download>Download</a>
        `;
        songList.appendChild(songDiv);
    });
} else {
    songList.innerHTML = `<p>No songs available for ${artistName}.</p>`;
}
