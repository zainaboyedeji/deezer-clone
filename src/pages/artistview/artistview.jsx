import React, { useEffect, useState } from "react";
import { getArtist } from "../../services/artistService";
import avatar from "../../img/avatar.png";
import Data from "../../../src/mock-data.json";

const ArtistView = () => {
  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   getArtist("eminem").then((result) => {
  //     return setArtist(result);
  //   });
  // });

  return (
    <div>
      <div>
        <h1 className="underline">Search</h1>
        <img src={avatar} alt="avatar" />
      </div>
      <input type="text" placeholder="Search here" onChange={handleChange} />
      {/* {artist?.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.author}</p>
        </div>
      ))} */}

      {/* {Data.filter((post) => {
        if (query === "") {
          return post;
        } else if (post.email.toLowerCase().includes(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className="box" key={index}>
          <p>{post.email}</p>
          <p>{post.gender}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ArtistView;
