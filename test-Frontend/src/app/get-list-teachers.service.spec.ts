import { TestBed } from '@angular/core/testing';

import { GetListTeachersService } from './get-list-teachers.service';

describe('GetListTeachersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListTeachersService = TestBed.get(GetListTeachersService);
    expect(service).toBeTruthy();
  });
});
