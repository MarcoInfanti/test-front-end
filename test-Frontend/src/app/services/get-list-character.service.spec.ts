import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { GetListService } from './get-list-character.service';
import { CasasComponent } from '../casas/casas.component';
import { ListaProfesoresComponent } from '../lista-profesores/lista-profesores.component';
import { ListaEstudiantesComponent } from '../lista-estudiantes/lista-estudiantes.component';


describe('GetListCharacterService', () => {

  httpService : HttpClientTestingModule;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
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
