$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("#luck-response").show();
    var luck = $("input:checkbox[name=luckItem]:checked").length;
    alert(luck);
    var luckAnswer = ["<p>Your luck ran out!</p><br>", "<p>Things are looking up for you.</p><br>", "<p>You are sure a lucky person!</p><br>", "<p>Better buy a lottery ticket now!</p><br>", "<p>You are a Geniune Leprechaun!</p><br>"]
    $('#luck-response').append(luckAnswer[luck]);

    $("#luck-response").show();
    var luck = $("input:checkbox[name=luckItem]:checked").length;
    alert(luck);
    var luckAnswer = ["<p>Your luck ran out!</p><br>", "<p>Things are looking up for you.</p><br>", "<p>You are sure a lucky person!</p><br>", "<p>Better buy a lottery ticket now!</p><br>", "<p>You are a Geniune Leprechaun!</p><br>"]
    $('#luck-response').append(luckAnswer[luck]);

    $("#luck-response").show();
    var luck = $("input:checkbox[name=luckItem]:checked").length;
    alert(luck);
    var luckAnswer = ["<p>Your luck ran out!</p><br>", "<p>Things are looking up for you.</p><br>", "<p>You are sure a lucky person!</p><br>", "<p>Better buy a lottery ticket now!</p><br>", "<p>You are a Geniune Leprechaun!</p><br>"]
    $('#luck-response').append(luckAnswer[luck]);
    
    $("#luck-response").show();
    var luck = $("input:checkbox[name=luckItem]:checked").length;
    alert(luck);
    var luckAnswer = ["<p>Your luck ran out!</p><br>", "<p>Things are looking up for you.</p><br>", "<p>You are sure a lucky person!</p><br>", "<p>Better buy a lottery ticket now!</p><br>", "<p>You are a Geniune Leprechaun!</p><br>"]
    $('#luck-response').append(luckAnswer[luck]);
    $('#transportation_survey').hide();
  });
});
