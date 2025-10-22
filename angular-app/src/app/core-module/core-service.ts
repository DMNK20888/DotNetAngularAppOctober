import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:5001';

  fetchDataTest() {
    return this.http.get(this.apiUrl + '/' + 'test');
  }

}
