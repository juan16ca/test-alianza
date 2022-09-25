import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { mockUsers } from '../mocks/mockUser';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retornar informacion de un usuario',
    (done: DoneFn) => {
      service.getAllUsers().subscribe(value => {
        expect(value).toEqual(mockUsers);
        done();
      });
    });

});
