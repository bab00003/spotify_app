import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: "spotify-sidebar-buttons",
    templateUrl: "sidebar-buttons.component.html",
    styleUrls: ["sidebar-buttons.component.css"]
})
export class SidebarButtonsComponent implements OnInit {
    private user!: Subscription;
    public isAuthenticated: boolean = false;

    public constructor(private authentication: AuthService) {

    }
    ngOnInit(): void {
        this.user = this.authentication.user.subscribe(user => {
            this.isAuthenticated = !user ? false : true;
        })
    }
}