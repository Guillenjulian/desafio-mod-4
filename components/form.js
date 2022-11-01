//   formDataEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const formData = new FormData(formDataEl);
//     // // CON ENTRIES LO PASO A OBJ
//     const formObject = Object.fromEntries(formData.entries());
//     console.log(formObject);
//     fetch("https://apx-api.vercel.app/api/utils/dwf", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       // CON JSON.stringify parseo a JSON text
//       body: JSON.stringify({
//         to: "guillen.julian1985@gmail.com",
//         message: `Nombre: ${formObject.user},
//              Email: ${formObject.email},
//              Mensaje: ${formObject.message}`,
//       }),
//     }).then((data) => data.json());
//     formDataEl.reset();
//   });

function formCreater(form) {
  const formEl = document.createElement("div");
  formEl.innerHTML = ` 
  <div class="field">
     
     
     
        <form class="control" action="">
            <label class="label">Nombre</label>
            <input class="input" type="text" name= "nombre" placeholder="Nombre" />
            <label class="label">Email</label>
            <input
            class="input is-danger"
            type="email"
            placeholder="Email"
            value="Email@ejemplo"
        /><label class="label">Mesaje</label>
        <textarea class="textarea" placeholder="Mensaje"></textarea>
        <button class="button is-primary is-fullwidth">Enviar</button>
        </form>
        
     
    </div>  `;
  //
  const formDataEl = document.querySelector(".field");
  function sendForm(formDataEl) {
    formDataEl.addEventListener("submit", (E) => {
      console.log(e);
    });
  }
  //sendForm(formDataEl);

  form.appendChild(formEl);
}
