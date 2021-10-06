import React from 'react';
import { formatDate } from '../../common/utils/utils';
import { StyledH1, StyledHeader, StyledParagraph } from './styled';

const Head = () => {
  const dateToday = new Date();

  return (
    <StyledHeader>
      <StyledH1>Конвертер валют</StyledH1>
      <StyledParagraph>
        <time>{formatDate(dateToday)}</time>
      </StyledParagraph>
    </StyledHeader>
  );
};

export default Head;
