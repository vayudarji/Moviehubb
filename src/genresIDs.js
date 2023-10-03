const genresIDs = selectedGenres => {
    if(selectedGenres.length < 1) return "";
    const genreId = selectedGenres?.map(genre => genre?.id);
    return genreId?.reduce((acc,crr)=> acc + "," + crr);
};

export default genresIDs