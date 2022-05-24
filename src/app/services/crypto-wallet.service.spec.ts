import { TestBed } from '@angular/core/testing';

import { CryptoWalletService } from './crypto-wallet.service';

describe('CryptoWalletService', () => {
  let service: CryptoWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
