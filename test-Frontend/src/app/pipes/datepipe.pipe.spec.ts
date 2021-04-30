import { DatepipePipe } from './pipes/datepipe.pipe';

describe('DatepipePipe', () => {
  it('create an instance', () => {
    const pipe = new DatepipePipe();
    expect(pipe).toBeTruthy();
  });
});
