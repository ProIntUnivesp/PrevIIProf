import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { AuthenticationService } from './authentication.service';
=======
import { AuthenticationService } from "./AuthenticationService";
>>>>>>> resultado



describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
