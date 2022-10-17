import React from "react";
import { useEffect, useState } from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPages,
  currentPage,
  changeCurrentPage,
  nextBtn,
  previousBtn,
}) => {
  const [firstThreeArray, setFirstThreeArray] = useState([1]);
  const [lastThreeArray, setLastThreeArray] = useState([]);
  const [showEllipis, setShowEllipis] = useState(true);

  useEffect(() => {
    let lArray = [];
    let fArray = [];

    if (totalPages <= 6) {
      for (var i = 1; i <= totalPages; i++) {
        fArray.push(i);
      }
      setFirstThreeArray(fArray);
    } else {
        for (var i = totalPages-2; i <= totalPages; i++) {
            lArray.push(i)
          }
          setLastThreeArray([...lArray])
      if (currentPage < 3) {
        setFirstThreeArray([1, 2, 3]);      
      } else if(currentPage < totalPages - 3) { // exclude the last three array
        let index = 1;
        for (let j = currentPage-1; j <=currentPage+3; j++) {
          fArray.push(j);
          if (index === 3) {
            break;
          }
          index++;
        }
         setFirstThreeArray([...fArray]);
      }else if(currentPage > totalPages - 3) { // when the last three array is clicked
        for (let j = totalPages-5; j <= totalPages-3; j++) {
            fArray.push(j);
          }
        setFirstThreeArray([...fArray]);
      }
    }
    if (
        fArray[2] === totalPages - 3 || currentPage+1 >= totalPages-2
      ) {
        setShowEllipis(false);
      } else {
        setShowEllipis(true);
      }
  }, [currentPage]);

  const showEllipsis = () => {
    if (showEllipis) {
      return <span className="page-no">...</span>;
    }
  };
  
  const showPrev = () => {
    if (currentPage !== 1 && totalPages > 6) {
      return <span className="page-arrow" onClick={()=>changeCurrentPage(currentPage - 1)}>{previousBtn ? previousBtn : "<"}</span>;
    }
  };
  const showNext = () => {
    if (currentPage < totalPages && totalPages > 6) {
      return <span className="page-arrow" onClick={()=>changeCurrentPage(currentPage + 1)}>{nextBtn ? nextBtn : ">"}</span>;
    }
  };
 
  const renderPageNo = (pages) => {
       return pages.map((no, index) =>(
            <div key={index}
              className={`${currentPage === no? "active-page":"page-no"}`}
              onClick={() => changeCurrentPage(no)}
            >{no}</div>))
  }

  return (
    <div className="pagination-container">
        <div className="paginate-content">
          {showPrev()}
          {renderPageNo(firstThreeArray)}
          {showEllipsis()}
          {renderPageNo(lastThreeArray)}
          {showNext()}
      </div>
    </div>
  );
};
export default Pagination;