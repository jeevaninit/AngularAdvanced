import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private rootfalse:Router) { }
  canActivate(Route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggedin=true;
    if(loggedin){
      return true;
    }
    else {
      this.rootfalse.navigate(['/login']);
      return false;
    }
  }
}

