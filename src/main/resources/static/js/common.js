
const func= {
	migrationUrl: URI_CP_MIGRATION_API,
	vaultUrl: URI_CP_VAULT_API,
	ui : 'http://localhost:8090/',
	vaultPrivateKey : "-----BEGIN PRIVATE KEY-----\n" +
		"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\n" +
		"oTnDWnK1WK/CVIVxWbb2EmHr9tgX\n" +
		"-----END PRIVATE KEY-----",

	vaultPublicKey : "-----BEGIN PUBLIC KEY-----\n" +
		"MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAlMzrVf4dho9SZiE7E/y0\n" +
		"020jzF/P/HHIIRHNnYhcyO3+1pKa4zSR0fEjU+Aw1O7XbAv1prhfI8+YZ8iqCkKu\n" +
		"a8LLV7EtQNJsHKZZewOX1i6cszcrp9UVp6d9/kZgPsH8MDzKOPvzWz2oVvakwUiV\n" +
		"iotzXgx87eVPLt9cWI5RyWsfmtioyuiKip5HD3tN0MAO3guUtq90ucwObjR2VHX0\n" +
		"PLdG1eAAmoQgfpIPOJLaS/26PR8zf5vmfso3udoWg78S93Dqflp0Q0RYe1WvWVtp\n" +
		"B/RZhea6/qlnGlJCuGyKV8vUAUIaMdv3PFSAjeAqlZS232R0VQPWxy1S7m2G+D2F\n" +
		"04+PUoQzCw8npBQEiDVzrGL/+osB7ezscfx/xCFTH3ihuun2K5QknT6Y0wWQ9NI8\n" +
		"ZSAiSK3krhQ/pgXKcmS7nt00nMdZ4ojykK0M0DS270GMHpPg8vwYCQ50shqMM5TX\n" +
		"IOl5QPNc13XzVct2/fgjhc+pYqcJQlEvyi8A0x8Hy9XB447ekAcWNMFgPzfXxmrL\n" +
		"jV19s9LEeFuNdsZrVI1McofX+qTOMmQdu5Wi+RxfKX/yVTQNeozowblC32h89BFI\n" +
		"ym+Ui7xhe8N5yWZDdT47NOmicmc5G/JdrJTjIs0xUUgt8vvdNu2w/erF0Xzb1t+9\n" +
		"/lbY7yakgB5qpsvhaTE2HLcCAwEAAQ==\n" +
		"-----END PUBLIC KEY-----",

	migPrivateKey : "-----BEGIN PRIVATE KEY-----\n" +
		"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\n" +
		"oTnDWnK1WK/CVIVxWbb2EmHr9tgX\n" +
		"-----END PRIVATE KEY-----",

	migPublicKey : "-----BEGIN PUBLIC KEY-----\n" +
		"MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAlMzrVf4dho9SZiE7E/y0\n" +
		"020jzF/P/HHIIRHNnYhcyO3+1pKa4zSR0fEjU+Aw1O7XbAv1prhfI8+YZ8iqCkKu\n" +
		"a8LLV7EtQNJsHKZZewOX1i6cszcrp9UVp6d9/kZgPsH8MDzKOPvzWz2oVvakwUiV\n" +
		"iotzXgx87eVPLt9cWI5RyWsfmtioyuiKip5HD3tN0MAO3guUtq90ucwObjR2VHX0\n" +
		"PLdG1eAAmoQgfpIPOJLaS/26PR8zf5vmfso3udoWg78S93Dqflp0Q0RYe1WvWVtp\n" +
		"B/RZhea6/qlnGlJCuGyKV8vUAUIaMdv3PFSAjeAqlZS232R0VQPWxy1S7m2G+D2F\n" +
		"04+PUoQzCw8npBQEiDVzrGL/+osB7ezscfx/xCFTH3ihuun2K5QknT6Y0wWQ9NI8\n" +
		"ZSAiSK3krhQ/pgXKcmS7nt00nMdZ4ojykK0M0DS270GMHpPg8vwYCQ50shqMM5TX\n" +
		"IOl5QPNc13XzVct2/fgjhc+pYqcJQlEvyi8A0x8Hy9XB447ekAcWNMFgPzfXxmrL\n" +
		"jV19s9LEeFuNdsZrVI1McofX+qTOMmQdu5Wi+RxfKX/yVTQNeozowblC32h89BFI\n" +
		"ym+Ui7xhe8N5yWZDdT47NOmicmc5G/JdrJTjIs0xUUgt8vvdNu2w/erF0Xzb1t+9\n" +
		"/lbY7yakgB5qpsvhaTE2HLcCAwEAAQ==\n" +
		"-----END PUBLIC KEY-----",
	hmacKey : "secret",

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
	initLoadData(method, url, header, callbackFunction, list) {

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
						alert(httpRequest.responseText)
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					} else if (httpRequest.status === 404) {
						alert(httpRequest.responseText)
						if (httpRequest.responseText === 'secret is nil') {
							console.warn = console.error = () => {};
						}
					}
					else {
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

	/*bucketData(method, url, data, bull, header, callbackFunction, list) {

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


			/!*httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE){
                    if (httpRequest.status === 200) {
                        return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, "closed");
                    } else {
                        return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, func.moveToMain);
                    }
                }
            }*!/
			httpRequest.onreadystatechange = () => {
				if (httpRequest.readyState === XMLHttpRequest.DONE) {
					if (httpRequest.status === 200) {
						//callbackFunction(JSON.parse(request.responseText), list);
						/!*if(document.getElementById('loading')){
							document.getElementById('wrap').removeChild(document.getElementById('loading'));
						};
						return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM,  'closed');*!/
						/!*const responseList = JSON.stringify(httpRequest.responseText)
						responseList.substr(12);
						responseList.slice(0,-2)

						const responseList2=responseList

						alert('값 넘길때' + responseList2)
						callbackFunction(JSON.parse(responseList2), list);
*!/

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
	},*/

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
					/*if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};*/
					alert("저장")
					return func.alertPopup('SUCCESS', MSG_CHECK_TO_SUCCESS, true, MSG_CONFIRM, callFunc);
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
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					callbackFunction(httpRequest.responseText, list);
				} else {
					if(document.getElementById('loading')){
						document.getElementById('wrap').removeChild(document.getElementById('loading'));
					};
					console.log("에러메세지::: " + httpRequest.responseText)
					return func.alertPopup('ERROR', MSG_CHECK_TO_FAIL, true, MSG_CONFIRM, 'closed');
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
					alert("삭제")
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

	/*moveToMain() {
		location.href = URI_CP_BASE_URL;
	},*/

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

		/*return JSON.stringify(CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}));*/
		return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}).toString();
		/*return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}).toString();*/

	},

	encodeDataWithAes2(data, aes, iv) {
		let cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(aes),{
			iv : CryptoJS.enc.Utf8.parse(iv),
			padding : CryptoJS.pad.Pkcs7,
			mode: CryptoJS.mode.CBC
		});

		let encTarget = cipher.toString()
		return encTarget;
	},

	encodeDataWithAesPkcs7(data, aes, iv) {
		return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv,
				padding: CryptoJS.pad.Pkcs7,
				//padding: pkcs7Pad(data, 16),
				mode: CryptoJS.mode.CBC
			});
		/*return CryptoJS.AES.encrypt(data, aes,
			{ iv: iv
			}).toString();*/
	},

	decodeDataWithAes(data, aes, iv) {
		try {
			return CryptoJS.AES.decrypt(data, aes,
				{ iv: iv,
					padding: CryptoJS.pad.Pkcs7,
					mode: CryptoJS.mode.CBC
				}).toString(CryptoJS.enc.Utf8);
		} catch (error) {
			console.log("Decrypt Error")
		}

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
		} else {
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


	}

}