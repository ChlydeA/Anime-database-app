import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.page.html',
  styleUrls: ['./anime-detail.page.scss'],
})
export class AnimeDetailPage implements OnInit {
  anime: any;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) {}

  async ngOnInit() {
    const animeId = this.route.snapshot.paramMap.get('id');
    if (animeId) {
      const data = await this.animeService.getAnimeDetails(+animeId);
      this.anime = data.data;
    }
  }
}
