import React from "react";
import { Link } from "react-router-dom";
import { FEED_VIEW_ROUTE } from "src/apps/SkateparksApp/skateparksAppRoutes";

import "./NoMatchView.scss";

interface IProps {}

export const NoMatchView: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div className="NoMatchView">
      <h1>
        <b>Oops... we couldn&apos;t find what you were looking for</b>
      </h1>
      <Link to={FEED_VIEW_ROUTE}>
        <h4>Return home</h4>
      </Link>
      {/* if (!!linkTo && !disabled && !externalLink) {
        return (
            <Link
                aria-label={ariaLabel}
                className={mainClass}
                onMouseDown={onClick}
                onMouseMove={onMouseMove}
                ref={buttonRef as React.RefObject<HTMLAnchorElement>}
                replace={replace}
                to={linkTo}
            >
                {children}
            </Link>
        ); */}
    </div>
  );
};

export default NoMatchView;
