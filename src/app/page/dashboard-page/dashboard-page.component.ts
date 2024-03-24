import { Component } from '@angular/core';
import { UserViewComponent } from '../../components/user-view/user-view.component';

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [UserViewComponent],
    template: `<app-user-view />`,
})
export class DashboardPageComponent {

    // TODO print on the console the 'selectedUser' from UserViewComponent when the button is clicked
}
