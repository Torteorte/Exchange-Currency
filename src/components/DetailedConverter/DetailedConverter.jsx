import React, { Fragment } from 'react';

import ChangePage from '../../common/components/ChangePage';
import ConvertForm from './ConvertForm/ConvertForm';

const DetailedConverter = () => {
  return (
    <Fragment>
      <ConvertForm />
      <ChangePage text={'Курсы Валют'} destination={'/currency/list'} />
    </Fragment>
  );
};

export default DetailedConverter;
