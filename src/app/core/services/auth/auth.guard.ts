import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    private readonly AuthService : AuthService = inject(AuthService)
    private readonly router : Router = inject(Router)

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const role = route.data['requiredRole']
        return this.AuthService.isAuthenticated().pipe(
            map(isAuth => {
                if (!isAuth) {
                    this.router.navigate(['auth/login'])
                    return false
                }
                if (role && !this.AuthService.hasRole(role)) {
                    this.router.navigate(['/unauthorized'])
                    return false
                }
                return true
            })
        );

    }

}
