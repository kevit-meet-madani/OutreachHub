import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  
  const yes = localStorage.getItem('token');
  if(!yes){
    return false;
  }
  return true;
};
