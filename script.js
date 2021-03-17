$.getJSON('choosepizza.json', function (choosePizzaData) {
    choosePizza(choosePizzaData);
});

function choosePizza(choosePizzaData) {

    //Append ol with to .box1_data
    $("div.box1_data").append("<ol class='box1_ol' ></ol>");    
    $("div.box2_data").append("<ol class='box2_ol' ></ol>");
    $("div.box3_data").append("<ol class='box3_ol' ></ol>");
    //Three functions to append each object from choosepizza.json to a li 
    $(choosePizzaData).each(function (index, value) {
        $(choosePizzaData[index].botten).each(function (ii, vv) { 
            stringData = choosePizzaData[index].botten[ii];
            $(".box1_ol").append("<li id='test'>" + stringData + "</li>");
        });
        $(choosePizzaData[index].topping).each(function (ii, vv) {
            stringData = choosePizzaData[index].topping[ii];
            $(".box2_ol").append("<li id='test'>" + stringData + "</li>");
        });
        $(choosePizzaData[index].extra).each(function (ii, vv) {
            stringData = choosePizzaData[index].extra[ii];
            $(".box3_ol").append("<li id='test'>" + stringData + "</li>");
        });
    });
}

function listclickfunction() {  //Function for clicking on a li and setting line-through
    $('li').click(function () {
        this.setAttribute("style", "text-decoration: line-through")
    });
}