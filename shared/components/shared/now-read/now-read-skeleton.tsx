import React from "react";
import ContentLoader from "react-content-loader";

export function NowReadSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={79}
      viewBox="0 0 300 79"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="0" y="0" rx="6" ry="6" width="79" height="79" />
      <rect x="94" y="35" rx="4" ry="4" width="14" height="14" />
      <rect x="120" y="24" rx="4" ry="4" width="170" height="10" />
      <rect x="122" y="45" rx="4" ry="4" width="45" height="6" />
      <rect x="175" y="45" rx="4" ry="4" width="30" height="6" />
    </ContentLoader>
  );
}


