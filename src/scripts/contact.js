export default function renderContact() {
  const pageContact = document.createElement('div');

  pageContact.innerHTML = `
  <p>Contact Information:</p><br><br>
  
<p>"The Rustic Garden"</p>
<p>Address: 123 Blossom Lane, Serenity Gardens, Tranquilville</p>
<p>Phone: +1 (555) 123-4567</p>
<p>Email: info@therusticgarden.com</p>
<p>Website: www.therusticgarden.com</p><br><br>

<p>Opening Hours:</p>
<p>Monday to Saturday: 11:00 AM - 10:00 PM</p>
<p>Sunday: Closed</p><br><br>

<p>For reservations or any inquiries, please contact us via phone or email.<br>
  We look forward to welcoming you to our serene and enchanting dining experience at The Rustic Garden.</p>
  `;

  pageContact.setAttribute('id', 'text-content');

  return pageContact;
}
