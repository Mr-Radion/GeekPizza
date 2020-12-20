import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="137" cy="125" r="120" />
      <rect x="0" y="260" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="305" rx="6" ry="6" width="280" height="84" />
      <rect x="129" y="409" rx="30" ry="30" width="151" height="44" />
      <rect x="0" y="417" rx="6" ry="6" width="89" height="27" />
    </ContentLoader>
  );
}

export default LoadingBlock;
