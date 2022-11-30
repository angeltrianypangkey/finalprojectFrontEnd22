import React from 'react'

function Contact() {
  return (
    <div id="contact" className="paddsection">
      <div className="container">
        <div className="contact-block1">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-contact">
                <h2 className="mb-30">GET IN TOUCH</h2>
                <ul className="contact-details">
                  <li><span>21 Eben Heazer, Manibang</span></li>
                  <li><span>Manado, Sulawesi Utara</span></li>
                  <li><span>+62 123-1234-1234</span></li>
                  <li><span>angelcantik@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <div className="form-group contact-block1">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Message" required defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="mt-0">
                    <input type="submit" className="btn btn-defeault btn-send" defaultValue="Send message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
