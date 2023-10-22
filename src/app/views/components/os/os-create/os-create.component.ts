import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent  implements OnInit{
  selected = ''

  prioridade = ''

  tecnicos: Tecnico[] = []

  clientes: Cliente[] = []

  constructor(
    private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  listarTecnicos():void{
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta
    })
  }

  listarClientes(): void{
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta
    })
  }

  
  

}
