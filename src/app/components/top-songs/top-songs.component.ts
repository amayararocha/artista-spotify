import { Component} from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css'],
  standalone: true,
  imports: [CommonModule], 
})
export class TopSongsComponent {
}
