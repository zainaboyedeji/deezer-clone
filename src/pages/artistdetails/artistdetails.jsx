import React, { useEffect, useState } from "react";
import { getTopTrack, getArtistById } from "../../services/artistService";
import { Link, useParams } from "react-router-dom";
import deezerlogo from "../../img/deezer.png";
import "./artistdetails.scss";

const ArtistDetails = () => {
  const [tracks, setTracks] = useState();
  const [artist, setArtist] = useState();
  const { id } = useParams();

  useEffect(() => {
    getArtistById(id).then((result) => {
      return setArtist(result);
    });
    getTopTrack(id).then((result) => {
      return setTracks(result);
    });
  }, [id]);
  return (
    <div className="p-5 artistDetailsView">
      <Link to="/">
            <img src={deezerlogo} alt="DeezerLogo" />
          </Link>
      <div className="artistInput mt-10">
        <input type="text" placeholder="Search here" className="w-full" />
      </div>

      <div className="flex mt-5 artistDiv">
        <div className="w-9/12 border p-3 mainDiv">
          <h3>{artist?.name}</h3>
          <p>{artist?.nb_fan} fans</p>
        </div>

        <div className="w-3/12 border p-3 trackDiv">
          <h6>Top tracks</h6>
          {tracks?.map((track, index) => (
            <div key={track.id} className="flex justify-between mt-5">
              <p>{track.title}</p>
              <p>{track.duration}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full artistAlbum mt-10">
          <h3>Albums</h3>
          <div className="flex mt-5 albumDiv">
          {tracks?.map((album) => (
            <div key={album.id} className="w-2/4 mt-5">
             <div><img src={album.album.cover} alt="albumImage"/> </div>
              <p>{album.album.title}</p>
              <p>{album.album.release_date}</p>
            </div>
          ))}

          </div>
        </div>
    </div>
  );
};

export default ArtistDetails;
