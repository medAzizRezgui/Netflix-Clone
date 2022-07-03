import Image from "next/image";
import type { Movie } from "../typings";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { baseUrl } from "../consts/movies";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState, movieState } from "../atoms/modalAtoms";

type Props = {
  netflixOriginals: Movie[];
};
const Banner: React.FC<Props> = ({ netflixOriginals }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );

    console.log(movie);
  }, [netflixOriginals]);

  return (
    <div
      className={
        "flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12"
      }
    >
      <div className={"absolute top-0 left-0 h-[95vh] -z-10 w-full"}>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className={"text-2xl lg:text-5xl md:text-4xl font-bold"}>
        {movie?.title}
      </h1>
      <p
        className={
          "max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl"
        }
      >
        {movie?.overview}
      </p>
      <div className={"flex space-x-2.5"}>
        <button className={"bannerButton bg-white text-black "}>
          <FaPlay className={"h-4 w-4 text-black md:h-6 md:w-6 "} /> Play
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setCurrentMovie(movie);
          }}
          className={"bannerButton bg-[gray]"}
        >
          More Info
          <InformationCircleIcon className={"h-4 w-4 md:h-7 md:w-7"} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
