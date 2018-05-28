import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage implements OnInit {
  nome: any;
  Snome: any;
  email: any;
  usuario: any;
  senha: any;
  senha2: any;
  data: any;

  constructor(
    public navCtrl: NavController,
   // public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private http: Http
  ) { }

  ngOnInit()
  {
   
  }

  cadastrar(){
    let formData: FormData = new FormData();
    formData.append("nome", this.nome);
    formData.append("Snome", this.Snome);
    formData.append("email", this.email);
    formData.append("usuario", this.usuario);
    formData.append("senha", this.senha);
    let link = "http://127.0.0.1:8005/usuario/novo/api/";
    this.http.post(link, formData)
    .map(res => res.json())
    .subscribe(resposta => {
      this.data = resposta;
    }, 
    err => this.erro);
    console.log(this.data)
  }
  erro(error){
    console.log(error);
    return error.json().message || 'erro'
  }

}