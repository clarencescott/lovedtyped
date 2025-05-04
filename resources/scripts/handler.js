document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      ltid: form.ltid.value,
      message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbxzGqGiR9RQjgozxvWGVdFcMWEt8c6iEKM0AE6Vtvf032Je5p17MXmnu_QpavQPs2W-/exec", {
      method: "POST",
      body: JSON.stringify(data),
      contentType: "application/json"
    }).then(() => {
      // Redirect to Square payment with LT-iD in item note
      const squareCheckoutURL = `https://square.link/u/dto3vSxW?src=embed?note=${encodeURIComponent(data.ltid)}`;
      window.location.href = squareCheckoutURL;
    });
  });


  /* LT-ID GENERATION */
  function generateLTID() {
    const now = new Date();
    const id = `LT-${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
    document.getElementById('ltid').value = id;
  }

  document.querySelector("form").addEventListener("submit", generateLTID);

  // Copy LT-ID from popup to main form before submit
document.querySelector("form[action*='script.google.com']").addEventListener("submit", function() {
    const popupLTID = document.querySelector("#contact-form #ltid").value;
    const mainLTIDField = document.querySelector("input[name='LT_ID']");
    if (mainLTIDField) {
      mainLTIDField.value = popupLTID;
    }
  });