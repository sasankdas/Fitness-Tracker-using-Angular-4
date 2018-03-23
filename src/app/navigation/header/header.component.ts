import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{ Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
@Output()sidenavToggle = new EventEmitter<void>();


isAuth= false;
authSubscription : Subscription; 
  constructor(private authService: AuthService) { }

  ngOnInit() {
this.authService.authChange.subscribe(result=> {
  this.isAuth= result;
});

  }
onToggleSidenav(){
this.sidenavToggle.emit();
}
onlogout(){
  this.authService.logout();
}

ngOnDestroy(){
this.authSubscription.unsubscribe();
}
}
