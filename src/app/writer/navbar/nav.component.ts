import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  template:
  `

  <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
            Home
        </a>
        <a class="navbar-item" href="writer" margin-left="40px">
            Writer
        </a>
        <a class="navbar-item" href="listener" margin-left="80px">
            Listener
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
      position: fixed;
      top : 0%;
      height : 4%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    a{
      display: block;
      color: #AFEEEE;
      text-decoration: none;
      top: 0%;
      float: left;
      width: 60px;
      margin-left: 20px;
    }
    a:hover{
      color: #fdfdfd;
    }
  `]
})

export class NavComponenet{

}
