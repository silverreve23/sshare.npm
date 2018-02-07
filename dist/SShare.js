module.exports = {
	
	vk: function(purl = null){
		
		var socUrl = 'http://vkontakte.ru/share.php'; 
		var postUrl = location.protocol 
			+ '//' 
			+ location.hostname 
			+ '/'
			+ purl; 
			
		socUrl += '?url=' + encodeURIComponent(postUrl);

		this.popup(socUrl);
		
	},
	
	ok: function(purl = null){
		
		var socUrl = 'http://www.odnoklassniki.ru/dk';
		var postUrl = location.protocol 
			+ '//' 
			+ location.hostname 
			+ '/'
			+ purl; 
			
		socUrl += '?st.cmd=addShare&st.s=1';
		socUrl += '&st._surl=' + encodeURIComponent(postUrl);

		this.popup(socUrl);

	},
	
	fb: function(purl = null){
		
		var socUrl = 'http://www.facebook.com/sharer.php';
		var postUrl = location.protocol 
			+ '//' 
			+ location.hostname 
			+ '/'
			+ purl; 
			
		socUrl += '?u=' + encodeURIComponent(postUrl);

		this.popup(socUrl);
		
	},
	
	tw: function(purl = null){
		
		var socUrl = 'http://twitter.com/share';
		var postUrl = location.protocol 
			+ '//' 
			+ location.hostname 
			+ '/'
			+ purl; 
	
		socUrl += '?url=' + encodeURIComponent(postUrl);

		this.popup(socUrl);
		
	},
	
	glp: function(purl = null){
		
		var socUrl = 'https://plus.google.com/share';
		var postUrl = location.protocol 
			+ '//' 
			+ location.hostname 
			+ '/'
			+ purl; 
	
		socUrl += '?url=' + encodeURIComponent(postUrl);

		this.popup(socUrl);
		
	},

	popup: function(url) {
		
		var settingWindow = 'toolbar=0,status=0,width=626,height=436';
		
		window.open(url, null, settingWindow);
		
	}
	
};
