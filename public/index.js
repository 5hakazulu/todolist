
// see notes.txt
function stringifyFormData(fd) {
  const data = {
    name: fd.get('name'),
    address: fd.get('address'),
    cellphone: fd.get('cellphone'),
    email: fd.get('email'),
  };
  return JSON.stringify(data, null, 4);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  console.log(stringified);
};

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
