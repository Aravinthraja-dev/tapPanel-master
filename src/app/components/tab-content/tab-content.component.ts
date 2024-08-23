import { Component, Input } from '@angular/core';
import { DxButtonModule, DxSortableModule, DxTabPanelModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import { DxSortableTypes } from 'devextreme-angular/ui/sortable';
import { TabService, Employee } from '../../services/tab.service';
import { NgIf } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [ DxSortableModule, DxTabPanelModule, DxListModule, DxTemplateModule, NgIf, RouterOutlet ],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css'
})
export class TabContentComponent {

  @Input() employees: Employee[];
  @Input() selectedIndex: number;

  constructor(private service: TabService) {
    this.employees = [];
    this.selectedIndex = 0;
  }

  onTabDragStart(e: DxSortableTypes.DragStartEvent) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTabDrop(e: DxSortableTypes.ReorderEvent) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }


  closeButtonHandler(itemData: Employee) {
    const index = this.employees.indexOf(itemData);

    this.employees.splice(index, 1);
    if (index >= this.employees.length && index > 0) this.selectedIndex = index - 1;
  }

  showCloseButton() {
    return this.employees.length >= 1;
  }

  onTabChange(content: Employee){

  }

}
