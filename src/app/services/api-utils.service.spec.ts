import { TestBed } from '@angular/core/testing';

import { ApiUtilsService } from './api-utils.service';

describe('ApiUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUtilsService = TestBed.get(ApiUtilsService);
    expect(service).toBeTruthy();
  });
});
