/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotelesServiceService } from './hotelesService.service';

describe('Service: HotelesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelesServiceService]
    });
  });

  it('should ...', inject([HotelesServiceService], (service: HotelesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
