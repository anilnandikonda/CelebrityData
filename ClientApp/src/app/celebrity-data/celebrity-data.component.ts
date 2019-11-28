import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CELEBRITYYEAR } from './mock-models';



@Component({
  selector: 'app-celebrity-data',
  templateUrl: './celebrity-data.component.html'
})
export class CelebrityDataComponent {
  public celebritiesyears;
  celebritiesperyears = CELEBRITYYEAR;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/CelebrityData/GetYears').subscribe(result => {
      this.celebritiesyears = result;
    }, error => console.error(error));
  }
  filterCelebrities(filterVal: any) {

    if (filterVal == "0") {

      this.celebritiesperyears = CELEBRITYYEAR;
    }

    else {
      this.celebritiesperyears = CELEBRITYYEAR;
      this.celebritiesperyears = this.celebritiesperyears.filter((item) => item.year == filterVal);
    }
  }
}
 
interface celebritiesyears {
  name: number;
}
