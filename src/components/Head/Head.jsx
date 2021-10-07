import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../common/utils/utils';
import {
  StyledButton,
  StyledButtons,
  StyledContainer,
  StyledH1,
  StyledHeader
} from './styled';

const Head = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const dateToday = new Date();

  return (
    <StyledHeader>
      <StyledH1>{t('title')}</StyledH1>
      <StyledContainer>
        <time>{formatDate(dateToday)}</time>
        <StyledButtons>
          <StyledButton onClick={() => changeLanguage('en')}>EN</StyledButton>
          <StyledButton onClick={() => changeLanguage('ru')}>RU</StyledButton>
        </StyledButtons>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Head;
