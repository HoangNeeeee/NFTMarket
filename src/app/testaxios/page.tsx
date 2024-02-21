"use client"
import { useState, useEffect } from "react"
import axios from "axios"

const testAxios = () => {
    const [movies, setMovies] = useState([])

    // Using Fetch
    const fetchMovies = () => {
        fetch("https://dummyapi.online/api/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error:", error))
    }

    // Using Axios
    const fetchMoviesWithAxios = () => {
        axios
            .get("https://dummyapi.online/api/movies")
            .then((response) => setMovies(response.data))
            .catch((error) => console.error("Error:", error))
    }

    useEffect(() => {
        fetchMovies() // or fetchMoviesWithAxios();
    }, [])

    useEffect(() => {
        fetchMoviesWithAxios() // or fetchMoviesWithAxios();
    }, [])
    return (
        <>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.movie}</li>
                ))}
            </ul>
            <TestAntdesign />
        </>
    )
}

export default testAxios
