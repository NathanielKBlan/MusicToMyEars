import {Component} from '@angular/core'

@Component({
  selector: 'writer',
  template:
  `
  <html>
    <navbar>
    </navbar>
    <br>
    <div>
      <h1>
        This is where you will write your music:
      </h1>
      <h2>
        Please select your cleff.
      </h2>
      <select id="selectid" aria-label="Cleff Selection">
        <option id="TC" ng-selected="selected">Trebble Cleff</option>
        <option id="BC" ng-selected="selected">Bass Cleff</option>
        <option id="AC" ng-selected="selected">Alto Cleff</option>
      </select>
    </div>
  </html>
  `,

  styles:[`

    html{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;
      background-image: url(../../assets/Mantle.jpg);
      background-size: cover;
    }
    .md-toolbar{
      margin-left: 60px;
    }

  `]
})



export class WriterCompnent{
  trebble = true;
  bass = false;
  alto = false;
  angular: any;
  option = this.angular.element(document.getElementById('selectid'));
  selected = this.option.options[this.option.selectedIndex].value;
  if(selected = "TC"){
    this.trebble = true;
    this.bass = false;
    this.alto = false;
    console.log("Working")
  }
}
