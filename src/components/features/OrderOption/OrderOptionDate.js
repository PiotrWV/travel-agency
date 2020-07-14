import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ProtoTypes from 'prop-types';

class OrderOptionDate extends React.Component{

  static propTypes = {
    currentValue: ProtoTypes.any,
    setOptionValue: ProtoTypes.func,
  }

  render() {
    const { setOptionValue, currentValue } = this.props;

    return (
      <div>
        <DatePicker
          selected={currentValue}
          onChange={setOptionValue} />
      </div>
    );
  }
}

export default OrderOptionDate;