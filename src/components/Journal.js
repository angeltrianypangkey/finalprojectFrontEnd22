import React from 'react'

function Journal() {
  return (
    <div id="journal" className="text-left paddsection">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Journal</h2>
        </div>
      </div>
      <div className="container">
        <div className="journal-block">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="journal-info">
                <a href="blog-single.html"><img src="../img/angel/fam.2.jpeg" className="img-responsive" alt="img" /></a>
                <div className="journal-txt">
                  <h4><a href="blog-single.html">SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
                  <p className="separator">This is my big family.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="journal-info">
                <a href="blog-single.html"><img src="../img/angel/fam.4.jpeg" className="img-responsive" alt="img" /></a>
                <div className="journal-txt">
                  <h4><a href="blog-single.html">WE'RE GONA MAKE DREAMS COMES</a></h4>
                  <p className="separator">The memories when we went to Japan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="journal-info">
                <a href="blog-single.html"><img src="../img/angel/fam.5.jpeg" className="img-responsive" alt="img" /></a>
                <div className="journal-txt">
                  <h4><a href="blog-single.html">GOD IS GOOD</a></h4>
                  <p className="separator">This picture was taken in February
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal
