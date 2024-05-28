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
  selectedItemsList: ISelectItem[] = [];
  @Input() itemList: ISelectItem[] = [];
  @Output() itemsSelected = new EventEmitter<ISelectItem[]>();

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    if (value && Array.isArray(value)) {
      this.selectedItemsList = value;
    } else {
      this.selectedItemsList = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  addItem(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).selectedIndex;
    const selectedItem = this.itemList[selectedIndex - 1];
    const itemAlreadyExist = this.selectedItemsList.find(item => item.value === selectedItem.value)
    if (!itemAlreadyExist) {
      this.selectedItemsList.push(selectedItem);
      this.itemsSelected.emit(this.selectedItemsList);
      this.onChange(this.selectedItemsList);
    }
  }

  removeItem(itemToRemove: ISelectItem) {
    this.selectedItemsList = this.selectedItemsList.filter(item => item.value !== itemToRemove.value);
    this.itemsSelected.emit(this.selectedItemsList);
    this.onChange(this.selectedItemsList);
  }
}
