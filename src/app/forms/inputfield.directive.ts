import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { UUID } from "angular2-uuid";

@Directive({
  selector: '[formInputfield]',
  exportAs: 'formInputfield',
  host: {
    'class': 'input-field',
    '[attr.id]': 'id',
    '(focus)': '_focusChanged(true)',
    '(blur)': '_focusChanged(false)',
    '(ngModelChange)': '_inputChanged()'
  }
})
export class InputfieldDirective {

  // Generate UID
  protected _uid = `mat-input-${UUID.UUID()}`;

  // ElementRef
  protected _el: ElementRef;
  protected _renderer: Renderer2;

  // Transport in id
  @Input()
  get id(): string { return this._id }
  set id(value: string) { this._id = value || this._uid }
  protected _id: string;

  constructor(el: ElementRef, renderer: Renderer2) {
    // If ID isn't set - make sure it's set here.
    this.id = this.id;
    
    this._el = el;
    this._renderer = renderer;
  }

  _focusChanged(isFocused: boolean): void {
    if (isFocused) {
      this._renderer.addClass(this._el.nativeElement.parentElement, 'active');
    } else {
      if( this._el.nativeElement.value.length == 0 ) {
        this._renderer.removeClass(this._el.nativeElement.parentElement, 'active');
      }
    }
  }

  _inputChanged(): void {
    if(this._el.nativeElement.value.length > 0) {
      this._renderer.addClass(this._el.nativeElement.parentElement, 'active');
    }
  }

}
