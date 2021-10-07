import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import { ConvertForm } from './ConvertForm/ConvertForm';
import { ChangePage } from '../../common/components/ChangePage';

export const DetailedConverter = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <ConvertForm />
      <ChangePage text={t('button.general')} destination={'/currency/list'} />
    </Fragment>
  );
};
