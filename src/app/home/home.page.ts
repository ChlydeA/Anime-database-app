import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  trendingAnime: any[] = [];
  seasonAnime: any[] = [];
  searchResults: any[] = [];
  searchTerm: string = '';

  constructor(private animeService: AnimeService, private router: Router) {}

  async ngOnInit() {
    await this.loadTrendingAnime();
    await this.loadSeasonAnime();
  }

  viewAll(section: string) {
    if (section === 'trending') {
      this.router.navigate(['/trending-list']); // Replace with your actual route
    } else if (section === 'season') {
      this.router.navigate(['/season-list']); // Replace with your actual route
    }
  }

  

  async loadTrendingAnime() {
    const data = await this.animeService.getTrendingAnime();
    this.trendingAnime = data.data; // Bind trending anime data
  }

  async loadSeasonAnime() {
    const data = await this.animeService.getThisSeasonAnime();
    this.seasonAnime = data.data; // Bind this season anime data
  }

  async onSearch() {
    if (this.searchTerm.trim() !== '') {
      const data = await this.animeService.searchAnime(this.searchTerm);
      this.searchResults = data.data; // Bind search results
    }
  }

  viewDetails(animeId: number) {
    this.router.navigate(['/anime-detail', animeId]); // Navigate to detail page
  }

  viewAllTrending() {
    this.router.navigate(['/anime-list'], { queryParams: { type: 'trending-list' } });
  }

  viewAllSeasonAnime() {
    this.router.navigate(['/anime-list'], { queryParams: { type: 'season-list' } });
  }

}
