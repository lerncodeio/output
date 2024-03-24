import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { User } from '../../modals/user.modal';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-view',
    standalone: true,
    imports: [CommonModule, RouterModule],
    styleUrls: ['./user-view.component.scss'],
    template: `
        <section>
            <div>{{ selectedUser | json }}</div>
            <button (click)="sendButtonClick()">Send to parent</button>
        </section>
    `,
})
export class UserViewComponent implements OnInit {
    private userService: UserService = inject(UserService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    public selectedUser: User;

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                filter(params => params['userId']),
                switchMap(params => this.userService.getUsers(params['userId'])),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((user: User) => {
                this.selectedUser = user;
            });
    }

    sendButtonClick(): void {}
}
