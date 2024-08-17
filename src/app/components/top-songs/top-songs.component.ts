import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { TopSong } from '../../models/artist.model';

@Component({
  selector: 'app-top-songs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {
  topSongs: TopSong[] = [];
  filteredSongs: TopSong[] = [];
  searchTerm: string = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getTopSongs().subscribe({
      next: (data) => {
        this.topSongs = data;
        this.filteredSongs = data;
      },
      error: (err) => {
        console.error('Erro ao buscar músicas', err);
      }
    });
  }

  filterSongs(): void {
    this.filteredSongs = this.topSongs.filter(song =>
      song.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
