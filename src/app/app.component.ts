import { Component } from '@angular/core';
import { renderComponent } from '@angular/core/src/render3';

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

  salvar() {
    const noticia = {
      id: this.noticias.length,
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
    this.titulo = null;
    this.conteudo = null;
    this.data = null;
    this.sim = null;
    this.nao = null;
    this.categoria;
    this.editoria;
  }

  excluir(titulo) {
    var r = confirm("Você realmente que excluir esse item?");
    if (r == true){
      this.noticias.splice(titulo, 1);
    } else {
    };
  }

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }

  
}
