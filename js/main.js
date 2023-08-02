jQuery("#popupForm").validate({
submitHandler: function(form) {
jQuery.ajax({
url: '/wp-admin/admin-ajax.php',data:jQuery('#popupForm').serialize()+'&action=myfilter&do=contact',
type: 'POST',
beforeSend: function(xhr) { jQuery('#popupForm').css('opacity', '0.5'); },
success: function(data) {
	jQuery('#successMessage').fadeIn();
	jQuery('#popupForm').trigger("reset");
	jQuery('#popupForm').css('opacity', '1');
}
});
}
});

jQuery("#contactForm").validate({
submitHandler: function(form) {

grecaptcha.ready(function() {
grecaptcha.execute('6LdRzZYUAAAAACyuLNNH7fIbPKVWBcHkD9dVo3Z5', {action: 'contact'}).then(function(token) {
$('#contactForm').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
$.ajax({
url: '/wp-admin/admin-ajax.php',data:jQuery('#contactForm').serialize()+'&action=myfilter&do=contact',
type: 'POST',
beforeSend: function(xhr) { jQuery('#contactForm').css('opacity', '0.5'); },
success: function(data) {
jQuery('#successMessage').fadeIn();
	jQuery('#contactForm').trigger("reset");
	jQuery('#contactForm').css('opacity', '1');
}
});
});;
});



}
});

jQuery("#quoteForm").validate({
submitHandler: function(form) {

grecaptcha.ready(function() {
grecaptcha.execute('6LdRzZYUAAAAACyuLNNH7fIbPKVWBcHkD9dVo3Z5', {action: 'quote'}).then(function(token) {
$('#quoteForm').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
$.ajax({
url: '/wp-admin/admin-ajax.php',data:jQuery('#quoteForm').serialize()+'&action=myfilter&do=quote',
type: 'POST',
beforeSend: function(xhr) { jQuery('#quoteForm').css('opacity', '0.5'); jQuery('.button__loading').show();},
success: function(data) {
jQuery('#successMessageQuote_output').fadeIn();
	jQuery('#total_quote').html(data);
	jQuery('#quoteForm').hide();
	jQuery('.button__loading').hide();
	jQuery("html, body").animate({ scrollTop: 0 }, "slow");
	//jQuery('#quoteForm').trigger("reset");
}
});
});;
});

}
});



jQuery(document).on('change', 'input[name="iq-form_pack"]', function() {
  current_selected = jQuery(this).val();
  if (current_selected=='BVLT Standart') {
	jQuery( ".cleaning-group__day span" ).each(function() {
		var selected = jQuery( this ).text();
		if (selected=='1') { jQuery( this ).text('2'); jQuery('#'+jQuery(this).parents('.form-group').data('day')).val('2'); }
	});
  }
});

// jQuery(document).on("click", "[data-input-less]", function() {
// 	current = parseInt(jQuery(this).parent('.input-group').find('span').text()) - 1;

// 	if(jQuery('#iq-form_pro').is(':checked')) {	min = 0; } else { min = 0; }
// 	if (current <= min) { current = min; }
// 	if (current == 1) { current = 0; }
// 	jQuery(this).parent('.input-group').find('span').text(current);
// 	var input_value = jQuery(this).parents('.form-group').data('day');
// 	jQuery('#'+input_value).val(current);
// })

// jQuery(document).on("click", "[data-input-more]", function() {
// 	current = parseInt(jQuery(this).parent('.input-group').find('span').text()) + 1;
// 	console.log(current);
// 	if (current == 1) { current = 1; }
// 	jQuery(this).parent('.input-group').find('span').text(current);
// 	var input_value = jQuery(this).parents('.form-group').data('day');
// 	jQuery('#'+input_value).val(current);
// 	console.log(current);
// })
