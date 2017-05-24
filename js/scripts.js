$(function() {
  $("form#favorite").submit(function(event) {
    var animal = $("input#animal").val();
    var sport = $("input#sport").val();
    var decadeOfMusic = $('input[name="decadeOfMusic"]:checked').val();

    var myOutput = [animal, sport, decadeOfMusic]

    event.preventDefault();

    // on submit fill the lis with our favorite things

    var myNewArray = []
    myNewArray.push(myOutput[0]);
    myNewArray.push(myOutput[1]);
    myNewArray.push(myOutput[2]);

    $("#animalOutput").append(myNewArray[0]);
    $("#sportOutput").append(myNewArray[1]);
    $("#decadeOfMusicOutput").append(myNewArray[2]);



    $("#favOutput").show();

  });
});
