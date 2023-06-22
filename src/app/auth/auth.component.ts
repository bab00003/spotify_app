import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: "spotify-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    
    constructor(private authService: AuthService, private router:Router) {

    }

    public onSubmit(data: NgForm) {
        console.log("Button Clicked = " + this.buttonClicked);
        console.log(data.value);

        if (this.buttonClicked == 'SignUp') {
            this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        if (this.buttonClicked == 'Login') {
            this.authObservable = this.authService.login(data.value.email, data.value.password);
        }


        this.authObservable.subscribe(
            (data: AuthResponse) => {
                console.log(data);
                this.router.navigate(['/your_library']);
            },
            error => {
                console.log(error.error);
            }
        );
        data.resetForm();
    }
}