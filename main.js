// Código JavaScript para la funcionalidad de envío de correo electrónico

document.addEventListener('DOMContentLoaded', function () {
    // Dirección de correo electrónico de contacto
    const contactEmail = 'ingejavierlb@gmail.com';
    // Selecciona el enlace dentro del elemento del pie de página
    const emailLink = document.querySelector('footer a');

    // Agrega un evento de escucha para el clic en el enlace de correo electrónico
    emailLink.addEventListener('click', function () {
        // Redirige al cliente de correo electrónico predeterminado con la dirección de correo electrónico
        window.location.href = 'mailto:' + contactEmail;
    });
});

// (Cargar imagen gif al ícono de la sección formación académica) Utiliza el evento 'DOMContentLoaded' para ejecutar una función cuando el contenido HTML de la página ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Encuentra el ícono del ojo en la sección de formación académica
    const eyeIcon = document.querySelector('#formacion .fa-eye');

    // Función para crear y mostrar la ventana con la imagen GIF
    function showGifModal() {
        // Crea un elemento div para la ventana modal
        const modal = document.createElement('div');
        
        // Establece la posición del elemento modal como 'fixed' para que permanezca fijo en la pantalla
        modal.style.position = 'fixed';
        // Establece la propiedad 'top' del elemento modal para centrarlo verticalmente en la pantalla
        modal.style.top = '50%';
        // Establece la propiedad 'left' del elemento modal para centrarlo horizontalmente en la pantalla.
        modal.style.left = '50%';
        // Establece las propiedades 'transform' del elemento modal para centrarlo verticalmente en la pantalla.
        modal.style.transform = 'translate(-50%, -50%)';
        // Establece el color de fondo del elemento modal.
        modal.style.backgroundColor = 'white';
        // Establece el espacio interno del elemento modal para darle un relleno de 20 píxeles.
        modal.style.padding = '20px';
        // Establece el índice Z del elemento modal para controlar su apilamiento en la pantalla.
        modal.style.zIndex = '1000';
        // Establece el radio de borde del elemento modal para darle esquinas redondeadas.
        modal.style.borderRadius = '10px';
        // Establece una sombra en el elemento modal para darle profundidad visual.
        modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        
        // Crea un elemento de imagen para mostrar la imagen GIF
        const gifImage = document.createElement('img');

        // Establece la ruta del archivo gif para la imagen
        gifImage.src = 'images/Perro.gif'; 
        // Establece el ancho máximo de la imagen al 100% para que se ajuste al contenedor
        gifImage.style.maxWidth = '100%';
        // Establece la altura automática para mantener la proporción original del gif
        gifImage.style.height = 'auto';

        // Agrega la imagen GIF al modal
        modal.appendChild(gifImage);

        // Agrega el modal al cuerpo del documento
        document.body.appendChild(modal);

        // Agrega un evento para cerrar el modal al hacer clic en él
        modal.addEventListener('click', function () {
            // Elimina el elemento modal del cuerpo del documento
            document.body.removeChild(modal);
        });
    }

    // Agrega el evento de clic al ícono del ojo
    eyeIcon.addEventListener('click', showGifModal);
});

// (Cargar pdf al ícono de la sección idiomas) Abre un pdf en una pestaña nueva
document.addEventListener('DOMContentLoaded', function () {
    // Encuentra el ícono del ojo en la sección de idiomas
    const eyeIconIdiomas = document.querySelector('#idiomas .fa-eye');

    // Función para abrir el documento PDF
    function openPdf() {
        // Ruta al documento PDF que deseas mostrar
        const pdfPath = 'Certificación CENNI.pdf'; // Reemplaza con la ruta a tu documento PDF
        // Abre el PDF en una nueva pestaña del navegador
        window.open(pdfPath, '_blank');
    }

    // Agrega el evento de clic al ícono del ojo en la sección de idiomas
    eyeIconIdiomas.addEventListener('click', openPdf);
});