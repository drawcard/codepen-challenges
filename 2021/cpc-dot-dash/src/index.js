import * as morseDecoder from "morse-decoder";

// Listen for the keypress
document.body.addEventListener("keydown", function (event) {
	// Show the key being pressed
	document.getElementById("input").innerHTML = event.key;
	// Encode the key via morse-decoder library
	var encoded = morseDecoder.encode(event.key, {
		dash: "<span class='dash'>&mdash;</span>",
		dot: "<span class='dot'>&#9679;</span>",
		separator: "&nbsp;"
	});
	// Display the encoded results
	document.getElementById("output").innerHTML = encoded;
	// Play the audio
	const audio = morseDecoder.audio(event.key);
	audio.play();
});

