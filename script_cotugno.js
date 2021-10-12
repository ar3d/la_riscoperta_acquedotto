$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Nato nel 1785, morì il 14 agosto 1860. Archeologo, teologo e arcidiacono della Cattedrale di Venafro, fu precettore di Leopoldo Pilla, professore di Mineralogia e Geologia prima all'Università di Napoli e successivamente all'Università di Pisa, fervente patriota, caduto nei pressi di Curtatone nel 1848 nel corso della Prima guerra d'indipendenza." );

	});

});

function pop_init_1( my_content ) {

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