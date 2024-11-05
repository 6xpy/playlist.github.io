document.addEventListener('DOMContentLoaded', function () {
    fetch('fav.m3u')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const songs = [];

            lines.forEach(line => {
                if (line.startsWith('#EXTINF:')) {
                    const info = line.split(',')[1];
                    const [artist, title] = info.split(' - ');
                    songs.push({ title, artist });
                }
            });

            // Sort songs by artist name alphabetically
            songs.sort((a, b) => a.artist.localeCompare(b.artist));

            // Generate the HTML list
            const playlist = document.getElementById('playlist');
            let songList = '';
            songs.forEach(song => {
                songList += `<li>${song.title} by ${song.artist}</li>`;
            });
            playlist.innerHTML = songList;
        })
        .catch(error => console.error('Error fetching M3U:', error));
});
