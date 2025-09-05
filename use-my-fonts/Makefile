build:
	sassc -t compact fonts.scss fonts.css
	sed -i '/^$$/d' fonts.css
	sed -i '/^@/d' userscript.js
	sed -i '/const FONT_CSS/r fonts.css' userscript.js
	rm fonts.css
