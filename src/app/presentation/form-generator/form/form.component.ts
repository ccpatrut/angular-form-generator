import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startCase } from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormGroupModel } from '../model/form-field.input';
import { AngularFormTransformerService } from '../service/angular-form-transformer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Input() groups: Array<FormGroupModel>;
  @Output() values = new EventEmitter<any>();

  form: FormGroup;
  constructor(
    private readonly angularFormGroupService: AngularFormTransformerService
  ) {}

  ngOnInit(): void {
    this.form = this.angularFormGroupService.toFormGroup(this.groups);
    this.form.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => this.values.emit(this.form.getRawValue()))
      )
      .subscribe();
  }

  trackByFn(index) {
    return index;
  }

  getLabel(group: FormGroupModel): string {
    return startCase(group.name);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

