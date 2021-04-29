import { TestBed } from '@angular/core/testing';

import { GetListService } from './get-list-character.service';

describe('GetListCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListService = TestBed.get(GetListService);
    expect(service).toBeTruthy();
  });
});
