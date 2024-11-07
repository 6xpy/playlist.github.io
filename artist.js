const urlParams = new URLSearchParams(window.location.search);
const artistName = urlParams.get('name');
document.getElementById('artist-name').innerText = artistName;

const songs = {
    "Brennan Jones": {
        cover: "images/brennan_jones_cover.jpg",
        tracks: [
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
            { title: "believeinthekid", file: "songs/brennan_jones/believeinthekid.mp3" }
        ]
    },
    "Playboi Carti": {
        cover: "images/playboi_carti_cover.jpg",
        tracks: [
            { title: "Mileage (feat. Chief Keef)", file: "songs/playboi_carti/mileage.mp3" },
            { title: "Home (KOD)", file: "songs/playboi_carti/home.mp3" },
            { title: "Old Money", file: "songs/playboi_carti/old_money.mp3" }
        ]
    },
    "Destroy Lonely": {
        cover: "images/destroy_lonely_cover.jpg",
        tracks: [
            // Add songs for Destroy Lonely
        ]
    },
    "Ken Carson": {
        cover: "images/ken_carson_cover.jpg",
        tracks: [
            // Add songs for Ken Carson
        ]
    },
    "greatestredefined": {
        cover: "images/greatestredefined_cover.jpg",
        tracks: [
            // Add songs for greatestredefined
        ]
    },
    "ian": {
        cover: "images/ian_cover.jpg",
        tracks: [
            // Add songs for ian
        ]
    },
    "Hi-C": {
        cover: "images/hi_c_cover.jpg",
        tracks: [
            // Add songs for Hi-C
        ]
    },
    "Lil Uzi Vert": {
        cover: "images/lil_uzi_vert_cover.jpg",
        tracks: [
            // Add songs for Lil Uzi Vert
        ]
    },
    "LUCKI": {
        cover: "images/lucki_cover.jpg",
        tracks: [
            // Add songs for LUCKI
        ]
    },
    "OsamaSon": {
        cover: "images/osamason_cover.jpg",
        tracks: [
            // Add songs for OsamaSon
        ]
    },
    "Nettspend": {
        cover: "images/nettspend_cover.jpg",
        tracks: [
            // Add songs for Nettspend
        ]
    },
    "Slash4L": {
        cover: "images/slash4l_cover.jpg",
        tracks: [
            // Add songs for Slash4L
        ]
    },
    "Yeat": {
        cover: "images/yeat_cover.jpg",
        tracks: [
            { title: "Lët ya know", file: "songs/yeat/let_ya_know.mp3" },
            { title: "Dub", file: "songs/yeat/dub.mp3" }
        ]
    }
};

// Set the album cover image source
if (songs[artistName]) {
    document.getElementById('artist-image').src = songs[artistName].cover;

    // Populate song list
    const songList = document.getElementById('song-list');
    songs[artistName].tracks.forEach((song, index) => {
        const songDiv = document.createElement('li');
        songDiv.className = 'song-container';
        songDiv.innerHTML = `
            <div class="play-pause-icon play-icon" onclick="togglePlayPause(${index})" data-index="${index}" data-file="${song.file}"></div>
            <span>${index + 1}. ${song.title}</span>
            <audio id="audio-${index}" src="${song.file}"></audio>
            <a href="${song.file}" download>
                <img src="images/download-icon.png" alt="Download" class="download-icon">
            </a>
        `;
        songList.appendChild(songDiv);
    });
} else {
    document.getElementById('song-list').innerHTML = `<p>No songs available for ${artistName}.</p>`;
}

// Add event listeners for play/pause functionality
let currentAudio = null;

function togglePlayPause(index) {
    const audio = document.getElementById(`audio-${index}`);
    const playPauseIcon = document.querySelector(`.play-pause-icon[data-index="${index}"]`);

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        const currentIcon = document.querySelector(`.play-pause-icon[data-index="${currentAudio.dataset.index}"]`);
        if (currentIcon) {
            currentIcon.classList.remove('pause-icon');
            currentIcon.classList.add('play-icon');
        }
    }

    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('play-icon');
        playPauseIcon.classList.add('pause-icon');
        currentAudio = audio;
    } else {
        audio.pause();
        playPauseIcon.classList.remove('pause-icon');
        playPauseIcon.classList.add('play-icon');
        currentAudio = null;
    }
}
