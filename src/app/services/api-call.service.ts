import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/allMatch`)
  }

  getLiveMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/livescore`)
  }

  getPointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`)

  }
}
