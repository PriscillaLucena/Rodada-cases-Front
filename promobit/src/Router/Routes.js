import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { DetailMovie } from "../Pages/DetailMovie";
import { PopMovies } from "../Pages/PopMovies";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Router  exact path={"/"} element={<PopMovies />} />
                <Router path={"/detalhes/:movie_id"} element={<DetailMovie />} />
            </Routes>
        </BrowserRouter>
    )
};