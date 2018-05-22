import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { HttpService } from './service';

@Component({
  selector: 'page-mgInfo',
  templateUrl: 'mgInfo.html',
  providers: [ HttpService ]
})
export class mgInfoPage implements OnInit {
  selectedItem: any;
  erros: any = null;
  cap: Array<any>;
  mg: any;
  autor: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http_service: HttpService
  ) { }

  ngOnInit()
  {
    this.fetchContent();
  }
  fetchContent ():void {
    let loading = this.loadingCtrl.create({
      content: 'Carregando dados...'
    });
    loading.present();
    this.erros = null;
    this.http_service.get(this.navParams.data).subscribe(
      resposta => {
      this.mg = resposta;
      console.log('------------------');
      console.log(this.mg);
      loading.dismiss();
    },
    erros => {
      this.erros = erros;
    });
  }
  
  itemTapped(event, item) {
    this.selectedItem = item;
    console.log(item);
  }
}