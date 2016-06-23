//import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager)
export class Welcome {

  constructor (entityManager) {
    this.contactRepository = entityManager.getRepository('contacts');
    this.newContact        = entityManager.getEntity('contacts');

    this.contactRepository
      .find()
      .then((contacts)=>{
          console.log(contacts);
          this.contacts = contacts;
      })
  }

  // attached (params) {
  //   // Find all articles that belong to category params.category.
  //   this.contactRepository
  //     .find()
  //     .then( contacts => {
  //       console.log(this.contacts);
  //       this.contacts = contacts
  //     });
  // }

  create () {
    // Validate, and persist entity to the server.
    // console.log(this.newContact.getValidation()); // its null
    // this.newContact.getValidation().validate()
    //   .then(result => {
    //     console.log(result);
    //     // Validation passed, persist entity.
    //     return this.newContact.save()
    //   })
    //   .catch(error => {/* Validation failed */});
      this.newContact
      .setData({
        firstname: this.firstname,
        lastname: this.lastname
      })
      .save();

      this.contactRepository
        .find()
        .then((contacts)=>{
          this.contacts = contacts;
        })
  }

  destroy (index) {
    this.contacts[index].destroy()
      .then(() => {
        // Display a notification?
      });
  }

}
