import React from "react";
import ContentLoader from "react-content-loader";

export function MangaCardSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={140}
      height={230}
      viewBox="0 0 140 230"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="4" y="2" rx="6" ry="6" width="135" height="189" />
      <rect x="8" y="202" rx="4" ry="4" width="115" height="11" />
      <rect x="8" y="221" rx="4" ry="4" width="80" height="8" />
    </ContentLoader>
  );
}
