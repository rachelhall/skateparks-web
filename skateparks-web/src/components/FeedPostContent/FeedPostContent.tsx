import React, { useState } from "react";
import cx from "classnames";
import "./FeedPostContent.scss";
import ContentPiece from "../ContentPiece";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

interface IProps {
  src: Array<string>;
}

export const FeedPostContent: React.FC<IProps> = (props) => {
  const { src } = props;

  // Number of files in array
  const length = src.length;

  // Function to generate content JSX elemtn and push to contentPieces array
  const contentPieces = src.map((file, index) => {
    return (
      <SwiperSlide key={index}>
        <ContentPiece src={file} />
      </SwiperSlide>
    );
  });

  // Style container based on single or swipe
  const contentContainerClass = cx(
    "FeedPostContent-container",
    src.length > 1 && "FeedPostContent-container-swipe"
  );

  return (
    <div className="FeedPostContent">
      <div className={contentContainerClass}>
        <Swiper
          cssMode={true}
          pagination={{ dynamicBullets: true, dynamicMainBullets: 4 }}
          mousewheel={true}
          keyboard={true}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="FeedPostContent-swiper"
        >
          {contentPieces}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedPostContent;
