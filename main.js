// Questions & Answers
// Show me how to calculate the average price of all items.
// The average price is $23.63
var ans1, 

var totalPrice = 0;

items.forEach(function(item) {
  totalPrice = totalPrice + items.price;
});

var avgPrice = totalPrice / items.length;
  return avgPrice.toFixed(2);

// This was me trying out document.querySelector.....
var p = document.querySelector('.answer1');
    function .answer1() {
      p.textcontent = "The average price is " + avgPrice + ".";
    };


// Show me how to get an array of items that cost between $14.00 and $18.00 USD
//1970s Coors Banquet Glass Beer Pitcher
// The Three Broomsticks Customizable Beer Stein Mug
// Hand Painted Colorful Feather Glass 
var .answer2 = document.querySelector('.section-two').textContent;

var itemsWeWant = items.filter(function(item) {
  return (item.price > Number(14) && item.price < Number(18)) 
});

var itemTitles = itemsWeWant.map(function(rightPrice) {
  return rightPrice.title;
})

// Which item has a "GBP" currency code? Display it's name and price.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var gbpItem = items.filter(function(item) {
  return item.currency_code === "GBP";
});

var gbpTitlePrice = gbpItem.map(function(rightTitleRightPrice)  {
  return [rightTitleRightPrice.title, rightTitleRightPrice.price];
});


// Display a list of all items who are made of wood.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

var woodObj = items.filter(function(item) {
    return item.materials.some(function (material)  {
      return material === "wood";
    }); 
});

var woodTitles = woodObj.map(function(woodItem)  {
  return woodItem.title;
});

// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar

// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass


var eightOrMore = items.filter(function(item) {
    return item.materials.length >= 8;
}); 

var nameNumberMaterials = eightOrMore.map(function(eightOrMoreObj) {
  return [eightOrMoreObj.title, eightOrMoreObj.materials.length, eightOrMoreObj.materials];

});

// How many items were made by their sellers?
// 18 were made by their sellers

var iMadeIt = items.filter(function(item)  {
  return item.who_made === "i_did"
  });
iMadeIt.length;













