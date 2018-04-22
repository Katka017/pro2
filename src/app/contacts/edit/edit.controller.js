import {AddContactController} from './add/add.controller';
import { AddContactController } from '../add/add.controller';

export class EditContactController extends AddContactController {
     constructor (contactsService, $state, $location, $stateParams, $scope ){
         super(contactsService, $state);
         this.$stateParams=$stateParams;
         this.$scope=$scope;
     }

     $onInit =() => {
         this.id = this.$stateParams.id;
         const contacts = this.contactsService.contacts;
         this.index =contacts.map(contact=contact.id).index0f(this.id);
         this.backup= contacts[this.index];

         this.name=contacts[this.index].name;
         this.phone=contacts[this.index].phone;
     }

     edit = () => {
         this.contactsService.contacts[this.index].name= this.name;
         this.contactsService.contacts[this.index].phone=this.phone;
         this.$state.go('list');
     }

     reset = () => {
        this.name=this.backup.name;
        this.phone=this.backup.phone;
     }
}