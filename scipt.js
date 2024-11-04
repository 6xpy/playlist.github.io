document.addEventListener('DOMContentLoaded', function () {
    fetch('fav.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const tracks = xml.querySelector('dict > dict > dict');
            const playlist = document.getElementById('playlist');

            let songList = '';
            tracks.querySelectorAll('dict').forEach(track => {
                const title = track.querySelector('key:contains(Name) + string')?.textContent;
                const artist = track.querySelector('key:contains(Artist) + string')?.textContent;

                if (title && artist) {
                    songList += `<li>${title} by ${artist}</li>`;
                }
            });
            playlist.innerHTML = songList;
        })
        .catch(error => console.error('Error fetching XML:', error));
});
