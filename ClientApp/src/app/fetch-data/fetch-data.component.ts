import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public cacheForecasts: WeatherForecast[];
  public summaries: any[];



  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {

    http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {

      this.forecasts = result.json() as WeatherForecast[];

      this.cacheForecasts = this.forecasts;

    }, error => console.error(error));

    http.get(baseUrl + 'api/SampleData/GetSummaries').subscribe(result => {

      this.summaries = result.json() as any[];

    }, error => console.error(error));

  }



  filterForeCasts(filterVal: any) {

    if (filterVal == "0")

      this.forecasts = this.cacheForecasts;

    else

      this.forecasts = this.cacheForecasts.filter((item) => item.summary == filterVal);

  }

}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
interface Summary {

  name: string;

}
