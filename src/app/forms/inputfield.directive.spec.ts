import { InputfieldDirective } from './inputfield.directive';

describe('InputfieldDirective', () => {
  it('should create an instance', () => {
    const directive = new InputfieldDirective({nativeElement: {}}, null);
    expect(directive).toBeTruthy();
  });
});
