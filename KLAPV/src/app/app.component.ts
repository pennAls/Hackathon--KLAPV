import { Component } from '@angular/core';
import { pages } from './constants/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'KLAPV';
  currentPage: pages = pages.QUEM_SOMOS;

  Pages = pages;

  goToPage(page: pages): void {
    this.currentPage = page;
    console.log("a")
  }
}
