function addField() {
  const form = document.querySelector("#dynamicForm");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "newField";
  input.placeholder = "Enter value";
  form.appendChild(input);

  //   const inputMsg = document.createElement("input");
  //   inputMsg.type = "text";
  //   inputMsg.name = "newField";
  //   inputMsg.placeholder = "Enter value";
  //   form.appendChild(input);
}

function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  console.log(123);
  let allFilled = true;
  let message = "";

  console.log(inputs);

  inputs.forEach((input) => {
    console.log(input, index);
    if (!input.value) {
      allFilled = false;
      alert(`Please fill all fields!`);
      return;
    }

    message += `Field ${index + 1}: ${input.value}\n`;
  });
}
