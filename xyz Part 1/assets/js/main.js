$(document).ready(function(){

var word1 = [
	"Hipsters",
	"Fops",
	"Trendsetters",
  "Spivs",
  "Maximalists",
  "Minimalists",
  "Edges",
  "Classics",
  "Preppys",
  "Blades"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "Dress",
  "T-shirt",
  "Suit",
  "Bikini",
  "Hill",
  "Hoodie",
  "Skirt",
  "Cap",
  "Coat",
  "Jeans",
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "Gucci",
  "Louis",
  "Levis",
  "Balenciaga",
  "Burberry",
  "Valentino",
  "Celine",
  "Dior",
  "Chloe",
  "Bvlgari",
  "Givenchy",
  "Fendi",
  "Uniqlo",
  "Chanel",
  "Topshop",
  "Coach",
  "Hugo",
  "Puma",
  "Nike",
  "Adidas",
  "Bally",
  "Lee",
  "Zara",
  "Armani", 
  "Versace"


];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

var word4 = [
  "Gucci",
  "Louis",
  "Levis",
  "Balenciaga",
  "Burberry",
  "Valentino",
  "Celine",
  "Dior",
  "Chloe",
  "Bvlgari",
  "Givenchy",
  "Fendi",
  "Uniqlo",
  "Chanel",
  "Topshop",
  "Coach",
  "Hugo",
  "Puma",
  "Nike",
  "Adidas",
  "Bally",
  "Lee",
  "Zara",
  "Armani", 
  "Versace"
  
];

var randomWord4 = word4[Math.floor(Math.random()*word4.length)];


$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);

});