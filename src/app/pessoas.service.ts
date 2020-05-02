import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas.model';
@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  pessoa: Pessoa[] = [
    {
      "id": 0,
      "name": "Saunders Rosa",
      "idade": 23,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "saundersrosa@eyewax.com"
    },
    {
      "id": 1,
      "name": "Mercer Vincent",
      "idade": 27,
      "corOlhos": "green",
      "sexo": "male",
      "email": "mercervincent@eyewax.com"
    },
    {
      "id": 2,
      "name": "Frederick Gonzales",
      "idade": 37,
      "corOlhos": "blue",
      "sexo": "male",
      "email": "frederickgonzales@eyewax.com"
    },
    {
      "id": 3,
      "name": "Nicholson Frank",
      "idade": 25,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "nicholsonfrank@eyewax.com"
    },
    {
      "id": 4,
      "name": "Cox Reeves",
      "idade": 23,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "coxreeves@eyewax.com"
    },
    {
      "id": 5,
      "name": "Bonnie Estrada",
      "idade": 35,
      "corOlhos": "green",
      "sexo": "female",
      "email": "bonnieestrada@eyewax.com"
    }
  ];
  getPessoas(){
    return this.pessoa;
  }
  getPessoa(id){
   this.pessoa.forEach(resutl=>{
     if(resutl.id==id){
       return resutl;
     }
   })
  }
  atualizaPessoa(id){
    console.log(id);
  }
  constructor() { }
}
