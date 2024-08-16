import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';
import { TopSong } from '../../models/artist.model';

@Component({
  selector: 'app-top-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent {
}
