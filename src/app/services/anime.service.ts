import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiBaseUrl = 'https://api.jikan.moe/v4'; // Base API URL

  constructor() {}

  // Fetch trending anime
  async getTrendingAnime() {
    const response = await axios.get(`${this.apiBaseUrl}/top/anime`);
    return response.data;
  }

  // Fetch anime for this season
  async getThisSeasonAnime() {
    const response = await axios.get(`${this.apiBaseUrl}/seasons/now`);
    return response.data;
  }

  // Search anime by title
  async searchAnime(query: string) {
    const response = await axios.get(`${this.apiBaseUrl}/anime`, {
      params: { q: query },
    });
    return response.data;
  }


  // Get detailed info by ID
  async getAnimeDetails(id: number) {
    const response = await axios.get(`${this.apiBaseUrl}/anime/${id}`);
    return response.data;
  }
}
