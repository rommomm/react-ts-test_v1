import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-center">No items.</p>;
  }
  return (
    <div className="flex justify-center pt-10 mx-auto h-full w-full">
      <ul className="list-none">
        {favourites.map((f) => {
          return (
            <li key={f}>
              <a href={f} target="_blank">{f}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavouritesPage;
