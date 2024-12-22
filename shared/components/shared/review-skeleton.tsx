import React from "react";
import ContentLoader from "react-content-loader";

export function ReviewSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={262}
      height={244}
      viewBox="0 0 262 244"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="262" height="84" />
      <rect x="12" y="100" rx="4" ry="4" width="50" height="10" />
      <rect x="76" y="100" rx="4" ry="4" width="100" height="10" />
      <rect x="11" y="126" rx="4" ry="4" width="119" height="14" />
      <rect x="10" y="161" rx="4" ry="4" width="202" height="8" />
      <rect x="9" y="189" rx="4" ry="4" width="143" height="8" />
      <rect x="36" y="227" rx="4" ry="4" width="24" height="8" />
      <rect x="8" y="227" rx="4" ry="4" width="24" height="8" />
    </ContentLoader>
  );
}
