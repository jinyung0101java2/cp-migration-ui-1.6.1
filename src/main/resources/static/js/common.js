
const func= {
	migrationUrl: URI_CP_MIGRATION_API,
	vaultUrl: URI_CP_VAULT_API,
	ui: 'http://localhost:8090/',
	vaultPrivateKey: VAULT_PRIVATE_KEY,
	vaultPublicKey: VAULT_PUBLIC_KEY,
	migPrivateKey: MIG_PRIVATE_KEY,
	migPublicKey: MIG_PUBLIC_KEY,
	hmacKey: HMAC_KEY,

	event(){
		// navigation
		var nav = document.querySelector('nav').querySelectorAll('.dep01');

		for(var i=0; i<=nav.length-1; i++){
			nav[i].addEventListener('click', (e) => {
				e.stopPropagation();

				for(var j=0; j<=nav.length-1; j++){
					nav[j].parentNode.classList.toggle('on', false);
				};

				e.target.parentNode.classList.toggle('on', true);
			}, false);
		};

		// search
		if(document.getElementById('search') != null){
			document.getElementById('search').addEventListener('click', (e) => {
				if(e.target.parentNode.classList != 'on'){
					e.target.parentNode.classList.toggle('on');
				} else {
					if(document.getElementById('searchText').value != ''){
						IS_SEARCH = true;
						func.nameLoad();
					};
				}
			}, false);

			document.getElementById('searchText').onkeydown = function(event) {
				if(event.keyCode === 13){
					IS_SEARCH = true;
					func.nameLoad();
				};
			};

			document.getElementById('searchText').onkeyup = function(event) {
				document.getElementById('searchText').value = document.getElementById('searchText').value.replace( /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');
			};
		};

		// logout event
		document.getElementById('logout').addEventListener('click', (e) => {
			func.alertPopup('Sign Out', MSG_WANT_TO_SIGN_OUT + '<br><p id="logout-sub">' + MSG_INTEGRATED_SIGN_OUT_TAKES_PLACE + '</p>', true, MSG_CONFIRM, func.logout);
		}, false);

	},

	// Locale Language 조회 ////////////////////////////////////////////////////////////////
	getLocaleLang(){
		var request = new XMLHttpRequest();
		request.open('GET', URL_API_LOCALE_LANGUAGE, false);
		request.setRequestHeader('Content-type', 'application/json');

		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE){
				if(request.status === 200){
					CURRENT_LOCALE_LANGUAGE = request.responseText;
					setSelectValue('u_locale_lang',request.responseText);
				} else {
					CURRENT_LOCALE_LANGUAGE = LANG_EN;
					setSelectValue('u_locale_lang',LANG_EN);
				};
			};
		};
		request.send();
	},

	// Locale Language 설정 ////////////////////////////////////////////////////////////////
	setLocaleLang(reqUrl){
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

	/////////////////////////////////////////////////////////////////////////////////////
	// 데이터 로드 - loadData(method, url, callbackFunction)
	// (전송타입, url, 콜백함수)
	/////////////////////////////////////////////////////////////////////////////////////

	loadData(method, url, header, callbackFunction, list) {

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
							//console.warn = console.error = () => {};
						}
					} else { //404
						if (httpRequest.responseText === 'secret is nil') {
							sessionStorage.setItem('accountsData', 'N')
						}
						/*if(document.getElementById('loading')) {
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');*/
					}
				}
			}
			httpRequest.send();
		}, 0)
	},


	/////////////////////////////////////////////////////////////////////////////////////
	// 데이터 SAVE - saveData(method, url, data, bull, callFunc)
	// (전송타입, url, 데이터, 분기, 콜백함수)
	/////////////////////////////////////////////////////////////////////////////////////
	saveData(method, url, data, bull, header, callFunc){
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
					return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, callFunc);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					if (httpRequest.responseText === 'data already exists') {
						return func.alertPopup('ERROR', MSG_ALREADY_EXIST, true, MSG_CONFIRM, 'closed');
					}
					return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	bucketData(method, url, data, bull, header, callbackFunction, list){
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
						return func.alertPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
					}
					return func.alertPopup('ERROR', MSG_NO_BUCKET, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	deleteData(method, url, data, bull, header){
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
					return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, func.historyBackRefresh);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
				}
			}
		}
		httpRequest.send(data)
	},

	/////////////////////////////////////////////////////////////////////////////////////
	// 공통 경고 팝업 - alertPopup(title, text, bull, name, fn)
	// (제목, 문구, 버튼유무, 버튼이름, 콜백함수)
	/////////////////////////////////////////////////////////////////////////////////////
	alertPopup(title, text, bull, name, callback){
		var html = `<div class='modal-wrap' id='alertModal'><div class='modal'><h5>${title}</h5><p>${text}</p>`;
		if(bull) {
			html += `<a class='confirm' href='javascript:;'>${name}</a>`;
		};
		html += `<a class='close' href='javascript:;'>` + MSG_CLOSE + `</a></div></div>`;

		if(document.getElementById('alertModal') !== null) {
			document.getElementById('wrap').removeChild(document.getElementById('alertModal'));
		}

		func.appendHtml(document.getElementById('wrap'), html, 'div');

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

	moveToMain() {
		location.href = URI_CP_ACCOUNTS_LIST;
	},

	historyBack(){
		window.history.back();
	},

	historyBackRefresh(){
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

		func.appendHtml(document.getElementById('wrap'), html, 'div');
	},

	/////////////////////////////////////////////////////////////////////////////////////
	// html 생성 - appendHtml(target, html, type)
	// (삽입 타겟, html 내용, 타입)
	/////////////////////////////////////////////////////////////////////////////////////
	appendHtml(target, html, type){
		var div = document.createElement(type);
		div.innerHTML = html;
		while (div.children.length > 0){
			target.appendChild(div.children[0]);
		};
	},

	/////////////////////////////////////////////////////////////////////////////////////
	// html 삭제 - removeHtml(target)
	// (타겟 : 타겟의 자식요소 전부 삭제)
	/////////////////////////////////////////////////////////////////////////////////////
	removeHtml(target){
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