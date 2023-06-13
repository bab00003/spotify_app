import { Component } from "@angular/core";
import { Playlist } from "./playlist.model";
import { mock_playlists } from "./mock-playlists";

var data = {
    playlist1: {
        title: "Liked Songs",
        author: "Username",
        imagePath: "./assets/likedsongs.jpg"
    },
    playlist2: {
        title: "Workout Playlist",
        author: "Username",
        imagePath: "./assets/workout.png"
    },
    playlist3: {
        title: "Car Playlist",
        author: "Username",
        imagePath: "./assets/car.jpg"
    },
    playlist4: {
        title: "Study Beats",
        author: "Usernae",
        imagePath: "./assets/book.png"
    },
}
@Component({
    selector: "spotify-your-library",
    templateUrl: "your-library.component.html"
})
export class YourLibraryComponent {
    playlists: Playlist[] = [];
    constructor() {
        console.log(data);
        for (var item in data) {
            console.log(item)
        }
        for (var playlist of mock_playlists) {
            this.playlists.push(new Playlist(playlist));
        }
    }
}