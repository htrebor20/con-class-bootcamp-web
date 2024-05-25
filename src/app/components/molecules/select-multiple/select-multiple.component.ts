import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectItem } from '../../../../utils/interfaces/genericInterfaces';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html',
  styleUrls: ['./select-multiple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleComponent),
      multi: true
    }
  ]
})
export class SelectMultipleComponent implements ControlValueAccessor, OnInit {
  selectedItems: ISelectItem[] = [];
  @Input() itemList: ISelectItem[] = [];
  @Output() itemsSelected = new EventEmitter<ISelectItem[]>();

  constructor() { }

  ngOnInit(): void {
  }

  // Métodos de ControlValueAccessor
  writeValue(value: any): void {
    if (value && Array.isArray(value)) {
      this.selectedItems = value;
    } else {
      this.selectedItems = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementar si es necesario
  }

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  addItem(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    const selectedItem = this.itemList[selectedIndex];
    const itemAlreadyExist = this.selectedItems.find(item => item.value === selectedItem.value)
    if (!itemAlreadyExist) {
      this.selectedItems.push(selectedItem);
      this.itemsSelected.emit(this.selectedItems);
      this.onChange(this.selectedItems); // Llamar a onChange cuando el valor cambia
    }
  }

  removeItem(itemToRemove: ISelectItem) {
    this.selectedItems = this.selectedItems.filter(item => item.value !== itemToRemove.value);
    this.itemsSelected.emit(this.selectedItems);
    this.onChange(this.selectedItems); // Llamar a onChange cuando el valor cambia
  }
}
