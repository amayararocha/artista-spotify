import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../services/artist.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class ArtistDetailsComponent {
}
