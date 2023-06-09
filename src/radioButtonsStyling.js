export function radioButtonsStyling() {
    const sections = document.querySelectorAll(".quiz-side__body__form-blocks__block__answers");
    const sectionRadios = {};
    
    sections.forEach((section) => {
      const radios = section.querySelectorAll("input[type='radio']");
      sectionRadios[section.id] = radios;
      console.log(sectionRadios)
    
      radios.forEach((radio) => {
        radio.addEventListener("click", () => {
          const checkedRadio = section.querySelector("input[type='radio']:checked");
          if (checkedRadio) {
            sectionRadios[section.id].checked = checkedRadio;
            console.log(sectionRadios)
          } else {
            sectionRadios[section.id].checked = null;
          }
    
          sectionRadios[section.id].forEach((r) => {
            const div = r.parentNode;
            if (r === sectionRadios[section.id].checked) {
              div.classList.add("quiz-side__body__form-blocks__block__answers__answer--checked");
            } else {
              div.classList.remove("quiz-side__body__form-blocks__block__answers__answer--checked");
            }
          });
        });
      });
    });
    
}
