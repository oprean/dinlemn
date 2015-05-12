define([
], function(){
	// TODO change constans name to UPERCASE
	var Constants = {
		scale : 4, // for calendars
		rscale : 20, // for rings
		thumbSize : 200,
		guestName : 'Guest',
		quickSaveName : 'local.last.save',
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
		
		wallTypes : [
			'graphy',
			'concrete',
			'fabric_plaid',
			'subtle_stripes',
			'tileable_wood_texture',
			'webtreats_wood-pattern2-512',
			'webtreats_wood-pattern5-512'
		],
		
		profileTypes: [
			'Softflat',
			'Reverse D',
			'D Profile',
			'Courting'
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