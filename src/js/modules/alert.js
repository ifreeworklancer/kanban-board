/**
 * Get element
 */
let alerting = document.querySelector('.alert'),
    closeAlert = document.querySelector('.alert .alert-close a');

/**
 * Close alert
 */
closeAlert.addEventListener('click', function (e) {
    e.preventDefault();
    alerting.classList.remove('active');
});