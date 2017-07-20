import { Component } from '@angular/core'

const template = `
  <h1>{{ title }}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`

@Component({
  selector: 'app-root',
  template: template,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes'
}
