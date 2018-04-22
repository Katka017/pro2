import {v4 as uuid} from 'uuid';

export class ContactsService{
getState = () => {
const data = localStorage.getItem(ContactsService.STORAGE_KEY);
let contacts=[];
if (data){
    try{
        contacts=JSON.parse(data);
       } catch (e){ } 
    }
return contacts;
}

keepState = () => {
    localStorage.setItem(
        ContactsService.STORAGE_KEY,
        JSON.stringify (this.contacts),
    );

};

constructor (){
    this.contacts = this.getState;
}
add = (name,phone) => {
    this.contacts.push( {
        id: uuid(),
        name,
        phone,
    });
    this.keepState;

};

delete = id => {
    const index = this.contacts.map (contact=>contact.id).index0f(id);
    this.contacts.splice(index,1);
    this.keepState();

};
}