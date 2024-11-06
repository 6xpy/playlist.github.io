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
artists.forEach(artist => {
    const artistDiv = document.createElement('div');
    artistDiv.className = 'artist';
    artistDiv.innerHTML = `<img src="${artist.img}" alt="${artist.name}"><p>${artist.name}</p>`;
    artistDiv.onclick = () => window.location.href = `artist.html?name=${encodeURIComponent(artist.name)}`;
    artistContainer.appendChild(artistDiv);
});
