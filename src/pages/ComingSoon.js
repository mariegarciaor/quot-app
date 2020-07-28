import React from "react";
import "../styles/sass/main.css";

const ComingSoon = () => {
  return (
    <div class="container-fluid">
      <div class="coming-soon">
        <div class="description">
          <h1>Coming Soon</h1>
          <h5>Esta página estará disponible próximamente ;)</h5>
        </div>
        <figure>
          <img id="comingsoon-cover" src="https://ojalaleguste.files.wordpress.com/2016/10/img_0826.gif"></img>
        </figure>
      </div>
    </div>
  );
};

export default ComingSoon;
