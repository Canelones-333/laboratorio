const agendaForm = document.getElementById('agendaForm');
const eventInput = document.getElementById('eventInput');
const dateInput = document.getElementById('dateInput');
const eventList = document.getElementById('eventList');
var eventId = 0;
const events = [];

function borrar(id) {
   console.log(id);
   const evento = document.getElementById(id);
   evento.remove();
}

// Agregar un tin de evento cuando el formulario se envíe
agendaForm.addEventListener('submit', function (e) {
   e.preventDefault(); // Evitar el comportamiento por defecto del formulario (recargar la página)

   // Obtener los valores de los inputs
   const eventName = eventInput.value;
   const eventDate = dateInput.value;

   console.log(eventName, eventDate);

   // Crear un nuevo elemento li para el evento
   const listItem = document.createElement('li');
   listItem.id = 'evento' + eventId;
   listItem.innerHTML = `${eventName} - ${eventDate} <button id="evento${eventId}" class="deleteBtn" onclick="borrar(this.id)">Eliminar</button>`;
   eventId += 1;

   // Agregar el nuevo evento
   eventList.appendChild(listItem);

   // Limpiar los campos del formulario después de agregar el evento
   eventInput.value = '';
   dateInput.value = '';
});
