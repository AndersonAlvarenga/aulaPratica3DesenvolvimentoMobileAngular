import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {
  @Input() dados;
  @Output() atualizaDado = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  atualizaDados(dado) {
    let result = {
      id:dado,
      nome:"Novo Nome"
    };
    this.atualizaDado.emit({result});
  }
}
