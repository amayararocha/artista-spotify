import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ArtistDetails } from '../../models/artist.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
  standalone: true,
  imports: [NgFor]
})
export class ArtistDetailsComponent implements OnInit {
  artistDetails: ArtistDetails[] = [];

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getArtistDetails().subscribe({
      next: (data) => {
        this.artistDetails = data;
      },
      error: (err) => {
        console.error('Erro ao buscar detalhes do artista', err);
      }
    });
  }
}
