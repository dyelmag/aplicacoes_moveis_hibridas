import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { HttpService } from './service';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@Component({
  selector: 'page-capView',
  templateUrl: 'capView.html',
  providers: [ HttpService ]
})
export class capView implements OnInit {
  selectedItem: any;
  erros: any = null;
  cap: Array<any>;
  mg: any;
  autor: any;
  zoomedImage: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http_service: HttpService
  ) { }

  grid = true;

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
    this.http_service.get(this.navParams.data.mg, this.navParams.data.cp).subscribe(
      resposta => {
      this.mg = resposta;
      console.log('------------------3');
      console.log(this.mg);
      loading.dismiss();
    },
    erros => {
      this.erros = erros;
    });
  }
  
  changeGrid() {
    this.grid = !this.grid;
  }

  zoomImage(img) {
    console.log(img);
    if (this.zoomedImage = ! null && this.zoomedImage == img) { // Necessário para remover a marcação da imagem caso clique na mesma
      console.log("if");
      this.zoomedImage = null;
    } else {
      console.log("else");
      this.zoomedImage = img;
    }
  }


  itemTapped(event, item) {
    this.selectedItem = item;
    console.log(item);
  }
}