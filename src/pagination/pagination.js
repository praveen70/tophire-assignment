import React from "react";
import "./pagination.css";
import Pagination from '@material-ui/lab/Pagination';

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      
      <div className="pagination">
      <a href="#">&laquo;</a>
        {pageNumbers.map((number, index) => {
          return (
            <span key={index}>
              <a onClick={() => paginate(number)} className="page-link" >
                {number}
              </a>
              
            </span>
          );
        })}
        <a href="#">&raquo;</a>
      </div>
    </React.Fragment>
  );
};

export default Paginations;