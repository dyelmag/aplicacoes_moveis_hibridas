import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  selectedItem: any;
  erros: any = null;
  items: Array<any>;
  autor: any;
  usuario: any;
  senha: any;
  data: any;
  mg = CadastrarPage;

  constructor(
    public navCtrl: NavController,
   // public navParams: NavParams,
    public loadingCtrl: LoadingController, private http: Http
  ) { }
  
  public createAccount() {
    this.navCtrl.setRoot('CadastrarPage');
    
  }

  login(){
    let formData: FormData = new FormData();
    formData.append("username", this.usuario);
    formData.append("password", this.senha);
    let link = "http://127.0.0.1:8005/usuario/entrar/api/";
    this.http.post(link, formData)
    .map(res => res.json())
    .subscribe(resposta => {
      this.navCtrl.push(ContactPage, {
        aux: true,
        info: resposta
      })
    }, 
    err => this.erro);
    console.log(this.data)
  }
  erro(error){
    console.log(error);
    return error.json().message || 'erro'
  }

  ngOnInit()
  {
   
  }
  
}