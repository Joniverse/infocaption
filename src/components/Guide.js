import React from 'react';
import thumbnail from '../images/thumbnail-alt.png';
import Link from '@material-ui/core/Link';
import Description from '@material-ui/icons/Description';

export default function Guide(props) {
  return (
    <div className="guide">
      <div className="guide-section-left">
        <img
          src={
            props.res.thumbnailURL
              ? `https://support.infocaption.com/${props.res.thumbnailURL}`
              : thumbnail
          }
          alt="img"
          className="guide-thumbnail"
        />
      </div>
      <div className="guide-section-right">
        <Link
          className="guide-headline"
          href={props.res.fullURL}
          target="_blank"
        >
          <Description />
          {props.res.name}
        </Link>

        <p className="guide-summary">
          {props.res.summary !== ''
            ? props.res.summary
            : 'Klicka på rubriken för att läsa mer'}
        </p>
      </div>
    </div>
  );
}
