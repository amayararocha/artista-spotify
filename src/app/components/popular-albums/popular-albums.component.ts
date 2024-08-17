import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopularAlbum } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';


@Component({
  selector: 'app-popular-albums',
  templateUrl: './popular-albums.component.html',
  styleUrls: ['./popular-albums.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PopularAlbumsComponent implements OnInit {
  popularAlbums: PopularAlbum[] = [];
  filteredAlbums: PopularAlbum[] = [];
  searchTerm: string = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getPopularAlbums().subscribe({
      next: (data) => {
        this.popularAlbums = data;
        this.filteredAlbums = data;
      },
      error: (err) => {
        console.error('Error fetching popular albums', err);
      }
    });
  }

  filterAlbums(): void {
    this.filteredAlbums = this.popularAlbums.filter(album =>
      album.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
