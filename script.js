$(document).ready(function(){
    $.ajax({url: "https://sheets.googleapis.com/v4/spreadsheets/1w9pwfnV4ef_Zw2oIvhgOTXVRQ86206j0vlQtPU0Sg_0/values/A1:B10?key=AIzaSyCg9g_Xsbmu3KAU7Bf_7cGjJi1qCKKXOwA", success: function(result){
        $("#date").html(result.values[0][1]);
        $("#temp").html("&nbsp;" + result.values[2][1] + "&nbsp;&#8457;");
        $("#humid").html("&nbsp;" + result.values[3][1] + " % RH");
        if(result.values[5][1] == "unknown"){
            $("#bat").html("&nbsp;" + result.values[4][1] + "%" + " - Battery Discharging");
        }
        else if(result.values[5][1] == "VIN" || result.values[5][1] == "USB host"){
            $("#bat").html("&nbsp;" + result.values[4][1] + "%" + " - Building Power On");
        }
    }});

}); //END DOC READY