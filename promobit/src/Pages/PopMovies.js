import { Header } from "../Components/Header";
import useRequestData from "../Hooks/useRequestData";
import {BASE_URL} from "../Components/urlBase"
import { useNavigate } from "react-router-dom";

export const PopMovies = () => {
    const navigate = useNavigate();

    const [movies, loading, erro] = useRequestData(`${BASE_URL}/movie/popular`)

    console.log("movies", movies)

    return (
        <div>
            < Header/>
            <p>Pop Movies</p>
        </div>
    )
};