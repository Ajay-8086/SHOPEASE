import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopEase';
  isScrolled:boolean = false
  @HostListener('window:scroll')
  onScroll(){
      // check the user scrolled
      this.isScrolled = window.scrollY > 0
  }
  ngOnInit(){
      // checking the initial scroll 
      this.isScrolled = window.scrollY > 0

  }
}
