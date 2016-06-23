import {Entity, name, validatedResource, association} from 'aurelia-orm';
import { ensure } from 'aurelia-validation';

@validatedResource()
export class Contact extends Entity {

  @ensure(it => it.isNotEmpty().hasLengthBetween(3, 20))
  firstname = null;

  @ensure(it => it.isNotEmpty().hasLengthBetween(3, 20))
  lastname = null;

  @ensure(it => it.isNotEmpty())
  age = null;

}
