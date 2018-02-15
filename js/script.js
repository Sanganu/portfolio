$(document).ready(function()
{
  $("#project1").hide();
  $("#project2").hide();
  $("#project3").hide();
  $("#assignments").hide();
  $("#contact").hide();
  // $("#assignmentcont").hide();

  $("#prj1").on("click",function(){

        $("#project1").show();
        $("#project2").hide();
        $("#project3").hide();
        $("#contact").hide();
        $("#intro").hide();
         $("#assignments").hide();
  });
  $("#prj2").on("click",function(){

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
       var currentimg = $(this).find('.active').index();
      console.log("Currentimg",currentimg);

      switch ( currentimg ) {
        case 8:
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
       case 0:
                $("#gifcontent").hide();
                $("#mathfacts").show();
                $("#crystal").hide();
                $("#hangman").hide();
                $("#webscrapper").hide();
                $("#finedining").hide();
                $("#perfectfriend").hide();
                $("#studentplanner").hide();
                $("#node").hide();
                break;
          case 1:
                    $("#gifcontent").hide();
                    $("#mathfacts").hide();
                    $("#crystal").show();
                    $("#hangman").hide();
                    $("#webscrapper").hide();
                    $("#finedining").hide();
                    $("#perfectfriend").hide();
                    $("#studentplanner").hide();
                    $("#node").hide();
                    break;
            case 2:
                          $("#gifcontent").hide();
                          $("#mathfacts").hide();
                          $("#crystal").hide();
                          $("#hangman").show();
                          $("#webscrapper").hide();
                          $("#finedining").hide();
                          $("#perfectfriend").hide();
                          $("#studentplanner").hide();
                          $("#node").hide();
                          break;
            case 3:
                              $("#gifcontent").hide();
                              $("#mathfacts").hide();
                              $("#crystal").hide();
                              $("#hangman").hide();
                              $("#webscrapper").show();
                              $("#finedining").hide();
                              $("#perfectfriend").hide();
                              $("#studentplanner").hide();
                              $("#node").hide();
                              break;
              case 4:
                                  $("#gifcontent").hide();
                                  $("#mathfacts").hide();
                                  $("#crystal").hide();
                                  $("#hangman").hide();
                                  $("#webscrapper").hide();
                                  $("#finedining").show();
                                  $("#perfectfriend").hide();
                                  $("#studentplanner").hide();
                                  $("#node").hide();
                                  break;
               case 5:
                                      $("#gifcontent").hide();
                                      $("#mathfacts").hide();
                                      $("#crystal").hide();
                                      $("#hangman").hide();
                                      $("#webscrapper").hide();
                                      $("#finedining").hide();
                                      $("#perfectfriend").show();
                                      $("#studentplanner").hide();
                                      $("#node").hide();
                                      break;
               case 6:
                                          $("#gifcontent").hide();
                                          $("#mathfacts").hide();
                                          $("#crystal").hide();
                                          $("#hangman").hide();
                                          $("#webscrapper").hide();
                                          $("#finedining").hide();
                                          $("#perfectfriend").hide();
                                          $("#studentplanner").show();
                                          $("#node").hide();
                                          break;
                case 7:
                                              $("#gifcontent").hide();
                                              $("#mathfacts").hide();
                                              $("#crystal").hide();
                                              $("#hangman").hide();
                                              $("#webscrapper").hide();
                                              $("#finedining").hide();
                                              $("#perfectfriend").hide();
                                              $("#studentplanner").hide();
                                              $("#node").show();
                                              break;

      }
  });
});
