$(document).ready(function() {

	$(".popup-me").click(function(){

		pop_init( "Nell’aprile del 1629 nasceva a Venafro Ludovico Valla. Sua madre Antonia Martucci aveva sposato Antonio Valla che da Prata si era trasferito a Venafro in occasione delle nozze. Dopo aver terminato i suoi studi in “arte medica”, nel 1656 fu uno dei cinque medici che tentarono, su incarico dell’Università, di trovare rimedi alla grande peste che afflisse Venafro provocando migliaia di morti. Dal suo matrimonio con una Mancini ebbe tre figli che morirono prima di lui. Rimasto vedovo, si fece sacerdote fino a diventare Primicerio della Cattedrale di Venafro. Morì il 31 dicembre 1698." );

	});

});

function pop_init( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}