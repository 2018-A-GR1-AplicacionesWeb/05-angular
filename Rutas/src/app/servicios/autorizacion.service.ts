import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";
import {CredencialesService} from "./credenciales.service";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService implements CanActivate {

  constructor(private _credencialesService: CredencialesService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    :
    Observable<boolean> |
    Promise<boolean> |
    boolean {
    console.log('Intenta entrar');
    const permisos = false;
    return permisos;
  }




}
