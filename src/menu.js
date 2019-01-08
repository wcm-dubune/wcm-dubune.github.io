module.exports = class Menu {
	constructor(menuJson) {
		this.menuJson = menuJson;
		this.container = document.querySelector('#rm-container');
		this.cover = this.container.querySelector('div.rm-cover');
		this.middle = this.container.querySelector('div.rm-middle');
		this.right = this.container.querySelector('div.rm-right');
		// this.details = this.container.querySelector('a.rm-viewdetails');
		this.open = this.cover.querySelector('a.rm-button-open');
		this.close = this.right.querySelector('span.rm-close');
	}

	_updateMenus() {
		this._updateMenu(this.cover, 'left', 'rm-back');
		this._updateMenu(this.middle, 'center', 'rm-inner');
		this._updateMenu(this.right, 'right', 'rm-back');
	}

	_updateMenu(targetCover, pos, coverClass) {
		let cover = targetCover.querySelector(`div.${coverClass}`);
		let content = cover.querySelector('div.rm-content');
		content.remove();

		if (this.menuJson[pos]) {
			this._renderMenu(cover, this.menuJson[pos].groups);
		}
	}

	_renderMenu(targetNode, menuJson) {
		let els = menuJson.map((m) => {
			return `
			<h4>${m.subTitle}</h4>
			<dl>
			${this._renderSubmenu(m.menus).join('')}
			</dl>
			`;
		});

		let contentWapp = document.createElement('div');
		contentWapp.classList.add('rm-content');
		contentWapp.innerHTML = els;
		
		targetNode.appendChild(contentWapp);
	}

	_renderSubmenu(submenuJson) {
		return submenuJson.map((s) => {
			return `
				<dt>${s.name}<span>${s.price}</span></dt>
				<dd>${s.desc}</dd>
			`;
		});
	}

	init() {
		console.info('Menu: init');
		this._initEvents();
		this._updateMenus();
	}

	_initEvents() {
		console.info('Menu: _initEvent');
		this.cover.addEventListener('click', (e) => {
			this._openMenu();
			e.stopPropagation();
		});

		this.close.addEventListener('click', (e) => {
			this._closeMenu();
			e.stopPropagation();
		});

		// this.details.addEventListener('click', (e) => {
		// 	this.container.classList.remove('rm-in');
		// 	// $container.removeClass('rm-in').children('div.rm-modal').remove();
		// 	this._viewDetails(e.target);
		// 	e.stopPropagation();
		// });
	}

	_openMenu() {
		this.container.classList.add('rm-open');
	}
	
	_closeMenu() {
		const clzz = ['rm-open', 'rm-nodelay', 'rm-in'];
		this.container.classList.remove(...clzz);
	}

	_viewDetails(recipe) {
		// TODO: viewDetail
		console.info('_viewDetail', recipe);
		// var title = recipe.text(),
		// 	img = recipe.data('thumb'),
		// 	description = recipe.parent().next().text(),
		// 	url = recipe.attr('href');

		// var $modal = $('<div class="rm-modal"><div class="rm-thumb" style="background-image: url(' + img + ')"></div><h5>' + title + '</h5><p>' + description + '</p><a href="' + url + '">See the recipe</a><span class="rm-close-modal">x</span></div>');

		// $modal.appendTo($container);

		// var h = $modal.outerHeight(true);
		// $modal.css('margin-top', -h / 2);

		// setTimeout(function () {

		// 	$container.addClass('rm-in rm-nodelay');

		// 	$modal.find('span.rm-close-modal').on('click', function () {

		// 		$container.removeClass('rm-in');

		// 	});

		// }, 0);
	}
}