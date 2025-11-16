function Contact() {
  const handleinput = (formData) => {
    formData.preventDefault();
    console.log(formData.entries());
    const forminputData = Object.fromEntries(formData.entries())
    console.log(forminputData);
  }
  return (
    <div className="contact">
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">

          <form onSubmit={handleinput}>
            <input type="text" placeholder="Enter Name" name="name"
              required autoComplete="false" className="form-control"
            />
            <input type="text" placeholder="Enter Email" name="email"
              required autoComplete="false" className="form-control"
            />
            <textarea className="form-control" name="message" rows="10"
              placeholder="Enter Message" required autoComplete="off" >

            </textarea>
            <button type="submit" value="send">Send</button>
          </form>

        </div>

      </section>
    </div>
  )
}
export default Contact;