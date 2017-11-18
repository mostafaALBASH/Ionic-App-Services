import { Component } from '@angular/core';

import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
      <ion-tab [root]="favoritesPage" tabTitle="حِكمي المفضلة" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="كل الحِكم" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
