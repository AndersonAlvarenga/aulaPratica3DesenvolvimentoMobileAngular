import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoas.model';
import { PessoasDetalheComponent } from '../pessoas-detalhe/pessoas-detalhe.component';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  detalhePessoa: boolean = false;
  pessoa: Pessoa;
  pessoasArray: Pessoa[] = [];

  alterarPessoa(resposta) {
 
    this.pessoasArray.forEach(pessoa => {
      if (pessoa.id == resposta.result.id) {  
        pessoa.name = resposta.result.nome;
        this.pessoaService.atualizaPessoa(resposta.result.id);
      }
    })
  }
  detalheDaPessoa(id) {
    this.detalhePessoa = true;
    this.pessoasArray.forEach(dados => {
      if (dados.id == id) {
        this.pessoa = dados;
      }
    })

  }
  constructor(private pessoaService: PessoasService) {

  }

  ngOnInit(): void {
    this.pessoasArray = this.pessoaService.getPessoas();

  }

}
