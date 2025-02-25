document.addEventListener('DOMContentLoaded', () => {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const agregarTareaBtn = document.getElementById('agregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    agregarTareaBtn.addEventListener('click', agregarTarea);
    nuevaTareaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarTarea();
        }
    });

    function agregarTarea() {
        const tareaTexto = nuevaTareaInput.value.trim();
        if (tareaTexto !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
        <span>${tareaTexto}</span>
        <div class="actions">
          <button class="edit">Editar</button>
          <button class="delete">Eliminar</button>
        </div>
      `;
            listaTareas.appendChild(li);
            nuevaTareaInput.value = '';
            agregarEventosEditarEliminar(li);
        }
    }

    function agregarEventosEditarEliminar(li) {
        const editBtn = li.querySelector('.edit');
        const deleteBtn = li.querySelector('.delete');
        const span = li.querySelector('span');

        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        editBtn.addEventListener('click', () => {
            const nuevoTexto = prompt('Editar tarea:', span.textContent);
            if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
                span.textContent = nuevoTexto.trim();
            }
        });
    }
});