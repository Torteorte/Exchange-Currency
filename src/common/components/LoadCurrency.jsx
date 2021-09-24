import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadCurrency = (props) => {
  return (
    <tr>
      <td>
        <ContentLoader
          speed={2}
          width={100}
          height={20}
          viewBox="0 0 150 40"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="30" y="0" rx="10" ry="10" width="90" height="40" />
        </ContentLoader>
      </td>
      <td>
        <ContentLoader
          speed={2}
          width={100}
          height={20}
          viewBox="0 0 150 40"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="40" />
        </ContentLoader>
      </td>
    </tr>
  );
};

export default LoadCurrency;
