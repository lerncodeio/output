import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { User } from '../../modals/user.modal';
import { UserService } from '../../services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-user-view',
    standalone: true,
    imports: [CommonModule],
    template: `
        <ng-container *ngIf="selectedUser">
            <div>{{ selectedUser | json }}</div>
            <button (click)="sendButtonClick()">Send to parent</button>
            <ng-container> </ng-container
        ></ng-container>
    `,
})
export class UserViewComponent implements OnInit {
    private userService: UserService = inject(UserService);
    private destroyRef: DestroyRef = inject(DestroyRef);
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    public selectedUser: User;

    ngOnInit(): void {
        this.activatedRoute.queryParams
            .pipe(
                filter(params => params['id']),
                switchMap(params => this.userService.getUsers(params['id'])),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe((user: User) => {
                this.selectedUser = user;
            });
    }

    sendButtonClick(): void {}
}
