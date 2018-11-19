$(document).ready(function () {

    $("a").click(function (event) {
        ConsoleWrite('Click');
        $("blockquote").toggleClass("evidenziato");
        $("blockquote").toggle("slow");
        event.preventDefault();
    });

    var count = $("blockquote").text().split(' ').length;
    ConsoleWrite('Numero parole: ' + count);

    var divs = $("div");
    $('#output').append("NUmero di elementi:" + divs.length);
    $(divs[1]).css('border-width', '1px');
    $(divs[1]).css('border-color', 'black');
    $(divs[1]).css('border-style', 'solid');

    $('.title').css('text-decoration', 'underline');
});

function ConsoleWrite(testo) {
    var textarea= $("#console");
    if (textarea != null) {
        $(textarea).text(testo);
    }
    console.log(testo);
}
