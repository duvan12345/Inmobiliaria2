import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  OnInit,Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Departamento } from './../models/Departamento';
import {Observable, of, OperatorFunction} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-agregar-inmobiliaria',
  templateUrl: './agregar-inmobiliaria.component.html',
  styleUrl: './agregar-inmobiliaria.component.scss'
})
export class AgregarInmobiliariaComponent implements OnInit{

  BusquedaDepartamento = '';
  Reporte = this.AInmobiliaria.group({
    IdDepartamento: ['',[Validators.required]],
    IdCiudad: ['', [Validators.required]]

  });
    // Dirreccion: ['', [Validators.required]],
    // IdTipInmueble: [ [Validators.required]],
    // IdTipOferta: [ [Validators.required]],
    // SuperficieMetrosCuadrados: ['', [Validators.required]],
    // Precio: ['', [Validators.required]],
    // NumHabitaciones: ['', [Validators.required]],
    // NumBaño: ['', [Validators.required]],

    // Cocina: ['',[Validators.required]],
    // Sala: ['',[Validators.required]],
    // Comedor: ['',[Validators.required]],
    // Estudio: ['',[Validators.required]],
    // NumParqueadero: ['', [Validators.required]],
    // NumOficinas: ['', [Validators.required]],
    // CapacidadMetroCubicos: ['', [Validators.required]],
    // IdEstrado: [[Validators.required]],


   
    
  // });
  model: FormControl = new FormControl();
  // Departamentos: Departamento[] =[];
  Departamentos: Departamento[] = [{IdDepartamento:1, NombreDepartamento:'Casanare'},
    {IdDepartamento:2, NombreDepartamento:'Arauca'}]
 

  submitForm: boolean = false;

  private modalService = inject(NgbModal);
  constructor(
    public AInmobiliaria: FormBuilder
  
  
  ) {
  }

  ngOnInit(): void {
    
    this.model.valueChanges

 
  }

  guardarSeleccion(resultado: any) {
    this.Reporte.patchValue({
      IdDepartamento: resultado.IdDepartamento // Suponiendo que el objeto resultado tenga una propiedad NombreDepartamento
    });
  }
   
  opend(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }
 

  saveUser(){
  this.submitForm  = true;
  console.log(this.Reporte.value);
  let date= new Date();
    if (this.submitForm && this.Reporte.valid) {
  
     
    } else {
      alert("Campos obligatorios.")
    }
  }
   
  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     tap(() => this.searching = true),
  //     switchMap(term =>
  //       this._service.search(term).pipe(
  //         tap(() => this.searchFailed = false),
  //         catchError(() => {
  //           this.searchFailed = true;
  //           return of([]);
  //         }))
  //     ),
  //     tap(() => this.searching = false)
  //   )

  //   formatter = (x: { id: number, title: string }) => {
  //     if (x.id) {
  //       return `${x.title}`;
  //     }
  //     return '';
  //   }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
 
      map(term => term.length < 1 ? []
        : this.Departamentos.filter(dep => dep.NombreDepartamento.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

    formatter = (x: { IdDepartamento: number, NombreDepartamento: string }) =>
      {
        if (x.IdDepartamento) {
          return `${x.NombreDepartamento}`;
        }
        return '';
      }
      

       
}
