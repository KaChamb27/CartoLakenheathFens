
function onSelectCropInfo(ele){
  var form = $(ele).parent().parent();
  var label = $(form).find(".additional_msg");
  var select = $(form).find(".additional_msg_select");
  
  switch (ele.value) {
    case "donation":
    case "request":
      label.text("Resource Type:");
      select.find('option').remove();
      select.append($("<option></option>")
        .attr("value","")
        .text("Choose the resource type"));
      selectValues = ['water', 'food', 'money', 'medicine', 'cloth',
                      'rescue/volunteer'];
      $.each(selectValues, function(index,value) {
      select.append($("<option></option>")
        .attr("value",value)
        .text(value)); 
      });
      break;
    case "damage":
      label.text("Damage Type:");
      select.find('option').remove();
      select.append($("<option></option>")
        .attr("value","")
        .text("Choose the damage type"));
      selectValues = ['polution', 'building damage', 'road damage', 'casualty',
                      'other'];
      $.each(selectValues, function(index,value) {
      select.append($("<option></option>")
        .attr("value",value)
        .text(value)); 
      });
      break;
    default:
      $(form).find(".additional_msg_div").css("visibility", "hidden");
      return;
  }
  $(form).find(".additional_msg_div").css("visibility", "visible");
}

function queryAsset(event) {
	  event.preventDefault(); // stop form from submitting normally
	  
	  var a = $("#query_report_form").serializeArray();
	  a.push({ name: "tab_id", value: "1" });
	  a = a.filter(function(item){return item.value != '';});
	  $.ajax({
	    url: 'HttpServlet',
	    type: 'POST',
	    data: a,
	    success: function(reports) {
	      mapInitialization(reports);
	    },
	    error: function(xhr, status, error) {
	      alert("Status: " + status + "\nError: " + error);
	    }
	  });
	}

	$("#query_report_form").on("submit",queryReport);