import ContentLoader from "react-content-loader";
import React, { ReactNode } from "react";

export const LastUpdateCardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={450}
      height={112}
      viewBox="0 0 450 112"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="80" height="112" />
      <rect x="92" y="21" rx="4" ry="4" width="260" height="14" />
      <rect x="92" y="52" rx="4" ry="4" width="196" height="14" />
      <rect x="92" y="82" rx="4" ry="4" width="100" height="8" />
    </ContentLoader>
  );
};
