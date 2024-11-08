const artists = [
    { name: "Brennan Jones", img: "images/brennan_jones.jpeg" },
    { name: "Playboi Carti", img: "images/playboi_carti.jpeg" },
    { name: "Destroy Lonely", img: "images/destroy_lonely.jpeg" },
    { name: "Ken Carson", img: "images/ken_carson.jpeg" },
    { name: "greatestredefined", img: "images/greatestredefined.jpeg" },
    { name: "ian", img: "images/ian.jpeg" },
    { name: "Hi-C", img: "images/hi-c.jpeg" },
    { name: "Lil Uzi Vert", img: "images/lil_uzi_vert.jpeg" },
    { name: "LUCKI", img: "images/lucki.jpeg" },
    { name: "OsamaSon", img: "images/osamason.jpeg" },
    { name: "Nettspend", img: "images/nettspend.jpeg" },
    { name: "Slash4L", img: "images/slash4l.jpeg" },
    { name: "Yeat", img: "images/yeat.jpeg" }
    // Add more artists as needed
];

const artistContainer = document.getElementById('artist-container');

artists.forEach((artist, index) => {
    const artistDiv = document.createElement('div');
    artistDiv.className = 'artist';
    const nameDiv = document.createElement('div');
    nameDiv.className = 'waviy';

    // Create span elements for each letter in the artist's name
    artist.name.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.style.setProperty('--i', i + 1);
        span.textContent = char;
        nameDiv.appendChild(span);
    });

    artistDiv.innerHTML = `<img src="${artist.img}" alt="${artist.name}">`;
    artistDiv.appendChild(nameDiv);
    artistDiv.onclick = () => window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
    artistContainer.appendChild(artistDiv);
});
