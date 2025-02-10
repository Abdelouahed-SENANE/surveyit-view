import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly TOKEN_KEY = 'token';
  private readonly ROLES_KEY = 'roles';

    setToken(token : string) : void {
        localStorage.setItem(this.TOKEN_KEY , token)
    }
    getToken() : string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    setRoles(roles : string[]) : void {
        localStorage.setItem(this.ROLES_KEY , JSON.stringify(roles))
    }
    getRoles() : string[]  {
        const strRoles = localStorage.getItem(this.ROLES_KEY);
        return strRoles ? JSON.parse(strRoles) : []
    }

    clear() : void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.ROLES_KEY)
    }

    hasCredentiels() : boolean{
        return localStorage.getItem(this.TOKEN_KEY) !== null && localStorage.getItem(this.ROLES_KEY) !== null
    }

}
