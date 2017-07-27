import { Injectable } from '@angular/core';
import { Headers, RequestOptions} from '@angular/http';
import { environment } from '../../environments/environment';

// Se utiliza para parsear los DateTime ya que por defecto no lo hace.
@Injectable()
export class DateTimeParseHelper {

    dateReviver(key, value) {
        var a;
        if (typeof value === 'string') {
            //console.log(value);
            //console.log(key);
            a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.?(\d{3})?-\d{2}:\d{2}$/.exec(value);
            if (a) {
                //console.log(a);
                //return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                //                +a[5], +a[6], (+a[7] ? +a[7]: 0) ));
                return new Date(value);
            }
        }
        return value;
    };    
}
