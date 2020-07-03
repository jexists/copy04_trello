import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-base',
    template: ''
})
export class BaseComponent {
    

    constructor(
        protected toastService: ToastrService
    ) {
    }

    protected showSuccess(title: string, desc: string) {
        this.toastService.success(title, desc);
    }

    protected showError(title: string, desc: string) {
        this.toastService.error(title, desc);
    }

    protected showWarning(title: string, desc: string) {
        this.toastService.warning(title, desc);
    }

    protected showInfo(title: string, desc: string) {
        this.toastService.info(title, desc);
    }

    protected clearToast(id: number): void {
        this.toastService.clear(id);
    }

}
