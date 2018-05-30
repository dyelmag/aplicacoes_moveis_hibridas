import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/**
 * Servico base para manipulação via API REST
 * @class services.core.HttpService
*/
@Injectable()
export class HttpService
{
  isLoggedIn = false;
  AuthToken: string;
  private base_url: string = 'http://127.0.0.1:8005/add/listar/api/';
  private base_url2: string = 'http://127.0.0.1:8005/usuario/api';
  //private headers = new Headers({'Content-Type': 'application/json'});
  private st: boolean = false;

  constructor(private core_http: Http, private storage: NativeStorage) {
    this.isLoggedIn = false;
    this.AuthToken = null;
  }
  getSecretQuote() {
    // Use authHttp to access secured routes
    this.storage.getItem('token').then((token) => {
      console.log(token)
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);

      this.core_http.get('http://127.0.0.1:8005/usuario/api/6/', {
        headers: headers
      }).map(res => res.text())
        .subscribe(
          data => console.log(data),
          err => console.log(err)
        );
    })
  }
  


/*
  public setToken(token: string):void{
    this.st = true;
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'token ' + token});
  }

  public isLogado(){
    return this.st;
  }
  public getH(){
    return this.headers;
  }
  public all(): Observable<any[]>
  {
    return this.core_http.get(this.base_url).map(this.extractData).catch(this.handleError);
  }
  public get(id: number): Observable<any>
  {
    
    return this.core_http.get(`${this.base_url2}/${id}/`, { headers: this.headers })
      .map(response => {
        response.json();
        console.log("A----------------A")
        console.log(response.json());
      })
  }

  public add(instance: any): Observable<any>
  {
    return this.core_http.post(`${this.base_url}/`, JSON.stringify(instance), {headers: this.headers}).map(this.extractData).catch(this.handleError);
  }

  public update(instance: any): Observable<any>
  {
    return this.core_http.put(`${this.base_url}/${instance.id}/`, JSON.stringify(instance), {headers: this.headers}).map(this.extractData).catch(this.handleError);
  }

  public delete(instance: any): Observable<any>
  {
    return this.core_http.delete(`${this.base_url}/${instance.id}/`).map(this.extractData).catch(this.handleError);
  }

  private extractData(response: Response)
  {
    return response.json() || {};
  }
  private handleError (error: Response | any): Observable<any>
  {
    return Observable.throw(error);
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('token', token);
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isLoggedIn = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    let token = window.localStorage.getItem('token');
    this.useCredentials(token);
  }

  // Destroy Authentication of User
  destroyUserCredentials() {
    this.isLoggedIn = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  createAuthorization(headers: Headers) {
    headers.append('Authorization', window.localStorage.getItem('token'));
  }

  getCauses(id: number) {
    console.log(id);
    return this.core_http.get('http://127.0.0.1:8005/usuario/api/6/').map(res => res.json());
  }*/
}
