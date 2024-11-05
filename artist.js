const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get('name');
document.getElementById('artist-name').innerText = artistName;

const songs = {
    "Brennan Jones": [
        { title: "rip corbin", file: "songs/brennan_jones/rip_corbin.mp4" }

    ],
    "Playboi Carti": [
        { title: "Mileage (feat. Chief Keef)", file: "songs/playboi_carti/mileage.mp3" },
        { title: "Home (KOD)", file: "songs/playboi_carti/home.mp3" },
        { title: "Old Money", file: "songs/playboi_carti/old_money.mp3" }
    ],
    "Destroy Lonely": [
        // Add songs for Destroy Lonely
    ],
    "Ken Carson": [
        // Add songs for Ken Carson
    ],
    "greatestredefined": [
        // Add songs for greatestredefined
    ],
    "ian": [
        // Add songs for ian
    ],
    "Hi-C": [
        // Add songs for Hi-C
    ],
    "Lil Uzi Vert": [
        // Add songs for Lil Uzi Vert
    ],
    "LUCKI": [
        // Add songs for LUCKI
    ],
    "OsamaSon": [
        // Add songs for OsamaSon
    ],
    "Nettspend": [
        // Add songs for Nettspend
    ],
    "Slash4L": [
        // Add songs for Slash4L
    ],
    "Yeat": [
        { title: "Lët ya know", file: "songs/yeat/let_ya_know.mp3" },
        { title: "Dub", file: "songs/yeat/dub.mp3" }
    ]
    // Add more songs per artist as needed
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
