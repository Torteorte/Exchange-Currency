import React from 'react';
import { Change, StyledNavLink } from './styled';

const ChangePage = (props) => {
  return (
    <Change>
      <StyledNavLink to={props.destination}>{props.text}</StyledNavLink>
    </Change>
  );
};

export default ChangePage;
