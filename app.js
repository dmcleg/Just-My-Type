$(document).ready(function () {
    //sentences for typing
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    //variables
    let letterIndex = 0
    let sentenceIndex = 0

    $('#sentence').html(sentences[sentenceIndex]);

    $("#keyboard-upper-container").hide();

    $('#target-letter').html(sentences[sentenceIndex][letterIndex]);

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }
    });

    $(document).keyup(function (e) {
        $('.highlight').removeClass("highlight");
       // $('.glyphicon').remove()
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }
    });

    $(document).keypress(function (e) {
        $('#' + e.keyCode).addClass("highlight");
        letterIndex++
        $('#yellow-block').css('left', '+=17.5');
        $('#target-letter').html(sentences[sentenceIndex][letterIndex]);
        console.log (sentences[sentenceIndex].charCodeAt([letterIndex]))

        if (e.keyCode == sentences[sentenceIndex].charCodeAt([letterIndex-1])) {

            $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
        } else {
            $('#feedback').append('<span class ="glyphicon glyphicon-remove"></span>');
        }

        if (letterIndex == sentences[sentenceIndex].length) {
            $('#yellow-block').css('left', '17.5px');

            sentenceIndex++
            letterIndex = 0
            $('#sentence').html(sentences[sentenceIndex]);
            $('#target-letter').html(sentences[sentenceIndex][letterIndex]);
            $('.glyphicon').remove()
        }
    });

});