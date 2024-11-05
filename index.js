const artists = [
    { name: "Brennan Jones", img: "images/brennan_jones.jpg" },
    { name: "Playboi Carti", img: "images/playboi_carti.jpg" },
    { name: "Destroy Lonely", img: "images/destroy_lonely.jpg" },
    { name: "Ken Carson", img: "images/ken_carson.jpg" },
    { name: "greatestredefined", img: "images/greatestredefined.jpg" },
    { name: "ian", img: "images/ian.jpg" },
    { name: "Hi-C", img: "images/hi-c.jpg" },
    { name: "Lil Uzi Vert", img: "images/lil_uzi_vert.jpg" },
    { name: "LUCKI", img: "images/lucki.jpg" },
    { name: "OsamaSon", img: "images/osamason.jpg" },
    { name: "Nettspend", img: "images/nettspend.jpg" },
    { name: "Slash4L", img: "images/slash4l.jpg" },
    { name: "Yeat", img: "images/yeat.jpg" }
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
