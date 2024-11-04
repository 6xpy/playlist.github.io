document.addEventListener('DOMContentLoaded', function () {
    fetch('playlist.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const songs = xml.getElementsByTagName('song');
            const playlist = document.getElementById('playlist');
            
            for (let i = 0; i < songs.length; i++) {
                const title = songs[i].getElementsByTagName('title')[0].textContent;
                const artist = songs[i].getElementsByTagName('artist')[0].textContent;

                const li = document.createElement('li');
                li.textContent = `${title} by ${artist}`;
                playlist.appendChild(li);
            }
        })
        .catch(error => console.error('Error fetching XML:', error));
});
