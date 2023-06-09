import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfo } from "../header/user-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<UserInfo[]>
    constructor(private db: AngularFireDatabase) {
        this.items = this.db.list<UserInfo>('my-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: UserInfo[]) => {
            console.log("Data Recieved");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}