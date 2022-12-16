import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WishlistComponent } from '../Components/wishlist/wishlist.component';
import { WishlistService } from './wishlist.service';

describe('WishlistService', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations:[WishlistService],imports:[WishlistComponent,HttpClientModule]});
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
