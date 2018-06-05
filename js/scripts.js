$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();
    $("#luck-response").show();
    var luck1 = $("input:checkbox[name=luckItem]:checked").length;
    var luckAnswer = ["<p>Your luck ran out!</p><br>", "<p>Things are looking up for you.</p><br>", "<p>You are sure a lucky person!</p><br>", "<p>Better buy a lottery ticket now!</p><br>", "<p>You are a Geniune Leprechaun!</p><br>"]
    $('#luck-response').append(luckAnswer[luck1]);

    $("#unluck-response").show();
    var luck2 = $("input:checkbox[name=unluckItem]:checked").length;
    var unluckAnswer = ["<p>It's suspicious that you find nothing unlucky... isn't it?</p><br>", "<p>Things that go bump in the night</p><br>", "<p>Anyone in a bright yellow suit</p><br>", "<p>Barking dogs!</p><br>", "<p>Putting the cart before the horse</p><br>"]
    $('#unluck-response').append(unluckAnswer[luck2]);

    $("#fort-response").show();
    var luck4 = $("input:checkbox[name=fortItem]:checked").length;
    var fortAnswer = ["<p>A lump of coal</p><br>", "<p>A Feindly dog on your porch</p><br>", "<p>A new and better job</p><br>", "<p>Dream Date with David Hasselhoff</p><br>", "<p>Big Bag of Money</p><br>"]
    $('#fort-response').append(fortAnswer[luck4]);

    $("#fairy-response").show();
    var luck3 = $("input:checkbox[name=fairyItem]:checked").length;
    var fairyAnswer = ["<p>Probably there's nothing so good to look out for</p><br>", "<p>Watch the sidewalks for lucky pennies</p><br>", "<p>A new lucky sweater is heading your way... Amazon?</p><br>", "<p>A Leprechaun might be bringing you some gold</p><br>", "<p>Free Pie Night at the Bowling Alley</p><br>"]
    $('#fairy-response').append(fairyAnswer[luck3]);
    $('#fortune_survey').hide();
  });
});
