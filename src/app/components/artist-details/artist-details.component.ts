import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class ArtistDetailsComponent {
  artist: any;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getArtistDetails().subscribe((data) => {
      this.artist = data;
    });
  }
}
