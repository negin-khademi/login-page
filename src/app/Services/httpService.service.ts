import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  fetchPost() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
