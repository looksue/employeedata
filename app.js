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

    $("#submit-input").on("click", function () {

        event.preventDefault();

        // Grabbed Values
        var employee = $("#employee-input").val().trim();
        var role = $("#role-input").val().trim();
        var start = $("#start-input").val().trim();
        var months = $("#months-input").val().trim();
        var rate = $("#rate-input").val().trim();
        var bill = $("#bill-input").val().trim();

        // database.ref().set({
        //     name: employee,
        //     role: role,
        //     start: start,
        //     months: months,
        //     rate: rate,
        //     bill: bill,
        // });

        database.ref().push({
            name: employee,
            role: role,
            start: start,
            months: months,
            rate: rate,
            bill: bill,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        // Firebase watcher .on("child_added"
        database.ref().on("child_added", function (snapshot) {
            // storing the snapshot.val() in a variable for convenience
            var sv = snapshot.val();

            // Console.loging the last user's data
            console.log(sv.name);
            console.log(sv.role);
            console.log(sv.start);
            console.log(sv.months);
            console.log(sv.rate);
            console.log(sv.bill);
            console.log(sv.dateAdded);

            // Change the HTML to reflect
            // $("#name-display").text(sv.name);
            // $("#email-display").text(sv.email);
            // $("#age-display").text(sv.age);
            // $("#comment-display").text(sv.comment);

            // Handle the errors
        }, function (errorObject) {
            console.log("Errors handled: " + errorObject.code);
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

    // const monthDifference = moment(new Date(endDate)).diff(new Date(startDate), 'months', true);
    // function getAbsoulteMonths(momentDate) {
    //     var months = Number(momentDate.format("MM"));
    //     var years = Number(momentDate.format("YYYY"));
    //     return months + (years * 12);
    // }

    // var startMonths = getAbsoulteMonths(start);
    // var endMonths = getAbsoulteMonths(end);

    // var monthDifference = endMonths - startMonths;

})