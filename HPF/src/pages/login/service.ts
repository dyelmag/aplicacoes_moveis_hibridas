import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/**
 * Servico base para manipulação via API REST
 * @class services.core.HttpService
*/
export class User {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

@Injectable()
export class AuthService {
    currentUser: User;
    public login(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
            } else {
                return Observable.create(observer => {
                            let access = (credentials.password === "pass" && credentials.email === "email");
                            this.currentUser = new User('Simon', 'saimon@devdactic.com');
                            observer.next(access);
                            observer.complete();
                        });
                    }
        }
    public register(credentials) {
        if (credentials.email === null || credentials.password === null) {
            return Observable.throw("Please insert credentials");
        } else {
            // At this point store the credentials to your backend!
            return Observable.create(observer => {
                                observer.next(true);
                                observer.complete();
                                });
        }
    }
        public getUserInfo() : User {
            return this.currentUser;
        }
        public logout() {
            return Observable.create(observer => {
                                        this.currentUser = null;
                                        observer.next(true);
                                        observer.complete();
                                    });
    }
}
