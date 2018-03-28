import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valor_a: any = 0;
  valor_b: any = 0;
  resultado: number = 0;

  constructor(public navCtrl: NavController) {

  }

  public Somar():void {
    this.resultado = parseFloat(this.valor_a) + parseFloat(this.valor_b);

    /*let alert = this.alertCtrl.create({
      title: 'Resultado',
      subTitle: 'resultado',
      buttons:[{
        text: ''
      }]
    });*/
  }

  public Sub():void {
    this.resultado = parseFloat(this.valor_a) - parseFloat(this.valor_b);

    /*let alert = this.alertCtrl.create({
      title: 'Resultado',
      subTitle: 'resultado',
      buttons:[{
        text: ''
      }]
    });*/
  }

}
