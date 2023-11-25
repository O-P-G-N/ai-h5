<template>
	<view class="terms_use">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="privacypolicy" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="main" v-if="pageShow==0">
			<view style="margin-top: 10px;"></view>
			
				<div class="Section0" style="layout-grid:15.6000pt;">
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">1.</font>
							<font face="宋体">概述</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">1.1 </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">致力於保護所有用戶的隱私。在使用或訪問由</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">&nbsp;<font face="宋体">運營的網站（包括</font>
							<font face="Calibri">www.</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">&nbsp;<font face="宋体">、位於</font>
							<font face="Calibri">https://</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">/api2</font>
							<font face="宋体">上的 </font>
							<font face="Calibri">API</font>
							<font face="宋体">以及通過網站提供的任何服務）、任何相關移動應用程式和 </font>
							<font face="Calibri">API</font>
							<font face="宋体">（例如</font>
							<font face="Calibri">https://</font>
							<font face="宋体">）之前</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">/zendesk </font>
							<font face="宋体">（統稱為 服務）由 </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">（統稱為</font>
							<font face="宋体">我們、</font>
							<font face="宋体">我們的、</font>
							<font face="宋体">我們或</font>
							<font face="宋体">網站）運營或維護的任何相關軟體、論壇、博客、社交媒體頁面和其他相關平臺，您應該閱讀此內容仔細瞭解隱私政策，瞭解您的權利以及我們可以對您的個人資訊做什麼。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">1.2 </font>
							<font face="宋体">凡登錄本網站的自然人或其他主體，均為本網站的用戶。為了本隱私政策措辭方便，用戶被稱為“您”或任何其他適用形式的第二人稱代詞。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">1.3 </font>
							<font face="宋体">為了本隱私政策表述方便，您和我們統稱為雙方，單獨稱為一方、一方或一方。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">2.</font>
							<font face="宋体">隱私政策的目的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">隱私政策規定了我們可能通過您登錄網站、在網站註冊和</font>
							<font face="Calibri">/</font>
							<font face="宋体">或使用我們提供的服務收集的您的資訊類型（個人數據），以及我們如何使用和保護您的資訊（個人數據）。如此收集的資訊。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.</font>
							<font face="宋体">您的同意</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">
								為確保您對我們處理個人數據的方式充滿信心，建議您詳細閱讀並理解本隱私政策的條款和條件。特別是，當您登錄我們的網站時，無論您是否已在網站上註冊，您均表示您接受、理解並確認以下內容：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.1 </font>
							<font face="宋体">您基於您自己的自由意志和必要的同意，同意向我們披露您的個人數據；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.2 </font>
							<font face="宋体">您將遵守本隱私政策的所有條款和條件；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.3 </font>
							<font face="宋体">您同意我們可以通過您登錄任何網站、在網站上註冊和</font>
							<font face="Calibri">/</font>
							<font face="宋体">或使用我們提供的服務來收集您的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.4 </font>
							<font face="宋体">您同意我們將來可能對隱私政策做出的任何變更和修改；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">3.5 </font>
							<font face="宋体">您同意我們的分支機構、關聯公司和員工可以就我們合理認為您可能感興趣的產品和服務與您聯繫（除非您以書面形式向我們表明您不希望收到此類資訊） 。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.</font>
							<font face="宋体">收集的資訊</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.1 </font>
							<font face="宋体">當您使用網站時，您同意允許我們使用 </font>
							<font face="Calibri">cookie </font>
							<font face="宋体">來跟蹤您的每個行為，並收集和保留您在網站上留下的所有資訊，包括但不限於您的 </font>
							<font face="Calibri">IP </font>
							<font face="宋体">地址、位置和其他資訊。有關我們使用 </font>
							<font face="Calibri">Cookie </font>
							<font face="宋体">的更多詳細資訊，請閱讀我們的 </font>
							<font face="Calibri">Cookie </font>
							<font face="宋体">政策。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.2 </font>
							<font face="宋体">如果您願意使用本網站提供的服務，您將需要填寫並提供以下兩類資訊：</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.2.1</font>
							<font face="宋体">
								身份資訊。此類資訊可以幫助我們驗證您是否有資格註冊為我們網站的用戶。包括但不限於您的姓名、居住地址、郵寄地址、您所在國家或政府簽發的證明您身份資訊的其他證書及其相應號碼，以及其他所有可以幫助我們驗證您身份的資訊（身份資訊）。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.2.2</font>
							<font face="宋体">服務資訊。此類資訊有助於我們與您聯繫並向您提供服務，包括但不限於您的電話號碼、傳真號碼、有效的電子郵件地址、郵寄地址以及有關您的借記卡和</font>
							<font face="Calibri">/</font>
							<font face="宋体">或其他金融機構帳戶的資訊（服務資訊）。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.3 </font>
							<font face="宋体">
								當您使用任何網站或服務時，我們可能會通過我們的專屬郵箱或其他我們認為符合相關要求的方式收集更多必要的資訊，以完善網站功能、提升您的體驗使用我們的網站和服務及其安全性，或根據任何法院命令、任何適用的法律、行政法規或任何主管政府機構或當局的任何命令的要求。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">4.4 </font>
							<font face="宋体">
								如果您訪問可通過網站鏈接或我們任何第三方合作夥伴的任何鏈接訪問的第三方網站、頁面、內容或平臺的任何鏈接，您必須且將被要求同意並遵守此類第三方單獨且獨立的隱私政策。本隱私政策不適用於任何第三方網站，我們對第三方運營的此類網站的內容和活動不承擔任何責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.</font>
							<font face="宋体">我們如何收集個人數據</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">我們通過以下方式收集您的個人數據：</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.1 </font>
							<font face="宋体">您在聯繫我們時直接向我們提供的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.2 </font>
							<font face="宋体">我們從第三方（例如第三方服務提供商）收到的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.3 </font>
							<font face="宋体">我們在與您的關係和交易過程中獲得的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.4 </font>
							<font face="宋体">通過您使用我們的網站和服務收集的資訊；和</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">5.5 </font>
							<font face="宋体">從公開來源收集的資訊。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.</font>
							<font face="宋体">歐洲經濟區 </font>
							<font face="Calibri">(EEA) </font>
							<font face="宋体">內的居民</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1 </font>
							<font face="宋体">對於受《通用數據保護條例》</font>
							<font face="Calibri">(GDPR) </font>
							<font face="宋体">保護的個人數據，您擁有與您在我們網站中保存的個人數據相關的一系列合法權利，包括：</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.1 </font>
							<font face="宋体">
								獲取有關您處理個人數據的資訊並訪問您留在我們網站上的個人數據。請注意，在某些情況下，我們有權拒絕此類訪問個人數據副本的請求（特別是受法律專業特權約束的資訊）。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.2 </font>
							<font face="宋体">如果您的個人數據不准確或不完整，您可以要求我們進行更正。為此，我們可能會要求您提供有效身份證件的副本，以證明您的身份資訊的真實性。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.3 </font>
							<font face="宋体">
								在某些情況下，您可以要求我們刪除您的個人數據。請注意，在某些情況下（例如出於公共利益、公共衛生或科學和歷史研究的目的），即使您要求我們刪除您的個人數據，我們也有權保留您的個人數據。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.4 </font>
							<font face="宋体">
								在某些情況下，您可以對您的個人數據的處理提出異議，並要求我們限制對您的個人數據的處理。同樣，在某些情況下，即使您提出反對或要求我們限制處理您的個人數據，我們也有權拒絕您的請求。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.5 </font>
							<font face="宋体">在某些情況下，您可以撤回對收集和處理您的個人數據的同意。如有其他正當理由，我們也有權在未經您許可的情況下繼續使用或處理。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.1.6 </font>
							<font face="宋体">
								如果您居住在歐洲經濟區，並且對我們處理您的個人數據有疑慮，而我們無法通過內部解決流程解決，則您有權向您居住地的數據隱私機構提出投訴。有關您當地數據保護機構的詳細聯繫資訊，請參閱：
							</font>
							<font face="Calibri">http
								://ec.europa.eu/justice/data-protection/article-29/struct/data-protection-authorities/index_en.htm
							</font>
							<font face="宋体">。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.2 </font>
							<font face="宋体">
								我們將評估收到的所有請求和投訴，並為您提供及時答復。我們可能會要求您提供有效的身份證明文件副本，以便我們履行安全義務並防止未經授權的數據洩露。如果您訪問數據的請求明顯沒有根據或超出我們的義務，或者如果您要求我們提供您的個人數據的額外副本，我們有權向您收取合理的管理費。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">6.3 </font>
							<font face="宋体">為了方便向位於 </font>
							<font face="Calibri">EEA </font>
							<font face="宋体">的客戶提供服務，我們請求明確同意將個人數據從 </font>
							<font face="Calibri">EEA </font>
							<font face="宋体">
								傳輸到該地區之外。如果您是位於歐洲經濟區的個人並且您拒絕同意此類轉讓，您將無法再使用我們的網站和服務。您仍然可以在我們開設的帳戶中提取您的數字資產和法定貨幣，但是所有其他功能將被禁用。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">7. cookie</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">7.1 </font>
							<font face="宋体">當您訪問我們的網站時，我們通過 </font>
							<font face="Calibri">cookie </font>
							<font face="宋体">使用 </font>
							<font face="Calibri">Google </font>
							<font face="宋体">統計數據來記錄我們的表現並檢查線上廣告的效果。</font>
							<font face="Calibri">Cookie </font>
							<font face="宋体">是發送到您的流覽器並存儲在您的電腦硬碟驅動器上的少量數據。只有當您使用電腦訪問我們的網站時，</font>
							<font face="Calibri">cookie </font>
							<font face="宋体">才會發送到您的電腦硬碟。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">7.2 Cookie </font>
							<font face="宋体">通常用於記錄訪問者流覽我們網站上的專案的習慣和偏好。</font>
							<font face="Calibri">cookie</font>
							<font face="宋体">收集的資訊是非註冊的集體統計數據，不涉及個人數據。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">7.3 Cookie </font>
							<font face="宋体">
								使網站或服務提供商系統能夠識別您的流覽器並捕獲和調用資訊，但它們不能用於獲取您的硬碟驅動器上的數據、您的電子郵件地址或您的個人數據。大多數流覽器都設計為接受 </font>
							<font face="Calibri">cookie</font>
							<font face="宋体">。您可以選擇將流覽器設置為拒絕 </font>
							<font face="Calibri">cookie</font>
							<font face="宋体">，或者在加載 </font>
							<font face="Calibri">cookie </font>
							<font face="宋体">時儘快通知您。但是，如果您將流覽器設置為禁用 </font>
							<font face="Calibri">cookie</font>
							<font face="宋体">，您可能無法啟動或使用我們網站的某些功能。有關我們如何使用以及如何禁用 </font>
							<font face="Calibri">cookie </font>
							<font face="宋体">的更多資訊，請參閱我們的 </font>
							<font face="Calibri">Cookie </font>
							<font face="宋体">政策。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.</font>
							<font face="宋体">資訊的目的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1 </font>
							<font face="宋体">我們將出於以下目的或通過以下方式使用我們收集的您的資訊：</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.1 </font>
							<font face="宋体">通過我們的網站向您提供我們的服務；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.2 </font>
							<font face="宋体">在您使用我們的網站或服務時識別並確認您的身份；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.3 </font>
							<font face="宋体">改進和升級服務和網站（我們收到的您的資訊和回饋可以幫助我們改進服務以及網站的功能和性能，以便我們更有效地回應您的詢問和其他需求）；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.4 </font>
							<font face="宋体">保存與我們網站的使用有關的統計數據，並用於與政府機關、公共事務機構合作進行的數據分析；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.5 </font>
							<font face="宋体">個性化您的體驗（您的資訊將幫助我們更好地回應您的個性化需求）；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.6 </font>
							<font face="宋体">
								促進交易（未經您同意，您的資訊，無論是公開的還是私人的，不會以任何理由出售、交換、轉讓或以其他方式提供給任何其他公司，除非這樣做明確是為了完成您需要的交易）；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.7 </font>
							<font face="宋体">定期發送電子郵件（您為處理訂單而提供的電子郵件地址可能會用於接收有關您的訂單的資訊和更新，以及新聞通訊、更新、相關產品或服務資訊等。
								，我們可能會不時發送給您）；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.8 </font>
							<font face="宋体">就與您的帳戶相關的事宜與您聯繫，包括索取任何其他資訊或檔；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.9 </font>
							<font face="宋体">設置安全措施來保護您的帳戶，包括但不限於進行雙因素身份驗證；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.10 </font>
							<font face="宋体">評估您的信用風險；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.11 </font>
							<font face="宋体">根據我們確定的參數評估您的風險評分；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.12 </font>
							<font face="宋体">發現並減少欺詐風險；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.13 </font>
							<font face="宋体">執行</font>
							<font face="Calibri">/</font>
							<font face="宋体">捍衛我們的權利；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.14 </font>
							<font face="宋体">遵守主管當局要求的適用法律、法規和</font>
							<font face="Calibri">/</font>
							<font face="宋体">或命令；和</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.1.15 </font>
							<font face="宋体">滿足網站用戶協議中規定的其他目的以及為滿足此類目的而採取的所有合法手段。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.2 </font>
							<font face="宋体">我們不會出售、交易或以其他方式轉讓您的個人數據，也不會允許他人收集、使用您的個人數據；但是，在以下情況下，我們可能會披露和轉移您的個人數據：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.2.1 </font>
							<font face="宋体">我們的附屬公司、幫助我們運營我們的網站、管理我們的業務或向您提供服務的受信任的第三方，前提是此類各方同意並已採取適當措施對此類資訊保密；和</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.2.2 </font>
							<font face="宋体">
								當我們認為相關資訊披露是適當的，或者任何適用的法律、法規、規則或法院或其他主管當局的任何命令所要求的，並且是執行我們網站的戰略並確保網站的正常運作，或相關方提供服務或保護我們或其他人的權利、財產或安全所必需的。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">
								但是，您的資訊不會出於行銷、廣告或其他類似目的而提供給其他方。我們實施了防止洗錢、恐怖主義融資以及規避貿易和經濟制裁的國際標準，這要求我們對客戶進行盡職調查。這可能包括使用第三方數據和服務提供商，我們將其與您的個人數據進行交叉引用。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.3 </font>
							<font face="宋体">您同意我們有權與以下人員共用您的個人數據：</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.3.1 </font>
							<font face="宋体">我們公司集團的成員，包括我們的子公司、控股公司和同一控制下的公司及其各自的承包商、附屬公司、雇員或代表；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.3.2 </font>
							<font face="宋体">我們的服務提供商和協助我們向您提供服務的其他第三方；</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.3.3 </font>
							<font face="宋体">與涉及披露我們部分或全部業務或資產的任何融資、收購或解散程式有關的實體；和</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">8.3.4 </font>
							<font face="宋体">執法機構和當局、官員、監管機構或其他第三方遵守任何法律、法院命令、傳票或政府要求。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.</font>
							<font face="宋体">個人數據的保護</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1 </font>
							<font face="宋体">
								我們採取適當的物理、電子、管理和技術措施來保護和維護您個人數據的安全。我們將盡最大可能確保通過我們的網站收集的任何個人數據不會受到與我們無關的任何第三方的滋擾。我們可能採取的安全措施包括但不限於：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1.1 </font>
							<font face="宋体">物理措施：您的個人數據記錄將存儲在適當上鎖的地方。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1.2 </font>
							<font face="宋体">電子措施：包含您個人數據的電腦數據將存儲在受到嚴格登錄限制的電腦系統和存儲介質中。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1.3 </font>
							<font face="宋体">管理措施：只有經我們正式授權的工作人員才能訪問您的個人數據，且這些工作人員應遵守我們有關個人數據保密的內部準則。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1.4 </font>
							<font face="宋体">技術措施：可能會使用安全套接字層加密等加密技術來傳送您的個人數據。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.1.5 </font>
							<font face="宋体">其他措施：我們的網路伺服器受到適當的“防火牆”的保護。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.2 </font>
							<font face="宋体">如果您發現我們網站存在任何安全缺陷，請立即與我們聯繫，以便我們儘快採取適當措施。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">9.3 </font>
							<font face="宋体">
								儘管採取了上述技術和安全措施，我們仍不能保證通過網站傳輸的資訊絕對安全，因此我們不能保證您通過我們網站向我們提供的個人數據始終安全。對於因未經授權訪問您的個人數據而可能發生的任何事件引起的任何損失或損害，我們不承擔任何責任，並且我們不對此類損失或損害承擔賠償責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">10.</font>
							<font face="宋体">數據保留</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">10.1 </font>
							<font face="宋体">我們努力保持我們所持有的個人資訊的相關性、可靠性、準確性、完整性和時效性，並保護其隱私和安全。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">10.2 </font>
							<font face="宋体">
								我們僅在收集個人數據的目的合理必要的時間內保留個人數據，或者遵守任何適用的法律或道德報告或檔保留要求。我們不會以允許識別數據主體身份的形式保留您的個人數據，其保留時間不會超過我們最初收集數據的合法目的所需的時間，包括滿足任何法律、會計或報告要求的目的。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">10.3 </font>
							<font face="宋体">
								為了確定個人數據的適當保留期限，我們會考慮個人數據的數量、性質和敏感性、未經授權使用或披露您的個人數據造成損害的潛在風險、我們處理您的個人數據的目的以及我們是否可以通過其他方式實現這些目的，以及適用的法律要求。在某些情況下，我們會對您的個人資訊進行匿名處理，使其不再與您相關聯，在這種情況下，我們將在不另行通知您的情況下使用此類資訊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">10.4 </font>
							<font face="宋体">在保留期結束時，我們將安全地刪除或銷毀保留的數據，並要求我們的分處理者或第三方供應商也這樣做。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">11.</font>
							<font face="宋体">未成年人</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">11.1 </font>
							<font face="宋体">我們的網站、服務和產品不適用於根據適用法律被定義為未成年人的人士。因此，如果您未滿 </font>
							<font face="Calibri">18 </font>
							<font face="宋体">歲，請立即終止對我們網站和服務的所有訪問。我們保留隨時要求提供證據以供我們審核的權利（但非義務），以驗證您已年滿 </font>
							<font face="Calibri">18 </font>
							<font face="宋体">歲。如果您未滿 </font>
							<font face="Calibri">18 </font>
							<font face="宋体">歲，或者我們有理由懷疑您未滿 </font>
							<font face="Calibri">18 </font>
							<font face="宋体">歲且您無法證明其他情況，則您對我們的 </font>
							<font face="Calibri">API</font>
							<font face="宋体">、帳戶註冊、網站訪問、註冊、訂閱的所有使用向我們進行的購買（如有）將立即終止，並且不會向您提供任何形式的退款。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">11.2 </font>
							<font face="宋体">
								需要澄清的是，我們不會故意收集未成年人的個人數據，但是，通過互聯網，我們無法確定這些人是否為未成年人。因此，父母或監護人有責任確保其未成年人不會訪問我們的網站、使用我們的網站和
							</font>
							<font face="Calibri">/</font>
							<font face="宋体">或服務、下載我們的應用程式、報名參加我們的任何活動、下載或訪問我們的相關應用程式、向我們發送電子郵件或未經父母</font>
							<font face="Calibri">/</font>
							<font face="宋体">監護人同意向我們提供個人數據。如果父母或監護人發現其未成年人在未經其同意的情況下訪問了我們的網站或向我們提供了個人數據，他或她應立即通過 </font>
							<font face="Calibri">dpo@</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">&nbsp;<font face="宋体">與我們聯繫</font>
							<font face="宋体">。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">12.</font>
							<font face="宋体">隱私政策的修改</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">
								為了方便起見並遵守法律的任何變更，我們保留自行決定不時修改本隱私政策的權利，恕不另行通知。我們可能會通過更新和公佈新版本發佈的生效日期來通知您對隱私政策所做的修改。有時，我們可能會發佈通知，告知您隱私政策的修改，但這不是我們的義務。您應定期查看隱私政策，如果您不同意此類更新，您應立即停止訪問網站。您同意您全權負責通過定期在我們的網站（包括本網站）上查看本隱私政策來及時瞭解任何修訂。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">13.</font>
							<font face="宋体">與我們的溝通</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">13.1 </font>
							<font face="宋体">如果您有任何請求和意見，您可以發送電子郵件至</font>
							<font face="Calibri">dpo@</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">，這是我們與您溝通的唯一有效且官方的電子郵件。因此，我們對您未能使用有效聯繫資訊、任何作為或不作為不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">13.2 </font>
							<font face="宋体">我們僅依據在本網站上有效的聯繫方式發佈公告和資訊，或在本網站上發佈公告。因此，對於您因信任未獲得的資訊而產生的任何損失，我們不承擔任何責任通過上述手段。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">13.3 </font>
							<font face="宋体">如果您對我們的隱私政策有任何疑問，歡迎您隨時與我們聯繫。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">14.</font>
							<font face="宋体">適用法律和管轄權</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">14.1 </font>
							<font face="宋体">本隱私政策的條款和條件受巴拿馬共和國法律管轄。如果因本隱私政策以及您使用我們的網站和服務而產生任何爭議（爭議），您必須首先通過</font>
							<font face="Calibri">dpo@</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">聯繫我們</font>
							<font face="宋体">瞭解您的疑慮，並盡最大努力善意友好地解決任何爭議。我們也將盡最大努力，真誠友好地解決您的疑慮。但是，如果在三十</font>
							<font face="Calibri">(30) </font>
							<font face="宋体">
								天內未能達成友好解決方案，則該爭議應提交巴拿馬並根據國際商會仲裁規則最終解決，不包括普通法院。在有效時，這些規則被視為通過引用併入本條款。仲裁地點為巴拿馬。仲裁庭由一名仲裁員組成。仲裁語言應為英語。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">14.2 </font>
							<font face="宋体">雙方進一步同意，仲裁開始後，雙方將真誠地嘗試通過調解解決爭議。調解過程中達成的任何和解均應提交當時所在地的仲裁庭，並可按商定的條件作出同意裁決。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">如果您對本隱私政策或您的個人數據有任何疑問，請通過</font>
							<font face="Calibri">dpo@</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="Calibri">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							<font face="宋体">與我們聯繫。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
				</div><!--EndFragment-->
			<!-- <web-view src="../../static/file/privacypolicy/zh-Hant.html"></web-view> -->
		</view>
		<view class="main" v-else-if="pageShow==1">
			<web-view src="../../static/file/privacypolicy/zh-Hans.htm"></web-view>
		</view>
		<view class="main" v-else-if="pageShow==2">
			<view style="margin-top: 10px;">
				
					<div class="Section0" style="layout-grid:15.6000pt;">
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">GENERAL</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">1.1 </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">
								<font face="Times">AlitaGPT</font>
							</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;is committed to protect all users ' privacy. Before using or accessing
								websites operated by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">
								<font face="Times">AlitaGPT</font>
							</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;including&nbsp;</span><span><a href="http://www.gate.io/"><span class="15"
										style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">www.</span><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">, API located on&nbsp;</span><span><a href="https://gate.io/api2"><span class="15"
										style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">https://</span><span class="15"
										style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">/api2</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;and any services made available through the websites, any associated mobile
								applications and APIs such as&nbsp;</span><span><a href="https://gate.io/zendesk"><span
										class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">https://</span><span class="15"
										style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">/zendesk</span></a></span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;(collectively, the&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
									class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Services&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">) any related software, forums, blogs, social media pages and other relevant
								platforms operated or maintained by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">
								<font face="Times">AlitaGPT</font>
							</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;(collectively,&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
									class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">we&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">,&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">our&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">,&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">us&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">or the&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Sites&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">), you should read this Privacy Policy carefully to familiarize with your rights and
								what we can do in in terms of your personal information.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">1.2 All natural persons or other subjects who log onto the Sites shall be users of
								the Sites. For the convenience of wording in this Privacy Policy, the users are referred
								to as 'you' or any other applicable forms of the second-person pronouns.</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">1.3 For the convenience of wording in this Privacy Policy, you and we are
								collectively referred to as both parties , and individually as party , a party or one
								party .</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">PURPOSES OF THE PRIVACY
									POLICY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">The Privacy Policy stipulates the types of information of yours (&nbsp;</span><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Personal Data</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;) that we may collect through your log into the Sites, your registration with
								the Sites, and/or use the Services we offer, as well as how we shall use and protect the
								information so collected.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">YOUR CONSENT</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">To ensure that you have full confidence in our handling of Personal Data, you are
								advised to read and understand the terms and conditions of this Privacy Policy in
								detail. In particular, upon your log into our Sites, regardless of whether you have
								registered with the Sites, you signify your acceptance, understanding and confirmation
								to the following:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">3.1 You, on the basis of your own free will and your requisite consent, agree to
								disclose your Personal Data to us;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">3.2 You will comply with all the terms and conditions of this Privacy
								Policy;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">3.3 You agree that we may collect your information through your log into any of the
								Sites, your registration with the Sites, and/or your use of the Services offered by
								us;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">3.4 You agree to any changes and modifications that we may make to our Privacy
								Policy in the future;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">3.5 You agree that our branches, affiliates and employees may contact you in
								connection with the products and Services that in our reasonable opinion that you may be
								interested in (unless you have indicated in written to us that you do not want to
								receive such information).</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">4.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">INFORMATION
									COLLECTED</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.1 When you use the Sites, you agree to permit us to use cookies to track each of
								your actions and collect and keep all the information that you leave on the Sites,
								including but not limited to your IP address, location, and other information. For more
								detail regarding our use of Cookies, please read our Cookies Policy.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.2 If you are willing to use the Services offered by the Sites, you will be
								required to fill in and provide the following two categories of information:</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.2.1&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Identity</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Information</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">. Such information can help us verify whether you are eligible to be registered as a
								user of our Sites. It includes but is not limited to your name, residence address,
								mailing address, other certificates and corresponding numbers thereof that are issued by
								your country or government to certify your identity information, as well as all other
								information that can help us to verify your identity (&nbsp;</span><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Identity</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">information</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;).</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.2.2&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Service information</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">. Such information helps us contact you and provide you with the Services, including
								but not limited to your phone number, fax number, valid email address, mailing address,
								and information concerning your debit card and/or other financial institution accounts
								(&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Service</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">information</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;).</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.3 When you use any of the Sites or the Services, we may collect more information
								necessary from our exclusive mailboxes or in other manners that we consider as in
								compliance with relevant requirements, for the purpose of improving the functions of the
								Sites, enhancing your experience of using our Sites and Services as well as the security
								thereof, or as is required by any court order, any applicable laws, administrative
								regulations or any order of any competent government agency or authorities.</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">4.4 If you visit any links to third-party websites, pages, contents or platforms
								which may be accessible through links from the Sites or any link of any of our
								third-party partners, you must and will be required to agree to and comply with the
								separate and independent privacy policy of such third parties. This Privacy Policy does
								not apply to any third party websites and we will not bear any liability for the
								contents and activities of such sites operated by third parties.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">HOW WE COLLECT PERSONAL
									DATA</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">We collect your personal data in the following manner:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">5.1 Information you provide to us directly when contacting us;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">5.2 Information we receive from third parties, such as third party service
								providers;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">5.3 Information acquired by us during the course of our relationship and dealings
								with you;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">5.4 Information collected through the your use of our Sites and Services;
								and</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">5.5 Information gathered from publicly available sources.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">RESIDENTS WITHIN THE EUROPEAN ECONOMIC
									AREA ( EEA )</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1 For the Personal Data protected by General Data Protection Regulation ( GDPR ),
								you have a series of legal rights related to the Personal Data you keep in our Sites,
								including:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.1 Obtain information about your processing Personal Data and access the Personal
								Data you have left in our Sites. Please note that in some cases, we have right to refuse
								such requests for access to copies of Personal Data (especially for information subject
								to legal professional privileges).</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.2 If your Personal Data is inaccurate or incomplete, you may ask us to make
								corrections. In order for us to do so we may request that you provide a copy of valid
								identity documents to prove the authenticity of your Identity Information.</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.3 In some cases you may request us to delete your Personal Data. Please note
								that under certain circumstances (such as for the purposes of public interest, public
								health or scientific and historical research), we have the right to retain your Personal
								Data even if you ask us to delete it.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.4 In some cases, you can lodge an objection to the processing of your Personal
								Data and ask us to limit the processing of your Personal Data. Similarly, in some cases,
								we have the right to refuse your request even if you raise objections or ask us to
								restrict the processing of your Personal Data.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.5 In some cases, you may withdraw your consent in respect of collection and
								processing of your Personal Data. If there are other legitimate reasons, we also have
								the right to continue using or processing without your permission.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.1.6 If you reside in the EEA and have a concern about our processing of your
								Personal Data that we are not able to resolve through our internal resolution process,
								you have the right to lodge a complaint with the data privacy authority where you
								reside. For contact details of your local Data Protection Authority, please
								see:&nbsp;</span><span><a
									href="http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm"><span
										class="15"
										style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm</span></a></span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.2 We will assess all requests and complaints we have received and provide you with
								timely responses. We may ask you to provide a valid copy of the identity document so
								that we can fulfill our security obligations and prevent unauthorized data disclosure.
								We have the right to charge you a reasonable administrative fee if your request for
								access to data is clearly unfounded or out of our obligation, or if you request us to
								provide additional copies of your Personal Data.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">6.3 To facilitate with the Services provided to customers located in the EEA, we
								request explicit consent for the transfer of Personal Data from the EEA to outside of
								the area. If you are an individual located in the EEA and you decline to consent to such
								transfer, you will no longer be able to use our Sites and Services. You will still have
								the ability to withdraw your digital assets and fiat currency in your accounts opened
								with us however, all other functionalities will be disabled.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">7.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">COOKIES</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">7.1 When you visit our Sites, we use Google stats via cookies to record our
								performance and check the effect of online advertising. Cookies are a small amount of
								data that is sent to your browser and stored on your computer hard drive. Only when you
								use your computer to access our Sites can the cookies be sent to your computer hard
								drive.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">7.2 Cookies are usually used to record the habits and preferences of visitors in
								browsing the items on our Sites. The information collected by cookies is non- registered
								and collective statistical data and does not involve Personal Data.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">7.3 Cookies, which enable the Sites or Services provider system to recognize your
								browser and capture and recall information, they cannot be used to obtain data on your
								hard drive, your email address, or your Personal Data. Most browsers are designed to
								accept cookies. You can opt to set your browser to reject cookies, or to notify you as
								soon as possible if you are loaded on cookies. However, if you set your browser to
								disable cookies, it is possible that you may not be able to launch or use some functions
								of our Sites. For more information regarding how we use and how can you disable cookies
								please refer to our Cookies Policy.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">PURPOSES OF
									INFORMATION</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1 We will use your information that we collect for the following purposes or in
								the following ways:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.1 to provide you with our Services through our Sites;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.2 to identify and confirm your identity when you use our Sites or
								Services;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.3 to improve and upgrade the Services and the Sites(your information and
								feedback received by us can help us improve the Services and the functions and
								performances of the Sites, so that we can more effectively respond to your enquiries and
								other needs);</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.4 to keep statistics relating to the use of our Sites and to be used for data
								analysis carried out in cooperation with government agencies, public affairs
								institutions;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.5 to personalize your experience (your information will help us to better
								respond to your personalized needs);</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.6 to facilitate transactions (your information, whether public or private, will
								not be sold, exchanged, transferred, or otherwise provided to any other company on any
								grounds without your consent, except for where doing so is expressly for the purpose of
								completing the transaction you require);</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.7 to send e-mail regularly (the email address that you provide for the purpose
								of processing orders may be used to receive information on and updates to your orders,
								in addition to newsletters, updates, related products or Services information, etc.,
								that we may send to you from time to time);</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.8 to contact you on matters related to your account, including, to request any
								additional information or documentation;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.9 to set up security measures to secure your account, including without
								limitation, to carry out two-factor authentication;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.10 to assess your credit risk;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.11 to assess your risk score according to parameters determined by
								us;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.12 to detect and reduce risks of fraud;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.13 to enforce/defend our rights;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.14 to comply with applicable laws, regulations and/or orders required by
								competent authorities; and</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.1.15 to meet other purposes as specified in the User Agreement of the Sites and
								all legal means adopted for satisfying such purposes.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.2 We do not sell, trade, or otherwise transfer your Personal Data or allow others
								to collect, use your Personal Data; however, we may disclose and transfer your Personal
								Data in the following circumstances:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.2.1 To our affiliates, trusted third parties who help us operate our Sites, manage
								our business, or provide Services to you, provided that such parties agree and have
								adopted appropriate measures to keep such information confidential; and</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.2.2 When we believe that relevant information disclosure is appropriate, or it is
								required by any of the applicable laws, regulations, rules or by any order of courts or
								other competent authorities, and is necessary for executing the strategy of our Sites
								and ensuring the proper functioning of the Sites, or as may be necessary for the related
								parties to provide Services, or for the protection of the rights, property or safety of
								us or other persons.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">However, your information will not be provided to other parties for marketing,
								advertising or other similar purposes. We have implemented international standards to
								prevent money laundering, terrorist financing and circumventing trade and economic
								sanctions, which requires us to undertake due diligence on our customers. This may
								include the use of third-party data and services providers which we will cross-reference
								with your Personal Data.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.3 You agree that we have the right to share your Personal Data with:</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.3.1 Member of our company group, which includes our subsidiaries, holding
								companies and companies under common control and their respective contractors,
								affiliates, employees or representatives;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.3.2 Our service providers and other third parties who assist us in providing
								Services to you;</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.3.3 Entities in connection with any financing, acquisition or dissolution
								proceedings which involve disclosing certain portion or all of our business or assets;
								and</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">8.3.4 Law enforcement agencies and authorities, officers, regulators or other third
								parties to comply with any law, court order, subpoenas or government
								requests.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">PROTECTION OF PERSONAL
									DATA</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1 We adopt appropriate physical, electronic, management and technical measures so
								as to protect and safeguard the security of your Personal Data. We will, to the greatest
								extent possible, ensure that any Personal Data collected through our Sites shall not be
								subject to nuisance by any third party unrelated to us. The security measures that we
								may take include but not limited to:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1.1 Physical measures: records of your Personal Data will be stored in a properly
								locked place.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1.2 Electronic measures: The computer data that contain your Personal Data will be
								stored in computer systems and storage medias that are subject to strict login
								restrictions.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1.3 Management measures: only staff members duly authorized by us can access your
								Personal Data, and these staff members shall comply with our internal code concerning
								Personal Data confidentiality.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1.4 Technical measures: such encryption techniques as Secure Socket Layer
								Encryption may be used to convey your Personal Data.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.1.5 Other measures: our network servers are protected by proper 'firewall
								'.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.2 If you are aware of any security flaws in our Sites, please contact us
								immediately so that we can take appropriate actions as soon as possible.</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">9.3 Despite of the above-mentioned technical and security measures, we cannot
								guarantee that the information transmitted via the Sites is absolutely safe, so we
								cannot guarantee that the Personal Data that you provide to us through our Website will
								be safe at all time. We will not be held liable for any losses or damages arising from
								or caused by any event that may occur in connection with unauthorized access to your
								Personal Data, and we shall not be held liable for compensation for such losses or
								damages.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">DATA RETENTION</span></b><b><span
									style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">10.1 We strive to maintain the relevance, reliability, accuracy, completeness and
								currency of the personal information we hold and to protect its privacy and
								security.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">10.2 We keep Personal Data only for as long as is reasonably necessary for the
								purpose for which it was collected or to comply with any applicable legal or ethical
								reporting or document retention requirements. We will not retain your Personal Data in a
								form which permits the identification of the data subject for longer than needed for the
								legitimate purpose or purposes for which we originally collected it, including for the
								purpose of satisfying any legal, accounting or reporting requirements.</span><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">10.3 To determine the appropriate retention period for Personal Data, we consider
								the amount, nature, and sensitivity of the personal data, the potential risk of harm
								from unauthorized use or disclosure of your Personal Data, the purposes for which we
								process your Personal Data and whether we can achieve those purposes through other
								means, and the applicable legal requirements. In some circumstances we will anonymize
								your personal information so that it can no longer be associated with you, in which case
								we will use such information without further notice to you.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">10.4 At the end of the retention period, we will securely delete or destroy data
								retained, and require our sub-processors or third-party suppliers to do
								likewise.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">MINORS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">11.1 Our Sites, Services and our products are not meant for persons who may be
								defined as minors under applicable laws. As such, if you are below 18, please terminate
								all access to our Sites and Services immediately. We reserve the right (but not the
								obligation) to demand at any time evidence for our review to verify that you are above
								18 years of age. In the event that you are under 18 years of age, or we reasonably
								suspect that you are under 18 years of age and you are unable to prove otherwise, all
								your use of our APIs, account registrations, access to the Sites, enrolments,
								subscriptions and purchases with us (if any) shall be immediately terminated and no
								refunds of any kind shall be provided to you.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">11.2 To clarify, we do not knowingly collect Personal Data from minors, however,
								through the internet, we are not able to ascertain on our end whether such individuals
								are minors. It is thus the responsibility of parents or guardians to ensure that their
								minors do not access our Website, use our Sites and/or Services, download our App, enrol
								for any of our events, download or access our related applications, email us, or provide
								us with Personal Data without their parental/guardian's consent. If a parent or guardian
								becomes aware that his or her minor has accessed our Sites or provided us with Personal
								Data without his/her consent, he or she should contact us at&nbsp;</span><span><a
									href="mailto:dpo@gate.io"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">dpo@</span><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;promptly.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">MODIFICATION TO THE PRIVACY
									POLICY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">For expediency and for compliance with any changes in the law, we reserve the right
								to amend this Privacy Policy from time to time in our sole discretion without prior
								notice to you. We may inform you of the modifications made to the Privacy Policy by
								updating and publishing the effective date of the release of new versions hereof.
								Sometimes, we may issue a notice to inform you of the modification made in the Privacy
								Policy, which, however, is not an obligation for us. You shall regularly review the
								Privacy Policy, and if you do not agree to such updates, you shall immediately stop
								accessing the Sites. You agree that it is your sole responsibility to keep yourself
								updated of any amendments by reviewing this Privacy Policy at our Sites including the
								Website regularly.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">COMMUNICATION WITH
									US</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">13.1 If you have any requests and comments, you can send an email
								to&nbsp;</span><span><a href="mailto:dpo@gate.io"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">dpo@</span><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;which is the only valid and official email through which we communicate with
								you. We will therefore not bear any liability for your failure to using effective
								contact information, any act or omission.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">13.2 We only publish announcements and information on the basis of the valid and
								effective contact information on the Sites or post announcements on this
								Sites.Therefore, we shall not be held liable for any losses arising from your trust in
								the information that has not been obtained through the above-mentioned
								means.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">13.3 If you have any questions regarding our Privacy Policy, you are welcome to
								contact us at any time.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
				text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
				background:rgb(254,254,254);mso-shading:rgb(254,254,254);">14.&nbsp;</span></b><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">GOVERNING LAW AND
									JURISDICTION</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
				font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

								</span></b></h4>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">14.1 The terms and conditions of this Privacy Policy are governed by the laws of
								Republic of Panama. In the event of any disputes arising from this Privacy Policy and
								your use of our Sites and Services (&nbsp;</span><b
								style="mso-bidi-font-weight:normal"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
				font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">Dispute&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">), you must first contact us at&nbsp;</span><span><a href="mailto:dpo@gate.io"><span
										class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">dpo@</span><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">&nbsp;regarding your concern and use your best endeavours to amicably settle any
								dispute in good faith. We on our part will also use our best endeavours to amicably
								settle your concerns in good faith. However, if no amicable resolution is reached within
								thirty (30) days, such Dispute shall be referred to and finally resolved by arbitration
								in Panama to the exclusion of the ordinary courts, in accordance with the Arbitration
								Rules of the International Chamber of Commerce for the time being in force which rules
								are deemed to be incorporated by reference in this Clause. The seat of arbitration shall
								be Panama. The arbitration tribunal shall consist of one arbitrator. The language of the
								arbitration shall be in English.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">14.2 The Parties further agree that following the commencement of arbitration, they
								will attempt in good faith to resolve the Dispute through mediation. Any settlement
								reached in the course of the mediation shall be referred to the then-seating arbitral
								tribunal and maybe made a consent award on agreed terms.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:21.0000pt;
				mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
				background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">If you have any questions regarding this Privacy Policy or your Personal Data,
								please contact us at&nbsp;</span><span><a href="mailto:dpo@gate.io"><span class="15"
										style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">dpo@</span><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
				mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
										<font face="Times">AlitaGPT</font>
									</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
				mso-shading:rgb(254,254,254);">.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
				letter-spacing:0.0000pt;text-transform:none;font-style:normal;
				font-size:14.0000pt;mso-font-kerning:0.0000pt;">

							</span></p>
						<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
				mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
				mso-font-kerning:1.0000pt;">
								
							</span></p>
					</div><!--EndFragment-->
				<!-- <web-view src="../../static/file/privacypolicy/en.htm"></web-view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				privacypolicy: this.$t('login.privacypolicy'), //隐私协议国际化
				back: this.$t('login.back'), //返回国际化
				pageShow: 2,
			};
		},
		onShow() {
			if (uni.getStorageSync("UNI_LOCALE") == "zh-Hant") {
				this.pageShow = 0
			} else if (uni.getStorageSync("UNI_LOCALE") == "zh-Hans") {
				this.pageShow = 1
			} else if (uni.getStorageSync("UNI_LOCALE") == "en") {
				this.pageShow = 2
			}
		},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.terms_use {
		box-sizing: border-box;
		width: 100%;
		min-height: 100vh;
		background-color: #fff;

		.u-navbar {
			height: 53px;

			.navbar_img {
				width: 37px;
				height: 38px;
			}

			.lang-down-menu {
				position: absolute;
				right: 10px;
				top: 26px;
				z-index: 10 !important;
				text-align: center;
				background-color: #242424;
				color: #fff;
				left: unset;
				right: 0;
				min-width: 120px;
				padding: 8px 0;
				border: none;
				border-radius: 6px;
				box-shadow: 0 5px 10px 0 rgba(3, 6, 18, .5);
				transition: all .3s;

				.extend-link {
					line-height: 20px;
					padding: 12px 16px;
					display: block;
					font-size: 14px;
					font-weight: 500;
				}
			}
		}

		.main {
			padding: 0 20rpx;
			box-sizing: border-box;
		}

		uni-web-view.uni-webview--fullscreen {
			position: absolute;
			left: 0px;
			right: 0;
			top: 43px;
			bottom: 0;
		}
	}
</style>