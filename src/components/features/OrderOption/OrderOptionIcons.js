import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({ values, setOptionValue, currentValue, required }) => (
  <div className={styles.component}>
    {!required ? '' : (
      <div className={styles.icon} onClick={() => setOptionValue('')}>
        <Icon name='times-circle'/>
        none</div>
    )}
    {values.map(value => (
      <div className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {value.name} {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: ProtoTypes.array,
  setOptionValue: ProtoTypes.any,
  required: ProtoTypes.any,
  currentValue: ProtoTypes.node,
};

export default OrderOptionIcons;