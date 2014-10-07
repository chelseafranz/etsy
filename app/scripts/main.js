var count = $('#drink'),
  title, price, currency_code, image, shop_name, box, glass;



whiskey.results.forEach( function (item) {

title = "<p class='t'>" + item.title + "</p>";

price = "<p class='p'>" + item.price + "</p>";

currency_code = "<p class='cc'>" + item.currency_code + "</p>";

shop_name = "<p class='sn'>" + item.Shop.shop_name + "</p>";

image = "<img src='" + item.Images[0].url_170x135 + "' />";

box = "<img class='box' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/hamburger.png' + "' />"+"<img class='box2' src='" + 'https://raw.githubusercontent.com/tiy-atlanta-js/Assignments/master/Assignment%2008/assets/heart.png' + "' />";


glass="<li>" + box + image + title + shop_name +  currency_code + price +"</li>";


count.append(glass);


});

 $('li').hover(
   function(){
     $(this).toggleClass('showButtons');
   }
);
