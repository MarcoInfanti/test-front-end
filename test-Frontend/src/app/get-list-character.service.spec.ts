import { TestBed } from '@angular/core/testing';

import { GetListCharacterService } from './get-list-character.service';

describe('GetListCharacterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListCharacterService = TestBed.get(GetListCharacterService);
    expect(service).toBeTruthy();
  });
});
