
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  OnInit,Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrl: './propietarios.component.scss'
})
export class PropietariosComponent implements OnInit{

  public Propietario: FormGroup = this.Propietarios.group({
    //  Propietario = this.Propietarios.group({
    IdTipIdentificacion: ['', [Validators.required]],
    NumIdentificacion: ['', [Validators.required], Validators.pattern('[a-zA-Z0-9]*')],
    PNombre: ['', [Validators.required,   Validators.minLength(2)], Validators.pattern('[a-zA-Z0-9]*') ],
    SNombre: ['', [Validators.required,   Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]*')]],
    PApellido: ['', [Validators.required,  Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]*')]],
    SApellido: ['', [Validators.required,  Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]*')]]

    
  });

  ListaIdentificacion=[
    {IdTipIdentificacion:1, Abreviacion:'CC'},
    {IdTipIdentificacion:2, Abreviacion:'CE'},
    {IdTipIdentificacion:3, Abreviacion:'PA'},
    {IdTipIdentificacion:4, Abreviacion:'NI'}
  ]

  submitForm: boolean = false;

  private modalService = inject(NgbModal);
  constructor(
    public Propietarios: FormBuilder
  
  
  ) {
  }

  ngOnInit(): void {
    console.log(this.Propietario.value)
    }
 
    isValidField(field:string ){
     
     return this.Propietario.controls[field].errors 
     && this.Propietario.controls[field].touched;
    }
 
    getFieldError( field: string ): string | null {
 
     if ( !this.Propietario.controls[field] ) return null;
 
     const errors = this.Propietario.controls[field].errors || {};
 
     for (const key of Object.keys(errors) ) {
       switch( key ) {
         case 'required':
           return 'Este campo es requerido';
 
         case 'minlength':
           return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
       }
     }
 
     return null;
   }
 
 
   opend(content: TemplateRef<any>) {
     this.modalService.open(content, { size: 'lg', scrollable: true });
   }
  
 
   saveUser(){
   this.submitForm  = true;
   let date= new Date();
   debugger
     if (this.submitForm && this.Propietario.valid) {
       this.Propietario.markAllAsTouched();//es un método que se puede utilizar en un formulario 
       //reactivo de Angular para marcar todos los controles como "touched", lo que desencadena
       // la validación y muestra los mensajes de error si existen
       return;
     
     } else {
       alert("Campos obligatorios.")
     }
   }
 

}
