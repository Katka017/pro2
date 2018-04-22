import {ContactsListComponent} from './list.component';
//import { editContactModule } from '../edit/edit.module';

export const contactsListModule = angular
.module ('app.contacts.list', [
    // editContactModule.name,
])
.component ('listContacts', new ContactsListComponent());