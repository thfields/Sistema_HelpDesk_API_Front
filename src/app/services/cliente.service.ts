import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Cliente } from "../models/cliente";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: "root",
})
export class ClienteService {
        baseUrl: String = environment.baseUrl;
      
        constructor(private http: HttpClient, private snack: MatSnackBar) {}

        findAll(): Observable<Cliente[]> {
            const url = this.baseUrl + "/clientes";
            return this.http.get<Cliente[]>(url);
        }

        findById(id: any):Observable<Cliente>{
            const url = `${this.baseUrl}/clientes/${id}`;
            return this.http.get<Cliente>(url);
        }

    
        message(msg: String): void {
            this.snack.open(`${msg}`, "OK", {
              horizontalPosition: "end",
              verticalPosition: "top",
              duration: 4000
            });
        }
}