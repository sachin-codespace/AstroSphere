
const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');

menuToggle.addEventListener('click', () => {
  navItems.classList.toggle('open');  
  menuToggle.classList.toggle('active');
});




function handleForm(event) {
  event.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  
  let date = document.querySelector('#date').value;
  let time = document.querySelector('#time').value;
  let phone = document.querySelector('#phone').value;
  let subject = document.querySelector('#subject').value;
  let message = document.querySelector('#message').value;

  let response = document.querySelector('.response');
  if (name && email && phone && subject && date) {
    response.style.display = 'block';
    response.innerHTML = `<h1>Form Submitted Successfully!!!</h1>`;
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';
    document.querySelector('#date').value = '';
    document.querySelector('#time').value = '';
    setTimeout(() => {
      response.style.display = 'none';
    }, 5000);
  }
  else {
    response.style.display = 'block';
    response.innerHTML = "<h1>Please fill out all the fields.</h1>";
    response.style.color = 'red';
  }
}