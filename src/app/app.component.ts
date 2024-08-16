import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { PopularAlbumsComponent } from './components/popular-albums/popular-albums.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ArtistDetailsComponent, TopSongsComponent, PopularAlbumsComponent, NavbarComponent, FooterComponent], 

})
export class AppComponent { }
