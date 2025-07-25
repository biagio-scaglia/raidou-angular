import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Demone {
  id: number;
  nome: string;
  titolo: string;
  tipo: string;
  allineamento: string;
  habitat: string;
  descrizione: string;
  debolezza: string[];
  sigillo: string;
  pericolosita: number;
  visto_ultima_volta: string;
  livello: number;
}

@Component({
  selector: 'app-demoni',
  templateUrl: './demoni.component.html',
})
export class DemoniComponent implements OnInit {
  demoni: Demone[] = [];
  demoneSelezionato: Demone | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Demone[]>('http://localhost:3000/demoni')
      .subscribe(data => {
        this.demoni = data;
      });
  }

  mostraDettagli(demone: Demone) {
    this.demoneSelezionato = demone;
  }
}