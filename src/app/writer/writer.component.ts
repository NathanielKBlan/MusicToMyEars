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
        This is where you will write your music.
      </h1>
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

  `]
})



export class WriterCompnent{

}
