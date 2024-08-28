const proyects = async () => {
  try {
    const res = await fetch("../assets/proyects.json");
    const data = await res.json();
    /* Esto invierte el orden del array json, trayendo el ultimo en primer lugar*/
    const reversedData = data.reverse();
    return reversedData;
  } catch (error) {
    return [];
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const proyectContainer = document.querySelector("#proyectsContainer");
  const data = await proyects();

  data.forEach((element) => {
    const { img, title, descrip, code, view } = element;
    return (proyectContainer.innerHTML += `
          <div class="proyect-card col-sm-5 col-lg-3">
            <img src="${img}" alt="${title}" />

            <div class="proyect-cardcontent">
              <h2 class="proyect-cardtitle">${title}</h2>
              <p class="proyect-cardescrip">
                ${descrip}
              </p>
              <div class="proyect-btns">
                <a
                  href="${code}"
                  class="proyect-cardlink"
                  target="_blank"
                  >codigo</a
                ><a
                  href="${view}"
                  class="proyect-cardlink"
                  target="_blank"
                  >pagina</a
                >
              </div>
            </div>
          </div>
            `);
  });
});
