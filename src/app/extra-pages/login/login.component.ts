import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService, /*AlertService*/ } from "../../_services/index";
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'my-page-login',
  styles: [],
  templateUrl: './login.component.html'
})

export class PageLoginComponent {

  email: string;
  password: string;
  returnURL: String = '';
  error: boolean = false;
  errorMg: string = ''; 
  loading: boolean = false; 

  constructor(
    private router: Router,
    private as: AuthenticationService,
    private route: ActivatedRoute,
    public snackBar: MdSnackBar,
    /*private alertService: AlertService,*/
  ) { }

  
  ngOnInit(): void {
    // Se desloguea el usuario.
    this.as.logout();
    // Se guarda la url de retorno.
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';     
  }

  login() {
    console.info('Comienza el proceso de autenticación.');
    console.info(this.email);
    console.info(this.password);
    this.loading = true;
    
    this.as.login(this.email, this.password).subscribe(
                data => {
                    this.loading = false;
                    this.router.navigate([this.returnURL]);
                },
                error => {
                    this.loading = false;
                    /*this.alertService.error(error.status && error.status == 400 ? "Usuario o Contraseña incorrectos." : error, 5000);*/
                    console.error(error.status && error.status == 400 ? "Usuario o Contraseña incorrectos." : error);                    
                });
  }
}
