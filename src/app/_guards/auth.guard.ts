import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Esta guarda es utilizada en el routing para saber si se puede acceder
// al recurso o no. Si el token venció, retorna false.
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Si el token aún es válido.
        if ((new Date(localStorage.getItem('expires')).getTime() - new Date().getTime()) > 0) {            
            return true;
        }

        // Si el token no es válido se redirecciona al login con la url de retorno que corresponda.
        this.router.navigate(['/session/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}