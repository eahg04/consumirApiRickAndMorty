import axios from "axios";

// Función para obtener todos los personajes
const todosPersonajes = async (state) => {
    try {
        const peticion = await axios.get('https://rickandmortyapi.com/api/character');
        state(peticion.data.results); // Actualiza el estado con los resultados
    } catch (error) {
        console.error('Error fetching all characters:', error);
    }
}

// Función para obtener un único personaje por ID
const unicoPersonaje = async (id, state) => {
    try {
        const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        state(peticion.data); // Actualiza el estado con el personaje único
    } catch (error) {
        console.error('Error fetching character by ID:', error);
    }
}

export {
    todosPersonajes,
    unicoPersonaje
}
