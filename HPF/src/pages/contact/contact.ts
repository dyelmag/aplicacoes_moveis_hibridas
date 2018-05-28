import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { HttpService } from './service';
import { LoginPage } from '../login/login';
import { VirtualBounds } from 'ionic-angular/components/virtual-scroll/virtual-util';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [HttpService]
})
export class ContactPage implements OnInit {
  logado: boolean;
  resp: any;
  erros: any = null;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public http_service: HttpService, 
    public navParams: NavParams
  ) {}
  lp = LoginPage;
  
  alterar(){

  }
  
  navigate(manga, capitulo) {
    this.navCtrl.push(LoginPage);
  }


  ngOnInit() {  
    this.logado = this.http_service.isLogado();
    if(this.navParams.data.aux){
      this.fetchContent();
    }
  }
  fetchContent(): void {
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
    );
  }

}
