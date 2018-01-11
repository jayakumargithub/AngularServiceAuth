import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate() {
    const user = this.authService.currentUser;
    if (user && user.admin) {return true; }

    this.router.navigate(['/no-access'])
  return false;
  }
}
