    var script = document.createElement('script'); 
    script.src = '//code.jquery.com/jquery-1.11.0.min.js'; 
    document.getElementsByTagName('head')[0].appendChild(script); 
     $(document).ready(function(){
  $(window).scroll(function(){
    var x = $(".carousel-caption").position();
    var st = $("#vent").position();
    if($(document).scrollTop() > x.top){
      $(".card").css("margin-top","0px");
    }
    if($(document).scrollTop() >= st.top){
    $(".starter").css("right","0px");
     $(".dessert").css("left","0px");
    }
    });
    });
    $(".drink,.other").hide();
    $("#imgmenu2,#imgmenu3").hide();
     $(document).ready(function(){
      $(".special").click(function(){    
      $("#imgmenu1").show();
      $("#imgmore1,#imgdrink1").hide();
      $(".menu").show();
      $(".other,.drink").hide();
    })
    $(".others").click(function(){
       $("#imgmore1").show();
         $("#imgmenu1,#imgdrink1").hide();
      $(".other").show();
      $(".menu,.drink").hide();
    })
    $(".drinks").click(function(){
       $("#imgdrink1").show();
         $("#imgmenu1,#imgmore1").hide();
            $(".drink").show();
      $(".menu,.other").hide();
    })
//menu changing
    $("#onemenu").mouseenter(function(){
      $("#imgmenu1").show();
      $("#imgmenu2,#imgmenu3").hide();
    })
    $("#menu2").mouseenter(function(){
      $("#imgmenu2").fadeToggle();
           $("#imgmenu1,#imgmenu3").hide();
    })
    $("#menu3").mouseenter(function(){
      $("#imgmenu3").fadeToggle();
           $("#imgmenu1,#imgmenu2").hide();
    })
  
//more changing
    $("#more1").mouseenter(function(){
      $("#imgmore1").show();
      $("#imgmore2,#imgmore3").hide();
    })
    $("#secmore").mouseenter(function(){
      $("#imgmore2").fadeToggle();
           $("#imgmore1,#imgmore3").hide();
    })
    $("#thrmore").mouseenter(function(){
      $("#imgmore3").fadeToggle();
      $("#imgmore1,#imgmore2").hide();
    })
//drink changing
    $("#dri1").mouseenter(function(){
      $("#imgdrink1").show();
      $("#imgdrink2,#imgdrink3").hide();
    })
    $("#dri2").mouseenter(function(){
      $("#imgdrink2").fadeToggle();
           $("#imgdrink1,#imgdrink3").hide();
    })
    $("#dri3").mouseenter(function(){
      $("#imgdrink3").fadeToggle();
      $("#imgdrink1,#imgdrink2").hide();
    })

   $("#catalog").mouseenter(function(){
      $("#imgdrink3").show();
      $("#imgdrink1,#imgdrink2").hide();
    })
   })
