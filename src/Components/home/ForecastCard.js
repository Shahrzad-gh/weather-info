import React from 'react'
import moment from 'moment';

export default function ForecastCard(props) {
    const {forecast} = props;
    const list = forecast.list;
    console.log("f",list);

    function weatherIcon(id){
          
        switch(id){
          case 200:
          case 201:
          case 202:
          case 210:
          case 211:
          case 212:
          case 221:
          case 230:
          case 231:
          case 223:
          {
            return "http://openweathermap.org/img/wn/11d@2x.png";
            break;
          }
          case 300:
          case 301:
          case 302:
          case 310:
          case 311:
          case 312:
          case 313:
          case 314:
          case 321:
          {
            return "http://openweathermap.org/img/wn/09d@2x.png";
            break;
          }
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          {
            return "http://openweathermap.org/img/wn/10d@2x.png";
            break;
          }
          case 511:
          {
            return "http://openweathermap.org/img/wn/13d@2x.png";
            break;
          }
          case 520:
          case 521:
          case 522:
          case 531:
          {
              return "http://openweathermap.org/img/wn/09d@2x.png";
              break;
          }  
          case 600:
          case 601:
          case 602:
          case 611:
          case 612:
          case 613:
          case 615:
          case 616:
          case 620:
          case 621:
          case 622:
          {
            return "http://openweathermap.org/img/wn/13d@2x.png";
            break;
          }
          case  701:
          case  711:
          case  721:
          case  731:
          case  741:
          case  751:
          case  761:
          case  762:
          case  771:
          case  781:
          {
            return "http://openweathermap.org/img/wn/50d@2x.png";
            break;
          }
          case 800:{
            return "http://openweathermap.org/img/wn/01d@2x.png";
            break;
          }
          case 801:
          {
            return "http://openweathermap.org/img/wn/02d@2x.png";
            break;
          }               
          case 802:
          {
            return "http://openweathermap.org/img/wn/03d@2x.png";
            break;
          }   
          case 803:
          case 804:
          {
            return "http://openweathermap.org/img/wn/04d@2x.png";
            break;
          }  
          default: return
        }
      }



    return (
        <div className="forecast" >
          <p style={{fontSize:30, fontWeight: 500}}>Forecast</p>
            <div className="row" style={{textAlign:"center"}}>
                    {list && list.map((index) =>
                        <div className="forecast col-md-1 p-5 mb-2" key={index.dt} >
                            {moment(moment.unix(index.dt).utc()._d).format('dddd')}
                            <div>
                              <img width="50" height="50" src={weatherIcon(index.weather[0].id)} alt="icon"/>
                            </div>  
                            <div>
                              {Math.round((index.temp.day) -273.15)}&#8451;</div>
                        </div> 
                 
                )}
            </div>
            </div>
    )
}
