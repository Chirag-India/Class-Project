var player = 1 ;

var game = "tie";
var tie = 0 ;
var c11 = 0 ;
var c22 = 0 ;
var c33 = 0 ;
var c44 = 0 ;
var c55 = 0 ;
var c66 = 0 ;
var c77 = 0 ;
var c88 = 0 ;
var c99 = 0 ;
var back = createSprite (200 ,200);

var replay = createSprite (500,1000);
var c1 = createSprite(100,100);
var c2 = createSprite(200,100);
var c3 = createSprite(300,100);
var c4 = createSprite(100,200);
var c5 = createSprite(200,200);
var c6 = createSprite(300,200);
var c7 = createSprite(100,300);
var c8 = createSprite(200,300);
var c9 = createSprite(300,300);

back.setAnimation("back");
c1.setAnimation("blank");
c2.setAnimation("blank");
c3.setAnimation("blank");
c4.setAnimation("blank");
c5.setAnimation("blank");
c6.setAnimation("blank");
c7.setAnimation("blank");
c8.setAnimation("blank");
c9.setAnimation("blank");

c1.visible = false ;
c2.visible = false ;
c3.visible = false ;
c4.visible = false ;
c5.visible = false ;
c6.visible = false ;
c7.visible = false ;
c8.visible = false ;
c9.visible = false ;

function draw() {  
  
  
  
  background("white");
  line (150,50 ,150 ,350 );
  line (250,50 ,250 ,350 );
  line (50,150 ,350 ,150 );
  line (50,250 ,350 ,250 );
  line (50,50 ,350 ,50 );
  line (50,350 ,350 ,350 );
  line (50,50 ,50 ,350 );
  line (350,50 ,350 ,350 );
    fill ("black");
    textSize  (20) ;
   if( player == 1){
     text ("X trun",180,25);
   }
    if( player == 2){
     text ("O trun",180,25);
   }
   
    if (player == 1 && mousePressedOver(c1)&& c11 == 0 ){
      c1.setAnimation("x");
      tie = tie + 1 ;
      c1.scale = 0.17 ;
      c1.visible = true ;
      c11 = 1 ;
      player = 2 ;
    }
    
      if (player == 1 && mousePressedOver(c2)&& c22 == 0 ){
              tie = tie + 1 ;

      c2.setAnimation("x");
      c2.scale = 0.17 ;
      c2.visible = true ;
      c22 = 1 ;
      player = 2 ;
    }
   if (player == 1 && mousePressedOver(c3)&& c33 == 0 ){
           tie = tie + 1 ;

      c3.setAnimation("x");
      c3.scale = 0.17 ;
      c3.visible = true ;
      c33 = 1 ;
      player = 2 ;
    }
    if (player == 1 && mousePressedOver(c4)&& c44 == 0 ){
            tie = tie + 1 ;

      c4.setAnimation("x");
      c4.scale = 0.17 ;
      c4.visible = true ;
      c44 = 1 ;
      player = 2 ;
    } 
    if (player == 1 && mousePressedOver(c5)&& c55 == 0 ){
            tie = tie + 1 ;

      c5.setAnimation("x");
      c5.scale = 0.17 ;
      c5.visible = true ;
      c55 = 1 ;
      player = 2 ;
    }
    if (player == 1 && mousePressedOver(c6)&& c66 == 0 ){
            tie = tie + 1 ;

      c6.setAnimation("x");
      c6.scale = 0.17 ;
      c6.visible = true ;
      c66 = 1 ;
      player = 2 ;
    }
    if (player == 1 && mousePressedOver(c7)&& c77 == 0 ){
            tie = tie + 1 ;

      c7.setAnimation("x");
      c7.scale = 0.17 ;
      c7.visible = true ;
      c77 = 1 ;
      player = 2 ;
    }  
    if (player == 1 && mousePressedOver(c8)&& c88 == 0 ){
            tie = tie + 1 ;

      c8.setAnimation("x");
      c8.scale = 0.17 ;
      c8.visible = true ;
      c88 = 1 ;
      player = 2 ;
    }
    if (player == 1 && mousePressedOver(c9)&& c99 == 0 ){
            tie = tie + 1 ;

      c9.setAnimation("x");
      c9.scale = 0.17 ;
      c9.visible = true ;
      c99 = 1 ;
      player = 2 ;
    }
    
    
    
    if (player == 2 && mousePressedOver(c1)&& c11 == 0 ){
            tie = tie + 1 ;

      c1.setAnimation("o");
      c1.scale = 0.18 ;
      c1.visible = true ;
      c11 = 2 ;
      player = 1 ;
    }
    
      if (player == 2 && mousePressedOver(c2)&& c22 == 0 ){
              tie = tie + 1 ;

      c2.setAnimation("o");
      c2.scale = 0.18 ;
      c2.visible = true ;
      c22 = 2 ;
      player = 1 ;
    }
   if (player == 2 && mousePressedOver(c3)&& c33 == 0 ){
           tie = tie + 1 ;

      c3.setAnimation("o");
      c3.scale = 0.18 ;
      c3.visible = true ;
      c33 = 2 ;
      player = 1 ;
    }
    if (player == 2 && mousePressedOver(c4)&& c44 == 0 ){
            tie = tie + 1 ;

      c4.setAnimation("o");
      c4.scale = 0.18 ;
      c4.visible = true ;
      c44 = 2 ;
      player = 1 ;
    }
    if (player == 2 && mousePressedOver(c5)&& c55 == 0 ){
            tie = tie + 1 ;

      c5.setAnimation("o");
      c5.scale = 0.18 ;
      c5.visible = true ;
      c55 = 2 ;
      player = 1 ;
    }
    if (player == 2 && mousePressedOver(c6)&& c66 == 0 ){
          tie = tie + 1 ;
      c6.setAnimation("o");
      c6.scale = 0.18 ;
      c6.visible = true ;
      c66 = 2 ;
      player = 1 ;
    }
    if (player == 2 && mousePressedOver(c7)&& c77 == 0 ){
            tie = tie + 1 ;

      c7.setAnimation("o");
      c7.scale = 0.18 ;
      c7.visible = true ;
      c77 = 2 ;
      player = 1 ;
    }  
    if (player == 2 && mousePressedOver(c8)&& c88 == 0 ){
            tie = tie + 1 ;

      c8.setAnimation("o");
      c8.scale = 0.18 ;
      c8.visible = true ;
      c88 = 2 ;
      player = 1 ;
    }
    if (player == 2 && mousePressedOver(c9)&& c99 == 0 ){
            tie = tie + 1 ;

      c9.setAnimation("o");
      c9.scale = 0.18 ;
      c9.visible = true ;
      c99 = 2 ;
      player = 1 ;
    }
    drawSprites();
   
    if( player == 1){
     text ("X trun",180,25);
   }
    if( player == 2){
     text ("O trun",180,25);
   }
    textSize (50);

  if (c11 == 1 && c22 == 1 && c33 == 1){
    game = "win";
    text ("X WIN",124,220);
    line (100 ,100 ,300,100);
    
  }
  
  if (c11 == 1 && c44 == 1 && c77 == 1){
        game = "win";

    text ("X WIN",124,220);
    line(100,100,100,300);
   
  }
  
  if (c11 == 1 && c55 == 1 && c99 == 1){
        game = "win";

    text ("X WIN",124,220);
    line (100,100,300,300);
   
  }
  
  if (c33 == 1 && c55 == 1 && c77 == 1){
        game = "win";

    text ("X WIN",124,220);
    line (300,100,100,300);
    
  }
  
  if (c22 == 1 && c55 == 1 && c88 == 1){
        game = "win";

    text ("X WIN",124,220);
    line(200,100,200,300);
   
  }
  
  if (c33 == 1 && c66 == 1 && c99 == 1){
        game = "win";

    text ("X WIN",124,220);
    line (300,100,300,300);
    
  }
  
  if (c44 == 1 && c55 == 1 && c66 == 1){
        game = "win";

    text ("X WIN",124,220);
    line (100 ,200,300,200);
    
  }
  
  if (c77 == 1 && c88 == 1 && c99 == 1){
        game = "win";

    text ("X WIN",124,220);
    line (100 ,300 ,300 ,300);
   
  }
  
  
  // O
  
  
  if (c11 == 2 && c22 == 2 && c33 == 2){
        game = "win";

    text ("O WIN",124.5,220);
     line (100 ,100 ,300,100);
  }
  
  if (c11 == 2 && c44 == 2 && c77 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (100,100,100,300);
  

  }
  
  if (c11 == 2 && c55 == 2 && c99 == 2){
        game = "win";

    text ("O WIN",124.5,220);
line (100,100,300,300);

  }
  
  if (c33 == 2 && c55 == 2 && c77 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,300,300,100);
   
  }
  
  if (c22 == 2 && c55 == 2 && c88 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (200,100,200,300);

  }
  
  if (c33 == 2 && c66 == 2 && c99 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (300,100,300,300);
    
  }
  
  if (c44 == 2 && c55 == 2 && c66 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,200,300,200);
    
  }
  
  if (c77 == 2 && c88 == 2 && c99 == 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,300,300,300);
    
  }
  if ( game == "tie" && tie == 9  ){
     text ("TIE",162.5 ,219);
     

  }
  
   
   if ( game == "win" ){
      
      if(c11 == 0){
        c11 = 3  ;
      }
      if(c22 == 0){
        c22 = 3  ;
      }
      if(c33 == 0){
        c33 = 3  ;
      }
      if(c44 == 0){
        c44 = 3  ;
      }
      if(c55 == 0){
        c55 = 3  ;
      }
      if(c66 == 0){
        c66 = 3  ;
      }
      if(c77 == 0){
        c77 = 3  ;
      }
      if(c88 == 0){
        c88 = 3  ;
      }
      
      if(c99 == 0){
        c99 = 3  ;
      }
     
   }
   
  
      
   
   
   if (c11==1){
    c1.setAnimation("x");
  }
   if (c22==1){
    c2.setAnimation("x");
  }
   if (c33==1){
    c3.setAnimation("x");
  } if (c44==1){
    c4.setAnimation("x");
  } if (c55==1){
    c5.setAnimation("x");
  } if (c66==1){
    c6.setAnimation("x");
  } if (c77==1){
    c7.setAnimation("x");
  } if (c88==1){
    c8.setAnimation("x");
  } if (c99==1){
    c9.setAnimation("x");
  }
    
    //O:
    
    if (c11==2){
    c1.setAnimation("o");
   }
     if (c22==2){
    c2.setAnimation("o");
   }
     if (c33==2){
    c3.setAnimation("o");
   }  if (c44==2){
    c4.setAnimation("o");
   }  if (c55==2){
    c5.setAnimation("o");
   }  if (c66==2){
    c6.setAnimation("o");
   }  if (c77==2)
   {
    c7.setAnimation("o");
   }  if (c88==2)
   {
    c8.setAnimation("o");
   } 
   if (c99==2){
    c9.setAnimation("o");
   }
   
   //00000:
   
   
   
   if (c11 == 0){
     c1.setAnimation("blank");
   }
   if (c22 == 0){
     c2.setAnimation("blank");
   }   if (c33 == 0){
     c3.setAnimation("blank");
   }   if (c44 == 0){
     c4.setAnimation("blank");
   }  if (c55 == 0){
     c5.setAnimation("blank");
   }  if (c66 == 0){
     c6.setAnimation("blank");
   }  if (c77 == 0){
     c7.setAnimation("blank");
   }  if (c88 == 0){
     c8.setAnimation("blank");
   }  if (c99 == 0){
     c9.setAnimation("blank");
   }
   
   line (150,50 ,150 ,350 );
  line (250,50 ,250 ,350 );
  line (50,150 ,350 ,150 );
  line (50,250 ,350 ,250 );
  line (50,50 ,350 ,50 );
  line (50,350 ,350 ,350 );
  line (50,50 ,50 ,350 );
  line (350,50 ,350 ,350 );
  

  console.log(c55);
  
  

}
