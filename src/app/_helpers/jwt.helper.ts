import { Injectable } from '@angular/core';
import { Headers, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthHelper {
    jwt() {
        // Crea el encabezado de autenticación con el tocken almacenado.
        let currentToken = localStorage.getItem('access_token');
        if (environment.debug) console.log(currentToken);
        if (currentToken) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentToken });
            if (environment.debug) console.log('Jwt --> Se armo el header con el tocken.');
            return new RequestOptions({ headers: headers, params: new URLSearchParams('validateUsr=false') });
        }
    }
}
