import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CommonServiceService } from './services/common.service';
import { CommonModule } from '@angular/common'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeaderBarComponent, CommonModule,
    MatSidenavModule, MatListModule, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  loggedInUser: any;
  sideNavList : any = [];
  constructor(public commonService : CommonServiceService, private router: Router, private route: ActivatedRoute){
  }
  ngOnInit(){
    this.commonService.loggedInUser.subscribe(loggedInUser =>{
      this.loggedInUser = loggedInUser;
      if(!this.loggedInUser){
        this.router.navigate([``], { relativeTo: this.route });
      }
    })
    this.commonService.sideNavList$.subscribe(res => this.sideNavList = res);
  }
  changeOfRoutes(){
    this.commonService.addSideNavList(this.router.url);
  }
}
