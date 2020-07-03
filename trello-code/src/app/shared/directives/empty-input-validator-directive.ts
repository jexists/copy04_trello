import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appEmptyInputValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmptyInputValidatorDirective, multi: true}]
})
export class EmptyInputValidatorDirective implements Validator {

    validate(control: AbstractControl): {[key: string]: any} | null {

        const isWhitespace = (control.value || '').trim().length === 0;

        const isValid = !isWhitespace;
        return isValid ? null : { 'isEmpty': true };
    }
}
