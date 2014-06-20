/*
 * inputHint.js
 * Generated by Geany 1.22
 * 
 * Author:	Edward Osorio S.
 * Date:	2014-06-19
 * Version:	1.0
 * Mail:	osorio.edd@gmail.com
 * 
 * Copyright 2014
 * 
 */
 
// Crear una 'sugerencia' para una Caja de Ingreso de Texto
 
$(document).ready(
	function(){
		var $valorS = $('#search label').html();
		var $input = $('#search input[type="text"]');
		$input.attr('value',$valorS).addClass('hint');
		$('#search label').remove();
		$input.on({
			'focus': function(e){
				$(this).attr('value','').removeClass('hint');
			},
			'blur': function(e){
				$(this).attr('value',$valorS).addClass('hint');
			}
		});
	}
);
