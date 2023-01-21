export const goToPopMovies =(navigate)=>{
    navigate("/")
};

export const goToDetailMovie =(navigate, movie_id)=>{
    navigate(`/detalhes/${movie_id}`)
};