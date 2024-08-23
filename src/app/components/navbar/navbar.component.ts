import { Component, enableProdMode } from '@angular/core';
import { Continent, NavbarService, Country } from '../../services/navbar.service';
import { DxTabPanelModule, DxTreeViewModule, DxTemplateModule, DxTabsModule } from 'devextreme-angular';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { Employee, TabService } from '../../services/tab.service';
import { Router, Routes } from '@angular/router';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DxTabPanelModule, DxTreeViewModule, DxTemplateModule, TabContentComponent, DxTabsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  continents: Continent[];
  countryData: Country;
  tabPanelIndex: number;

  allEmployees: Employee[];
  employees: Employee[];
  selectedIndex: number;
  public routes: Routes[] = []

  selectedCountry!: Country;

  constructor(service:NavbarService, private tabService: TabService, private router: Router) {
    this.continents = service.getContinents();
    this.countryData = this.continents[0].items[0];
    this.tabPanelIndex = 0;

    this.allEmployees = tabService.getEmployees();
    this.employees = tabService.getEmployees().slice(0, 0);
    this.selectedIndex = -1;

  }

  changeSelection(e: any) {
    const selectedItem = e.itemData;
    const path = selectedItem.path;
    const selectedOne = this.allEmployees.find(obj => obj.vocherID === selectedItem.itemID); 
    

    if(selectedOne){
      this.employees.push(selectedOne);
      this.selectedIndex = this.employees.length - 1;
      this.router.navigate([path])
    }
  } 
}

