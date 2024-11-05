document.addEventListener('DOMContentLoaded', function () {
    fetch('fav.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const tracksDict = xml.querySelectorAll('dict > dict > dict > dict');
            const playlist = document.getElementById('playlist');

            let songList = '';
            tracksDict.forEach(track => {
                const keys = track.getElementsByTagName('key');
                let title, artist;

                for (let i = 0; i < keys.length; i++) {
                    if (keys[i].textContent === 'Name') {
                        title = keys[i].nextElementSibling.textContent;
                    }
                    if (keys[i].textContent === 'Artist') {
                        artist = keys[i].nextElementSibling.textContent;
                    }
                }

                if (title && artist) {
                    songList += `<li>${title} by ${artist}</li>`;
                }
            });
            playlist.innerHTML = songList;
        })
        .catch(error => console.error('Error fetching XML:', error));
});
