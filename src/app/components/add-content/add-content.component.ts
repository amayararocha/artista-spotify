import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ArtistDetails, TopSong, PopularAlbum } from '../../models/artist.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class AddContentComponent {
  newArtistDetail: ArtistDetails = {
    name: '',
    bio: '',
    image: '',
    followers: 0,
    popularity: 0
  };

  newTopSong: TopSong = { 
    title: '',
    plays: 0
  };

  newPopularAlbum: PopularAlbum = {
    title: '',
    releaseYear: 0
  };

  constructor(private artistService: ArtistService) {}

  addArtistDetail() {
    this.artistService.addArtistDetail(this.newArtistDetail).subscribe(response => {
      console.log('Artist added', response);
      alert('Artist details added successfully!');
      this.resetArtistDetailForm();
    });
  }

  addTopSong() {
    this.artistService.addTopSong(this.newTopSong).subscribe(response => {
      console.log('Top song added', response);
      alert('Top song added successfully!');
      this.resetTopSongForm();
    });
  }

  addPopularAlbum() {
    this.artistService.addPopularAlbum(this.newPopularAlbum).subscribe(response => {
      console.log('Popular album added', response);
      alert('Popular album added successfully!');
      this.resetPopularAlbumForm();
    });
  }

  resetArtistDetailForm() {
    this.newArtistDetail = {
      name: '',
      bio: '',
      image: '',
      followers: 0,
      popularity: 0
    };
  }

  resetTopSongForm() {
    this.newTopSong = {
      title: '',
      plays: 0
    };
  }

  resetPopularAlbumForm() {
    this.newPopularAlbum = {
      title: '',
      releaseYear: 0
    };
  }
}
