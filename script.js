document.addEventListener('DOMContentLoaded', function () {
    fetch('fav.m3u')
        .then(response => response.text())
        .then(data => {
            const playlist = document.getElementById('playlist');
            const lines = data.split('\n');
            
            let songList = '';
            lines.forEach(line => {
                if (line.startsWith('#EXTINF:')) {
                    const info = line.split(',')[1];
                    const [artist, title] = info.split(' - ');
                    songList += `<li>${title} by ${artist}</li>`;
                }
            });
            playlist.innerHTML = songList;
        })
        .catch(error => console.error('Error fetching M3U:', error));
});
