import { TestBed } from '@angular/core/testing';

import { ServicioDosService } from './servicio-dos.service';

describe('ServicioDosService', () => {
  let service: ServicioDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
