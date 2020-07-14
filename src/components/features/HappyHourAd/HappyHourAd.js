import React from 'react';
import ProtoTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {

  constructor() {
    super();
    setInterval(() => {
      return this.forceUpdate();
    }, 1000);
  }

  static propTypes = {
    titleText: ProtoTypes.string,
    promoDescription: ProtoTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const { titleText = 'Some title', promoDescription = 'fantastic, amazing, super offer '} = this.props;
    const getTime = this.getCountdownTime();
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{titleText}</h3>
        <div className={styles.promoDescription}>{getTime > 82800 ? promoDescription : formatTime(getTime)}</div>
      </div>
    );
  }
}

export default HappyHourAd;