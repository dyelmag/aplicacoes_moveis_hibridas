import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
   // public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) { }

  public createAccount() {
    this.navCtrl.setRoot('CadastrarPage');
    
  }
  login(){
    let formData: FormData = new FormData();
    formData.append("usuario", this.usuario);
    formData.append("senha", this.senha);
    console.log(this.usuario);
    console.log(this.senha);
    var request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1:8005/usuario/entrar/api/");
    request.send(formData);
    console.log(request.response());
  }
  ngOnInit()
  {
   
  }
  
}