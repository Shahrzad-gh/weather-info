import React from 'react'
import moment from 'moment';

export default function ForecastCard(props) {
    const {forecast} = props;
    return (
        <div className="forecast col-md-12 mb-2">
        <p>Forecast</p>
            <div className="row">
              <div className="col-3">{moment(moment.unix(forecast.list[0].dt).utc()._d).format('dddd')}</div>

            </div>
            </div>
    )
}
