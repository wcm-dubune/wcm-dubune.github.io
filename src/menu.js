module.exports = class Menu {
	constructor(menuJson) {
		this.menuJson = menuJson;
		this.container = document.querySelector('#rm-container');
		this.cover = this.container.querySelector('div.rm-cover');
		this.middle = this.container.querySelector('div.rm-middle');
		this.right = this.container.querySelector('div.rm-right');
		this.open = this.cover.querySelector('a.rm-button-open');
		this.close = this.right.querySelector('span.rm-close');
		this._updateMenus();
	}

	_updateMenus() {
		this._updateMenu(this.cover, 'left', 'rm-back');
		this._updateMenu(this.middle, 'center', 'rm-inner');
		this._updateMenu(this.right, 'right', 'rm-back');
		this.details = this.container.querySelectorAll('a.rm-viewdetails');
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
			return s.thumb ? `
				<dt><a href="#" class="rm-viewdetails" data-thumb="${s.thumb}">${s.name}</a><span>${s.price}</span></dt>
				<dd>${s.desc}</dd>
			` : `
				<dt>${s.name}<span>${s.price}</span></dt>
				<dd>${s.desc}</dd>
			`;
		});
	}

	init() {
		console.info('Menu: init');
		this._initEvents();
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


		this.details.forEach((d) => {
			d.addEventListener('click', (e) => {
				e.preventDefault();

				this.container.classList.remove('rm-in');
				if (this.container.querySelector('div.rm-modal'))
					this.container.querySelector('div.rm-modal').remove();

				this._viewDetails(e);
				e.stopPropagation();
			});
		});
	}

	_openMenu() {
		this.container.classList.add('rm-open');
	}
	
	_closeMenu() {
		const clzz = ['rm-open', 'rm-nodelay', 'rm-in'];
		this.container.classList.remove(...clzz);
	}

	_viewDetails(e) {
		let recipe = e.target;
		let positionY = e.pageY;
		let title = recipe.textContent,
			img = recipe.getAttribute('data-thumb'),
			description = recipe.parentNode.nextElementSibling.textContent;

		let modal = `
			<div class="rm-thumb" style="background-image: url(${img})"></div><h5>${title}</h5><p>${description}</p><span class="rm-close-modal">x</span>
		`;

		let modalWapp = document.createElement('div');
		modalWapp.classList.add('rm-modal');
		modalWapp.innerHTML = modal;
		
		if (window.outerWidth < 960) {
			modalWapp.style.top = `${positionY}px`;
		}

		this.container.appendChild(modalWapp)

		setTimeout(() => {
			this.container.classList.add('rm-in', 'rm-nodelay');

			modalWapp.querySelector('span.rm-close-modal').addEventListener('click', () => {
				this.container.classList.remove('rm-in');
			});
		}, 0);
	}
}