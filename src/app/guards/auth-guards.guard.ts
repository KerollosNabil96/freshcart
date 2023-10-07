import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardsGuard: CanActivateFn = (route, state) => {
 const _Router = inject(Router)
  if(localStorage.getItem('token')!== null){
    return true;
  }else{
    _Router.navigate(["/login"])

    return false;
  }
};
