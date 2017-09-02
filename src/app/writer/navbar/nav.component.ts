import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  template:
  `

  <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item" routerLink="/">
          Go to your music
        </a>
        <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div class="navbar-menu">
      </div>
  </nav>

  `,
  styles: [`
    .navbar-brand {
      font-family: 'Ubuntu', sans-serif;
      color: crimson!important;
      font-size: 25px;
      font-weight: bold;
    }
    nav{
      background-color: #800080;
      position : relative;
      top : 0%;
      height : 20;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    a{
      color: #40E0D0;
    }
  `]
})

export class NavComponenet{

}
