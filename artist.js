const artistData = {
    "Brennan Jones": {
        img: "images/brennan_jones.jpg",
        icon: "images/brennan_jones.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
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
        img: "images/playboi_carti.jpg",
        icon: "images/playboi_carti.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            { title: "Mileage (feat. Chief Keef)", file: "songs/playboi_carti/mileage.mp3" },
            { title: "Home (KOD)", file: "songs/playboi_carti/home.mp3" },
            { title: "Old Money", file: "songs/playboi_carti/old_money.mp3" }
        ]
    },
    "Destroy Lonely": {
        img: "images/destroy_lonely.jpg",
        icon: "images/destroy_lonely.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Destroy Lonely
        ]
    },
    "Ken Carson": {
        img: "images/ken_carson.jpg",
        icon: "images/ken_carson.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Ken Carson
        ]
    },
    "greatestredefined": {
        img: "images/greatestredefined.jpg",
        icon: "images/greatestredefined.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for greatestredefined
        ]
    },
    "ian": {
        img: "images/ian.jpg",
        icon: "images/ian.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for ian
        ]
    },
    "Hi-C": {
        img: "images/hi-c.jpg",
        icon: "images/hi-c.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Hi-C
        ]
    },
    "Lil Uzi Vert": {
        img: "images/lil_uzi_vert.jpg",
        icon: "images/lil_uzi_vert.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Lil Uzi Vert
        ]
    },
    "LUCKI": {
        img: "images/lucki.jpg",
        icon: "images/lucki.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for LUCKI
        ]
    },
    "OsamaSon": {
        img: "images/osamason.jpg",
        icon: "images/osamason.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for OsamaSon
        ]
    },
    "Nettspend": {
        img: "images/nettspend.jpg",
        icon: "images/nettspend.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Nettspend
        ]
    },
    "Slash4L": {
        img: "images/slash4l.jpg",
        icon: "images/slash4l.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            // Add songs for Slash4L
        ]
    },
    "Yeat": {
        img: "images/yeat.jpg",
        icon: "images/yeat.jpg",
        title: "Album Title",
        genre: "Genre",
        year: "Year",
        description: "Album Description",
        songs: [
            { title: "Lët ya know", file: "songs/yeat/let_ya_know.mp3" },
            { title: "Dub", file: "songs/yeat/dub.mp3" }
        ]
    }
};

const artistInfo = artistData[artistName];
if (artistInfo) {
    document.getElementById('artist-image').src = artistInfo.img;
    document.querySelector('.album-details img').src = artistInfo.icon;
    document.getElementById('album-title').innerText = artistInfo.title;
    document.getElementById('album-description').innerText = artistInfo.description;

    const songList = document.getElementById('song-list');
    artistInfo.songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'song-container';
        songDiv.innerHTML = `
            <li>
                <span>${song.title}</span>
                <audio controls>
                    <source src="${song.file}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <a href="${song.file}" download>Download</a>
            </li>
        `;
        songList.appendChild(songDiv);
    });
} else {
    document.getElementById('song-list').innerHTML = `<p>No songs available for ${artistName}.</p>`;
}
