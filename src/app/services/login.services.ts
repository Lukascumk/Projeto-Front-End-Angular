import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environment";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private readonly baseUrl = environment.endPoint;

    constructor(private httpClient: HttpClient) {}

    login(email: string, password: string) {
        return this.httpClient.post<any>(`${this.baseUrl}/CreateToken`, { Email: email, Password: password });
    }
}
