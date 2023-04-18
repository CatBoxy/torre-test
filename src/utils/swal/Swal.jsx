import Swal from 'sweetalert2';

export const swal = (props) =>
    Swal.fire({
        title: "User not found",
        text: props === "login" ? "Please try with another username" : "An error ocurred",
        confirmButtonText: "continue",
        width: "300px",
        timer: 10000,
        color: 'rgba(255, 255, 255, 0.87)',
        background: 'rgb(25, 25, 25)',
        confirmButtonColor: 'rgb(25, 25, 25)',
        timerProgressBar: true,
    });