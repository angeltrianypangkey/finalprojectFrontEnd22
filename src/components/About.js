import React from 'react'

function About() {
  return (
    <div id="about" className="paddsection">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 ">
            <div className="div-img-bg">
              <div className="about-img">
                <img src="../img/angel/angel.2.jpeg" className="img-responsive" alt="me" />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-descr">
              <p className="p-heading">I'm a student of Computer Science in Klabat University, who loves puppies, cooking &amp; unique design. I also enjoy crafting brand identities, icons, &amp; ilustration work. </p>
              <p className="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
