define([
], function(){
	var Constants = {
		basePath : '/api/ticket',
		scale : 4,
		thumbSize : 200,
		mainMenu: [
			{text:'Shop', href:'#shop'},
			{text:'Editor', href:'#editor'},
			{text:'Gallery', href:'#gallery'},
			{text:'About', href:'#about'},
			{text:'Contact', href:'#contact'},
		],
		woodTypes : [
			'purty_wood',
			'retina_wood',
			'tileable_wood_texture',
			'wood_pattern'
		],
		shapeTypes : [
			'round',
			'rectangular',
		],
		productTypes : [
			'calendar',
			'book',
			'picture'
		],
		materials : [
			'wood',
			'bone',
			'glass'
		],
		
		parse : {
			AppID : '0yXFaABnkqXVSBDvY11WIRia0vWEVDnTCc959zTy',
			JsKey : 'DpKYEptsNFQD9Hz7trcvl7bNTdtTcfGqZdG6EGas'
		}
		
	};
	return Constants;
});