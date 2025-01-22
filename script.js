$(document).ready(function () {

    $("#task-form").on("submit", function (e) {
    e.preventDefault();

    const task = $("#task-input").val().trim();

    if (task !== "") {
        // Adicionar a tarefa à lista
        $("#task-list").append(`<li>${task}</li>`);
        // Limpar o campo de entrada
        $("#task-input").val("");
    }
});

    $("#task-list").on("click", "li", function () {
    $(this).toggleClass("completed");
    });
});
