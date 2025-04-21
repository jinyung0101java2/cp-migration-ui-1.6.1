
const func = {
	migrationUrl: URI_CP_MIGRATION_API,
	vaultUrl: URI_CP_VAULT_API,
	ui : 'http://localhost:8090/',

	init() {

		/*if (self.name !== 'reload') {
			self.name = 'reload';
			self.location.reload(true);
		}
		else self.name = '';*/
	},

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

	// 로그인 체크 ////////////////////////////////////////////////////////////////


	// Refresh 토큰 조회 ////////////////////////////////////////////////////////////////
	/*refreshToken(){
		var request = new XMLHttpRequest();

		request.open('GET', URI_CP_REFRESH_TOKEN, false);
		request.setRequestHeader('Content-type', 'application/json');

		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE){
				if(request.status === 200){
					// 토큰 업데이트
					sessionStorage.setItem('token' , 'Bearer ' + JSON.parse(request.responseText).accessToken);
				} else {
					func.alertPopup('ERROR', JSON.parse(request.responseText).detailMessage, true, MSG_CLOSE);
				};
			};
		};

		request.send();
	},*/

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

	/*setUserAuthority(cluster, usersList){
		var authority ='';
		for(var i= 0; i < usersList.length; i++) {
			var users = usersList[i];
			if(users.clusterId === cluster) {
				authority = users.userType;
				break;
			}
		}
		var request = new XMLHttpRequest();
		request.open('PUT', URI_API_SET_CLUSTER_AUTHORITY, false);
		request.setRequestHeader('Content-type', 'application/json');

		request.onreadystatechange = () => {
			if (request.readyState === XMLHttpRequest.DONE){
				if(request.status === 200){
				}
			};
		};
		request.send(authority);
	},*/
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


		/*httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, "closed");
				} else {
					return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, func.moveToMain);
				}
			}
		}*/
			httpRequest.onreadystatechange = () => {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						//callbackFunction(JSON.parse(request.responseText), list);
						/*if(document.getElementById('loading')){
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM,  'closed');*/
						//callbackFunction(JSON.parse(httpRequest.responseText), list);
						callbackFunction((httpRequest.responseText), list);
						alert("list:::"+list)
					} else if (httpRequest.status === 500) {
						alert(httpRequest.responseText)
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					} else {
						if(document.getElementById('loading')) {
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
					}
				}
			}
			httpRequest.send();
		}, 0)
	},

	bucketData(method, url, data, bull, header, callbackFunction, list) {

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
			//httpRequest.responseType = "json"


			/*httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE){
                    if (httpRequest.status === 200) {
                        return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, "closed");
                    } else {
                        return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, func.moveToMain);
                    }
                }
            }*/
			httpRequest.onreadystatechange = () => {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						//callbackFunction(JSON.parse(request.responseText), list);
						/*if(document.getElementById('loading')){
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM,  'closed');*/
						/*const responseList = JSON.stringify(httpRequest.responseText)
						responseList.substr(12);
						responseList.slice(0,-2)

						const responseList2=responseList

						alert('값 넘길때' + responseList2)
						callbackFunction(JSON.parse(responseList2), list);
*/

						callbackFunction(httpRequest.responseText, list);
					} else if (httpRequest.status === 500) {
						alert(httpRequest.responseText)
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					} else {
						if(document.getElementById('loading')) {
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
					}
				}
			}
			httpRequest.send(JSON.stringify(data));
		}, 0)
	},

	/////////////////////////////////////////////////////////////////////////////////////
	// 상태 데이터 로드 - statusLoadData(method, url, callbackFunction)
	// (전송타입, url, 콜백함수)
	/////////////////////////////////////////////////////////////////////////////////////
	/*statusLoadData(method, url, header, callbackFunction, list){
		if(sessionStorage.getItem('token') == null){
			func.loginCheck();
		};

		if(url == null) {
			callbackFunction();
			return false;
		}

		var request = new XMLHttpRequest();

		setTimeout(function() {
			request.open(method, url, false);
			request.setRequestHeader('Content-type', header);
			request.setRequestHeader('Authorization', sessionStorage.getItem('token'));
			request.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
			request.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);


			request.onreadystatechange = () => {
				if (request.readyState === XMLHttpRequest.DONE){
					if(request.status === 200 && request.responseText != ''){
						var resultMessage = JSON.parse(request.responseText).resultMessage;
						var resultCode =  JSON.parse(request.responseText).resultCode;
						var detailMessage = JSON.parse(request.responseText).detailMessage;
						//토큰 만료 검사
						if( resultMessage == 'TOKEN_EXPIRED') {
							func.refreshToken();
							return func.loadData(method, url, header, callbackFunction, list);
						}
						else if(resultMessage == 'TOKEN_FAILED') {
							func.loginCheck();
							return func.loadData(method, url, header, callbackFunction, list);
						}
						else if(resultCode != RESULT_STATUS_SUCCESS) {
							if(document.getElementById('loading')){
								document.getElementById('wrap').removeChild(document.getElementById('loading'));
							};
							func.alertPopup('ERROR', detailMessage, true, MSG_CONFIRM, func.moveToMain);
						}
						else {
							callbackFunction(JSON.parse(request.responseText), list);
						}
					} else if(JSON.parse(request.responseText).httpStatusCode === 500){
						sessionStorage.clear();
						func.loginCheck();
					};
				};
			};

			request.send(); },0);

	},*/

	/////////////////////////////////////////////////////////////////////////////////////
	// 데이터 SAVE - saveData(method, url, data, bull, callFunc)
	// (전송타입, url, 데이터, 분기, 콜백함수)
	/////////////////////////////////////////////////////////////////////////////////////
	saveData(method, url, data, bull, header){
		func.loading();

		var httpRequest = new XMLHttpRequest();

		httpRequest.open(method, url, bull);
		httpRequest.setRequestHeader('Content-type', header);
		httpRequest.setRequestHeader('Authorization', sessionStorage.getItem('accessToken'));
		//httpRequest.responseType = "json"

		httpRequest.setRequestHeader('uLang', CURRENT_LOCALE_LANGUAGE);
		httpRequest.setRequestHeader('Accept-Language', CURRENT_LOCALE_LANGUAGE);

		httpRequest.onreadystatechange = () => {
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200) {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM,  func.historyBack);
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
		location.href = URI_CP_BASE_URL;
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

		let key = "secret";
		return CryptoJS.HmacSHA256(data,key).toString(CryptoJS.enc.Hex);

	},

	generateAes256Key(data) {

		//암호문 형식 base64, Hex
		//iv bytes, aes bytes, 패딩 방식

		let ivBytes = "0123456789abcdef"; // 16 bytes
		let aesKeyBytes = "0123456789abcdef0123456789abcdef"; // 32 bytes
		let key='';

		for (i = 0; i < 64; i++) {
			key += ivBytes.charAt(Math.floor(Math.random() * 16));
			//Initially this was charAt(chance.integer({min: 0, max: 15}));
		}
		console.log(JSON.stringify("key::: " + key)) // 64 bytes


		//let iv = CryptoJS.enc.Hex.parse(ivBytes);
		let iv = CryptoJS.enc.Hex.parse(key);
		console.log(JSON.stringify("iv::: " + iv))
		//let aesKey = CryptoJS.enc.Utf8.parse(aesKeyBytes);
		//let aesKey = CryptoJS.enc.Hex.parse(aesKeyBytes);
		let aesKey = CryptoJS.enc.Hex.parse(key);
		console.log(JSON.stringify("aesKey::: " + aesKey))

		console.log(JSON.stringify("CryptoJS.AES.encrypt::: " + CryptoJS.AES.encrypt(data, key, { iv: iv })))

		return CryptoJS.AES.encrypt(data, key, { iv: iv });

		// AES 키 rsa 공개키로 encode
		//IV도 rsa 공기키로 encode

	},

	async encodeRsaWebCryptoAPI(data, publicKeyb64) {
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

		const binaryDerString = window.atob(publicKeyb64.replace(pemHF.public.footer, '').replace(pemHF.public.header, ''));
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

	async decodeRsaWebCryptoAPI(data, privateKeyb64) {
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

		const binaryDerString = window.atob(privateKeyb64.replace(pemHF.private.footer, '').replace(pemHF.private.header, ''));
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


}