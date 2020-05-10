import { TestBed } from '@angular/core/testing';

import { NgFormsService } from './ng-forms.service';

describe('NgFormsService', () => {
  let service: NgFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
