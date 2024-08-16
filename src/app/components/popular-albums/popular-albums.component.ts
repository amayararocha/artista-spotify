import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-albums',
  templateUrl: './popular-albums.component.html',
  styleUrls: ['./popular-albums.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class PopularAlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getPopularAlbums().subscribe((data) => {
      this.albums = data;
    });
  }
}
