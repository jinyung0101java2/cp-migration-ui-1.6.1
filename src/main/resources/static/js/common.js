
const func= {
	migrationUrl: URI_CP_MIGRATION_API,
	vaultUrl: URI_CP_VAULT_API,
	ui: 'http://localhost:8090/',
	vaultPrivateKey: VAULT_PRIVATE_KEY,
	vaultPublicKey: VAULT_PUBLIC_KEY,
	migPrivateKey: MIG_PRIVATE_KEY,
	migPublicKey: MIG_PUBLIC_KEY,
	hmacKey: HMAC_KEY,

	setMigLocaleLang(reqUrl){
		var request = new XMLHttpRequest();
		request.open('PUT', reqUrl, false);
		request.setRequestHeader('Content-type', 'application/json');
		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE){
				if(request.status === 200){
					reloadPage();
				}
			};
		};
		request.send();
	},

	loadMigData(method, url, header, callbackFunction, list) {

		if(url == null) {
			callbackFunction();
			return false;
		}

		var httpRequest = new XMLHttpRequest();

		setTimeout(function() {
			httpRequest.open(method, url, false);
			httpRequest.setRequestHeader('Content-type', header);
			httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));
			httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
			httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

			httpRequest.onreadystatechange = () => {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						callbackFunction((httpRequest.responseText), list);
					} else if (httpRequest.status === 500) {
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					} else {
						if (httpRequest.responseText === 'secret is nil') {
							sessionStorage.setItem('accountsData', 'N')
						}
					}
				}
			}
			httpRequest.send();
		}, 0)
	},

	saveMigData(method, url, data, bull, header, callFunc){
		func.loading();
		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					return func.alertMigPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, callFunc);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					if (httpRequest.responseText === 'data already exists') {
						return func.alertMigPopup('ERROR', MSG_ALREADY_EXIST, true, MSG_CONFIRM, 'closed');
					}
					return func.alertMigPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	bucketMigData(method, url, data, bull, header, callbackFunction, list){
		if(url == null) {
			callbackFunction();
			return false;
		}

		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					callbackFunction(httpRequest.responseText, list);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					if (httpRequest.responseText === 'an unknown error occurred') {
						return func.alertMigPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
					}
					return func.alertMigPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	deleteMigData(method, url, data, bull, header){
		func.loading();
		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					return func.alertMigPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, func.migHistoryBackRefresh);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					return func.alertMigPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	alertMigPopup(title, text, bull, name, callback){
		var html = `<div class='modal-wrap' id='alertModal'><div class='modal'><h5>${title}</h5><p>${text}</p>`;
		if(bull) {
			html += `<a class='confirm' href='javascript:;'>${name}</a>`;
		};
		html += `<a class='close' href='javascript:;'>` + MSG_CLOSE + `</a></div></div>`;

		if(document.getElementById('alertModal') !== null) {
			document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
		}

		func.migAppendHtml(document.getElementById('wrap'), html, 'div');

		document.getElementById('alertModal').querySelector('.close').addEventListener('click', (e) => {
			document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
		}, false);

		if(callback) {
			document.getElementById('alertModal').querySelector('.confirm').addEventListener('click', (e) => {
				if(callback !== 'closed'){
					callback();
				};

				if(!IS_VCHK) {
					document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
				}
			}, false);
		};
	},

	migHistoryBackRefresh(){
		location.href = document.referrer;

	},

	refresh(){
		location.href = location.href;
	},

	none() {
		return false;
	},
	loading(){
		var html = `<div id="loading">
						<div class="cubeSet">
							<div class="cube1 cube"></div>
							<div class="cube2 cube"></div>
							<div class="cube4 cube"></div>
							<div class="cube3 cube"></div>
						</div>
					</div>`

		func.migAppendHtml(document.getElementById('wrap'), html, 'div');
	},

	migAppendHtml(target, html, type){
		var div = document.createElement(type);
		div.innerHTML = html;
		while (div.children.length > 0){
			target.appendChild(div.children[0]);
		};
	},

	migRemoveHtml(target){
		while(target.hasChildNodes()){
			target.removeChild(target.firstChild);
		};
	},

	createUnixTimestamp() {
		return Math.floor(new Date().getTime());
	},

	encodeHmacSha256(data) {
		return CryptoJS.HmacSHA256(data, func.hmacKey).toString(CryptoJS.enc.Hex);
	},

	generateAesIv() {

		let hex  = "0123456789abcdef"; // 16 bytes
		let aesKeyBytes = "0123456789abcdef0123456789abcdef"; // 32 bytes
		let ivKey='';
		let aesKey='';

		for (i = 0; i < 32; i++) {
			ivKey += hex.charAt(Math.floor(Math.random() * 16));
		}

		let iv = CryptoJS.enc.Hex.parse(ivKey);

		for (i = 0; i < 64; i++) {
			aesKey += aesKeyBytes.charAt(Math.floor(Math.random() * 32));
		}

		let aes = CryptoJS.enc.Hex.parse(aesKey);

		return {
			"aes": aes,
			"iv": iv
		}

	},

	encodeDataWithAes(data, aes, iv) {
		return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}).toString();
	},

	encodeIvBase64(iv) {
		return CryptoJS.enc.Base64.stringify(iv)
	},

	decodeIvBase64(iv) {
		let parseWordArray = CryptoJS.enc.Base64.parse(iv);
		let decoded = parseWordArray.toString()
		return decoded;
	},

	async encodeRsaMigrationWebCryptoAPI(data) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		const binaryDerString = window.atob(func.migPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
		const buffer = new Uint8Array(binaryDerString.length);
		for (let i = 0; i < binaryDerString.length; i++) {
			buffer[i] = binaryDerString.charCodeAt(i);
		}
		const publicKey = await window.crypto.subtle.importKey(
			'spki',
			buffer.buffer,
			{
				name: 'RSA-OAEP',
				hash: 'SHA-256',
			},
			true,
			['encrypt']
		);
		const data1 = new TextEncoder().encode(data);

		const cipher = await window.crypto.subtle.encrypt(
			{
				name: 'RSA-OAEP',
			},
			publicKey,
			data1
		);

		return btoa(String.fromCharCode(...new Uint8Array(cipher)));
	},

	async encodeRsaWebCryptoAPI(data, type) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		if (type === "vault") {
			const binaryDerString = window.atob(func.vaultPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}
			const publicKey = await window.crypto.subtle.importKey(
				'spki',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['encrypt']
			);
			let data1 = func.hexToUint8Array(data)

			const cipher = await window.crypto.subtle.encrypt(
				{
					name: 'RSA-OAEP',
				},
				publicKey,
				data1
			);

			return btoa(String.fromCharCode(...new Uint8Array(cipher)));
		} else {
			const binaryDerString = window.atob(func.migPublicKey.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}
			const publicKey = await window.crypto.subtle.importKey(
				'spki',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['encrypt']
			);
			let data1 = func.hexToUint8Array(data)

			const cipher = await window.crypto.subtle.encrypt(
				{
					name: 'RSA-OAEP',
				},
				publicKey,
				data1
			);

			return btoa(String.fromCharCode(...new Uint8Array(cipher)));
		}

	},

	async decodeRsaWebCryptoAPI(data, type) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		if (type === 'vault') {
			const binaryDerString = window.atob(func.vaultPrivateKey.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}

			const privateKey = await window.crypto.subtle.importKey(
				'pkcs8',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['decrypt']
			);

			const binaryDerString2 = window.atob(data);
			const buffer2 = new Uint8Array(binaryDerString2.length);
			for (let i = 0; i < binaryDerString2.length; i++) {
				buffer2[i] = binaryDerString2.charCodeAt(i);
			}

			const text = await window.crypto.subtle.decrypt(
				{
					name: 'RSA-OAEP',
				},
				privateKey,
				buffer2.buffer
			);

			return new TextDecoder().decode(text);

		} else {
			const binaryDerString = window.atob(func.migPrivateKey.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
			const buffer = new Uint8Array(binaryDerString.length);
			for (let i = 0; i < binaryDerString.length; i++) {
				buffer[i] = binaryDerString.charCodeAt(i);
			}

			const privateKey = await window.crypto.subtle.importKey(
				'pkcs8',
				buffer.buffer,
				{
					name: 'RSA-OAEP',
					hash: 'SHA-256',
				},
				true,
				['decrypt']
			);

			const binaryDerString2 = window.atob(data);
			const buffer2 = new Uint8Array(binaryDerString2.length);
			for (let i = 0; i < binaryDerString2.length; i++) {
				buffer2[i] = binaryDerString2.charCodeAt(i);
			}

			const text = await window.crypto.subtle.decrypt(
				{
					name: 'RSA-OAEP',
				},
				privateKey,
				buffer2.buffer
			);

			return new TextDecoder().decode(text);
		}
	},

	async responseDecodeData(data, type) {
		if (type === 'vault') {
			if (data !== 'undefined') {
				try {
					let jsonParseData = JSON.parse(data)
					let responseKey = jsonParseData.key;
					let responseIv = jsonParseData.iv;
					let responseData = jsonParseData.data;

					let responseDecodeAesKey = await func.responseDecodeAesKeyWithRsa(responseKey, func.vaultPrivateKey)
					let responseBase64DecodeAesKey = func.decodeIvBase64(responseDecodeAesKey)
					let responseBase64DecodeIv = func.decodeIvBase64(responseIv)

					return {
						"data": responseData,
						"aes": responseBase64DecodeAesKey,
						"iv": responseBase64DecodeIv
					}
				} catch (e) {
				}
			}

		} else if (type === 'mig') {
			if (data !== 'undefined') {
				try {
					let jsonParseData = JSON.parse(data)

					let responseKey = jsonParseData.key;
					let responseIv = jsonParseData.iv;
					let responseData = jsonParseData.data;

					let responseDecodeAesKey = await func.responseDecodeAesKeyWithRsa(responseKey, func.migPrivateKey)
					let responseBase64DecodeAesKey = func.decodeIvBase64(responseDecodeAesKey)
					let responseBase64DecodeIv = func.decodeIvBase64(responseIv)

					return {
						"data": responseData,
						"aes": responseBase64DecodeAesKey,
						"iv": responseBase64DecodeIv
					}
				} catch (e) {
				}

			}

		}
	},

	async responseDecodeAesKeyWithRsa(data, key) {
		const pemHF = {
			public: {
				header: '-----BEGIN PUBLIC KEY-----',
				footer: '-----END PUBLIC KEY-----',
			},
			private: {
				header: '-----BEGIN PRIVATE KEY-----',
				footer: '-----END PRIVATE KEY-----',
			},
		};

		const binaryDerString = window.atob(key.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
		const buffer = new Uint8Array(binaryDerString.length);
		for (let i = 0; i < binaryDerString.length; i++) {
			buffer[i] = binaryDerString.charCodeAt(i);
		}

		const privateKey = await window.crypto.subtle.importKey(
			'pkcs8',
			buffer.buffer,
			{
				name: 'RSA-OAEP',
				hash: 'SHA-256',
			},
			true,
			['decrypt']
		);

		const binaryDerString2 = window.atob(data);
		const buffer2 = new Uint8Array(binaryDerString2.length);
		for (let i = 0; i < binaryDerString2.length; i++) {
			buffer2[i] = binaryDerString2.charCodeAt(i);
		}

		const text = await window.crypto.subtle.decrypt(
			{
				name: 'RSA-OAEP',
			},
			privateKey,
			buffer2.buffer
		);

		return btoa(String.fromCharCode(...new Uint8Array(text)));

	},

	hexToUint8Array(hex) {
		if (hex.toString().length % 2 !== 0) {
			throw new Error("Invalid hex string length");
		}

		const len = hex.toString().length / 2;
		const bytes = new Uint8Array(len);
		for (let i = 0; i < len; i++) {
			const hex_slice = hex.toString().slice(i * 2, i * 2 + 2);
			const hex_byte = Number.parseInt(hex_slice, 16);
			bytes[i] = hex_byte;
		}

		return bytes;
	},

	async sourceDetailDraw(data) {
		let sourceEndpoint = '';
		let sourceAccessKeyId = '';
		let sourceSecretAccessKey = '';
		let type = 'mig';

		let decodeData = await func.responseDecodeData(data, type)
		let encodedData = JSON.stringify(decodeData.data)
		encodedData = encodedData.replaceAll("\"", "");

		let iv = decodeData.iv
		let aes = decodeData.aes
		let responseDecodeData = await responseDecodeDataWithAes(encodedData, aes, iv)
		let decodedData = JSON.parse(responseDecodeData)

		sourceEndpoint = decodedData.data.data.endpoint;
		sourceAccessKeyId = decodedData.data.data.accessKeyId;
		sourceSecretAccessKey = decodedData.data.data.secretAccessKey;

		let sourceData = {
			"sourceEndpoint": sourceEndpoint,
			"sourceAccessKeyId": sourceAccessKeyId,
			"sourceSecretAccessKey": sourceSecretAccessKey
		}

		let sourceDataWithRsa = await func.encodeRsaMigrationWebCryptoAPI(JSON.stringify(sourceData))

		sessionStorage.setItem('sourceData', sourceDataWithRsa);

	},

	async destinationDetailDraw(data) {
		let destinationEndpoint = '';
		let destinationAccessKeyId = '';
		let destinationSecretAccessKey = '';
		let type = 'mig';

		let decodeData = await func.responseDecodeData(data, type)
		let encodedData = JSON.stringify(decodeData.data)
		encodedData = encodedData.replaceAll("\"", "");

		let iv = decodeData.iv
		let aes = decodeData.aes
		let responseDecodeData = await responseDecodeDataWithAes(encodedData, aes, iv)
		let decodedData = JSON.parse(responseDecodeData)

		destinationEndpoint = decodedData.data.data.endpoint;
		destinationAccessKeyId = decodedData.data.data.accessKeyId;
		destinationSecretAccessKey = decodedData.data.data.secretAccessKey;

		let destinationData = {
			"destinationEndpoint": destinationEndpoint,
			"destinationAccessKeyId": destinationAccessKeyId,
			"destinationSecretAccessKey": destinationSecretAccessKey
		}

		let destinationDataWithRsa = await func.encodeRsaMigrationWebCryptoAPI(JSON.stringify(destinationData))

		sessionStorage.setItem('destinationData', destinationDataWithRsa);
	},

}