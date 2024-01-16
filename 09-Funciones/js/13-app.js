let cancion = {
    track: "",
    reproducir: (id) => console.log(`Reproduciendo la canción ${id} `),
    pausar: () => console.log(`Pausando la canción...`),
    creandoPlaylist: (nombrePlaylist) =>
        console.log(`Creando la Playlist ${nombrePlaylist}`),
    // set agrega valores
    set nuevoTrack(track) {
        this.track = track;
    },
    // get obtiene estos valores agregados
    get obtenerTrack() {
        console.log(`${this.track}`);
    },
};

// ! con set y get no se necesitan parentesis.
cancion.nuevoTrack = "nimda - mentis";
cancion.obtenerTrack;

// ! con las demas propiedades del objeto si necesitas un parentesis
cancion.pausar();
