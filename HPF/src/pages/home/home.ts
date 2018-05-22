import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { HttpService } from './service';
import { mgInfoPage } from '../mgInfo/mgInfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ HttpService ]
})
export class HomePage implements OnInit {
  selectedItem: any;
  erros: any = null;
  items: Array<any>;
  autor: any;
  
  constructor(
    public navCtrl: NavController,
   // public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http_service: HttpService,
  ) { }

  mg = mgInfoPage;

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
    this.http_service.all().subscribe(
            resposta => {
				    console.log(resposta);
            this.items = resposta;
              loading.dismiss();
            },
            erros => {
              this.erros = erros;
            }
        );
  }

  
  itemTapped(event, item) {
    this.selectedItem = item;
    console.log(item);
  }
}