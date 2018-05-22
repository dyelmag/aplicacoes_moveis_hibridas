import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage implements OnInit {
  selectedItem: any;
  erros: any = null;
  items: Array<any>;
  autor: any;

  constructor(
    public navCtrl: NavController,
   // public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit()
  {
   
  }
  
}