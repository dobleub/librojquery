/*
 * sandbox.js
 * Generated by Geany 1.22
 * 
 * Author:	Edward Osorio S.
 * Date:	2014-06-18
 * Version:	1.0
 * Mail:	osorio.edd@gmail.com
 * 
 * Copyright 2014
 * 
 */

// 0.3.8 Ejercicios

$(document).ready(
	function(){
				// Selecciones
		console.log( $('div.module').length );
		console.log( $('#myList li').eq(2).html() );
		console.log( $('#myListItem').html() );
		console.log( $('label[for="q"]').html() );
		console.log( $(':hidden').length );
		console.log( $('img').attr('alt').length );
		console.log( $('#fruits tbody tr:odd').length );
		
				// Recorrer el DOM
		$('img').each(
			function(idx, el){
				console.log( $(el).attr('alt') );
			}
		);
		$('input').parent().addClass('search');
		$('#myList li.current').removeClass('current').next().addClass('current');
		console.log( $('#specials select').parent().next().find('input.input_submit').attr('value') );
		$('#myList li:first').addClass('current').siblings().addClass('disabled');
		
				// Manipulacion
		var $myList = $('#myList'), $myItems = [];
			for(var i=0; i<5; i++){
				$myItems.push('<li> Item ' + i + '</li>');
			}
			$myList.append($myItems.join(''));
		$('#myList li:odd').remove();
		var $newItem = $('<h2> Nuevo h2 </h2> <p> Nuevo parrafo </p>');
			$('div.module:last').append($newItem);
		var $newItem = $('<option>',{
				'html': 'Wednesday',
				'value': 'wednesday'
			});
			$('#specials select').append($newItem);
		var $newItem = $('<div>',{
				'class': 'module'
			});
			//$('img:first').clone().appendTo($newItem);
			//$('#main').after('div.module:last').append($newItem);
			var $newImg = $('img:first');
			$newItem.append($newImg.clone()).insertAfter('div.module:last');
	}
);
