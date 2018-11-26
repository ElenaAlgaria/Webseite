
      $(document).ready(function () {

        $("body").css("padding-left", "20px");
        $("#mainheader").css("padding", "20px");
        $(".maintext").css("background", "#0769AA");
        $("#footer p").css("font-weight", "Bold");

        $("#mainheader").click(function (){
          $("#mainheader").css("border", "green 5px solid");
           $(".maintext").css("font-size", "20px");
            $("#footer p").text("Doppelklick verkleinert wieder");
         });

        $("#mainheader").dblclick(function () {
          $("#mainheader").css("border", "");
          $(".maintext").css("font-size", "");
          $("#footer p").text("Klick auf das Logo!");
          


        });

      });
