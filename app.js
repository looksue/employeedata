$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyCHW95eLcuj-Iq4Q3T1w2lu_Km3nOm4vO4",
        authDomain: "empdata-bac20.firebaseapp.com",
        databaseURL: "https://empdata-bac20.firebaseio.com",
        projectId: "empdata-bac20",
        storageBucket: "",
        messagingSenderId: "313452622833",
        appId: "1:313452622833:web:0a10bb18c5aed997"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    var employeeName = "";
    var email = "";
    var age = 0;
    var comment = "";

    $("#submit-input").on("click", function () {

        event.preventDefault();

        // Grabbed Values
        var employee = $("#employee-input").val().trim();
        var role = $("#role-input").val().trim();
        var start = $("#start-input").val().trim();
        var months = $("#months-input").val().trim();
        var rate = $("#rate-input").val().trim();
        var bill = $("#bill-input").val().trim();

        database.ref().set({
            name: employee,
            role: role,
            start: start,
            months: months,
            rate: rate,
            bill: bill,
        });

        // var tRow = $("<tr>");

        // var employeeTd = $("<td>").text(employee);

        // var roleTd = $("<td>").text(role);

        // var startTd = $("<td>").text(start);

        // var monthsTd = $("<td>").text(months);

        // var rateTd = $("<td>").text(rate);

        // var billTd = $("<td>").text(bill);

        // tRow.append(employeeTd, roleTd, startTd, monthsTd, rateTd, billTd);

        // $("tbody").append(tRow);

    })

})