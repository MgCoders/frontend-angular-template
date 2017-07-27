import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_models/index'
import { AuthenticationService } from '../../_services/index'

@Component({
  selector: 'my-page-sign-up',
  styles: [],
  templateUrl: './sign-up.component.html'
})

export class PageSignUpComponent implements OnInit {

  usuarioActual: User;
  repetirPassword: string;

  constructor(private as: AuthenticationService,
              private router: Router,) { }

  ngOnInit(): void {
    this.usuarioActual = new User();
    this.repetirPassword = "";
  }

  guardar() {
    console.log(this.usuarioActual);

    // Si las contrasenas no coinciden retornamos error.
    if(!(this.usuarioActual.password === this.repetirPassword)){
      alert("Las contraseñas no coinciden.")
      return;
    }      

    this.as.register(this.usuarioActual).subscribe(
      data => {
        alert('Usuario guardado correctamente.');
        this.router.navigate(['login']);
      },
      error => {
        // this.alertService.error(error.status && error.status == 400 ? "Usuario o Contraseña incorrectos." : error, 5000);
        console.error(error.status && error.status == 400 ? "Usuario o Contraseña incorrectos." : error);
      });
  }
}
