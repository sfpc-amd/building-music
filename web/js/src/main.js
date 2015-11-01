var osc = require('osc/dist/osc-browser')
	, oscPort = new osc.WebSocketPort({ url: 'ws://localhost:8081' })
	, inputEl = document.getElementById("osc-input");

inputEl.addEventListener('change', valueChange);


function valueChange() {
	var val = parseInt(inputEl.value);

	if(val) {
		console.log(val);
		oscPort.send({
			address: "/test"
			, args: val
		})
	}
}