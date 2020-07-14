import React from 'react';
import PropTypes from 'prop-types';

import pricing from '../../../data/pricing.json';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption.js';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, countryName, countryCode, countryId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  if ((options.name == '') || (options.contact == '')) {
    window.alert('Please fill name and contact form');
  } else {

    const payload = {
      countryId,
      countryName,
      countryCode,
      ...options,
      totalCost,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.node,
    options: PropTypes.any,
    setOrderOption: PropTypes.func,
    countryName: PropTypes.string,
    countryCode: PropTypes.any,
  }

  render() {
    const searchId = window.location.pathname;
    const countryId = searchId.slice(6);

    const { tripCost, options, setOrderOption, countryName, countryCode } = this.props;
    return (
      <Row>
        {pricing.map(price => (
          <Col md={4} key={price.id}>
            <OrderOption {...price} currentValue={options[price.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
        <Button onClick={() => sendOrder(options, tripCost, countryName, countryCode, countryId)}>Order now!</Button>
      </Row>
    );
  }
}

export default OrderForm;