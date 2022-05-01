import React from 'react';
import {useLocation} from "react-router-dom";

export default function MoviePage() {

  const search = useLocation().search;
  const moviename = new URLSearchParams(search).get('moviename');
  const moviepath = new URLSearchParams(search).get('moviepath');
    const urlstream = 'http://0.0.0.0:80/videos/api/v1/streamvideo?video='+moviepath
    console.log(urlstream)
  return (
    <div>
      <h1>MoviePage page</h1>
      <p>{moviename}</p>
      <p>{moviepath}</p>
      <video controls muted autoPlay crossOrigin="anonymous">
        <source src={urlstream} type="video/mp4"></source>
        {/* <track label="English" kind="captions" srcLang="en" src={moviepath} default></track> */}
    </video>
    </div>
  );
}