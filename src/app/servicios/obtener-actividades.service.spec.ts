import { TestBed } from '@angular/core/testing';

import { ObtenerActividadesService } from './obtener-actividades.service';

describe('ObtenerActividadesService', () => {
  let service: ObtenerActividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerActividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
