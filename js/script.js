$(document).ready(function()
{
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#assignments").hide();
  $("#contact").hide();

  $("#prj1").on("click",function(){
       console.log("On click1");
        $("#project1").show();
        $("#project2").hide();
        $("#project3").hide();
        $("#contact").hide();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#prj2").on("click",function(){
       console.log("On click2");
        $("#project1").hide();
        $("#project2").show();
        $("#project3").hide();
        $("#contact").hide();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#prj3").on("click",function(){
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").show();
        $("#intro").hide();
         $("#assignments").hide();
         $("#contact").hide();
  });
  $("#home").on("click",function(){
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#contact").hide();
        $("#intro").show();
         $("#assignments").hide();
  });
  $("#assign").on("click",function(){
     $("#project1").hide();
     $("#project2").hide();
     $("#project3").hide();
     $("#intro").hide();
     $("#contact").hide();
     $("#assignments").show();
  });
  $("#cont").on("click",function(){
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#intro").hide();
        $("#assignments").hide();
        $("#contact").show();
  });
  $("#myCarousel").on("slide.bs.carousel", function() {
     console.log("Inchange carouse - this",this,this.id);
      var currentimg = $(this).find('.active').index();
      console.log("Currentimg",currentimg);

      switch ( currentimg ) {
        case 0:
            $("#gifcontent").show();
            $("#mathfacts").hide();
            $("#crystal").hide();
            $("#hangman").hide();
            $("#webscrapper").hide();
            $("#finedining").hide();
            $("#perfectfriend").hide();
            $("#studentplanner").hide();
            $("#node").hide();
            break;
      }
  });
});
