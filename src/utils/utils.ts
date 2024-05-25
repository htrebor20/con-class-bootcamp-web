import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { IBasicElement, ISelectItem } from 'src/utils/interfaces/genericInterfaces';

export const createSelectList = (list: any[]): ISelectItem[] => {
    return list.map((item) => ({
        value: item.id,
        label: item.name
    }));
};

export const minArrayLengthValidator = (minLength: number) => {
    console.log("minArrayLengthValidator: ");
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value || control.value.length < minLength) {
            return { minArrayLength: { requiredLength: minLength, actualLength: control.value ? control.value.length : 0 } };
        }
        return null;
    };
}

export const getError = (field: string, form: FormGroup): string => {
    const errors = form.get(field)?.errors
    if (errors) {
        if (errors['required']) {
            return "El campo es requerido"
        }
        if (errors['maxlength']) {
            return "Longitud maxima es " + errors['maxlength'].requiredLength
        }
        if (errors['minArrayLength']) {
            return `Selecciona minimo ${errors['minArrayLength'].requiredLength} elementos`
        }
    }
    return ''
}