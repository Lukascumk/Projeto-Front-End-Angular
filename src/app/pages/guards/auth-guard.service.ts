import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);



  /*
  return new Promise(resolve => authService.checkToken().then(() => {
    authService.UsuarioEstaAutentificado().then(status => {
      let redirect: string = state.root.queryParams['redirect'];
      let blnUnAuthorize = !status; // Ajustado para usar a negação de status

      // Redirecionamento
      if (blnUnAuthorize) {
        if (redirect?.length > 0) {
          router.navigate(['login', { redirect }]);
        } else {
          router.navigate(['login']);
        }
      }

      resolve(status);
    }).catch(() => {
      router.navigate(['login']);
      resolve(false);
    });
  }));
};
*/ 
return authService.checkToken().then(() => {
  return authService.UsuarioEstaAutentificado().then(status => {
    if (!status) {
      const redirect = state.url;
      router.navigate(['login'], { queryParams: { redirect } });
    }
    return status;
  }).catch(() => {
    router.navigate(['login']);
    return false;
  });
});
};
