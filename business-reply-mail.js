(function() {
	var scroll = null,
		lastY = 0,
		delta = 0,
		doc = null,
		xml = null,
		relativeX,
		relativeY,
		letter = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg draggable='true' width=\"777px\" height=\"456px\" viewBox=\"0 0 777 456\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n    <title>businessreply</title>\n    <description>Created with Sketch (http://www.bohemiancoding.com/sketch)</description>\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <rect d=\"M0,0 L0,456 L777,456 L777,0 L0,0 Z M0,0\" id=\"BG\" stroke=\"#000000\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"777\" height=\"456\"></rect>\n        <g id=\"Bottom\" sketch:type=\"MSLayerGroup\" transform=\"translate(316.000000, 407.000000)\" fill=\"#000000\">\n            <rect d=\"M0,0 L0,20 L3,20 L3,0 L0,0 Z M0,0\" id=\"Rectangle-16\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M7,13 L7,20 L10,20 L10,13 L7,13 Z M7,13\" id=\"Rectangle-16-copy\" sketch:type=\"MSShapeGroup\" x=\"7\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M14,13 L14,20 L17,20 L17,13 L14,13 Z M14,13\" id=\"Rectangle-16-copy-2\" sketch:type=\"MSShapeGroup\" x=\"14\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M28,13 L28,20 L31,20 L31,13 L28,13 Z M28,13\" id=\"Rectangle-16-copy-3\" sketch:type=\"MSShapeGroup\" x=\"28\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M55,13 L55,20 L58,20 L58,13 L55,13 Z M55,13\" id=\"Rectangle-16-copy-4\" sketch:type=\"MSShapeGroup\" x=\"55\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M62,13 L62,20 L65,20 L65,13 L62,13 Z M62,13\" id=\"Rectangle-16-copy-5\" sketch:type=\"MSShapeGroup\" x=\"62\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M69,13 L69,20 L72,20 L72,13 L69,13 Z M69,13\" id=\"Rectangle-16-copy-6\" sketch:type=\"MSShapeGroup\" x=\"69\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M76,13 L76,20 L79,20 L79,13 L76,13 Z M76,13\" id=\"Rectangle-16-copy-7\" sketch:type=\"MSShapeGroup\" x=\"76\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M83,13 L83,20 L86,20 L86,13 L83,13 Z M83,13\" id=\"Rectangle-16-copy-8\" sketch:type=\"MSShapeGroup\" x=\"83\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M97,13 L97,20 L100,20 L100,13 L97,13 Z M97,13\" id=\"Rectangle-16-copy-9\" sketch:type=\"MSShapeGroup\" x=\"97\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M111,13 L111,20 L114,20 L114,13 L111,13 Z M111,13\" id=\"Rectangle-16-copy-10\" sketch:type=\"MSShapeGroup\" x=\"111\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M132,13 L132,20 L135,20 L135,13 L132,13 Z M132,13\" id=\"Rectangle-16-copy-11\" sketch:type=\"MSShapeGroup\" x=\"132\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M139,13 L139,20 L142,20 L142,13 L139,13 Z M139,13\" id=\"Rectangle-16-copy-12\" sketch:type=\"MSShapeGroup\" x=\"139\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M159,13 L159,20 L162,20 L162,13 L159,13 Z M159,13\" id=\"Rectangle-16-copy-13\" sketch:type=\"MSShapeGroup\" x=\"159\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M173,13 L173,20 L176,20 L176,13 L173,13 Z M173,13\" id=\"Rectangle-16-copy-14\" sketch:type=\"MSShapeGroup\" x=\"173\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M187,13 L187,20 L190,20 L190,13 L187,13 Z M187,13\" id=\"Rectangle-16-copy-15\" sketch:type=\"MSShapeGroup\" x=\"187\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M201,13 L201,20 L204,20 L204,13 L201,13 Z M201,13\" id=\"Rectangle-16-copy-16\" sketch:type=\"MSShapeGroup\" x=\"201\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M208,13 L208,20 L211,20 L211,13 L208,13 Z M208,13\" id=\"Rectangle-16-copy-17\" sketch:type=\"MSShapeGroup\" x=\"208\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M222,13 L222,20 L225,20 L225,13 L222,13 Z M222,13\" id=\"Rectangle-16-copy-18\" sketch:type=\"MSShapeGroup\" x=\"222\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M236,13 L236,20 L239,20 L239,13 L236,13 Z M236,13\" id=\"Rectangle-16-copy-19\" sketch:type=\"MSShapeGroup\" x=\"236\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M243,13 L243,20 L246,20 L246,13 L243,13 Z M243,13\" id=\"Rectangle-16-copy-20\" sketch:type=\"MSShapeGroup\" x=\"243\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M263,13 L263,20 L266,20 L266,13 L263,13 Z M263,13\" id=\"Rectangle-16-copy-21\" sketch:type=\"MSShapeGroup\" x=\"263\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M270,13 L270,20 L273,20 L273,13 L270,13 Z M270,13\" id=\"Rectangle-16-copy-22\" sketch:type=\"MSShapeGroup\" x=\"270\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M277,13 L277,20 L280,20 L280,13 L277,13 Z M277,13\" id=\"Rectangle-16-copy-23\" sketch:type=\"MSShapeGroup\" x=\"277\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M298,13 L298,20 L301,20 L301,13 L298,13 Z M298,13\" id=\"Rectangle-16-copy-24\" sketch:type=\"MSShapeGroup\" x=\"298\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M305,13 L305,20 L308,20 L308,13 L305,13 Z M305,13\" id=\"Rectangle-16-copy-25\" sketch:type=\"MSShapeGroup\" x=\"305\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M312,13 L312,20 L315,20 L315,13 L312,13 Z M312,13\" id=\"Rectangle-16-copy-26\" sketch:type=\"MSShapeGroup\" x=\"312\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M319,13 L319,20 L322,20 L322,13 L319,13 Z M319,13\" id=\"Rectangle-16-copy-27\" sketch:type=\"MSShapeGroup\" x=\"319\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M326,13 L326,20 L329,20 L329,13 L326,13 Z M326,13\" id=\"Rectangle-16-copy-28\" sketch:type=\"MSShapeGroup\" x=\"326\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M340,13 L340,20 L343,20 L343,13 L340,13 Z M340,13\" id=\"Rectangle-16-copy-29\" sketch:type=\"MSShapeGroup\" x=\"340\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M166,13 L166,20 L169,20 L169,13 L166,13 Z M166,13\" id=\"Rectangle-16-copy-14\" sketch:type=\"MSShapeGroup\" x=\"166\" y=\"13\" width=\"3\" height=\"7\"></rect>\n            <rect d=\"M21,0 L21,20 L24,20 L24,0 L21,0 Z M21,0\" id=\"Rectangle-16-copy\" sketch:type=\"MSShapeGroup\" x=\"21\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M35,0 L35,20 L38,20 L38,0 L35,0 Z M35,0\" id=\"Rectangle-16-copy-2\" sketch:type=\"MSShapeGroup\" x=\"35\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M42,0 L42,20 L45,20 L45,0 L42,0 Z M42,0\" id=\"Rectangle-16-copy-3\" sketch:type=\"MSShapeGroup\" x=\"42\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M49,0 L49,20 L52,20 L52,0 L49,0 Z M49,0\" id=\"Rectangle-16-copy-4\" sketch:type=\"MSShapeGroup\" x=\"49\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M90,0 L90,20 L93,20 L93,0 L90,0 Z M90,0\" id=\"Rectangle-16-copy-5\" sketch:type=\"MSShapeGroup\" x=\"90\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M104,0 L104,20 L107,20 L107,0 L104,0 Z M104,0\" id=\"Rectangle-16-copy-6\" sketch:type=\"MSShapeGroup\" x=\"104\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M118,0 L118,20 L121,20 L121,0 L118,0 Z M118,0\" id=\"Rectangle-16-copy-7\" sketch:type=\"MSShapeGroup\" x=\"118\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M125,0 L125,20 L128,20 L128,0 L125,0 Z M125,0\" id=\"Rectangle-16-copy-8\" sketch:type=\"MSShapeGroup\" x=\"125\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M146,0 L146,20 L149,20 L149,0 L146,0 Z M146,0\" id=\"Rectangle-16-copy-9\" sketch:type=\"MSShapeGroup\" x=\"146\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M153,0 L153,20 L156,20 L156,0 L153,0 Z M153,0\" id=\"Rectangle-16-copy-10\" sketch:type=\"MSShapeGroup\" x=\"153\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M180,0 L180,20 L183,20 L183,0 L180,0 Z M180,0\" id=\"Rectangle-16-copy-11\" sketch:type=\"MSShapeGroup\" x=\"180\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M194,0 L194,20 L197,20 L197,0 L194,0 Z M194,0\" id=\"Rectangle-16-copy-12\" sketch:type=\"MSShapeGroup\" x=\"194\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M215,0 L215,20 L218,20 L218,0 L215,0 Z M215,0\" id=\"Rectangle-16-copy-13\" sketch:type=\"MSShapeGroup\" x=\"215\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M229,0 L229,20 L232,20 L232,0 L229,0 Z M229,0\" id=\"Rectangle-16-copy-14\" sketch:type=\"MSShapeGroup\" x=\"229\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M250,0 L250,20 L253,20 L253,0 L250,0 Z M250,0\" id=\"Rectangle-16-copy-15\" sketch:type=\"MSShapeGroup\" x=\"250\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M256,0 L256,20 L259,20 L259,0 L256,0 Z M256,0\" id=\"Rectangle-16-copy-16\" sketch:type=\"MSShapeGroup\" x=\"256\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M285,0 L285,20 L288,20 L288,0 L285,0 Z M285,0\" id=\"Rectangle-16-copy-17\" sketch:type=\"MSShapeGroup\" x=\"285\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M291,0 L291,20 L294,20 L294,0 L291,0 Z M291,0\" id=\"Rectangle-16-copy-18\" sketch:type=\"MSShapeGroup\" x=\"291\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M334,0 L334,20 L337,20 L337,0 L334,0 Z M334,0\" id=\"Rectangle-16-copy-19\" sketch:type=\"MSShapeGroup\" x=\"334\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M348,0 L348,20 L351,20 L351,0 L348,0 Z M348,0\" id=\"Rectangle-16-copy-20\" sketch:type=\"MSShapeGroup\" x=\"348\" y=\"0\" width=\"3\" height=\"20\"></rect>\n            <rect d=\"M354,0 L354,20 L357,20 L357,0 L354,0 Z M354,0\" id=\"Rectangle-16-copy-22\" sketch:type=\"MSShapeGroup\" x=\"354\" y=\"0\" width=\"3\" height=\"20\"></rect>\n        </g>\n        <g id=\"Sidebars\" sketch:type=\"MSLayerGroup\" transform=\"translate(621.000000, 164.000000)\" fill=\"#000000\">\n            <rect d=\"M0,0 L0,14 L137,14 L137,0 L0,0 Z M0,0\" id=\"Rectangle-2\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"137\" height=\"14\"></rect>\n            <rect d=\"M0,26 L0,40 L137,40 L137,26 L0,26 Z M0,26\" id=\"Rectangle-2-copy\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"26\" width=\"137\" height=\"14\"></rect>\n            <rect d=\"M0,52 L0,66 L137,66 L137,52 L0,52 Z M0,52\" id=\"Rectangle-2-copy-2\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"52\" width=\"137\" height=\"14\"></rect>\n            <rect d=\"M0,78 L0,92 L137,92 L137,78 L0,78 Z M0,78\" id=\"Rectangle-2-copy-3\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"78\" width=\"137\" height=\"14\"></rect>\n            <rect d=\"M0,104 L0,118 L137,118 L137,104 L0,104 Z M0,104\" id=\"Rectangle-2-copy-4\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"104\" width=\"137\" height=\"14\"></rect>\n            <rect d=\"M0,130 L0,144 L137,144 L137,130 L0,130 Z M0,130\" id=\"Rectangle-2-copy-5\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"130\" width=\"137\" height=\"14\"></rect>\n        </g>\n        <g id=\"Postage\" sketch:type=\"MSLayerGroup\" transform=\"translate(622.000000, 60.000000)\">\n            <rect d=\"M0,0 L0,91 L137,91 L137,0 L0,0 Z M0,0\" id=\"Rectangle-8\" stroke=\"#000000\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"137\" height=\"91\"></rect>\n            <text id=\"NO-POSTAGE\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"15\" font-weight=\"normal\" sketch:alignment=\"middle\">\n                <tspan x=\"19.4606934\" y=\"15\">NO POSTAGE</tspan>\n                <tspan x=\"22.3684082\" y=\"33\">NECESSARY</tspan>\n                <tspan x=\"31.8276367\" y=\"51\">IF MAILED</tspan>\n                <tspan x=\"44.0480957\" y=\"69\">IN THE</tspan>\n                <tspan x=\"10.4335938\" y=\"87\">UNITED STATES</tspan>\n            </text>\n        </g>\n        <g id=\"Top-Bars\" sketch:type=\"MSLayerGroup\" transform=\"translate(472.000000, 0.000000)\" fill=\"#000000\">\n            <rect d=\"M0,0 L0,78 L5,78 L5,0 L0,0 Z M0,0\" id=\"Rectangle-9\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"5\" height=\"78\"></rect>\n            <rect d=\"M8,0 L8,78 L13,78 L13,0 L8,0 Z M8,0\" id=\"Rectangle-9-copy\" sketch:type=\"MSShapeGroup\" x=\"8\" y=\"0\" width=\"5\" height=\"78\"></rect>\n            <rect d=\"M23,0 L23,78 L28,78 L28,0 L23,0 Z M23,0\" id=\"Rectangle-9-copy-2\" sketch:type=\"MSShapeGroup\" x=\"23\" y=\"0\" width=\"5\" height=\"78\"></rect>\n            <rect d=\"M38,0 L38,78 L43,78 L43,0 L38,0 Z M38,0\" id=\"Rectangle-9-copy-3\" sketch:type=\"MSShapeGroup\" x=\"38\" y=\"0\" width=\"5\" height=\"78\"></rect>\n            <rect d=\"M53,0 L53,78 L58,78 L58,0 L53,0 Z M53,0\" id=\"Rectangle-9-copy-4\" sketch:type=\"MSShapeGroup\" x=\"53\" y=\"0\" width=\"5\" height=\"78\"></rect>\n            <rect d=\"M61,0 L61,78 L66,78 L66,0 L61,0 Z M61,0\" id=\"Rectangle-9-copy-5\" sketch:type=\"MSShapeGroup\" x=\"61\" y=\"0\" width=\"5\" height=\"78\"></rect>\n        </g>\n        <g id=\"Group\" sketch:type=\"MSLayerGroup\" transform=\"translate(149.000000, 121.000000)\">\n            <text id=\"BUSINESS-REPLY-MAIL\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"29\" font-weight=\"bold\" sketch:alignment=\"middle\" letter-spacing=\"2.5\">\n                <tspan x=\"3.5\" y=\"28\">BUSINESS REPLY MAIL</tspan>\n            </text>\n            <text id=\"FIRST-CLASS-MAIL\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"13\" font-weight=\"normal\" sketch:alignment=\"middle\" letter-spacing=\"0.200000003\">\n                <tspan x=\"3.5\" y=\"49\">FIRST-CLASS MAIL</tspan>\n            </text>\n            <text id=\"POSTAGE-WILL-BE-PAID\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"13\" font-weight=\"normal\" sketch:alignment=\"middle\" letter-spacing=\"0.200000003\">\n                <tspan x=\"9\" y=\"74\">POSTAGE WILL BE PAID BY ADDRESSEE</tspan>\n            </text>\n            <text id=\"PERMIT--NO.-000\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"13\" font-weight=\"normal\" sketch:alignment=\"middle\" letter-spacing=\"0.200000003\">\n                <tspan x=\"142\" y=\"49\">PERMIT  NO. 000</tspan>\n            </text>\n            <text id=\"WASHINGTON-DC\" fill=\"#000000\" sketch:type=\"MSTextLayer\" font-family=\"Helvetica\" font-size=\"13\" font-weight=\"normal\" sketch:alignment=\"middle\" letter-spacing=\"0.200000003\">\n                <tspan x=\"264.5\" y=\"50\">WASHINGTON DC</tspan>\n            </text>\n            <rect d=\"M0,0 L0,58 L384,58 L384,0 L0,0 Z M0,0\" id=\"Rectangle-15\" stroke=\"#000000\" stroke-width=\"2\" sketch:type=\"MSShapeGroup\" x=\"0\" y=\"0\" width=\"384\" height=\"58\"></rect>\n        </g>\n    </g>\n</svg>"

	function makeDraggable() {
		setTransitionCSS(null,null)
		doc.addEventListener('mousedown', function(e) {
			var relatives = getOffset(e);
			relativeX = relatives.x,
			relativeY = relatives.y
			window.addEventListener('mousemove', docMove, true);
		}, false)
		window.addEventListener('mouseup', function() {
			relativeX = relativeY = null
			 window.removeEventListener('mousemove', docMove, true);				
		}, false)
	}
	function setTransitionCSS(transition,timing) {
		for (var i in {'WebkitTransition':true, 'MozTransition':true, 'transition':true}) {
			doc.style[ i ] = transition
		}
		for (var i in {'WebkitTransitionTimingFunction':true, 'MozTransitionTimingFunction':true, 'transitionTimingFunction':true}) {
			doc.style[ i ] = timing
		}	
	}
	function getOffset(evt) {
		// http://stackoverflow.com/questions/8389156/what-substitute-should-we-use-for-layerx-layery-since-they-are-deprecated-in-web
		var el = evt.target,
		  x = y = 0;

		while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
		x += el.offsetLeft - el.scrollLeft;
		y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
		}

		x = evt.clientX - x;
		y = evt.clientY - y;

		return { x: x, y: y };
	}
	function docMove(e) {
		doc.style.top = ((e.clientY + window.pageYOffset)-relativeY) + 'px';
		doc.style.left = ((e.clientX + window.pageXOffset)-relativeX) +'px';
		doc.style.cursor = "pointer"
	}
	function drop(y_coordinate) {
		if (!doc) {
			xml = new DOMParser().parseFromString(letter,'application/xml');
			doc = document.body.ownerDocument.importNode(xml.documentElement, true)
			document.body.appendChild(doc);			
			doc.style.position = "absolute"
			doc.style.top = -1000
			doc.style.left = -1000
			doc.style.cursor = 'pointer'
			for (var i in {'WebkitTransform':true, 'MozTransform':true, 'transform':true}) {
				doc.style[i] = 'rotate('+(Math.floor(Math.random() * (305 - 10 + 1)) + 10)+'DEG)'				
			}
			for (var i in {'WebkitUserSelect':true, 'MozUserSelect':true, 'userSelect':true}) {
				doc.style[i] = 'none'				
			}
			setTransitionCSS('all 300ms cubic-bezier(0.750, 0.190, 0.240, 0.500)',  'cubic-bezier(0.750, 0.190, 0.240, 0.500)')

			// annoyingly verbose cross browser transitionEnd
			doc.addEventListener('webkitTransitionEnd', makeDraggable, false);
			doc.addEventListener('oTransitionEnd', makeDraggable, false);
			doc.addEventListener('transitionend', makeDraggable, false);
			doc.addEventListener('msTransitionEnd', makeDraggable, false);

			setTimeout(function() { // run the transition
				doc.style.top = y_coordinate + ( window.innerHeight / 4)
				doc.style.left = (window.innerWidth / 4)
			}, 50)
		}
	}
	function setup() {
		setTimeout(function() { // hacky way of getting around initial scroll event when scroll is cached by browser
			lastY = scroll = window.scrollY
			window.addEventListener("scroll", function() {
				scroll = window.scrollY
			}, false)
			setInterval(function() {
				if (scroll !== null) {
					delta = Math.abs(scroll - lastY)
					lastY = scroll
					if (delta > 400) drop(scroll)
					scroll = null
				}
			}, 1000)
		}, 500)
	}
	window.addEventListener('load', setup, false)
})()