export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>📬 CONTACT</h2>
      <div
        className="contact-container"
        style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}
      >
        {/* Form */}
        <form style={{ flex: 1 }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>

        {/* Photo */}
        <div className="contact-photo" style={{ flexShrink: 0 }}>
          <img
            src= "myphoto.jpeg"
            alt="Your Photo"
            style={{ width: '150px', borderRadius: '50%' }}
          />
        </div>
      </div>
    </section>
  );
}
