import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject, combineLatest, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DogModel } from '../../models/dog.model';
import { DogService } from '../../services/dog.service';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-dogs',
  styleUrls: ['./dogs.component.scss'],
  templateUrl: './dogs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsComponent {
  readonly dogs$: Observable<DogModel[]> = this._dogService.getAll();
  private _dogDetailsSubject: Subject<DogModel | undefined> = new Subject<
    DogModel | undefined
  >();
  public dogDetails$: Observable<DogModel | undefined> =
    this._dogDetailsSubject.asObservable();
  readonly sameCityDogs$: Observable<DogModel[]> = combineLatest([
    this.dogDetails$,
    this.dogs$,
  ]).pipe(
    map(([dogDetails, dogs]: [DogModel | undefined, DogModel[]]) => {
      if (dogDetails) {
        return dogs.filter((dog) => dog.cityId === dogDetails?.cityId);
      }
      return [];
    })
  );

  constructor(
    private _dogService: DogService,
    private _cityService: CityService
  ) {}

  showDetails(dog: DogModel): void {
    this._dogDetailsSubject.next(dog);
  }
  closeDetails(): void {
    this._dogDetailsSubject.next(undefined);
  }
  removeDog(id: number): void {
    this._dogService.remove(id).subscribe();
    this._dogDetailsSubject.next(undefined);
  }
}
