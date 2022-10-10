const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const mailChimp = new bootstrap.Modal(document.getElementById('mailChimpModal'), {})
mailChimp.toggle()
