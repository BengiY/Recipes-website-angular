import { TestBed } from '@angular/core/testing';

import { CategorysService } from './categorys.service';

describe('CategorysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorysService = TestBed.get(CategorysService);
    expect(service).toBeTruthy();
  });
});
