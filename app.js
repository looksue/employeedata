$(document).ready(function () {

    $("#submit-input").on("click", function() {

        var employee = $("#employee-input").val().trim();

        var role = $("#role-input").val().trim();

        var start = $("#start-input").val().trim();

        var months = $("#months-input").val().trim();

        var rate = $("#rate-input").val().trim();

        var bill = $("#bill-input").val().trim();

        var tRow = $("<tr>");

        var employeeTd = $("<td>").text(employee);

        var roleTd = $("<td>").text(role);

        var startTd = $("<td>").text(start);

        var monthsTd = $("<td>").text(months);

        var rateTd = $("<td>").text(rate);

        var billTd = $("<td>").text(bill);

        tRow.append(employeeTd, roleTd, startTd, monthsTd, rateTd, billTd);

        $("tbody").append(tRow);

    })

})