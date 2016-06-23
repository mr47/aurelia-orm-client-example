//import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {EntityManager} from 'aurelia-orm';

@inject(EntityManager)
export class Welcome {

  constructor (entityManager) {
    this.entityManager = entityManager;
    this.contactRepository = entityManager.getRepository('contact');
    this.contactRepository
      .find()
      .then((contacts)=>{
          console.log(contacts);
          this.contacts = contacts;
      })
  }
  // For router
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
    let  newContact = this.entityManager.getEntity('contact');
      newContact
      .setData({
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.age
      })
      .getValidation().validate()
      .then(result => {
        console.log(result);
        // Validation passed, persist entity.
        return newContact.save()
      })
      .then(()=>{
        this.contactRepository
          .find()
          .then((contacts)=>{
            this.contacts = contacts;
          })
      })
      .catch(error => {/* Validation failed */});

  }

  destroy (index) {
    this.contacts[index].destroy()
      .then(() => {
        // Display a notification?
      });
  }

}
