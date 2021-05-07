import { DateSlashPipe } from './date-slash.pipe';

describe('DateSlashPipe', () => {
  const pipe = new DateSlashPipe();


  it('create an instance', () => {
    const pipe = new DateSlashPipe();
    expect(pipe).toBeTruthy();
  });


  it('transforms empy dateOfBirth and yearOfBirth to an -', () => {
    let dateOfBirth = '';
    let yearOfBirth = '';

    let value = pipe.transform(dateOfBirth, yearOfBirth)

    expect(value).toEqual('-')

  })

  it('tranforms DateOfBirth to an age ', () => {

    let dateOfBirth = '22/10/1994'
    let yearOfBirth = '';

    let value = pipe.transform(dateOfBirth, yearOfBirth)

    expect(typeof(value)).toEqual(typeof(26))

  })


  it('tranforms yearOfBirth to an age ', () => {

    let dateOfBirth = '';
    let yearOfBirth = new Date(1994,1,1).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;

    let value = pipe.transform(dateOfBirth, yearOfBirth)

    expect(value).toEqual(age)

  })




});
