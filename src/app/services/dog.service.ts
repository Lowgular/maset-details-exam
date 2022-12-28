import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogModel } from '../models/dog.model';
import { CityModel } from '../models/city.model';

@Injectable({ providedIn: 'root' })
export class DogService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<DogModel[]> {
    return this._httpClient.get<DogModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/dogs'
    );
  }

  remove(id: number): Observable<CityModel> {
    return this._httpClient.delete<DogModel>(
      `https://636ce2d8ab4814f2b2712854.mockapi.io/dogs/${id}`
    );
  }
}
