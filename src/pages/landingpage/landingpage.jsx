import React, { useEffect, useState, useCallback } from "react";
import logo from "../../img/deezer.png";
import hits from "../../img/landingPageImage/hits.webp";
import hipHop from "../../img/landingPageImage/hipHop.webp";
import pop from "../../img/landingPageImage/pop.webp";
import spatialAudio from "../../img/landingPageImage/spatialAudio.webp";
import appleMusicLive from "../../img/landingPageImage/appleMusicLive.webp";
import country from "../../img/landingPageImage/country.webp";
import { FiPlayCircle } from "react-icons/fi";
import { IoIosRadio, IoIosBrowsers } from "react-icons/io";
import { getArtist } from "../../services/artistService";
import { useNavigate } from "react-router-dom";
import "./landingpage.scss";
import debounce from "../../util/debounce";

const LandingPage = () => {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleProceed = (id) => {
    navigate(`/artist/${id}`);
  };

  const debounceGetArtist = useCallback(
    debounce((query) => {
      getArtist(query ? query : "e").then((result) => {
        return setArtists(result);
      });
    }, 750),
    []
  );

  useEffect(() => {
    debounceGetArtist(query);
  }, [query,debounceGetArtist]);

  return (

      <div className="flex landingPage">
        <div className="w-1/5 p-8 sideBar">
          <div className="w-2/5">
            <img src={logo} alt="logo" />
          </div>
          <div className="mt-9">
            <div className="flex mt-20">
              <div className="mt-1 mr-3">
                <FiPlayCircle />
              </div>
              <p className="text-white">Listen Now</p>
            </div>
            <div className="flex mt-3">
              <div className="mt-1 mr-3">
                <IoIosBrowsers />
              </div>
              <p className="text-white">Browse</p>
            </div>
            <div className="flex mt-3">
              <div className="mt-1 mr-3">
                <IoIosRadio />
              </div>
              <p className="text-white">Radio</p>
            </div>
          </div>
        </div>
        <div className="w-4/5 p-8">
          <div>
            <input
              type="text"
              placeholder="Search here"
              onChange={handleChange}
              className="inputStyle"
            />
          </div>
          <div className="mt-10">
            <div className="flex justify-between flex-wrap w-full">
              {artists?.map((artist) => (
                <div key={artist.id}>
                  <div onClick={() => handleProceed(artist.id)} className="w-full">
                    <img src={artist.picture} alt="Artist" className="w-44"/>
                  </div>
                  <div>
                    <p>{artist.name}</p>
                    <p>{artist.nb_fan} Fans</p>
                    <p>{artist.nb_album} Album</p>
                  </div>
                </div>
              ))}
            </div>
            Browse Categories
            <div className="grid grid-cols-4 gap-4">
              <div>
                <img src={spatialAudio} alt="spatialAudio" />
                <h6>Spatial Audio</h6>
              </div>
              <div>
                <img src={appleMusicLive} alt="appleMusicLive" />
                <h6>Apple Music Live</h6>
              </div>
              <div>
                <img src={hipHop} alt="hipHop" />
                <h6>Hip-Hop</h6>
              </div>
              <div>
                <img src={country} alt="country" />
                <h6>Country</h6>
              </div>
              <div>
                <img src={hits} alt="hits" />
                <h6>Hits</h6>
              </div>
              <div>
                <img src={pop} alt="pop" />
                <h6>Pop</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default LandingPage;
