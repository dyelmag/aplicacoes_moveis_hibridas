import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { HttpService } from './service';
import { LoginPage } from '../login/login';
import { VirtualBounds } from 'ionic-angular/components/virtual-scroll/virtual-util';
import { JwtHelper } from "angular2-jwt";
import { NativeStorage } from '@ionic-native/native-storage';
import { AuthService } from './auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [HttpService]
})
export class ContactPage implements OnInit {
  logado: boolean;
  resp: any;
  erros: any = null;
  causes:any;
  auth: AuthService;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public http_service: HttpService, 
    public navParams: NavParams,
    private storage: NativeStorage
  ) {
    this.auth = AuthService;
  }
  lp = LoginPage;
  contentHeader = new Headers({ "Content-Type": "application/json" });
  error: string;
  jwtHelper = new JwtHelper();
  user: string;
  
  alterar(){

  }
  
  navigate(manga, capitulo) {
    this.navCtrl.push(LoginPage);
  }


  ngOnInit() {  
    if(this.navParams.data.aux){
      this.fetchContent();
    }
  }
  fetchContent(): void {
    //this.http_service.teste(this.navParams.data.info)
    this.authSuccess(this.navParams.data.info.token);
    this.http_service.getSecretQuote();
    /*console.log(this.navParams.data.info.user_id);
    this.viewCtrl.showBackButton(false);
    this.logado = true;
    this.http_service.setToken(this.navParams.data.info.token)
    console.log(this.http_service.getH())
    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });
    loading.present();
    this.erros = null;
    this.http_service.get(this.navParams.data.info.user_id).subscribe(
      resposta => {
        console.log('---')
        console.log(resposta);
        this.resp = resposta;
        loading.dismiss();
      },
      erros => {
        this.erros = erros;
      }
    );*/
  }
  authSuccess(token) {
    this.error = null;
    this.storage.setItem('token', token);
    this.storage.setItem('profile', this.user);
  }

/*
  getData(id: number) {
    console.log(id);
    this.http_service.getCauses(id)
      .subscribe(
      data => console.log(data),
        err => console.log(err)
      );
  }
  // Get the token and send to userCredentials method bellow*/
  

}
