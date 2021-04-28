import { TestBed } from '@angular/core/testing';

import { GetListStudentsService } from './get-list-students.service';

describe('GetListStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListStudentsService = TestBed.get(GetListStudentsService);
    expect(service).toBeTruthy();
  });
});
