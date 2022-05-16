import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly clientAPIUrl = 'api/clients';

  constructor(private httpClient: HttpClient) { }

  log (Text: string) {
    console.log(Text);
  }

  // save client to local storage
  save(client: Client) {
    const url = `${this.clientAPIUrl}`;
    return this.httpClient.post(url, client);
  }

  // get client by clientID
  getClientById(clientId: string): any {
    const url = `${this.clientAPIUrl}/${clientId}`;
    return this.httpClient.get(url);
  }

  // get list of clients
  getClients(): any {
    const url = `${this.clientAPIUrl}`;
    return this.httpClient.get(url);
  }

  // archive a client
  deleteClient(clientId: string): any {
    const url = `${this.clientAPIUrl}/${clientId}`;
    return this.httpClient.delete(url);
  }

  // update a clients details
  updateClient(client: Client): any {
    const url = `${this.clientAPIUrl}`;
    return this.httpClient.put(url, client);
  }

  // search the clients list
  search(searchTerm: string): any {
    searchTerm.trim();
    const url = `${this.clientAPIUrl}`;
    const searchOptions = searchTerm ? {params: new HttpParams().set('firstname', searchTerm)} : {};
    return this.httpClient.get(url, searchOptions);
  }
}
