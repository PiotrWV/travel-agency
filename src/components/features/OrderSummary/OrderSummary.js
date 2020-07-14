import React from 'react';
import ProtoTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

import styles from './OrderSummary.scss';

class OrderSummary extends React.Component {

  static propTypes = {
    tripCost: ProtoTypes.node,
    options: ProtoTypes.any,
  }

  render() {
    const { tripCost, options } = this.props;
    return (
      <h2 className={styles.component}>Total <strong>{calculateTotal(formatPrice(tripCost), options)}</strong></h2>
    );
  }
}

export default OrderSummary;