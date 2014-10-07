var count = $('#drink'),
  title, price, currency_code, image, shop_name;
var glass;

whiskey.results.forEach( function (item) {

title = "<p>" + item.title + "</p>";

price = "<p>" + item.price + "</p>";

currency_code = "<p>" + item.currency_code + "</p>";

shop_name = "<p>" + item.Shop.shop_name + "</p>";

image = "<img src='" + item.Images[0].url_170x135 + "' />";

glass="<li>" + title + price + currency_code + shop_name + image + "</li>";


count.append(glass);

});
