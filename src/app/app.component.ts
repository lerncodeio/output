import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, UserViewComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'output';
}
