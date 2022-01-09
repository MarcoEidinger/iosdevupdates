import React from "react";

const ListPaging = ({ previousPage, nextPage }) => {
  return (
    <div class="btn-group flex justify-center pb-4">
      <button class="btn btn-outline btn-wide" onClick={previousPage}>
        Previous Page
      </button>
      <button class="btn btn-outline btn-wide" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};

export default ListPaging;
