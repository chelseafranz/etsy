var count = $('#drink'),
  title, price, currency_code, image, shop_name;
var glass;

whiskey.results.forEach( function (item) {

title = "<p class='t'>" + item.title + "</p>";

price = "<p class='p'>" + item.price + "</p>";

currency_code = "<p class='cc'>" + item.currency_code + "</p>";

shop_name = "<p class='sn'>" + item.Shop.shop_name + "</p>";

image = "<img src='" + item.Images[0].url_170x135 + "' />";

glass="<li>" + image+ title + shop_name +  currency_code + price +"</li>";


count.append(glass);
$( "item.title" ).addClass( "one" );

});
