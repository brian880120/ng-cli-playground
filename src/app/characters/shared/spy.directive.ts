import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {
    ngOnInit() {
        console.log('on init');
    }

    ngOnDestroy() {
        console.log('on destroy');
    }
}
