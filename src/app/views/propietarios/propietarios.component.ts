
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  OnInit,Component, TemplateRef, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrl: './propietarios.component.scss'
})
export class PropietariosComponent implements OnInit{

  Propietario = this.Propietarios.group({
    IdTipIdentificacion: [ [Validators.required]],
    NumIdentificacion: ['', [Validators.required, , Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]],
    PNombre: ['', [Validators.required]],
    SNombre: ['', [Validators.required]],
    PApellido: ['', [Validators.required]],
    SApellido: ['', [Validators.required]],
    Usuario: ['', [Validators.required]],
   
    
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
     this.opend
   }
  opend(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg', scrollable: true });
  }
 

  saveUser(){
  this.submitForm  = true;
  let date= new Date();
    if (this.submitForm && this.Propietario.valid) {
  
    //   .createUserWithEmailAndPassword(this.userForm.controls.email.value || "", this.userForm.controls.password.value || "")
    //   .then((result:any) => {
    //     debugger
    //     const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    //       `users/${result.user.uid}`
    //     );
    //     const userData: UserAuth = {
    //       uid: result.user.uid,
    //       email: result.user.email,
    //       displayName: result.user.displayName,
    //       photoURL: result.user.photoURL,
    //       emailVerified: result.user.emailVerified,
    //     };
    //     userRef.set(userData, {
    //       merge: true,
    //     });
        
    //     let saveObj= {
    //       "PriSegApellidos":this.userForm.controls.names.value,
    //       "PriSegNombres":this.userForm.controls.lastNames.value,
    //       "email":this.userForm.controls.email.value,
    //       "estado":true,
    //       "fechaCreacion":date.toISOString().toString().split("T")[0],
    //       "idRol":"2",
    //       "telefono":this.userForm.controls.phone.value,
    //       "uid":result.user.uid
    //     }
    //     this.afStore.collection('infoPersonas').doc(result.user.uid).set(
    //       saveObj
    //     )
    //     alert("Se guardo correctamente.")
    //     this.modalService.dismissAll();
    //   })
    //   .catch((error) => {
    //     // window.alert(error.message);
    //  alert("El correo electrónico ya está en uso en otra cuenta");
    //   });      
    } else {
      alert("Campos obligatorios.")
    }
  }

}
