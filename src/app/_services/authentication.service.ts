import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';
import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) { }
 
    login(username: string, password: string) {

        if (environment.debug) console.info('Consumiendo servicio de autenticación.');
        var url = environment.URLAPI + 'users/login';
        if (environment.debug) console.info('URL API: ' + url);
        let body = "email=" + username + "&password=" + password;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        let ahora: Date = new Date();       

        // Consumimos el serviocio de autenticación.
        return this.http.post(url, body, options).map(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);                
                ahora.setSeconds(ahora.getSeconds() + parseInt(response.json().expires_in) - 10);
                if (environment.debug) console.log('El tocken expira en: ' + ahora.toString());
                localStorage.setItem('expires', ahora.toString());
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', username);

                // Obtenemos el objeto Usuario.
                // TODO
            },
            error => {
                if (environment.debug) alert(error.text());
                if (environment.debug) console.error(error.text());
            }
        );
    }
 
    logout() {
        // remove user from local storage to log user out
        if (environment.debug) console.log('Paso por el logout');
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('expires');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        localStorage.removeItem('usuarioLogueado');
    }

    register(user: User){
        if (environment.debug) console.log('Consumiendo el servicio de Usuarios. POST rest/users');
        var url = environment.URLAPI + 'users';
        return this.http.post(url, user).map(
            (response: Response) => response,
            (error: Error) => error);
    }
}
