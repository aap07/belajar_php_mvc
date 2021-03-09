// (function ($) {
// 	"use strict"; // Start of use strict
// 	// start modal change menu
// 	$('.modalAddMenu').on('click', function () {
// 		$('#menuModalLabel').html('Add New Menu');
// 		$('.modal-footer button[type=submit]').html('Add');
// 		$('#menu').val('');
// 		$('#id').val('');
// 	});

// 	$('.modalChangeMenu').on('click', function () {
// 		$('#menuModalLabel').html('Change Menu');
// 		$('.modal-footer button[type=submit]').html('Change');
// 		$('.modal-body form').attr('action', 'http://localhost/c-store07/menu/changemenu');
// 		const id = $(this).data('id');
// 		$.ajax({
// 			url: 'http://localhost/c-store07/menu/getchangemenu',
// 			data: {
// 				id: id
// 			},
// 			method: 'post',
// 			dataType: 'json',
// 			success: function (data) {
// 				// console.log(data);
// 				$('#menu').val(data.menu);
// 				$('#id').val(data.id);
// 			}
// 		});
// 	});
// 	// end modal change menu

// 	// start modal change submenu
// 	$('.modalAddSubmenu').on('click', function () {
// 		$('#newSubMenuModalLabel').html('Add New Submenu');
// 		$('.modal-footer button[type=submit]').html('Add');
// 		$('#title').val('');
// 		$('#menu_id').val('');
// 		$('#url').val('');
// 		$('#icon').val('');
// 		$('#id').val('');
// 	});

// 	$('.modalChangSubmenu').on('click', function () {
// 		$('#newSubMenuModalLabel').html('Change Submenu');
// 		$('.modal-footer button[type=submit]').html('Change');
// 		$('.modal-body form').attr('action', 'http://localhost/c-store07/menu/changesubmenu');
// 		const id = $(this).data('id');
// 		$.ajax({
// 			url: 'http://localhost/c-store07/menu/getchangesubmenu',
// 			data: {
// 				id: id
// 			},
// 			method: 'post',
// 			dataType: 'json',
// 			success: function (data) {
// 				// console.log(data);
// 				$('#title').val(data.title);
// 				$('#menu_id').val(data.menu_id);
// 				$('#url').val(data.url);
// 				$('#icon').val(data.icon);
// 				$('#id').val(data.id);
// 			}
// 		});
// 	});
// 	// end modal change submenu

// 	// start modal change role
// 	$('.modalAddRole').on('click', function () {
// 		$('#newRowModalLabel').html('Add New Role');
// 		$('.modal-footer button[type=submit]').html('Add');
// 		$('#role').val('');
// 		$('#id').val('');
// 	});

// 	$('.modalChangeRole').on('click', function () {
// 		$('#newRowModalLabel').html('Change Role');
// 		$('.modal-footer button[type=submit]').html('Change');
// 		$('.modal-body form').attr('action', 'http://localhost/c-store07/menu/changerole');
// 		const id = $(this).data('id');
// 		$.ajax({
// 			url: 'http://localhost/c-store07/menu/getchangerole',
// 			data: {
// 				id: id
// 			},
// 			method: 'post',
// 			dataType: 'json',
// 			success: function (data) {
// 				// console.log(data);
// 				$('#role').val(data.role);
// 				$('#id').val(data.id);
// 			}
// 		});
// 	});
// 	// end modal change role

// })(jQuery); // End of use strict
