
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  OnInit,Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface Country {
	id?: number;
	NombreDepartamento: string;
	NombreMunicipio: string;
  Dirreccion: string;
 
  SuperficieMetrosCuadrados: number;
  Precio: number

}



@Component({
  selector: 'app-arriendo-inmobiliaria',
  templateUrl: './arriendo-inmobiliaria.component.html',
  styleUrl: './arriendo-inmobiliaria.component.scss'
})
export class ArriendoInmobiliariaComponent implements OnInit{


  page = 1;
  pageSize = 1;
  collectionSize = 0;
  terminoBusqueda = '';
  private modalService = inject(NgbModal);
 ListIncidentsPagination: Country[] = [];

 ListaArriendo=[
  { NombreDepartamento: 'Casanara', NombreMunicipio: 'Aguazul', Dirreccion:'calle 15 a 11-58', TipoInmueble: 'APARTAMENTO',NombreOferta:'Venta', SuperficieMetrosCuadrados:400, 
  Precio:40000000,NumHabitaciones:2, NumBaño: 20,Cocina:1,Sala:1,Comedor:1, Estudio:1, NumParqueadero:10, NombreCompleto: 'Duvan Alexis Barrera Bernal', NumeroEstrato:1, NumIdentificacion:1116551386, Abreviacion:'CC',NumOficinas:0, CapacidadMetroCubicos:0},
  { NombreDepartamento: 'Casanara', NombreMunicipio: 'Yopal', Dirreccion:'calle 15 a 11-58', TipoInmueble: 'CASA',NombreOferta:'Venta', SuperficieMetrosCuadrados:400, 
  Precio:40000000,NumHabitaciones:2, NumBaño: 2,Cocina:1,Sala:1,Comedor:1, Estudio:0, NumParqueadero:10, NombreCompleto: 'Duvan Alexis Barrera Bernal', NumeroEstrato:1, NumIdentificacion:1116551386, Abreviacion:'CE', NumOficinas:0,CapacidadMetroCubicos:0},
  { NombreDepartamento: 'Casanara', NombreMunicipio: 'Mani', Dirreccion:'calle 15 a 11-58', TipoInmueble: 'LOCAL',NombreOferta:'Venta', SuperficieMetrosCuadrados:400, 
  Precio:40000000,NumHabitaciones:2, NumBaño:0,Cocina:0,Sala:1,Comedor:0, Estudio:1, NumParqueadero:10, NombreCompleto: 'Duvan Alexis Barrera Bernal',NumeroEstrato:2, NumIdentificacion:1116551386, Abreviacion:'CC',NumOficinas:2,CapacidadMetroCubicos:0},
  { NombreDepartamento: 'Casanara', NombreMunicipio: 'Mani', Dirreccion:'calle 15 a 11-58', TipoInmueble: 'BODEGA',NombreOferta:'Venta', SuperficieMetrosCuadrados:400, 
  Precio:40000000,NumHabitaciones:2, NumBaño:0,Cocina:0,Sala:1,Comedor:0, Estudio:1, NumParqueadero:10, NombreCompleto: 'Duvan Alexis Barrera Bernal',NumeroEstrato:20, NumIdentificacion:1116551386, Abreviacion:'CC',NumOficinas:2, CapacidadMetroCubicos:1000}
];

Reporte = this.AI.group({
  NombreDepartamento: ['', [Validators.required]],
  NombreMunicipio: ['', [Validators.required]],
  Dirreccion: ['', [Validators.required]],
  TipoInmueble: ['', [Validators.required]],
  SuperficieMetrosCuadrados: ['', [Validators.required]],
  Precio: ['', [Validators.required]],
  NumHabitaciones: ['', [Validators.required]],
  NumBaño: ['', [Validators.required]],
  NumOficinas: ['', [Validators.required]],
  Cocina: [{value: '', disabled: true},[Validators.required]],
  Sala: [{value: '', disabled: true},[Validators.required]],
  Comedor: [{value: '', disabled: true},[Validators.required]],
  Estudio: [{value: '', disabled: true},[Validators.required]],
  NumParqueadero: ['', [Validators.required]],
  NumeroEstrato: ['', [Validators.required]],
  NombreCompleto: ['', [Validators.required]],
  NumIdentificacion: ['', [Validators.required]],
  Abreviacion: ['', [Validators.required]],
  CapacidadMetroCubicos: ['', [Validators.required]]
  
});




constructor(
  public AI: FormBuilder


) {
}




ngOnInit(): void {
 this.refreshIncident(); 
}



  refreshIncident() {
  
    // if (!this.terminoBusqueda) {
    //   //  console.log(this.ListIncidents)
       
     
      this.ListIncidentsPagination = this.ListaArriendo.map((Country, i) => ({ ...Country })).slice(
        
      // this.ListIncidentsPagination = this.ListaVenta.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize,

      );

    // }

    // const terminoBusquedaLower = this.terminoBusqueda.toLowerCase();
    // return this.ListIncidentsPagination = this.ListaVenta.filter(item =>
    //   item.NombreDepartamento.toLowerCase().includes(terminoBusquedaLower) ||
    //   item.NombreMunicipio.toLowerCase().includes(terminoBusquedaLower) ||
    //   item.Dirreccion.toLowerCase().includes(terminoBusquedaLower) ||
    //   item.SuperficieMetrosCuadrados.toString().toLowerCase().includes(terminoBusquedaLower)||
    //   item.Precio.toString().toLowerCase().includes(terminoBusquedaLower)
    // )
    // // .map((incident, i) => ({ ...incident })).slice(
    // .slice(
    //   // this.ListIncidentsPagination = this.ListIncidents.map((incident, i) => ({ ...incident })).slice(
    //   (this.page - 1) * this.pageSize,
    //   (this.page - 1) * this.pageSize + this.pageSize,
    // );

  }
  openx(NuevoApartamento: TemplateRef<any>) {
    this.modalService.open(NuevoApartamento, { size: 'lg', scrollable: true });
  }

  open(content: TemplateRef<any>, item: any) {

    this.Reporte.controls.NombreDepartamento.setValue(item.NombreDepartamento)
    this.Reporte.controls.NombreMunicipio.setValue(item.NombreMunicipio)

    this.Reporte.controls.Dirreccion.setValue(item.Dirreccion)
    this.Reporte.controls.SuperficieMetrosCuadrados.setValue(item.SuperficieMetrosCuadrados)

    this.Reporte.controls.Precio.setValue(item.Precio)
    this.Reporte.controls.TipoInmueble.setValue(item.TipoInmueble)
    this.Reporte.controls.NumHabitaciones.setValue(item.NumHabitaciones)
    this.Reporte.controls.NumBaño.setValue(item.NumBaño)
    this.Reporte.controls.Cocina.setValue(item.Cocina)
    this.Reporte.controls.Sala.setValue(item.Sala)
    this.Reporte.controls.Comedor.setValue(item.Comedor)
    this.Reporte.controls.Estudio.setValue(item.Estudio)

    this.Reporte.controls.NumParqueadero.setValue(item.NumParqueadero)
    this.Reporte.controls.NumeroEstrato.setValue(item.NumeroEstrato)
    this.Reporte.controls.NombreCompleto.setValue(item.NombreCompleto)
    this.Reporte.controls.NumIdentificacion.setValue(item.NumIdentificacion)
    this.Reporte.controls.Abreviacion.setValue(item.Abreviacion)
    this.Reporte.controls.NumOficinas.setValue(item.NumOficinas)
    this.Reporte.controls. CapacidadMetroCubicos.setValue(item. CapacidadMetroCubicos)

 
    this.modalService.open(content, { size: 'lg', scrollable: true });

  }



  





}
