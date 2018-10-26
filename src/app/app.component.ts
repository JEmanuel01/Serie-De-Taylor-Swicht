import { Component } from '@angular/core';
import { Taylor } from './taylor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Serie de Taylor';
    op: number;
    result1:number;
    result2:number;
    divison:number;
    bernoulli:number[] = [1,-1/2,1/6,0,-1/30,0,1/42,0,-1/30,0,5/66,0,-691/2730,0,7/6,0,-3617/510,0,43867/798,0,-174611/330] 
    euler:number[] = [1,0,-1,0,5,0,-61,0,1385,0,-50521,0,2702765,0,
     -199360981,0,19391512145,0,-2404879675441,0,
     370371188237525,0,-69348874393137901,0,
     15514534163557086905,0,-4087072509293123892361,0,
     1252259641403629865468285,0,
     -441543893249023104553682821]
    taylor: Taylor = {
        n: null,
        x: null,
        result: null,
    };

    factorial(num){
        if(num < 0){
            return -1;
        }
        else if(num == 0){
            return 1;
        }
        else{
            return (num * this.factorial(num - 1));
        }
    }            

    seno(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = Math.pow(-1, this.taylor.n) 
            this.result2 = (2 * this.taylor.n) + 1
            this.result2 = this.factorial(this.result2)
            this.divison = (this.result1/this.result2)
            this.divison = this.divison*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
            this.taylor.result = this.divison;
        }
    }

    coseno(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = Math.pow(-1, this.taylor.n)
            this.result2 = this.factorial(2* this.taylor.n)
            this.divison = (this.result1/this.result2)* Math.pow(this.taylor.x,2*this.taylor.n);
            this.taylor.result = this.divison;
        }
    }

    tangente(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < Math.PI/2){
                this.result1 = this.bernoulli[this.taylor.n *2] *Math.pow(-4, this.taylor.n) *Math.pow(-4, this.taylor.n)-1
                this.result2 = this.factorial(2* this.taylor.n)
                this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x, (2* this.taylor.n)-1)
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la tangente");
            }
        }
    }

    secante(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < Math.PI/2){
            this.result1 = Math.pow(-1, this.taylor.n)*this.euler[this.taylor.n *2]
            this.result2 = this.factorial(2*this.taylor.n)
            this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x,(2*this.taylor.n))
            this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la secante");
            }
        }
    }

    cosecante(dato = this.taylor.n){
        if(dato < 0){
            return(this.taylor.n -1);
        }
        else if(dato == 0){
            return(this.taylor.n);
        }
        else{
            if(0 < this.taylor.x && this.taylor.x < Math.PI){
                this.result1 = ((Math.pow(2, (2*this.taylor.n)-1) * 2) -1)* this.bernoulli[this.taylor.n] * Math.pow(this.taylor.x, (2*this.taylor.n) -1);
                this.result2 = this.factorial(2*this.taylor.n)
                this.divison = (this.result1/this.result2)
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la cosecante");
            }
        }
    }

    arcsin(dato = this.taylor.n){
        if(dato < 0){
            return(this.taylor.n -1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{   
            if(this.taylor.x < 1){     
                this.result1 = this.factorial(2* this.taylor.n)
                this.result2 = Math.pow(4, this.taylor.n)* this.factorial(Math.pow(this.taylor.n, 2))*(2* this.taylor.n +1)
                this.divison = (this.result1/this.result2)*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
                this.taylor.result = this.divison;
            }
        }
    }

    arctan(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
            this.result1 = Math.pow(-1, this.taylor.n)
            this.result2 = 2* this.taylor.n +1
            this.divison = (this.result1/this.result2)*(Math.pow(this.taylor.x,(2*this.taylor.n)+1))
            this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para el arcotangente");
            }
        }
    }

    sinh(dato=this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = 1
            this.result2 = this.factorial(2* this.taylor.n +1)
            this.divison = (this.result1/this.result2)*(Math.pow(this.taylor.x,(2*this.taylor.n)+1));
            this.taylor.result = this.divison;
        }
    }

    coshx(dato= this.taylor.n){
        if(dato < 0){
            return (this.taylor.n - 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = 1
            this.result2 = this.factorial(2* this.taylor.n)
            this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x,(2*this.taylor.n));
            this.taylor.result = this.divison;
        }
    }

    tanm(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
            this.result1 = 1
            this.result2 = 2* this.taylor.n +1
            this.divison = (this.result1/this.result2)*(Math.pow(this.taylor.x,(2*this.taylor.n)+1));
            this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la tangente inversa");
            }
        }
    }

    sinhin(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
                this.result1 = Math.pow(-1, this.taylor.n)*this.factorial(2*this.taylor.n);
                this.result2 =  Math.pow(4, this.taylor.n)* this.factorial(Math.pow(this.taylor.n, 2))*(2* this.taylor.n +1);
                this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x, (2*this.taylor.n)+1);
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para el seno inverso");
            }
        }
    }

    tanhin(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
                this.result1 = 1;
                this.result2 = (2*this.taylor.n)+1;
                this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x, (2*this.taylor.n)+1);
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la tangente inversa");
            }
        }
    }

    e(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = Math.pow(this.taylor.x, this.taylor.n);
            this.result2 = this.factorial(this.taylor.n);
            this.taylor.result = this.result1/this.result2;
        }
    }

    lnyx(dato = this.taylor.n){
        if(dato < 1){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
                this.result1 = Math.pow(-1, this.taylor.n+1);
                this.result2 = this.taylor.n;
                this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x, this.taylor.n);
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para el logaritmo natural");
            }
        }
    }

    lnx(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            this.result1 = 1;
            this.result2 = (2*this.taylor.n)+1;
            this.divison = (this.result1/this.result2)*Math.pow(((this.taylor.x-1)/(this.taylor.x+1)),(2*this.taylor.n)+1);
            this.taylor.result = this.divison*2; 
        }
    }

    w(dato = this.taylor.n){
        if(dato < 1){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < (1/2.7182)){
                this.result1 = Math.pow((-1*this.taylor.n), this.taylor.n-1);
                this.result2 = this.factorial(this.taylor.n);
                this.divison = (this.result1/this.result2)*Math.pow(this.taylor.x,this.taylor.n);
                this.taylor.result = this.divison;
            }else{
                alert("El número está fuera del rango establecido para la funcion de Lambert");
            }
        }
    }

    ax(dato = this.taylor.n){
        if(dato < 0){
            return (this.taylor.n- 1);
        }
        else if(dato == 0){
            return (this.taylor.n);
        }
        else{
            if(this.taylor.x < 1){
                this.taylor.result = Math.pow(this.taylor.x, this.taylor.n);
            }else{
                alert("El número está fuera del rango establecido para la serie geométrica");
            }
        }
    }
}
