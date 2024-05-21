$(document).ready(function () {
  $(".listpacks").mCustomScrollbar({
      scrollButtons: {enable: true},
      theme: "light-thick",
      scrollbarPosition: "outside"
  });
});


$("[name=purpose]").click(function () {
  var theValue = jQuery(this).val();
  $('#purposeSelect').val(theValue);
});


$("[name=visit]").click(function () {
  var theValue = jQuery(this).val();
  $('#apply').val(theValue);
});

$("[name=written]").click(function () {
  var theValue = jQuery(this).val();
  $('#content').val(theValue);
});

$("[name=copywrite]").click(function () {
  var theValue = jQuery(this).val();
  $('#copywrite').val(theValue);
});

$("[name=cms]").click(function () {
  var theValue = jQuery(this).val();
  $('#system').val(theValue);
});

$("[name=redesign]").click(function () {
  var theValue = jQuery(this).val();
  $('#Reredesign').val(theValue);
});

$("[name=going]").click(function () {
  var theValue = jQuery(this).val();
  $('#need').val(theValue);
});

$("[name=weblogo]").click(function () {
  var theValue = jQuery(this).val();
  $('#Weblogo').val(theValue);
});

$("[name=specific]").click(function () {
  var theValue = jQuery(this).val();
  $('#Specific').val(theValue);
});


$("[name=social]").click(function () {
  var theValue = jQuery(this).val();
  $('#Media').val(theValue);
});