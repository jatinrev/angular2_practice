import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/heroes"></a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = "Tour of heros";
}