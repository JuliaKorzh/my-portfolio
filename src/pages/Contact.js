

const Contact = () => {
   return ( 
      <main className="section section-contacts">
      <div className="container">
         <div className="contacts__inner">
            <h2 className="title-section">Contacts</h2>
            <h3 className="contacts__title">Location</h3>
            <p className="contacts__info">Palma de Mallorca, Spain</p>
            <h3 className="contacts__title">Call / WhatsApp</h3>
            <a className="contacts__info" href="tel:+34610314476">+34 610-31-44-76</a>
            <h3 className="contacts__title">Email</h3>
            <a className="contacts__info" href="mailto:korzhiul@gmail.com" >korzhiul@gmail.com</a>
         </div>
      </div>
   </main>
    );
}
 
export default Contact;