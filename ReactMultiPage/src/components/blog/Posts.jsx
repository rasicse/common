import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/this-is-a-post-title">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src=""
                alt=""
              />
            </div>
            <div class="col-lg-5">
             
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
