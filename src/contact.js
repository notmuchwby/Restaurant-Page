 export default function contact() {
   const content = document.querySelector('#content');

   const contact = document.createElement('div');


   // title 
   const contactTitle = document.createElement('p');
   contactTitle.id = "contact-title";
   contactTitle.innerHTML = "Contact Us";
   contact.appendChild(contactTitle);

   // text area

   const textArea = document.createElement('div');
   textArea.id = "text-area";
   contact.appendChild(textArea);

   //phone 

   const phone = document.createElement('p');
   phone.id = "phone";
   phone.className = "info";
   phone.innerHTML = "Phone: 1717171717";
   textArea.appendChild(phone);

   // location 

   const location = document.createElement('p');
   location.id = "location";
   location.className = "info";
   location.innerHTML = "Address: Somewhere in Turkey";
   textArea.appendChild(location);

   // email 

   const email = document.createElement('p');
   email.id = "email";
   email.className = "info";
   email.innerHTML = "Email: donerkebab@donerkebablol.com"
   textArea.appendChild(email);

   content.appendChild(contact);

 }