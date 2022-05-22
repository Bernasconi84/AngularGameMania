import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  constructor(private noticiasService: NoticiasService) { }

  listaNoticias = [] as Noticias[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias(){
    this.noticiasService.getNoticias().subscribe((noticiasRecebidas: Noticias[])=>{
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    }
    )
  }
}
