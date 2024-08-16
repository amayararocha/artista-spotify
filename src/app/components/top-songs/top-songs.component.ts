import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class TopSongsComponent implements OnInit {
  songs: any[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getTopSongs().subscribe((data) => {
      this.songs = data;
    });
  }
}
