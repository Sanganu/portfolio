$(document).ready(function()
{
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#assignments").hide();
  
  $("#prj1").on("click",function(){
       console.log("On click1");
        $("#project1").show();
        $("#project2").hide();
        $("#project3").hide();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#prj2").on("click",function(){
       console.log("On click2");
        $("#project1").hide();
        $("#project2").show();
        $("#project3").hide();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#prj3").on("click",function(){
       console.log("On click3");
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").show();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#home").on("click",function(){
       console.log("On click home");
        $("#project1").hide();
        $("#project2").hide();
        $("#project3").hide();
        $("#intro").show();
         $("#assignments").hide();
  });
  $("#assign").on("click",function(){
    console.log("On click home");
     $("#project1").hide();
     $("#project2").hide();
     $("#project3").hide();
     $("#intro").hide();
     $("#assignments").show();
  });
});
