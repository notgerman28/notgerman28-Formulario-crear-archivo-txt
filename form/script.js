function validateForm(event) {
    let isValid = true;

    clearErrors();

    const nombre = document.getElementById('nombre').value.trim();
    if (nombre === '') {
        showError('nombre-error', 'El nombre es requerido');
        isValid = false;
    } else if (nombre.length < 2 || nombre.length > 50) {
        showError('nombre-error', 'El nombre debe tener entre 2 y 50 caracteres');
        isValid = false;
    }

    const correo = document.getElementById('correo').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo === '') {
        showError('correo-error', 'El correo electrónico es requerido');
        isValid = false;
    } else if (!emailRegex.test(correo)) {
        showError('correo-error', 'Ingrese un correo electrónico válido');
        isValid = false;
    }

    const telefono = document.getElementById('telefono').value.trim();
    const phoneRegex = /^(809|849|829)-\d{3}-\d{4}$/;
    if (telefono === '') {
        showError('telefono-error', 'El teléfono es requerido');
        isValid = false;
    } else if (!phoneRegex.test(telefono)) {
        showError('telefono-error', 'El teléfono debe comenzar con 809, 849 o 829 y tener el formato XXX-XXX-XXXX');
        isValid = false;
    } else {
        const errorElement = document.getElementById('telefono-error');
        errorElement.textContent = '';
        errorElement.classList.remove('active');
    }

    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        showError('genero-error', 'Seleccione un género');
        isValid = false;
    }

    const comentarios = document.getElementById('comentarios').value.trim();
    if (comentarios && comentarios.length < 10) {
        showError('comentarios-error', 'Los comentarios deben tener al menos 10 caracteres');
        isValid = false;
    }


    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('active');
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(errorElement => {
        errorElement.classList.remove('active');
        errorElement.textContent = '';
    });
}
