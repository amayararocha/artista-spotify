import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ArtistDetails } from '../../models/artist.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
  standalone: true,
  imports: [NgFor, FormsModule] // Adicionando FormsModule e NgModel aqui
})
export class ArtistDetailsComponent implements OnInit {
  artistDetails: ArtistDetails[] = [];
  filteredArtists: ArtistDetails[] = [];
  searchTerm: string = '';

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getArtistDetails().subscribe({
      next: (data) => {
        this.artistDetails = data;
        this.filteredArtists = data;
      },
      error: (err) => {
        console.error('Erro ao buscar detalhes do artista', err);
      }
    });
  }

  filterArtists(): void {
    this.filteredArtists = this.artistDetails.filter(artist =>
      artist.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
