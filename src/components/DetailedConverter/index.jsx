import React, { Fragment } from 'react';

import { ConvertForm } from './ConvertForm/ConvertForm';
import { ChangePage } from '../../common/components/ChangePage';

export const DetailedConverter = () => {
  return (
    <Fragment>
      <ConvertForm />
      <ChangePage text={'Курсы Валют'} destination={'/currency/list'} />
    </Fragment>
  );
};
