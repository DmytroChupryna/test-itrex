import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageUpdateService } from './local-storage-update.service';

describe('LocalStorageUpdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageUpdateService]
    });
  });

  it('should be created', inject([LocalStorageUpdateService], (service: LocalStorageUpdateService) => {
    expect(service).toBeTruthy();
  }));
});
