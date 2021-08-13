$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "Di Francesco Lucenteforte sappiamo quanto riferisce su di lui Giambattista Masciotta.
Francesco Antonio Carmine nasce a Venafro il 17 luglio 1811 dove morì, all’età di 71 anni, il 23 marzo 1882. Suo padre Giambattista, maritato con Clementina Monaco, esercitava il mestiere di notaio. “Ecclesiastico d’intemerati costumi ebbe cultura varia e superiore alla comune, ed un sentimento religioso di cristallina purezza da non impedirgli le più vive simpatie verso il movimento del risorgimento nazionale”. Nel palazzo di famiglia, a poca distanza dal Castello di Venafro, ospitò il gesuita padre Raffaele Garrucci con il quale collaborò per la stesura del suo volume sulle lapidi venafrane, delle quali Lucenteforte fu anche collezionista. Raccolse nel territorio venafrano anche un buon numero di oggetti litici che poi donò nel 1876 al Regio Museo Nazionale Preistorico Etnografico di Roma fondato da Luigi Pigorini, dove ancora si trovano. In quell’anno ospitò anche Teodoro Mommsen venuto a Venafro per aggiornare la prima edizione del Corpus delle lapidi latine. Fu corrispondente di numerosi istituti archeologici ed in particolare dell’Istituto Germanico di Roma." );

	});

});

function pop_init_2( my_content ) {

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