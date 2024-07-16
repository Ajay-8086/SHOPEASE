import { Component, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isScrolled:boolean=false
  searchTerm :string=''
  constructor(private searchService:SearchService){}
  // updating the search input 
  onSearchInput(){
    this.searchService.updateSearchTerm(this.searchTerm)
  }
}
