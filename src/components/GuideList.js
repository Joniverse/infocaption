import React from 'react';
import Guide from './Guide';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';

export default function GuideList(props) {
  return (
    <div>
      {props.result ? (
        <div className="guide-list">
          <div className="guide-list-paginate">
            <IconButton
              disabled={props.result.currentPage < 2 ? true : false}
              direction="prev"
              onClick={props.handlePageChange}
            >
              <ArrowLeft fontSize="large" />
            </IconButton>

            <p>
              Sida {props.result.currentPage} av {props.result.totalPages}
            </p>
            <IconButton
              disabled={
                props.result.currentPage < props.result.totalPages
                  ? false
                  : true
              }
              direction="next"
              onClick={props.handlePageChange}
            >
              <ArrowRight fontSize="large" />
            </IconButton>
          </div>

          {props.result.results.map((res) => (
            <Guide res={res} key={res.id} className="guide" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
