import { generalConverterSaga } from '../../components/GeneralConverter/sagas';
import { all } from 'redux-saga/effects';
import { detailedConverterSaga } from '../../components/DetailedConverter/sagas';

export function* rootSaga() {
  yield all([generalConverterSaga(), detailedConverterSaga()]);
}
