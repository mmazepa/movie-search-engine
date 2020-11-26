/* jshint esversion: 6 */

const getModal = (button) => {
    var modal = document.getElementById("myModal");
    var btn = button;
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = () => {
        modal.style.display = "block";
    };

    span.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    button.click();
};
