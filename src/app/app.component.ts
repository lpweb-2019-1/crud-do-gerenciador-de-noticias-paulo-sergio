import { Component } from '@angular/core';
import { element } from '@angular/core/src/render3';
// import { renderComponent, element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo = null;
  conteudo = null;
  data = null;
  sim = null;
  nao = null;
  categoria = null;
  tags = null;
  editoria = null;
  editar: any = null;
  id: any;

  salvar() {
    if(this.editar){
      this.editar.titulo = this.titulo
      this.editar.conteudo = this.conteudo
      this.editar.datapublicacao = this.data
      this.editar.categoria = this.categoria
      this.editar.tags = this.tags
      this.editar.editoria = this.editoria
    } else {
    const noticia = {
      id: Math.random(),
      titulo: this.titulo,
      conteudo: this.conteudo,
      data: this.data,
      sim: this.sim,
      nao: this.nao,
      categoria: this.categoria,
      tags: this.tags,
      editoria: this.editoria,
      visivel: false
    };
    this.noticias.push(noticia);
  }
  this.titulo = null;
  this.conteudo = null;
  this.data = null;
  this.sim = null;
  this.nao = null;
  this.categoria;
  this.editoria;
  this.editar = null;
}

  excluir = (noticia) => {
    if (confirm("Você realmente que excluir essa notícia '"+ noticia.titulo +  "' ?")) 
    this.noticias = this.noticias.filter(element => element.id != noticia.id)
  }

  iseditar(noticia) {
    this.editar = noticia
    this.titulo = noticia.titulo
    this.conteudo = noticia.conteudo
    this.data = noticia.data
    this.categoria = noticia.categoria
    this.tags = noticia.tags
    this.editoria = noticia.editoria
    console.log(noticia)
  }

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }

  
}
