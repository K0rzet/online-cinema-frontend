import { FC } from "react"
import PopularMovies from "./PopularMovies"
import FavoriteMovies from "./FavoriteMovies/FavoriteMovies"

const MoviesContainer: FC = () => {
  return (
    <div className="">
      <PopularMovies />
      <FavoriteMovies />
    </div>
  )
}

export default MoviesContainer