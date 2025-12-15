const degrees = async () => {
  try {
    const res = await fetch('../assets/degrees.json');
    const data = await res.json();
    // Esto invierte el orden del array json, trayendo el ultimo en primer lugar
    const reversedData = data.reverse();
    return reversedData;
  } catch (error) {
    return [];
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  const degreeContainer = document.querySelector('#studiesCards');
  const data = await degrees();

  data.forEach((element) => {
    const { img, title, descrip, institution, year } = element;
    return (degreeContainer.innerHTML += `
          <div class="studies-cardscontainer col-sm-8 col-md-24 col-lg-3">
            <div class="studies-cardbox">
              <span></span>
              <div class="studies-wrapp">
                <img
                  src="${img}"
                  alt="Imagen de diploma/titulo"
                  class="study-cardimg"
                />
                <a
                  href="imgs/certificado_js_udemy.jpg"
                  download="certificado_js_udemy"
                  class="studies-download-certificate-btn"
                >
                  <svg
                    viewBox="0 0 256 256"
                    height="32"
                    width="38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="study-cardtexts">
                <h2 class="study-cardtitle">
                  ${title} 
                </h2>
                <h3 class="study-cardinstitution">
                ${institution} | ${year}</h3>
                <div class="study-carddescripbox">
                  <p class="study-carddescrip">
                    ${descrip}
                  </p>
                </div>
              </div>
            </div>
          </div>`);
  });
});
