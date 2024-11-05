const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get('name');
document.getElementById('artist-name').innerText = artistName;

const songs = {
    "Brennan Jones": [
        { title: "rip corbin", file: "songs/brennan_jones/rip_corbin.mp3" },
        { title: "spicy", file: "songs/brennan_jones/spicy.mp3" },
        { title: "sterling ruby skulls", file: "songs/brennan_jones/sterling_ruby_skulls.mp3" },
        { title: "pinkpussy", file: "songs/brennan_jones/pinkpussy.mp3" },
        { title: "keep quiet shhhh", file: "songs/brennan_jones/keep_quiet_shhhh.mp3" },
        { title: "jewelry", file: "songs/brennan_jones/jewelry.mp3" },
        { title: "gonmakit", file: "songs/brennan_jones/gonmakit.mp3" },
        { title: "freestyle", file: "songs/brennan_jones/freestyle.mp3" },
        { title: "duval", file: "songs/brennan_jones/duval.mp3" },
        { title: "dontevenrap", file: "songs/brennan_jones/dontevenrap.mp3" },
        { title: "dip", file: "songs/brennan_jones/dip.mp3" },
        { title: "crackrock", file: "songs/brennan_jones/crackrock.mp3" },
        { title: "cool cat", file: "songs/brennan_jones/cool_cat.mp3" },
        { title: "coming for me", file: "songs/brennan_jones/coming_for_me.mp3" },
        { title: "bill cosby", file: "songs/brennan_jones/bill_cosby.mp3" },
        { title: "believeinthekid", file: "songs/brennan_jones/believeinthekid.mp3" },
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
