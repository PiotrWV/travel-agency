import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits, price }) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)} />
    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: ProtoTypes.node,
  limits: ProtoTypes.object,
  setOptionValue: ProtoTypes.any,
  price: ProtoTypes.node,
};

export default OrderOptionNumber;