import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const search = useSelector((state) => state.searchReducer);
  // console.log(typeof(search))
  // console.log(typeof(films[1].episode_id))

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/?format=json');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to extract the release year from the release_date
  const getReleaseYear = (dateString) => {
    return new Date(dateString).getFullYear();
  };
// Filter films based on search criteria
const filteredFilms = films.filter((film) => {
  if (search.toLowerCase().startsWith('episode')) {
    const searchTerm = parseInt(search.toLowerCase().replace('episode', '').trim());
    return film.episode_id === searchTerm;
  } else if (!isNaN(parseInt(search)) && parseInt(search) >= 1977) {
    return getReleaseYear(film.release_date) === parseInt(search);
  } else {
    return film.title.toLowerCase().includes(search.toLowerCase());
  }
});


  return (
    <div className='flex h-[100vh]'>
      <div className='w-[50%]'>
        <div className='flex flex-col bg-white p-3'>
          {filteredFilms.map((film) => (
            <div
              className="flex justify-between gap-3 border p-3 cursor-pointer"
              key={film.url}
              onClick={() => handleMovieClick(film)}
            >
              <div className='text-gray-400'>EPISODE {film.episode_id}</div>
              <div className='flex justify-start flex-1'>
                <div className='text-gray-600 font-semibold'>
                  {film.title}
                </div>
              </div>
              <div className=''>{film.release_date}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='border-l-2 output w-[50%]'>
        <div className='p-3'>
          {selectedMovie ? (
            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl font-semibold'>{selectedMovie.title}</h3>
              <h5 className='text-lg'>{selectedMovie.opening_crawl}</h5>
              <h6 className='text-lg'>Directed By: {selectedMovie.director}</h6>
            </div>
          ) : (
            <div>
              <h1 className='text-2xl font-semibold flex justify-center items-center'>No movie selected</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmList;
