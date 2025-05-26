
import React from "react";

function PageNotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center text-warning">
        <h1 className="mt-5"><i class="fa-solid fa-triangle-exclamation" id="DangerIcon"></i> 404 Not Found</h1>
        <p className="mb-5 pb-5">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default PageNotFound;
