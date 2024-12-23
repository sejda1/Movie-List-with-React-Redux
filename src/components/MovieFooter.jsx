import React from "react";

const MovieFooter = (props) => {
  const { totalMovies } = props;

  return (
    <div className="bg-dark-blue text-xs p-4 shadow rounded-md dark:bg-night-sky dark:text-light-gray">
      <b className="text-gold">{totalMovies}</b> film gösteriliyor
    </div>
  );
};

export default MovieFooter;