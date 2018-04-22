import {module} from 'angular';
import { ContactsComponent } from "./contacts.component";
import {contactsListModule}  from "./list/list.module";
import {routing} from './contacts.routing';
import {addContactModule}  from "./add/add.module";
import {ContactsService} from "./contacts.service";


export const contactsModule = angular
.module ('app.contacts', [
    contactsListModule.name,
    addContactModule.name,
])
.config (routing)
.component ('contacts', new ContactsComponent())
.service ('contacsService', ContactsService);




