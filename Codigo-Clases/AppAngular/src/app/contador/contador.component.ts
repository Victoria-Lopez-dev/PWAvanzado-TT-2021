
import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class AppContador{
    public titulo: string = 'appAngular';
    public numero: number = 50;
    public otroNumero: number = 100;

    sumar(){
        this.numero++;
    }

    restar(){
        this.numero--;
    }

    sumarOtro(){
        this.otroNumero++;
    }

    restarOtro(){
        this.otroNumero--;
    }
}
