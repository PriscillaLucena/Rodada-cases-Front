import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../Components/Header";

export const DetailMovie = () => {
    const navigate = useNavigate();
    const { id } = useParams

    return (
        <div>
            < Header />
            <p>Detail Movies</p>
        </div>
    )
};