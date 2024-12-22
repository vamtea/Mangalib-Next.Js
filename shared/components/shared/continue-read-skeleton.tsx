import React from "react";
import ContentLoader from "react-content-loader";

function ContinueReadSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={78}
      viewBox="0 0 280 78"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <rect x="0" y="0" rx="4" ry="4" width="56" height="78" />
      <rect x="68" y="7" rx="4" ry="4" width="147" height="12" />
      <rect x="68" y="70" rx="4" ry="4" width="211" height="6" />
    </ContentLoader>
  );
}

export default ContinueReadSkeleton;
