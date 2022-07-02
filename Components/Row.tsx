import React, { useRef, useState } from "react";
import { Movie } from "../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Thumbnail from "./Thumbnail";
type Props = {
  title: string;
  movies: Movie[];
};
const Row: React.FC<Props> = ({ title, movies }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [isMoved, setIsMoved] = useState(false);

  function handleClick(direction: string) {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const ScrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: ScrollTo, behavior: "smooth" });
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 ">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold
       text-[#e5e5e5]/95 transition
       transition-duration-200 hover:text-white md:text-2xl"
      >
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => handleClick("left")}
          className={`w-7 h-7 absolute top-0 bottom-0
         left-2 z-40 m-auto  cursor-pointer opacity-0
          transition hover:scale-125 group-hover:opacity-100  ${
            !isMoved && "hidden"
          }`}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-3.5 md:p-2"
        >
          {/*  Thumbnail*/}
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          onClick={() => handleClick("right")}
          className={`w-7 h-7 absolute top-0 bottom-0
         right-2 z-40 m-auto cursor-pointer opacity-0
          transition hover:scale-125 group-hover:opacity-100`}
        />
      </div>
    </div>
  );
};

export default Row;
