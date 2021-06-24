import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameDetailGuard } from './game-detail.guard';

describe('GameDetailGuard', () => {
  let guard: GameDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(GameDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
