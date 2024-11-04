document.addEventListener('DOMContentLoaded', function () {
    fetch('playlist.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const songs = xml.getElementsByTagName('song');
            const playlist = document.getElementById('playlist');

            let songList = '';
            for (let i = 0; i < songs.length; i++) {
                const title = songs[i].getElementsByTagName('title')[0].textContent;
                const artist = songs[i].getElementsByTagName('artist')[0].textContent;
                songList += `<li>${title} by ${artist}</li>`;
            }
            playlist.innerHTML = songList;
        })
        .catch(error => console.error('Error fetching XML:', error));
});
