import { Component } from '@angular/core';

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

  salvar() {
    const noticia = {
      id: this.noticias.length,
      titulo: this.titulo,
      conteudo: this.conteudo,
      data: this.data,
      visivel: false
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.conteudo = null;
    this.data = null;
  }

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }

  estahPublicada (): boolean {
    if (!this.data) {
      return false;
  }
    const dataAtual = new Date();
  if (this.data > dataAtual) {
      return false;
  }
    return true;
    }
}
