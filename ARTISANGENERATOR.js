var tTheme = new Array("PERSONIFICATION", "DRINK", "SMOKE/FOG" , "BOOK" , "STAIN", "LIGHT","DARK","PLANT", "SPACE","MONSTER", "SHIP", "ENTRANCE/EXIT","RED", "BLUE","YELLOW","GREEN","PURPLE","SCIENCE","JUMP/FLY/FALL","LOOK","TIE","SEASON","GAME","MUSIC","SKIN","ALTERNATE UNIVERSE","GLOBE","END","DREAM","NIGHTMARE","WATER");
var tSubj = new Array("YOURSELF","AN ANIMAL","A FOOD","A PLACE","BEST FRIEND","SCENERY","SIGNIFICANT OTHER/PARTNER","FAMILY","ARTIST","SINGER", "DANCER","YOUTUBER","PET","CARTOON CHARACTER","DISNEY CHARACTER","ANIME CHARACTER","MOVIE STAR");

var imgs = new Array("images/cat.jpg","images/deer.jpg","images/dog.jpg","images/horse.jpg","images/kitten.jpg","images/parrot.jpg","images/en1.jpg","images/en2.jpg","images/en3.jpg","images/en4.jpg","images/en5.jpg","images/en6.jpg","images/f1.jpg","images/f2.jpg","images/f3.jpg","images/f4.jpg","images/f5.jpg","images/f6.jpg","images/o1.jpg","images/o2.jpg","images/o3.jpg","images/o4.jpg","images/o5.jpg","images/o6.jpg","images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg","images/p5.jpg","images/p6.jpg","images/sh1.jpg","images/sh2.jpg","images/sh3.jpg","images/sh4.jpg","images/sh5.jpg","images/sh6.jpg");

$ ("#btnGenTheme").click(function(){
	var randtheme = Math.floor(Math.random() * (tTheme.length));
  	document.getElementById('topicTheme').innerHTML = tTheme[randtheme];
});

$ ("#btnGenSubj").click(function(){
	var randsubj = Math.floor(Math.random() * (tSubj.length));
  	document.getElementById('topicSubj').innerHTML = tSubj[randsubj];
});

$ ("#btnGenImg").click(function(){
	var randimg = Math.floor(Math.random() * (imgs.length));
  	document.getElementById('IMG').src = imgs[randimg];
});



