import {Component} from '@angular/core'

@Component({
  selector: 'home',
  template:
    `
  <html>
    <navbar>
    </navbar>
    <br>
      <div style="text-align:center">
        <body>
          <h1>
            Welcome to the {{title}} page!
          </h1>
          <img width="300" height="300" src="../assets/Note.png">
        </body>
      </div>
      <h2>Here are some links to help you start: </h2>
      <ul>
        <li>
          <h2><a target="_blank" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
        </li>
        <li>
          <h2><a target="_blank" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
        </li>
        <li>
          <h2><a target="_blank" href="https://blog.angular.io//">Angular blog</a></h2>
        </li>
      </ul>
  </html>
    `,
  styles: [`
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

export class HomeComponent{
  title = 'home';
}
