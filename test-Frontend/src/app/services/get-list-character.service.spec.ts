import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { GetListService } from './get-list-character.service';

describe('GetListCharacterService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule], 
    providers: [GetListService]
  }));

   it('should be created', () => {
    const service: GetListService = TestBed.get(GetListService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: GetListService = TestBed.get(GetListService);
    expect(service.getCharacters).toBeTruthy();
   });

   
});
