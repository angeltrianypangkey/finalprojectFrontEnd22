import React from 'react'

function Galeri() {
  return (
    <div id="portfolio" className="paddsection">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Gallery</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../img/angel/angel.1.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="../img/angel/angel.1.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../img/angel/fam.3.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="../img/angel/fam.3.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../img/angel/angel.3.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="../img/angel/angel.3.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="../img/angel/angel.4.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="../img/angel/angel.4.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="../img/angel/angel.5.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="../img/angel/angel.5.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="../img/angel/angel.6.jpeg" className="img-fluid" alt />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="../img/angel/angel.6.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus" /></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galeri
