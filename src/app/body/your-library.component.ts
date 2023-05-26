import { Component } from "@angular/core";
import { Playlist } from "./playlist.model";
import { mock_playlists } from "./mock-playlists";

@Component({
    selector: "spotify-your-library",
    templateUrl: "your-library.component.html"
})
export class YourLibraryComponent {
    playlists: Playlist[] = [];
    constructor() {
        for (var playlist of mock_playlists) {
            this.playlists.push(new Playlist(playlist));
        }
    }
}