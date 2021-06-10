var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

	tabNavs[i].addEventListener("click", function (e) {
		e.preventDefault();
		var activeTabAttr = e.target.getAttribute("data-tab");

		for (var j = 0; j < tabNavs.length; j++) {
			var contentAttr = tabPanes[j].getAttribute("data-tab-content");

			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("active");
				tabPanes[j].classList.add("active");
			} else {
				tabNavs[j].classList.remove("active");
				tabPanes[j].classList.remove("active");
			}
		};
	});
}

for (var i = 0; i < tabNavs.length; i++) {
	tabNavs[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute("data-tab");

			for (var j = 0; j < tabNavs.length; j++) {
				var contentAttr = tabPanes[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabNavs[j].classList.add("active");
					tabPanes[j].classList.add("active");
				} else {
					tabNavs[j].classList.remove("active");
					tabPanes[j].classList.remove("active");
				}
			};
		}
	});
}

//select

let list = document.querySelector('.products__list');
let item = document.querySelectorAll('.products__item');
let arrow = document.querySelector('.arrowdown');

arrow.addEventListener('click', function (e) {
	list.classList.toggle('open');
});

arrow.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		list.classList.toggle('open');
	}
});

for (let i = 0; i < item.length; i++) {
	item[i].addEventListener("click", function (e) {
		e.preventDefault();
		item.forEach(link => link.classList.remove("active"));
		this.classList.add("active");
		list.classList.remove('open');
	});
}
for (let i = 0; i < item.length; i++) {
	item[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			item.forEach(link => link.classList.remove("active"));
			this.classList.add("active");
			list.classList.remove('open');
		}
	});
}

//select2

let formList = document.querySelector('.form__list');
let formItem = document.querySelectorAll('.form__item');
let formArrow = document.querySelector('.arrowdown-form');

formArrow.addEventListener('click', function (e) {
	formList.classList.toggle('open');
});


formArrow.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		formList.classList.toggle('open');
	}
});

for (let i = 0; i < formItem.length; i++) {
	formItem[i].addEventListener("click", function (e) {
		e.preventDefault();
		formItem.forEach(link => link.classList.remove("active"));
		this.classList.add("active");
		formList.classList.remove('open');
	});
}
for (let i = 0; i < formItem.length; i++) {
	formItem[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			formItem.forEach(link => link.classList.remove("active"));
			this.classList.add("active");
			formList.classList.remove('open');
		}
	});
}

//sidebar

let element = document.querySelectorAll('.menu__item');

for (let i = 0; i < element.length; i++) {
	element[i].addEventListener("click", function (e) {
		e.preventDefault();
		element.forEach(link => link.classList.remove("active"));
		this.classList.add("active");

	});
}
for (let i = 0; i < element.length; i++) {
	element[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			element.forEach(link => link.classList.remove("active"));
			this.classList.add("active");
		}
	});
}

let select = document.querySelectorAll('.orders__select');

for (let i = 0; i < select.length; i++) {
	select[i].addEventListener("click", function (e) {
		e.preventDefault();
		select.forEach(link => link.classList.remove("active"));
		this.classList.add("active");
	});
}
for (let i = 0; i < select.length; i++) {
	select[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			select.forEach(link => link.classList.remove("active"));
			this.classList.add("active");
		}
	});
}

let modal = document.querySelector('.modal');
let modalBg = document.querySelector('.modal__bg');
let btn = document.querySelector('.orders__payment');
let back = document.querySelector('.modal__back');
let cancel = document.querySelector('.form__cancel');

btn.addEventListener('click', function (e) {
	modal.classList.add('open');
});

btn.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		modal.classList.add('open');
	}
});



modalBg.addEventListener('click', function (e) {
	modal.classList.remove('open');
});

modalBg.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		modal.classList.remove('open');
	}
});

back.addEventListener('click', function (e) {
	modal.classList.remove('open');
});

back.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		modal.classList.remove('open');
	}
});

cancel.addEventListener('click', function (e) {
	modal.classList.remove('open');
});

back.addEventListener('keydown', function (e) {
	if (event.code == 'Enter') {
		modal.classList.remove('open');
	}
});

let payment = document.querySelectorAll('.form__payment');

for (let i = 0; i < payment.length; i++) {
	payment[i].addEventListener("click", function (e) {
		e.preventDefault();
		payment.forEach(link => link.classList.remove("active"));
		this.classList.add("active");
	});
}
for (let i = 0; i < payment.length; i++) {
	payment[i].addEventListener("keydown", function (e) {
		if (event.code == 'Enter') {
			e.preventDefault();
			payment.forEach(link => link.classList.remove("active"));
			this.classList.add("active");
		}
	});
}

//Разрешаю вводить только цифры в type text
const input = document.getElementById('only_num');

input.addEventListener('keydown', function (event) {
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		(event.keyCode == 65 && event.ctrlKey === true) ||
		(event.keyCode >= 35 && event.keyCode <= 39)) {

		return;
	} else {
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
			event.preventDefault();
		}
	}
});