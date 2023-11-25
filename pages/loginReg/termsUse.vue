<template>
	<view class="terms_use">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="termsuse" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="main" v-if="pageShow==0">
				<div class="Section0" style="layout-grid:15.6000pt;">
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.&nbsp;<font face="宋体">概述
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.1&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">概述</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">在使用或訪問由</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">運營的網站（包括</font></span><span><a
								href="http://www.gate.io/"><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">www.</span><span class="16" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">、位於</font></span></a></span><span><a
								href="https://gate.io/api2"><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">https://</span><span class="16" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">/api2</span></a></span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">上的</font> API&nbsp;<font face="宋体">以及通過網站提供的任何服務）、任何相關移動應用程式和 </font>
							<font face="Times">API</font>
							<font face="宋体">（例如</font>
						</span><span><a href="https://gate.io/zendesk"><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">https://<font face="宋体">）之前</font></span></a></span><span><a
								href="https://gate.io/zendesk"><span class="16" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">/zendesk</span></a></span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（統稱</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">服務</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）由</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">運營或維護的任何相關軟體、論壇、博客、社交媒體頁面和其他相關平臺（統稱
							</font></span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">網站</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">），您必須閱讀本用戶協議（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">協議</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）仔細並理解所有條款和條件，特別是大寫術語、斜體、粗體、下劃線或彩色突出顯示的內容。本協議由正文、隱私政策（</font>
						</span><span><a href="https://www.gateex.cc/privacy-policy"><span class="16" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(36,132,193);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
									<font face="宋体">可在此處查看</font>
								</span></a></span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">隱私政策</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）以及本網站已經發佈的或將來可能發佈的任何規則、聲明、說明等組成。為了本協議措辭方便，網站、</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">和</font>/<font face="宋体">
								或其任何附屬公司、相關法人團體均稱為</font></span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">、</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">或</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">網站</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">。</font>
						</span><span><a href="https://gate.io/api2"></a></span><span><a
								href="https://gate.io/zendesk"></a></span><span><a
								href="https://www.gateex.cc/privacy-policy"></a></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過訪問、下載、使用或點擊</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我同意</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">接受任何</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">
								服務，您同意您已閱讀、理解並接受本協議規定的所有條款和條件以及您可能需要接受的任何其他協議作為隱私政策。此外，在使用服務的某些功能時，您可能需要遵守適用於這些功能的特定附加條款和條件。
							</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								請仔細閱讀這些條款，因為它們管轄您對服務的使用和對網站的訪問。這些條款包含重要條款，包括仲裁和調解條款，要求所有索賠均通過調解和具有法律約束力的仲裁方式解決。通過訪問網站並使用服務，您承認並同意，除其他外，
							</font>1) <font face="宋体">
								交易或持有硬幣、代幣、加密貨幣、數字貨幣或類似數字資產涉及重大風險，損失可能是巨大的，並且您遭受的任何損失和責任均不可投保。您瞭解與上述數字資產及其衍生品交易相關的風險；
							</font>
							<font face="Times">2</font>
							<font face="宋体">）您應承擔與使用上述數字資產及其衍生品的服務和交易相關的所有風險；</font>
							<font face="Times">3) </font>
							<font face="宋体">在任何情況下，我們均不對任何此類風險或由此導致的不利結果承擔責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們的網站僅提供網上交易及平臺服務，供您通過網站</font>&nbsp;<font face="宋体">進行 （定義見下文）交易活動（包括但不限於
							</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">交易等）。本站不</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">作為買方或賣方參與交易，也不提供任何國家或地區法幣的充值和提現服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.2&nbsp;<font face="宋体">風險提示
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">這個</font>&nbsp;<font face="宋体">市場是新的、未經證實的，不一定會擴大。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">這些</font>&nbsp;<font face="宋体">服務本身並非由任何金融機構、公司或網站提供。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">數字</font>&nbsp;<font face="宋体">資產主要由投機者使用，在零售和商業市場使用相對較少。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">數字</font>&nbsp;<font face="宋体">
								資產交易風險很高，因為它們是全天交易，價格沒有漲跌限制，做市商和全球政府政策可能會導致價格大幅波動。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								比特幣和以太幣等加密貨幣與市場上傳統的法定貨幣、商品或商品不同，並且面臨特殊的風險。與其他傳統法定貨幣不同，加密貨幣是去中心化的，不受中央銀行、政府或其他法律實體的支持。加密貨幣目前基本上仍不受監管。因此，加密貨幣的價值可能會根據市場、投資者信心、競爭貨幣、監管公告或變化、技術問題或任何其他因素而上漲或下跌。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								由於加密貨幣交易存在重大風險以及技術和國際市場的影響，我們無法保證或保證我們的網站和服務上將提供特定類型的加密貨幣。我們保留停止在我們的網站上提供與特定類型的加密貨幣相關的服務的權利。如果我們停止支持特定加密貨幣的交易或提供服務，我們將盡合理努力通知您。如果是這種情況，您將無法將該類型的加密貨幣轉換為任何其他貨幣。但是，您可以選擇將加密貨幣轉移到其他用戶、平臺或第三方網站。請注意，如果您決定將加密貨幣轉移到其他用戶、平臺或第三方網站，我們不會也不會對您產生的任何費用負責。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">一旦任何加密貨幣從我們</font>
							<font face="Times">&ZeroWidthSpace;&ZeroWidthSpace;</font>
							<font face="宋体">
								的網站轉移到另一個網站、設備、平臺、錢包或用戶，我們不承擔任何責任。對於發送到我們網站的未在我們網站上交易的任何加密貨幣，我們也不承擔任何責任。對於發送到不正確或不相容的錢包地址的任何加密貨幣，我們現在和將來都不承擔任何責任。不相容的錢包地址的示例包括但不限於正在傳輸的加密貨幣類型。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>H<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">由於我們無法識別您進行的任何交易的交易對手，因此我們強烈建議您不要將加密貨幣發送給任何您不認識或不完全信任的人，因為一旦發送，交易就無法逆轉。
							</font>&nbsp;<font face="宋体">無論是在我們的平臺上還是通過其他網站、錢包或設備轉移和存儲您的加密貨幣和</font>
							<font face="Times">/</font>
							<font face="宋体">或加密貨幣時，請務必採取預防措施 。我們對您的加密貨幣和其他物品的盜用或盜竊不承擔任何責任</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">。我們強烈建議您熟悉並實施個人錢包服務或其他設備來存儲您的</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">資產（包括加密貨幣），並實施其他安全措施。在數字環境中操作時，請務必更加小心和預防措施來保護您的密碼。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">數字資產交易風險較高，因此不適合大多數人。您承認並理解投資</font>&nbsp;s<font face="宋体">
								可能會導致您的投資部分或全部損失，因此強烈建議您根據您的損失承受能力決定您的投資金額。您承認並理解可能</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">
								會產生衍生風險。因此，如有任何疑問，強烈建議您向專業顧問尋求幫助，尋求相關專業意見。此外，除了上述風險外，還可能存在不可預測的風險。因此，建議您在做出任何交易決定之前，仔細考慮並運用理性判斷來評估您的財務狀況和上述風險
							</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">；由此產生的任何及全部損失將由您自行承擔，我們不以任何方式和方式承擔責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您承認、理解並同意：</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您瞭解我們的網站僅作為您獲取</font>&nbsp;<font face="宋体">資訊、尋找交易對手、談判和進行交易的 場所</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">。我們的網站不參與您的任何交易，因此您應自行謹慎評估相關</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">資訊和</font>
							<font face="Times">/</font>
							<font face="宋体">或資訊的真實性、合法性和有效性，並自行承擔由此可能產生的責任和損失。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們網站上的所有意見、資訊、討論、分析、價格、建議和其他資訊均為一般市場評論，並不構成任何投資、財務、稅務或任何其他形式的專業建議。我們不承擔因上述資訊直接或間接產生或與之相關的任何損失，包括但不限於任何利潤損失。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們保留隨時自行決定確定、修改或修改網站任何內容的權利。我們已盡合理努力確保網站上資訊的準確性，但是，我們不會也不能保證資訊的準確性，也不能承擔因網站上的資訊或與網站上的資訊直接或間接引起的或與之相關的任何損失。因無法連接互聯網、傳輸或接收任何通知和資訊而導致的任何延遲或故障。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								使用基於互聯網的交易系統也涉及風險，包括但不限於軟體、硬體或互聯網鏈接的故障。考慮到我們無法控制互聯網的可靠性和可用性，我們將不對任何失真、延遲和鏈接失敗負責。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您不得使用網站和服務的任何部分從事任何非法交易、活動或非法活動，包括但不限於洗錢、恐怖主義融資、走私和商業賄賂。如果懷疑或發現任何非法交易、活動或非法活動，我們將自行決定採取並採取一切可用措施，包括但不限於凍結所有相關帳戶並通知有關當局，並且我們不承擔任何責任並保留追究相關人員責任的權利。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您不得以任何方式使用我們的網站或服務從事、承擔、開展或參與任何對市場誠信、我們的聲譽和</font>/<font face="宋体">
								或我們其他用戶的合法權利產生或可能產生不利影響的活動，其中包括但不限於市場操縱活動（例如欺騙、分層和刷量交易）或任何非法、不當、虛假、不公平或不道德的交易或交易活動（統稱為
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">市場操縱活動</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">）</font>&nbsp;
							</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">。特別是您和</font>/<font face="宋体">
								或您的關聯公司（包括由您直接或間接控制、與您處於同一控制之下、與您有密切聯繫或關聯、或代表您行事的任何個人、子公司或實體）（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">關聯公司</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
								<font face="Times">"</font>
							</span></b><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								）不得在我們的網站上開設多個帳戶來從事或以其他方式參與任何上述市場操縱活動。您承認並理解市場操縱行為可能會對市場產生不利影響，例如導致相關數字資產的價格人為抬高或緊縮。我們非常嚴肅地對待這些活動，並承諾促進市場的公平和誠信，並應採取必要措施保護我們的網站和服務免受此類濫用行為的影響
							</font>
							<font face="Times">——</font>
							<font face="宋体">
								如果在合理的情況下發現、注意到或懷疑任何此類市場操縱活動根據我們的理由，我們可以自行決定採取我們認為適當的行動，例如發出警告、取消您的交易資格、限制交易、取消或恢復交易、託管從此類市場操縱活動中獲得的收入、暫停我們向您提供的服務、凍結或抵銷您和
							</font>
							<font face="Times">/</font>
							<font face="宋体">或您的關聯公司帳戶中持有的任何資產以及我們有合理理由懷疑或相信與您和</font>
							<font face="Times">/</font>
							<font face="宋体">
								或您的關聯公司相關的任何此類帳戶中因您的市場操縱活動而產生的任何損失或損害，或暫停或永久關閉所有相關帳戶。我們不接受或承擔因這些活動而產生的任何責任，並將繼續對任何市場操縱活動採取我們認為合理和必要的任何行動，並保留我們的所有權利，包括但不包括追究所有可用的法律和
							</font>
							<font face="Times">/</font>
							<font face="宋体">或衡平法的權利。追究相關人員（包括您和您的關聯公司）責任的補救措施。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">提供線上服務，允許用戶在不同的區塊鏈資產之間交換，這些資產通常代表相應區塊鏈網路上的交易、訪問或其他參與權的數據（統稱為</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">數字資產</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">）</font>
							</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">可能會向您提供其他輔助服務，以方便您進行數字資產的兌換。根據您居住的國家</font>/<font face="宋体">
								地區，您可能無法使用本網站的所有功能。您有責任遵守您居住國家和</font>
							<font face="Times">/</font>
							<font face="宋体">或您訪問網站和服務所在國家的這些規則和適用法律。單擊</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">創建帳戶</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								按鈕或訪問或使用服務，即表示您同意受本協議的法律約束並接受本協議的所有條款和條件。如果您不同意受這些條款和條件的約束，您應立即停止訪問網站和使用服務的任何部分。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過在</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">創建帳戶（</font></span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">帳戶</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								），您同意維護您的登錄憑據的安全性和機密性，並限制對您的帳戶以及您的電腦、平板電腦或移動設備的訪問。您應對您帳戶下發生的所有活動承擔全部法律責任，並接受未經授權訪問的所有風險。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們保留自行決定不時對本協議、附屬服務條款、活動條款或公告進行變更或修改的權利，恕不另行通知。修改後的條款將在發佈後立即生效。您繼續使用本</font>
							&nbsp;<font face="宋体">
								網站和服務即表示接受此類更改或修改。如果您不同意任何修改後的條款，您必須停止使用或訪問我們的服務。您使用和訪問我們的服務，即視為您已同意並充分理解本協議及其他附屬服務條款的內容，包括
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">不時作出的修訂條款。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.&nbsp;<font face="宋体">資格
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過訪問網站或使用我們的服務，您聲明並保證您已年滿</font> 18 <font face="宋体">
								歲，具有合法能力簽訂合同並受其約束，包括但不限於本協議，並且之前未曾被暫停或除名網站或服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您代表任何受益人、自然人或法人（包括任何形式的公司、合夥企業、協會、組織或任何其他實體類型（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">代表人</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">））訪問我們的網站和</font>/<font face="宋体">或服務，您的持續</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">訪問</font>
							</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">許可權我們的網站和</font>/<font face="宋体">
								或服務的內容應構成您向我們的聲明，即您已獲得該代表人的正式授權，可以使用我們的網站和我們的服務，在其上執行任何交易或活動，並因此使您的代表人遵守本協議並遵守您進行的任何此類交易或活動。因此，當本協議及任何相關內容、條款和政策中使用術語
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">時，</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">不僅指您作為個人的實際用戶，還指代表人，因此指您和被代表人受本協議的共同和個別約束。因此，您還特此承諾被代表人有能力並同意受本協議的約束。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.3<font face="宋体">您聲明並保證：</font></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您不在任何貿易或經濟制裁名單上，例如聯合國安理會制裁名單；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								歐盟、香港證券及期貨事務監察委員會、香港金融管理局、香港海關、外國資產管制辦公室以及任何其他行政法律不限制或禁止您從事任何類型的交易其他司法管轄區的執法機構或當局；
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有責任確保您對網站的訪問和服務的使用符合您當地的法律和法規；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您承認，我們保留僅在某些市場和司法管轄區提供全部或部分服務的權利，由我們全權酌情決定並根據當地適用法律。我們可能限制或禁止從以下位置使用全部或部分服務：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們自行決定不適合或不適合我們提供全部或部分服務；或者</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當地法律不允許我們從該司法管轄區提供全部或部分服務</font>&nbsp;<font face="宋体">（統稱為</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">限制地點</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								限制地點包括但不限於美國、中國大陸、新加坡、加拿大、法國、德國、香港、立陶宛、馬來西亞、馬爾他、古巴、伊朗、朝鮮、蘇丹、敘利亞、克裏米亞地區、西班牙、盧甘斯克、頓涅茨克、荷蘭、玻利維亞、英國等。請注意，出於本協議的目的，我們可能會不時對某些司法管轄區的用戶施加某些限制或終止特定服務。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們可以自行決定不時更新限制地點列表，恕不另行通知。您有責任經常檢查網站以熟悉限制位置列表，如果您發現位於任何限制位置，請立即停止訪問我們的網站和使用我們的服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								本條款的內容不應排除用戶所屬國家或地區的法律，否則用戶應立即停止訪問網站和使用服務。因此，如果您不符合這些資格要求，請立即停止訪問我們的網站並且不要使用我們的服務。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">為了使用我們的服務，您應擁有適當的設備並支付可能產生的費用，包括但不限於電腦、手機、數據機產生的費用以及互聯網連接和電話費用。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">點擊</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我同意</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								用戶協議按鈕，即表示您已同意本協議中的所有條款和條件，並擁有使用所有服務的合法權利和完全能力，包括但不限於查詢服務相關資訊、下單、合理進行交易活動。您同意承擔與此類活動相關、產生的以及與之相關的所有風險。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當您向我們註冊帳戶時，您同意：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">創建一個不用於任何其他網站或線上服務或平臺的強密碼，並啟用雙因素身份驗證作為進一步的保護措施；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過保護您的登錄憑據並僅限您自己訪問您的帳戶來維護您帳戶的安全；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">對您的帳戶下發生的所有活動負責，並接受任何授權或未經授權訪問您的帳戶的所有風險；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">接受本協議所有條款和條件的約束；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">確認您已年滿</font> 18 <font face="宋体">
								歲，或不同適用法律要求的簽訂合同的其他法定年齡，並且您在我們的網站上註冊、通過網站進行購買或銷售、在網站上發佈資訊以及表明您的其他行為您接受我們提供的服務應遵守對您有管轄權的主權國家或地區的相關法律法規，並且您確認您有足夠的能力接受這些條款和條件、進行交易並使用服務
							</font>
							<font face="Times">;</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">承擔您自身的交易和非交易活動的所有責任以及由此產生的所有利潤和損失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">確認在我們註冊帳戶時提供的所有資訊均真實、最新且準確；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>H<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">遵守所有相關法律，包括出於稅務目的報告任何交易利潤；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">接收發送到我們網站的與其管理和運營相關的電子郵件或短信。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您不得為任何被限制或禁止訪問我們的網站或使用我們的服務的代表人開設子帳戶。這包括居住在任何限制地點的任何代表人。</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">您不得為受特別指定國民和被阻止人員名單（</font>
							</span></b><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
								<font face="Times">"</font>
							</span></b><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;SDN <font face="宋体">名單</font></span></b><span
							style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								）和任何其他適用制裁名單約束的個人或實體本身或以其他方式直接或間接擁有或控制的代表人開設子帳戶。您不得代表屬於限制地點的居民或受到任何適用制裁的任何個人或實體或為其利益直接或間接促進交易。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您承認並理解美國證券交易委員會（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">SEC</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）和商品期貨交易委員會（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">CFTC</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）以及美國其他政府機構可能對某些交易所主張或主張管轄權在美國境外為</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國人</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">或</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國客戶</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">提供服務的活動，這些術語可能根據美國法律進行定義或解釋。您進一步承認並理解，我們（包括我們的附屬公司和相關法人團體）無意向此類</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國人</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">或</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國客戶</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">提供服務或招攬其，並明確禁止其使用我們的任何服務。為了遵守美國所有適用的法律、規則和法規，您特此承認、證明、聲明、保證並同意，就本協議中設想的服務而言：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您和任何代表人不是</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國人</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">或</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">美國客戶</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">，因為這些術語是由美國法律、規則或法規定義或引用的，包括但不限於法律、規則和法規</font>SEC<font face="宋体">、</font>
							<font face="Times">CFTC </font>
							<font face="宋体">或任何其他美國機構的；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們（包括我們的附屬公司和相關法人團體）並未建議、建議、誘導或以其他方式影響您和任何代表人規避或試圖規避任何上述法律、規則或法規；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您沒有建議、暗示、誘導或以其他方式影響您的任何代表人規避或試圖規避任何上述法律、規則或法規；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您和任何被代表人</font> (i) <font face="宋体">如果是自然人，則並不居住在美國，並且 </font>
							<font face="Times">(ii) </font>
							<font face="宋体">不是根據美國法律成立、註冊或組織的，或者其各自的主要營業地點位於美國在美國境內；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您和任何被代表人不受具有實質相似效力的任何其他司法管轄區的法律、規則或法規的約束；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果上述狀態發生任何變化，您將立即通知我們；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您應對我們（包括我們的任何附屬公司和相關法人團體、董事、成員、管理人員、雇員、代理、服務提供商）的任何及所有索賠、要求、訴訟、損害、損失、成本和賠償進行賠償、為我們辯護並使其免受損害。
							</font> /<font face="宋体">或因違反本第 </font>
							<font face="Times">2 </font>
							<font face="宋体">條任何部分而產生或與之相關的費用。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.<font face="宋体">我們的權利和義務
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果我們自行決定懷疑、通知並確定您存在以下情況，我們可以隨時限制、暫停或終止您的帳戶、服務的使用、任何</font>&nbsp;<font
								face="宋体">交易</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">的處理、</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">我們的任何附屬公司、相關實體實益擁有的任何帳戶：</font>
							<font face="Times">&nbsp;</font>
							<font face="宋体">違反了本協議或您所在司法管轄區適用法律的任何部分，或者您在您所在司法管轄區提供或使用本服務是非法的。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當我們自行判斷您或您的關聯帳戶用戶不適合進行高風險投資時，我們有權立即暫停或終止您的帳戶及其所有關聯帳戶的使用。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								如果您不具備本協議規定的相關註冊資格，我們將有權拒絕您的註冊。如果您已經註冊，我們將有權撤銷您在我們這裏的帳戶，並且我們保留向您或您的授權代理人追究責任的權利。此外，我們保留在任何情況下決定是否接受您的註冊申請的權利。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當發現帳戶使用人並非該帳戶的初始註冊人時，我們有權立即暫停或終止該用戶對該帳戶的訪問。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果我們合理懷疑您提供的資訊錯誤、不真實、無效或不完整，我們有權通知您更正或更新資訊或者暫停或終止向您提供服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								如果您（無論是直接由您自己還是通過您向我們提出的請求間接）在我們的網站上或通過我們的網站上傳、發佈、發佈或傳輸任何資訊，或者您與我們網站的任何其他用戶進行交流，您同意對所有此類帖子和通訊。因此，您承諾僅以合法和體貼的方式使用本網站，不濫用或濫用本網站或其其他用戶，包括但不限於不造成任何誹謗、騷擾、煽動叛亂、為您自己的目的收集其他用戶的數據目的，以及引入病毒、木馬或駭客攻擊。如果您誤用或濫用本網站，我們完全有權暫停或禁止您的帳戶，和
							</font>/<font face="宋体">
								或從我們的網站刪除您的資訊，而無需事先通知您，也不對您承擔任何責任。儘管如此，您同意我們不對第三方冒犯您的任何帖子或通信承擔任何責任，儘管我們將真誠地調查與您以書面形式向我們傳達的此類帖子或通信相關的任何投訴。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們可以自行決定採取我們認為必要且合理的任何行動，包括但不限於暫停、限制或終止您對任何或所有服務和網站的訪問，立即停用或取消您的帳戶，或者取消、如果我們合理認為有必要暫停、阻止、擱置、拒絕完成數字資產交易，以履行我們的法律義務、保護我們的聲譽、促進市場的公平和誠信並執行我們的義務權利。在我們認為適當的情況下，我們可能會與相關政府機構和司法機構合作，凍結、沒收您帳戶中的數字資產，並將其轉移至這些機構指定的指定帳戶。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">4.&nbsp;<font face="宋体">
									保證金交易和借貸以及永續合約</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">本第</font> 4 <font face="宋体">條僅適用於您被允許在 </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">上從事保證金交易和借貸以及</font> </span><span
							style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">
								合約的範圍。在適用法律法規或本協議禁止的司法管轄區，不允許進行保證金交易和借貸以及永續合約。我們保留隨時修改和</font>/<font face="宋体">或刪除您所在國家
							</font>
							<font face="Times">/</font>
							<font face="宋体">地區的保證金交易和借貸以及永續合約功能的權利，無論是否事先通知您。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">4.1</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">杠杆交易和借貸</font></span></b><span
							style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								保證金交易是一種交易形式，除了您已經擁有的數字資產之外，您還可以從某人那裏借入額外數量的數字資產進行交易。在我們的網站上，您可以使用從其他用戶借來的數字資產來進行空頭或多頭頭寸。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">保證金交易風險</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">保證金交易風險較高。作為保證金交易者，您承認並同意您應自行承擔訪問和使用保證金交易和借貸服務的風險。此外，您承認、同意並確認以下內容：</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">交易市場波動極大，在流動性、市場深度和交易動態方面變化迅速。使用杠杆可能對您不利，也可能對您有利，可能會導致巨大的損失，也可能會帶來巨大的收益。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">即使您根本沒有參與任何保證金交易或借貸，您也無權從您保證金帳戶中的任何數字資產中獲得分叉幣。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">貸款存在風險，您的數字資產的價值可能會下降。如果您的資產價值跌至一定水準以下，您就有責任應對這一市場情況。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">四）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">在某些市場條件下，您可能會發現很難或不可能平倉。這種情況可能會發生，例如，市場流動性不足或由於我們這邊的技術問題。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">下達或有訂單不一定會將您的損失限制在預期金額內，因為市場狀況可能導致無法執行此類訂單。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">六</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">保證金交易不存在針對損失的保證措施。作為借款人，您可能遭受的總損失超出您存入保證金帳戶的金額。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">借貸風險</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">作為貸方，您可以通過在借貸頁面上以固定利率和期限提供貸款，將您的數字資產借給某些網站上的其他用戶。當您出借數字資產時：</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果借款人拖欠貸款，並且借款人的保證金帳戶的清算未能彌補未償還的貸款，您可能會蒙受未付本金和利息的損失。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您的數字資產在分叉發生時處於貸款報價中或借出，您可能會遭受從數字資產中分離出來的分叉代幣的損失。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當您借出的數字資產價值大幅下跌且無法及時出售時，您可能會遭受價值下跌的損失。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">進行保證金交易或借貸：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">四）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您應該且必須充分瞭解與保證金交易和借貸相關的風險，並對您在我們的帳戶上的任何及所有交易和非</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">
								活動承擔全部責任。請勿進行超出您的財務能力或金融風險承受能力的交易或資金投資。</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您全權負責瞭解我們網站上任何其他方的任何頭寸或貸款的真實狀態。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">六</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您同意在您的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								杠杆帳戶中保留足夠數量的數字資產，以供用戶參與杠杆交易並按時歸還您的借款。如果未能維持足夠數量的數字資產或未能及時歸還未償還的貸款，可能會導致您的保證金帳戶中的數字資產被強制清算。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">七）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">即使有能力強行平倉您的任何倉位，我們也不能保證止損。如果您的頭寸被清算後，您的資產不足以支付未償還的貸款，您仍需承擔任何額外的資產缺口。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">八）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以全權酌情採取一切合理措施代表您減輕潛在損失，包括但不限於將餘額從您的保證金帳戶轉移到您的交易帳戶和</font>/<font
								face="宋体">或從您的交易所轉移到您的保證金帳戶。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">九</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當您出借數字資產時，您承認我們不對在我們的任何網站上提供貸款造成的任何損失以及借款人或任何其他方在網站上造成的任何損失負責。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">X<font face="宋体">）</font></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您同意您將使用您自己的帳戶進行所有交易、保證金交易、借貸和</font>/<font face="宋体">
								或借款，並對您的活動承擔全部責任。對於因您使用任何服務或未能瞭解訪問我們網站所涉及或相關的風險而造成的任何損失或損害，我們不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">4.2</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">永續合約</font></span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>H<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								永續合約是一種類似於傳統期貨合約的產品，但沒有到期日。永續合約像現貨一樣交易，密切跟蹤基礎指數價格。它通過資金組件的機制來實現這一點，即在資金時間戳內持有頭寸的用戶根據資金費率和您的頭寸價值支付或接收資金。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">永續合約風險</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								永續合約交易涉及較大的損失風險，並不適合大多數投資者。您在此承認並同意，您完全瞭解交易所涉及的風險，並已經並將繼續根據您的財務狀況和資源仔細考慮永續合約交易是否適合。您還承認、同意並確認您瞭解以下內容：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">永續合約的杠杆率很高。高杠杆頭寸和大合約規模意味著即使市場出現小幅波動，投資者也可能遭受巨大損失。您可能會損失合約帳戶上的全部保證金。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以自行決定取消或關閉您的未平倉訂單並清算您的頭寸，恕不另行通知，以控制風險。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您處於利潤和杠杆優先順序，我們可能會在自動減倉時以其他用戶的破產價格對您進行平倉，恕不另行通知。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">四）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您在資金時間戳上持有頭寸，您可以根據資金費率和您的頭寸價值支付或接收資金。根據資金費率和您的頭寸價值，資金金額可能會很大。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可能會自行決定要求您提高較大頭寸的保證金水準。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">六</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果發生分叉，您的合約帳戶中的任何資產都沒有資格接收分叉代幣。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">七）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								在某些市場條件下，您可能會發現很難或不可能平倉。例如，如果市場流動性不足或由於我們平臺的技術問題，就會發生這種情況。下達或有訂單不一定會將您的損失限制在預期金額內，因為市場狀況可能導致無法執行此類訂單。使用杠杆可能對您不利，也可能對您有利，可能會導致巨大的損失，也可能會帶來巨大的收益。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(j)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">簽訂永續合約：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您已年滿</font> 18 <font face="宋体">歲，並且有能力在網站上簽訂永續合約交易。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您充分瞭解永續合約的規則和風險，並接受永續合約交易帶來的一切風險和後果。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								如果我們懷疑或有理由相信您從事非法或可疑交易或其他活動，或者違反了本協議或任何其他協議的條款，我們可以自行決定關閉您的頭寸、扣押您的收入並凍結您的帳戶。我們的政策。您不得以任何方式要求我們對永續合約交易引起的或與之相關的任何損失承擔責任，同時您可能對我們遭受的任何損害承擔責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">四）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您同意始終保持足夠的保證金以滿足我們的最低保證金要求，該要求可能會不時發生變化。如果您的倉位價值低於一定水準，您有責任補充額外保證金，以滿足我們的最低保證金要求。未能補充額外保證金或維持所需保證金的最低水準可能會導致您的未平倉訂單被平倉以及您的倉位被強制清算。如果發生強制平倉，您的倉位將被我們接管並按破產價格進行平倉。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您充分理解並同意，當觸發強制平倉時，如果我們無法以破產價格平倉，我們將花費保險資金在市場上搶佔該倉位以試圖平倉。如果這仍然不能解決強制平倉問題，這將導致自動減倉事件，對手方交易者的頭寸按利潤和杠杆優先順序自動減倉。如果我們能夠以高於破產價格的價格平倉，額外的資金將添加到保險基金中。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">六</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您在資金時間戳上持有頭寸，您可以根據資金費率和您的頭寸價值支付或接收資金。您同意根據我們計算的資金費率和頭寸價值進行此類付款兌換。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">七）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">vii) <font face="宋体">您對網站上的任何交易和非交易活動承擔全部責任並承擔所有相關風險。
							</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">八）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您全權負責獲取並瞭解網站上任何交易對手的任何頭寸的真實狀態，即使我們隨時錯誤地提供了相關資訊。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.&nbsp;<font face="宋体">不可替代的代幣
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">這些網站允許帳戶持有人購買、列出和出售不可替代代幣（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">NFT</span></b><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
								<font face="Times">"</font>
							</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）。我們的</font> NFT <font face="宋体">服務是一種方便、簡單且用戶友好的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">交易方式。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">要訪問我們的</font> NFT <font face="宋体">服務，您必須擁有 </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">帳戶。</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過訪問我們的</font> NFT <font face="宋体">服務，您承認並保證您已閱讀、理解並同意適用於我們的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">服務的所有條款和條件。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您只能訪問我們網站上不時提供的符合條件的</font> NFT <font face="宋体">服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">合格的</font> NFT
							</span></b><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
								<font face="Times">"</font>
							</span></b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">是指我們不時驗證為符合購買資格的</font> NFT <font face="宋体">收藏品。我們可能會在我們的網站上發佈合格 </font>
							<font face="Times">NFT </font>
							<font face="宋体">列表（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">合格</font> NFT <font face="宋体">列表</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以自行決定以任何理由在合格</font> NFT <font face="宋体">列表中添加或刪除 </font>
							<font face="Times">NFT </font>
							<font face="宋体">集合。如果我們從合格 </font>
							<font face="Times">NFT </font>
							<font face="宋体">列表中刪除某個 </font>
							<font face="Times">NFT </font>
							<font face="宋体">集合，則網站上該 </font>
							<font face="Times">NFT </font>
							<font face="宋体">集合中的任何未結訂單都將立即取消。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">僅接受從經批准的平臺外部發送到我們管理的錢包或帳戶中的</font> NFT<font face="宋体">。認可平臺是指我們不時認可和批准的外部
							</font>
							<font face="Times">NFT </font>
							<font face="宋体">平臺或鏈。截至本協議簽訂之日，根據合約類型和相關 </font>
							<font face="Times">NFT </font>
							<font face="宋体">所在鏈，認可平臺包括 </font>
							<font face="Times">Opensea</font>
							<font face="宋体">、</font>
							<font face="Times">Magic Eden </font>
							<font face="宋体">和幣安智能鏈（</font>
							<font face="Times">BSC</font>
							<font face="宋体">）。您有責任檢查我們的網站，以確保您不時更新批准平臺的列表。對於從這些認可平臺以外的任何其他網站、設備、平臺或錢包從外部發送到我們網站的任何
							</font>
							<font face="Times">NFT</font>
							<font face="宋体">，我們不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們網站上的合格</font> NFT <font face="宋体">只能使用</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">合格加密貨幣</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">購買。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">合格加密貨幣</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">是指我們已批准用於特定合格</font> NFT <font face="宋体">購買的加密貨幣。</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">合格加密貨幣</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">列表將在購買時顯示。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們網站上的合格</font> NFT <font face="宋体">可以出售為我們不時批准和接受</font>
							<font face="Times">&ZeroWidthSpace;&ZeroWidthSpace;</font>
							<font face="宋体">的貨幣類型。使用我們的 </font>
							<font face="Times">NTF </font>
							<font face="宋体">服務列出的所有合格 </font>
							<font face="Times">NFT </font>
							<font face="宋体">可能會以 </font>
							<font face="Times">USDT </font>
							<font face="宋体">或我們自行決定的其他類型的加密貨幣列出。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">服務費適用於在我們網站上購買或出售合格</font> NFT <font face="宋体">的所有交易。使用我們的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">服務，即表示您接受並承認我們可能隨時調整我們的服務費用。我們將在交易時通知您適用於您的交易的服務費。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">第三方網路費用適用於在我們的網站上購買或出售合格</font> NFT <font face="宋体">
								的所有交易。我們不設定這些第三方網路費用。通過使用我們的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">服務，您接受交易時適用的第三方費用。第三方網路費用將在交易時顯示。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.11</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">兌換率適用於使用某些合格加密貨幣購買合格</font> NFT <font face="宋体">的交易。通過使用我們的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">服務，您接受交易時適用的匯率。兌換率將計入購買確認時向您顯示的購買價格中。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.12</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您可以在確認銷售之前隨時取消列出合格的</font> NFT<font face="宋体">。在某些情況下，我們可能會自行決定阻止取消列出的合格
							</font>
							<font face="Times">NFT</font>
							<font face="宋体">。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.13</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">在我們網站上購買的合格</font> NFT <font face="宋体">存儲在我們管理的安全託管錢包中。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.14</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">由於</font> NFT <font face="宋体">本質上是不可替代的，因此無法一一替代。鑒於 </font>
							<font face="Times">NFT </font>
							<font face="宋体">的不可替代性，您承認，通過訪問我們的 </font>
							<font face="Times">NFT </font>
							<font face="宋体">服務，您有責任維護您的帳戶和持有的任何合格 </font>
							<font face="Times">NFT </font>
							<font face="宋体">的安全。對於我們網站上持有的合格 </font>
							<font face="Times">NFT </font>
							<font face="宋体">的盜用或盜竊，我們不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.15</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您承認並同意您</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">按原樣</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">訪問我們的</font> NFT <font face="宋体">服務，並自行承擔風險。如果您不確定，我們強烈建議您進行自己的研究並獲取自己的建議。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.16</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">為避免疑義，本協議中的所有條款均適用於我們的</font> NFT <font face="宋体">服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.&nbsp;<font face="宋体">風險披露聲明
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								交易數字資產可能風險極大。與數字資產交易相關的市場極其波動且變化迅速。區塊鏈網路可能會因攻擊、錯誤、硬分叉或其他不可預見的原因而離線。我們可能會遇到複雜的網路攻擊、活動意外激增或其他可能導致服務中斷的操作或技術困難。您對您在網站上帳戶的任何及所有交易和非交易活動承擔全部責任，並完全負責保護對您帳戶的訪問以及通過網站提供的任何資訊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您自行評估和調查並接受交易數字資產的風險。通過訪問我們的網站和使用我們的服務，您聲明您對自己對交易和基礎數字資產風險的評估和調查承擔全部責任。您聲明您有足夠的知識和經驗來自行評估其優點和風險。在網站上列出數字資產並不表示我們批准或不批准與該數字資產相關的基礎技術，並且不應替代您對與每種數字資產相關的風險的理解。我們對數字資產的適用性不向您提供任何保證，並且在我們與您的關係中不承擔或承擔任何信託責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您接受與將您的數字資產轉移到某個地址相關的所有風險。數字資產交易不可逆轉。一旦您將數字資產發送到某個地址，您就接受了您可能立即無限期失去對您的資產的訪問權的風險。您全權負責驗證您發送數字資產的地址。如果您存入的數字資產的種類或類型未在您的充值頁面上列出，則意味著我們不支持與此類數字資產相關的任何交易，因此我們將無法向您返還任何數字資產。聲稱已轉讓給我們的此類資產。您有責任確保您的存款地址列在您的存款頁面上。對於發送到錯誤地址（包括任何外部或內部錢包地址和
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;UID<font face="宋体">）的任何數字資產，我們不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不就交易風險提供建議。您必須自行尋求財務顧問或其他專業顧問的建議，並對在我們網站上進行數字資產交易所涉及的風險承擔全部責任。在任何情況下，網站上顯示的或我們提供的任何資訊、圖表、圖片、任何類型的內容和文件均不構成任何類型的投資建議或專業建議。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以自行決定隨時下架數字資產。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們可能會糾正、撤銷或取消因處理您的購買或購買過程中的錯誤而影響的任何交易，或者糾正、撤銷或取消因處理您的存款或提款過程中的錯誤而影響的數字資產存款或提款。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們可能會沒收您遺棄的財產。如果您連續兩年未在網站上登錄帳戶，我們保留在不通知您的情況下將您在網站上持有的任何及所有財產（包括數字資產）視為放棄的權利。如果您的財產被遺棄，我們將立即沒收並扣押，我們可能會將其捐贈給非營利組織。您接受與我們缺失溝通相關或因我們缺失溝通而產生的所有風險。您承認我們可能會不時在網站上發佈資訊或通過電子郵件或支持票與您溝通。您理解並同意，如果我們發佈資訊或向您發送資訊但您未能收到，則視為我們已向您提供該資訊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">7.&nbsp;<font face="宋体">隱私政策
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">7.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們按照法律法規的規定收集有關您的資訊，包括：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當您創建線上帳戶、完成交易、填寫表格、回復調查、向我們的聊天室或</font> Twitter <font face="宋体">
								發佈消息或以其他方式與我們溝通時收集的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您使用網站和服務時自動收集的資訊，包括但不限於設備識別字、移動網路資訊、使用的流覽器類型、</font>IP<font face="宋体">
								地址和其他標準網路日誌數據以及通過</font>
							<font face="Times">Cookie</font>
							<font face="宋体">和類似跟蹤技術收集的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">從第三方收集的資訊，包括身份驗證服務；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">從其他來源合法收集的資訊。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">7.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們將採取合理的安全措施來保護您的資訊安全，未經您事先許可，我們不會向任何其他第三方披露您的非公開信息，包括姓名、密碼和電話號碼，但以下情況除外：
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">經您同意向您自己或第三方披露您的資訊；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">經您同意披露您的資訊，以便您使用產品或服務；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">披露或分享您的資訊，以履行我們對法律法規規定的當局（包括但不限於行政當局和金融當局）的法律義務；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">當我們自行決定認為有必要披露您的資訊以防止人身傷害或經濟損失、報告可疑的非法活動或調查違反或執行我們的用戶協議或其他政策和協議的行為時。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">有關我們收集的資訊類型以及我們使用這些資訊或披露您的資訊的方式的更多詳細資訊，請參閱我們的隱私政策。我們強烈建議您仔細閱讀我們的隱私政策並熟悉其內容。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.&nbsp;<font face="宋体">
									服務修改、暫停和終止</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您可以根據本協議及張貼的服務使用規則查看網站上張貼的交易資訊及相關資料，並參與我們當前或將來提供的特定金融相關活動。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您應在自願、公平、誠實的基礎上，按照本協議及相關規則使用本網站的服務。您不得利用本網站或我們的服務侵犯他人合法權益或牟取不正當利益或擾亂正常網上交易秩序。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								當您同意使用服務時，您也同意接受我們提供的資訊服務並授權我們向您的電子郵件地址、手機等通訊地址發送商業資訊。您可以根據我們的指示進行具體更改，選擇拒絕此類資訊服務。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								儘管我們努力維護網站向您提供可持續、安全、穩定和順暢的服務，但不保證服務不會出現傳輸資訊的延遲、故障、錯誤、遺漏或丟失。您理解並同意，我們有權因系統更新升級、新增功能以及其他經我們判斷應當中斷服務的情況而暫停服務。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以自行決定隨時臨時或永久修改或終止我們服務的任何部分，且無需對您承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您不同意本協議任何修改後的條款或對我們的服務不滿意，您有權：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">停止訪問網站或使用服務；或者</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過聯繫我們的支持人員通知我們終止為您提供的服務。當您的服務終止時，我們沒有義務向您或第三方交付待處理的資訊或服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可能會立即暫停、限制或終止您對任何或所有服務和網站的訪問，和</font>/<font face="宋体">
								或停用或取消您的帳戶，或者取消、暫停、阻止、暫停或拒絕完成數字資產交易如果：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們合理認為，適用法律、法規或我們在任何司法管轄區受管轄的任何法院或其他機構要求我們這樣做；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有理由懷疑您的行為違反了本協議或我們網站上不時顯示的任何其他政策；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們擔心交易錯誤或您帳戶的安全，或者我們懷疑服務正在以欺詐或未經授權的方式使用；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們懷疑洗錢、恐怖主義融資、欺詐或任何其他金融犯罪；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">使用您的帳戶會受到任何未決訴訟、調查或政府程式的影響，和</font>/<font face="宋体">
								或我們認為與您的帳戶活動相關的法律或監管違規風險較高；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您採取任何可能規避我們控制的行動，例如開設多個帳戶或濫用我們可能不時提供的促銷活動；和</font>/<font face="宋体">或</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有理由認為，我們需要這樣做，以保護我們的聲譽和</font>/<font face="宋体">
								或遵守法院、政府機構或主管機構發出的任何請求、命令或判決。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可以在提前</font> 45 <font face="宋体">天通知您的情況下，無故暫停、限制或終止您對任何或所有網站和</font>
							<font face="Times">/</font>
							<font face="宋体">或服務的訪問和</font>
							<font face="Times">/</font>
							<font face="宋体">
								或停用或取消您的帳戶。您同意並承認，我們採取任何這些行動的決定可能基於保密標準，這些標準對於我們的風險管理和安全協議的目的至關重要。您承認並同意我們沒有義務向您披露我們的風險管理和安全程式的詳細資訊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.&nbsp;<font face="宋体">用戶權利
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您的登錄憑據和安全性</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有權選擇成為或不成為我們的會員。如果您選擇成為會員，您可以創建您的帳戶並設置首選昵稱。昵稱中不得含有絕緣、威脅、色情或者侵犯他人合法權益的詞語。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">成功創建帳戶並獲得用戶名（或電子郵件地址）和密碼組合，您就成為</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">的會員。您對使用此用戶名（或電子郵件）和密碼組合登錄的所有活動和事件承擔全部責任，並接受所有相關風險。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有義務保護您在我們註冊的所有帳戶、用戶名和密碼、短信驗證碼（短信中發送到您的手機號碼的驗證碼）和</font>TOTP<font face="宋体">
								碼（與您的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">帳戶關聯的認證應用程式生成的動態代碼）</font>
							<font face="宋体">，可在</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">頁面的兩步認證中設置）、</font>API Key<font face="宋体">和</font>
							<font face="Times">Secret</font>
							<font face="宋体">，並全權負責用戶名和密碼、短信碼和</font>
							<font face="Times">TOTP</font>
							<font face="宋体">、</font>
							<font face="Times">API Key</font>
							<font face="宋体">和</font>
							<font face="Times">Secret</font>
							<font face="宋体">的安全。用戶須自行承擔因洩露上述資訊而產生的法律後果，且因非我們原因造成的資訊洩露而造成的財產損失不需追究我們的責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您可以通過與您的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">帳戶關聯的電子郵件或發送到與您的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">
								帳戶關聯的電話號碼的短信（如果該帳戶是通過電話號碼創建的）來重置密碼。如果您發現或懷疑您的</font> </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">帳戶存在任何安全漏洞或未經授權使用您的</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">帳戶，您應立即通知我們。</font></span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不會要求您提供密碼，也不會要求您將資金存入網站上未提供的地址。您切勿相信任何折扣或促銷資訊，也不應將您的資產發送至網站未提供的地址。您有責任確保將資產發送到我們為該資產提供的正確地址。對於因將資產發送至非我們提供的地址而造成的任何資產損失，您不應要求我們承擔責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您為網站做出貢獻，根據我們的任何獎勵政策，您可能會從我們那裏獲得獎勵或特權（但不保證）。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有權修改您的部分帳戶資訊。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有權加入</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">社區併發表不違反</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">規則和法律法規的評論或文章。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有權參加</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">組織或提供的線上或線下活動。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有權按照</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">相關規則及條款享受</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">提供的相關服務。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.&nbsp;<font face="宋体">用戶義務
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您可以對我們提供的產品或服務發表評論，並在適當範圍內進行修改或刪除。您不得利用本網站進行威脅國家安全、洩露國家秘密、侵犯其他個人、社會團體、國家的合法權利及其他非法活動。您不得利用本網站傳播違反政策、法律法規和社會規範的資訊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您不得出於惡意目的註冊帳戶，包括但不限於註冊多個帳戶進行炒作、牟利、獲取獎勵或任何經濟利益。您不得使用其他用戶的帳戶、使用多個帳戶（無論這些帳戶是否由您註冊、屬於您或在您的控制之下）或利用我們的規則、政策或活動設計中的任何潛在間隙或漏洞進行任何活動。收益。如果我們懷疑或發現這些活動，我們可以自行決定採取必要的行動，包括但不限於刪除您發佈的內容、取消您的獎勵、扣除通過網站或參與已累計或獲得的任何利潤在任何事件（包括任何促銷活動）中，例如空投、獎勵以及通過此類欺詐活動賺取的或通過多個帳戶轉移的任何利潤，凍結您帳戶中或我們懷疑（合理行事）與您相關的任何帳戶中持有的資產、暫停或終止您的帳戶，或對您提起法律訴訟。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您不應將網站用作任何未經授權或非法活動的場所、平臺或媒體。未經我們事先授權或許可，您不得利用</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								的名義參與任何商業活動或將本網站作為商業目的的舞臺、平臺或媒體。如果我們檢測到上述活動，我們可以自行決定採取必要的行動，包括但不限於刪除您發佈的內容，取消您在網站上的獎勵、特權或資產，暫停或終止您的帳戶，甚至對您提起法律訴訟。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								您以任何形式在本網站發佈的任何資訊均應符合良好的社會規範，不得違反法律法規以及我們的政策、條款和規則，不得損害或對他人的合法權益產生負面影響。您應對您發佈該資訊的行為的所有情況承擔全部責任和義務，我們保留向您索賠的權利。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">在向潛在客戶進行推薦、行銷或招攬業務時，您完全遵守</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">對限制地點的要求。</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.&nbsp;<font face="宋体">
									責任限制和棄權</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								當延遲或未能履行承諾是由於火災、罷工、洪水、停電或故障、天災或國家的敵人、公共當局的合法行為、任何和所有市場變動、轉變或波動、電腦、伺服器或互聯網故障、安全漏洞或網路攻擊、犯罪行為、公共承運人造成的延誤或違約、第三方的行為或不作為，或者任何其他延誤、違約、故障或無法合理預見的中斷（
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">不可抗力</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）。如果發生不可抗力，我們將免除任何及所有履約義務，並且服務將完全且最終終止。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不保證網站和服務上的資訊完全滿足您的需求，並且對您在使用網站或我們的服務期間可能遇到的任何錯誤、絕緣、誹謗、不作為、褻瀆或色情內容不承擔任何責任。在使用我們的任何服務之前，您應始終根據自己的情況尋求專業建議。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">鑒於互聯網和網路環境的性質和特殊性，我們不能保證我們的服務不會中斷，也不保證服務的及時性和安全性，也不對非我們直接造成的損害承擔責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們努力為您提供對網站和服務的安全訪問，但我們不聲明或保證網站或服務是安全的，不存在惡意元素或病毒或其他潛在風險。您應使用行業認可的軟體掃描並處理從網站下載的檔或其他元素。您應根據自己的判斷辨別真假，避免風險。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們不對您所發佈的資訊保存、修改、刪除或存儲失敗負責。我們也不對非我們故意的任何印刷錯誤或疏忽負責。您應根據自己的判斷辨別真假，避免風險。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有權但沒有義務糾正或更新無意的遺漏或錯誤。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								除非以書面形式明確同意，否則我們不保證您從本網站、通過本網站或通過本網站鏈接或以與本網站相關的任何其他方式獲得的資訊（包括但不限於廣告）的準確性、完整性或可靠性。我們不對您因此類資訊而購買或獲取產品、服務、資訊或材料負責。您應自行承擔使用該資訊的所有風險。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">用戶在網站上發佈的評論或資訊僅代表發佈者個人的意見，不應視為我們對這些資訊或描述的同意或確認。我們對用戶發佈的評論或資訊不承擔任何責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們保留刪除網站上發佈的違反法律法規或用戶協議的資訊的權利，恕不另行通知。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們可能會通過網頁公告、電子郵件地址、支持電話、手機消息或常規郵件向您發送通知或消息。我們不對其他管道提供的有關獲獎、促銷或其他活動或事件的資訊負責。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.11</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有權根據市場情況調整充值、提現和交易等服務的費用，並有權隨時終止促銷活動。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.12</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您有責任確定是否適用或哪些法律可能適用於您，包括任何稅務相關法律。您全權負責報告和繳納因使用我們的服務和網站而產生的任何稅費。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.13</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您同意向我們支付使用我們服務的任何適用費用，並授權我們從您的帳戶中扣除費用。您同意並理解我們可以自行決定不時修改或更新費用表，並且費用表的更改立即生效。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.&nbsp;<font face="宋体">
									責任限制和免除</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您理解並同意，在任何情況下，我們均不對下列任何事件承擔責任：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">收入損失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">交易利潤損失或合同損失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">業務中斷；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">預期貨幣損失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">資訊丟失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">失去機會；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">商譽或聲譽受損；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>H<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">數據損壞或丟失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">購買替代產品或服務的成本；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(j)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								因任何侵權（包括疏忽）、違反合同或任何其他原因而引起的任何間接、特殊或附帶損失或損害，無論我們是否可以合理預見該損失或損害，也無論我們是否提前通知此類損失或損壞的可能性。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(k)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">上述</font>(a)<font face="宋体">至</font>
							<font face="Times">(j)</font>
							<font face="宋体">項是相互獨立的。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您理解並同意，因下列情況造成的任何損害，我們不承擔責任：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有正當理由認為您的具體交易可能涉及任何嚴重違法或違反法律或協議的行為；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們有合理理由相信您在網站上的行為涉嫌非法或不道德；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">通過網站提供的服務購買或獲取任何數據、資訊或交易而產生的費用和損失；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您對我們提供的服務的誤解；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">任何與服務相關且不能歸咎於我們的損失。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								由於資訊網絡設備維護、資訊網絡連接故障、電腦、通信或其他系統錯誤、電力故障、天氣狀況、意外事故、勞工訴訟、勞動爭議、叛亂而導致我們無法提供服務或延遲提供服務的情況、起義、騷亂、缺乏生產力或生產材料、火災、洪水、風暴、爆炸、戰爭、銀行或其他合作夥伴的失敗、數字資產市場的崩潰、政府、司法或行政當局的行動、其他行為不屬於我們控制範圍或超出我們控制能力的情況，或由於第三方原因，我們不對此類未能提供服務或延遲提供服務以及由此給您造成的損失承擔任何責任由於此類失敗或延遲。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不能保證我們網站中包含的所有資訊、程式、文本等完全安全，不受任何病毒、木馬等惡意程式的干擾和破壞，因此，您登錄網站或使用網站提供的任何服務、從網站下載任何程式、資訊和數據以及您的使用均是您的個人決定，因此您應承擔可能出現的任何及所有風險和損失。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不對與本網站鏈接的任何第三方網站的任何資訊、產品和業務以及不屬於我們的任何其他形式的內容做出任何保證和承諾；您使用第三方網站提供的任何服務、資訊和產品是您個人的決定，因此您應承擔由此產生的任何及全部責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們不對您使用服務或網站做出任何明示或暗示的保證，包括但不限於所提供服務的適用性、無錯誤或遺漏、一致性、準確性、可靠性以及對特定目的的適用性通過網站。此外，我們不對網站所提供的服務所涵蓋的技術和資訊的有效性、準確性、正確性、可靠性、品質、穩定性、完整性和及時性做出任何承諾或保證。是否登錄本網站或使用本網站提供的服務是您個人的決定，因此您應承擔由此決定而產生的所有風險和可能的損失。我們不對數字資產的市場、價值和價格做出任何明示或暗示的保證；您理解並承認，數字資產市場不穩定，數字資產的價格和價值可能隨時波動或崩潰，數字資產的交易基於您個人的自由意志和決定，因此您應承擔任何風險。以及由此可能產生的一切風險和損失。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								在市場波動、交易量大、市場波動快速和流動性不足的時期，您購買、出售或交易數字資產的市場價格可能與我們網站上顯示的價格不同，因此我們將無法執行您的訂單並將資金返還至您的帳戶。對於因市場波動、市場或技術中斷、延誤或任何其他我們無法控制的事項而導致的任何價格變化，我們不承擔任何責任。如果市場匯率大幅上漲或下跌，或者出現市場混亂或其他超出我們控制範圍的事件，我們可能會合理地決定不執行交易。在這種情況下，我們可能會取消您的買入或賣出訂單並將資金退回您的帳戶。我們將採取合理的謹慎措施通知您這些事件，當您收到通知時，您必須檢查您的帳戶以及任何待處理或取消的交易。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								本協議中規定的保證和承諾應是我們就我們根據本協議和通過網站提供的服務做出的唯一保證和聲明，並應取代以任何其他方式產生的任何及所有保證和承諾，以及方式，無論是書面的還是口頭的，明示的還是暗示的。所有這些保證和聲明僅代表我們自己的承諾和承諾，並不保證任何第三方遵守本協議中包含的保證和承諾。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們不放棄本協議中未提及的任何權利，並在適用法律允許的最大範圍內限制、免除或抵消我們的損害賠償責任。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您在本網站註冊帳戶後，即視為您認可我們按照本協議規則進行的任何及全部操作，且由此產生的任何及全部風險均由您承擔。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.&nbsp;<font face="宋体">適用法律
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">本協議的制定、執行、解釋以及爭議的解決均適用巴拿馬共和國法律。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">本協議的條款和條件是可分割的。如果本協議的任何條款或條件被裁定無效或不可執行，則該條款或條件可由適用的法律解釋，而不影響其餘條款和條件的繼續執行。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								本協議闡述了雙方就本協議及其中包含的標的物達成的完整協議和理解，並取代與本協議相關的所有先前協議、承諾、契約、安排、通信、陳述或保證，無論是口頭還是書面的本文及其主題。我們保留對本協議的最終解釋權。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">14.&nbsp;<font face="宋体">
									反洗錢和反恐融資</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">14.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們致力於為您提供安全、合規、信譽良好的服務。因此，我們擁有全面徹底的客戶盡職調查流程，包括持續的分析和報告。這包括監控可疑交易並向國際監管機構報告。我們需要根據適用法律並作為我們合同義務的一部分保留某些資訊和文件，並且我們特此明確保留存儲此類資訊和文件的權利。即使您終止與
							</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">的關係或放棄申請</font> </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;<font face="宋体">帳戶，這也適用。</font></span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">15.&nbsp;<font face="宋体">賠償
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">15.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">在任何情況下，我們對您的直接損害承擔的責任均不得超過您三個月使用我們提供的服務所產生的總費用。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">15.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								如果您違反本協議或任何適用的法律、行政法規，您應承擔並向我們支付與該違反行為相關的所有損害、損失（無論是直接的還是後果性的）、費用和開支（包括律師費等）。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">16.&nbsp;<font face="宋体">爭議解決
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">16.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">各方同意，由本協議或與本協議相關的任何檔或交易引起的或與之相關的任何爭議（包括與本協議相關的任何爭議或索賠）</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">本協議的存在、有效性或終止；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">因本協議產生或與之相關的任何非合同義務（</font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;mso-ansi-font-weight:bold;
			text-transform:none;font-style:normal;font-size:14.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
								<font face="宋体">爭議</font>
							</span></b><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">"</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">）</font>&nbsp;<font face="宋体">應首先提交並通過談判友好解決。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">16.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果爭議未能在一方向另一方發出爭議通知開始協商後三十</font> (30) <font face="宋体">
								天內通過協商解決，則該爭議應提交仲裁並最終通過仲裁解決根據當時有效的國際商會仲裁規則，在巴拿馬排除普通法院，該規則被視為通過引用納入本條款。仲裁地點為巴拿馬。仲裁庭由一名仲裁員組成。仲裁語言應為英語。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">16.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">雙方進一步同意，仲裁開始後，他們將真誠地嘗試通過調解解決爭議。調解過程中達成的任何和解均應提交當時所在地的仲裁庭，並可按商定的條件作出同意裁決。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">17.&nbsp;<font face="宋体">計算
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">所有交易計算均經過我們驗證，所有計算方法均已在網站上公佈，但我們不能保證您對本網站的使用不會受到干擾或沒有錯誤。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">18.&nbsp;<font face="宋体">知識產權
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								除非我們另有說明，否則與網站或任何相關移動應用程式上使用的或與服務相關的所有材料相關的所有知識產權，包括但不限於設計、結構、佈局、圖形圖像和基礎來源代碼屬於我們。保留所有知識產權。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們授予您有限的、非獨占的、不可再許可且不可轉讓的許可，僅出於我們不時確定的批准目的訪問和使用服務。明確禁止將服務用於任何其他用途。</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">19.&nbsp;<font face="宋体">補充規定
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">服務或產品使用規則、頁面提示等為本協議不可分割的一部分，與協議正文具有同等法律效力。服務規則包括但不限於隱私政策、反作弊聲明、反洗錢政策及其他交易規則。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:12.0000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.&nbsp;<font face="宋体">
									瞭解您的客戶和反洗錢政策序言</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們確保遵守瞭解您的客戶和反洗錢的法律法規，並且不會故意違反瞭解您的客戶和反洗錢的政策。在我們合理控制的範圍內，我們將採取必要的措施和技術為您提供安全可靠的服務，最大程度地保護您免受洗錢造成的損失。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們的瞭解您的客戶和反洗錢政策是一個全面的國際政策體系，包括您所在司法管轄區的瞭解您的客戶和反洗錢政策。我們強大的合規框架確保我們滿足本地和全球層面的監管要求和監管標準，並確保我們網站的運營可持續性。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:7.5000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.1&nbsp;<font face="宋体">
									我們的瞭解你的客戶和反洗錢政策的內容</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">

							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們頒佈並更新瞭解你的客戶和反洗錢政策，以滿足相關法律法規規定的標準；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們頒佈並更新了一些與網站運營相關的指引和規則，我們的工作人員將按照指引和規則為您提供全程服務；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們設計並完成內部監控和交易控制程式，例如嚴格的身份認證程式，並組建專業團隊負責反洗錢合規；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們以風險防範為基礎，對客戶進行盡職調查和持續監督；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們審查並定期檢查現有交易；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>F<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們將向主管當局報告可疑交易；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>G<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">身份證明文件、地址證明和交易記錄等證明檔將保存至少六（</font>6<font face="宋体">
								）年。如果它們被提交給監管機構，則可能不會向您提供單獨的通知；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>H<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">整個交易過程中禁止使用信用卡。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:7.5000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.2&nbsp;<font face="宋体">身份資訊
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">

							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">根據相關司法管轄區的法律法規以及相關主體的性質，我們收集的您的資訊內容可能會有所不同，原則上，如果您註冊為個人：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								基本個人資訊：您的姓名、地址（以及永久地址，如果兩者不同）、出生日期和國籍以及其他可用資訊。身份認證應基於官方或其他類似機構頒發的檔，例如護照、身份證或相關司法管轄區要求並頒發的其他身份證明文件。您提供的地址將以適當的方式進行驗證，例如檢查您使用的交通工具的票價、您的利率帳單或選民登記冊。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">有效照片：註冊前，您必須提供您將身份證件放在胸前的照片；和</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">聯繫資訊：電話</font>/<font face="宋体">手機號碼和有效的電子郵件地址。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您是公司或任何其他類型的法人實體，我們將收集您的以下資訊以確定您的帳戶或信託帳戶的最終受益人：</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您的公司註冊和登記證書；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">二）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">公司章程及備忘錄副本；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">三）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">公司股權結構和股權描述的詳細證明材料；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">四）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">董事會關於指定公司授權代理人負責在我們這裏開設和執行公司帳戶的決定；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">五）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">根據相關規則要求提供的公司董事、主要股東以及公司網站帳戶授權簽字人的身份證明文件；</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">六</font>)
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								公司的主要營業地址，以及公司的郵寄地址（如果與公司的主要營業地址不同）。如果公司的當地地址與其主要營業地址不同，則該公司將被視為高風險客戶，因此公司將被要求提供額外的檔；和
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">七）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">其他證明檔、主管部門出具的檔以及我們根據相關司法管轄區的法律法規和您實體的具體性質認為必要的其他檔。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們僅接受您的英文和中文版本的身份資訊。如果您的身份資訊不是這兩種語言中的任何一種，您必須將您的身份資訊翻譯成英文並對檔進行正式公證。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:7.5000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.3&nbsp;<font face="宋体">確認與驗證
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">

							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您需要提供身份證明文件的正面和背面。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">您需要向我們提供一張照片，顯示您將身份證件放在胸前。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								證明檔影本應當與原件核對。儘管如此，如果值得信賴且合適的認證人員能夠證明該等副本是原件的準確且全面的副本，則該副本應被視為可接受。這些認證者包括大使、司法人員和治安法官。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">帳戶最終受益人和控制人的識別應基於確定哪些個人最終擁有或控制直接客戶和</font>/<font face="宋体">
								或確定正在進行的交易是由另一個人執行的。如果您是企業，則應驗證其主要股東（例如持有該企業</font>
							<font face="Times">10%</font>
							<font face="宋体">或以上投票權的股東）的身份。一般情況下，持有公司股份</font>
							<font face="Times">25%</font>
							<font face="宋体">的股東將被視為風險程度一般，需核實股東身份；持有</font>
							<font face="Times">10%</font>
							<font face="宋体">以上表決權或者股份的股東視為風險較高的，應當核實股東身份。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;font-weight:bold;
			text-transform:none;font-style:normal;font-size:7.5000pt;
			mso-font-kerning:0.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.4&nbsp;<font face="宋体">交易監管
								</font></span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">

							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>A<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">我們根據安全要求和交易的實際情況不斷設定和調整日常交易和提現的所有限額。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">二</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">如果您註冊的帳戶頻繁發生交易或超出合理情況，我們的專業團隊將評估並確定該交易是否可疑。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">（</font>C<font face="宋体">）</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								如果我們根據評估認定某項特定交易可疑，我們可能會採取暫停該交易或拒絕交易等限制性措施，如果可能的話，我們甚至可能會儘快逆轉該交易，並向主管當局，但不會通知您。</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">(<font face="宋体">四</font>
							<font face="Times">)</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;mso-fareast-font-family:宋体;
			color:rgb(51,51,51);letter-spacing:0.0000pt;text-transform:none;
			font-style:normal;font-size:14.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
							<font face="宋体">
								我們保留拒絕不符合反洗錢國際標準或可能被視為政治和公眾人物的申請人的註冊申請的權利；我們保留暫停或終止根據我們自己的評估確定為可疑的交易的權利，但這並不違反我們對您的任何義務和責任。
							</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
				</div><!--EndFragment-->
			<!-- <web-view src="../../static/file/termsUse/zh-Hant.htm"></web-view> -->
		</view>
		<view class="main" v-else-if="pageShow==1">
			<web-view src="../../static/file/termsUse/zh-Hans.htm"></web-view>
		</view>
		<view class="main" v-else-if="pageShow==2">
				<div class="Section0" style="layout-grid:15.6000pt;">
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.&nbsp;GENERAL</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">1.1&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">General</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Before using or accessing websites operated by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;including&nbsp;</span><span><a href="http://www.gate.io/"><span class="16"
									style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">www.</span><span class="16" style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span></a></span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">, API located on&nbsp;</span><span><a href="https://gate.io/api2"><span class="16"
									style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">https://</span><span class="16"
									style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">/api2&ensp;</span></a></span><span
							style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">and any services made available through the websites, any associated mobile
							applications and APIs such as&nbsp;</span><span><a href="https://gate.io/zendesk"><span
									class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">https://</span><span class="16"
									style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">
									<font face="Times">AlitaGPT</font>
								</span><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">/zendesk&ensp;</span></a></span><span
							style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(collectively, the “&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Services&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”) any related software, forums, blogs, social media pages and other
								relevant platforms operated or maintained by </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;(collectively, the “&nbsp;</span><b style="mso-bidi-font-weight:normal"><span
								class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Sites&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”), you must read this User Agreement (“&nbsp;</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Agreement&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”) carefully and understand all the terms and conditions, especially for
								the contents highlighted by capitalized terms, italic, bold, underline or color . This
								Agreement consists of the main body, privacy policy (</font>
						</span><span><a href="https://www.gateex.cc/privacy-policy"><span class="16" style="mso-spacerun:'yes';font-family:Times;color:rgb(36,132,193);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;background:rgb(254,254,254);mso-shading:rgb(254,254,254);">available here</span></a></span><span
							style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">) (“&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Privacy Policy&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”), as well as any rules, statements, instructions, etc. that this
								website has published or may publish in the future. For the convenience of wording in
								this Agreement, the Sites, </font>
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;and/or any of its affiliates, related body corporate are referred to as “we”,
							“our” “us” or “Site”.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">By accessing, downloading, using or clicking on “I agree” to accept any </span><span
							style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;Services, you agree that you have read, understood and accepted all terms and
							conditions stipulated in this Agreement alongside any other agreements you may be required
							to accept such as the Privacy Policy. In addition, when using some features of the Services,
							you may be subject to specific additional terms and conditions applicable to those
							features.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Please read these terms carefully as they govern your use of Services and access to
							the Sites. THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION AND MEDIATION
							PROVISION THAT REQUIRES ALL CLAIMS TO BE RESOLVED BY WAY OF MEDIATION AND LEGALLY BINDING
							ARBITRATION. BY ACCESSING THE SITES AND MAKING USE OF SERVICES YOU ACKNOLEDGE AND AGREE
							THAT, INTER ALIA, 1) THE TRADING OR HOLDING OF COINS, TOKENS, CRYPTOCURRENCIES, DIGITAL
							CURRENCIES, OR DIGITAL ASSETS OF THE LIKE INVOLVES SIGNIFICANT RISKS, THE LOSSES CAN BE
							SUBSTANTIAL AND ANY LOSS AND LIABILITY YOU INCUR IS NOT INSURABLE. YOU ARE AWARE OF THE
							RISKS ASSOCIATED WITH TRANSACTIONS OF THE ABOVEMENTIONED DIGITAL ASSETS AND THEIR
							DERIVATIVES; 2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF SERVICES AND TRANSACTIONS
							OF THE ABOVEMENTIONED DIGITAL ASSETS AND THEIR DERIVATIVES; AND 3) WE SHALL UNDER NO
							CIRCUMSTANCES BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES RESULTED
							THEREFROM.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Our Sites only provide online transaction and platform ervices for you to engage
							in&nbsp;(as defined hereinbelow) trading activities through the Sites (including but not
							limited to the&nbsp;transactions etc.). The Sites do not participate in the transaction
							of&nbsp;s as a buyer or seller and do not provide any services relating to the replenishment
							and withdrawal of the fiat currency of any country or regions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">1.2&nbsp;Risk Reminder</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">

							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The&nbsp;market is new and unconfirmed, and will not necessarily expand.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The&nbsp;s themselves are not offered by any financial institution, corporation or
							the Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Digital&nbsp;ssets are primarily used by speculators, and are used relatively less on
							retail and commercial market.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Digital&nbsp;sset transactions are highly risky, due to the fact that they are traded
							throughout the day without limits on the rise or fall in price, and market makers and global
							government policies may cause major fluctuations in the price.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Cryptocurrencies such as Bitcoin and Ether are unlike traditional fiat currencies,
							goods or commodities in the market and are subject to exceptional risks. Unlike other
							traditional fiat currencies, cryptocurrencies are decentralized and are not backed by a
							central bank, government or other legal entities. Cryptocurrencies currently remain largely
							unregulated. As such, the value of cryptocurrencies may rise and fall depending upon the
							market, confidence of investors, competing currencies, regulatory announcements or changes,
							technical problems or any other factors.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Due to the significant risks of trading cryptocurrencies as well as the impact of
							technology and the international market, we cannot warrant or guarantee that particular type
							of cryptocurrency will be available on our Sites and Services. We reserve the right to stop
							offering Services in relation to a particular type of cryptocurrency on our Sites. We will
							use our reasonable endeavours to notify you if we cease to support trading or provide
							Services in relation to a particular cryptocurrency. If this is the case, you will not be
							able to convert that type of cryptocurrency into any other currency. However, you will be
							given the option to transfer the cryptocurrency to another user, platform or third party
							sites. Please be aware that we are not and will not be responsible for any costs incurred by
							you if you decide to transfer the cryptocurrency to another user, platform or third party
							website.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We are not responsible or liable for any cryptocurrency once they are transferred
							from our Sites to another site, device, platform, wallet or user. Nor are we responsible or
							liable for any cryptocurrency not traded on our Sites that have been sent into our Sites. We
							are and will not be responsible or liable for any cryptocurrency that have been sent to an
							incorrect or incompatible wallet address. Examples of incompatible wallet addresses include
							but are not limited to the type of cryptocurrency being transferred is sent on.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(h)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">As we do not identify the counterparty to any transactions you make, we strongly
							recommend that you do not send cryptocurrency to any persons you do not personally know or
							completely trust, as, once sent, the transaction cannot be reversed. It is important for you
							to take precautions when transferring and storing your cryptocurrencies and/or&nbsp;s
							whether on our platform or through other sites, wallets or devices. We take no
							responsibility for the misappropriation or theft of your cryptocurrencies and&nbsp;s. We
							strongly advise that you familiarize yourself with and implement a personal wallet service
							or other device for storing your&nbsp;s including cryptocurrencies and implement other
							security measures. Always take a greater degree of care and precaution to secure your
							passwords when operating in a digital environment.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Digital ssets trading is highly risky and therefore not suitable for most people. You
							acknowledge and understand that investing in&nbsp;s may result in partial or total loss of
							your investment and therefore you are strongly recommended to decide the amount of your
							investment based on your loss-bearing capacity. You acknowledge and understand that&nbsp;s
							may generate derivative risks. Therefore, if you have any doubt, you are strongly advised to
							seek assistance from a professional advisor and seek relevant professional advice.
							Furthermore, aside from the above-mentioned risks, there may also be unpredictable risks.
							Therefore, you are advised to carefully consider and use rational judgment to assess your
							financial position and the above-mentioned risks before making any decisions on
							transacting&nbsp;s; any and all losses arising therefrom will be borne by you yourself and
							we shall not be held liable in any manner whatsoever and howsoever.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You acknowledge, understand and agree that:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">

						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You understand that our Sites are only intended to serve as a venue for you to
							obtain&nbsp;information, find trading counter parties, negotiate on and effect transactions
							of&nbsp;s. Our Sites do not participate in any of your transactions, and therefore you
							shall, at your sole and absolute discretion, carefully assess the authenticity, legality and
							validity of relevant&nbsp;s and/or information, and solely bear the responsibilities and
							losses that may arise therefrom.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">

						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">All opinions, information, discussions, analyses, prices, advice and other
							information on our Sites are general market reviews and do not constitute any investment,
							financial, taxation or any other form of professional advice. We do not bear any loss
							howsoever arising directly or indirectly from or in connection with the abovementioned
							information, including but not limited to, any loss of profits.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We reserve the right to determine, amend or modify any contents of the Sites at any
							time at our sole discretion. We have used reasonable efforts to ensure the accuracy of the
							information on the Sites, however, we do not and cannot guarantee the degree of accuracy of
							the information or bear any loss arising directly or indirectly from or in connection with
							the information on the Sites or from any delay or failure caused by failure to link up with
							the internet, transmit or receive any notice and information.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Using internet-based trading systems also involves risks, including, but not limited
							to failures in software, and hardware or internet links. Considering that we cannot control
							the reliability and availability of internet, we will not be responsible for any distortion,
							delay and link failure.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You must not use the Sites and any part of the Services to engage in any illegal
							transactions, activities or illegitimate activities, including but not limited to money
							laundering, terrorism funding, smuggling and commercial bribery. In the event that any
							illegal transactions, activities or illegitimate activities is suspected or noticed, we will
							adopt and apply all available measures at our sole discretion, including but not limited to
							freezing all relevant Accounts and notifying relevant authorities, and we will not assume
							any of the responsibilities arising therefrom and reserve the right to hold relevant persons
							accountable.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You must not use our Sites or Services in any manner to engage in, or undertake, or
							conduct, or involve in any activities that have or potentially have adverse impact on market
							integrity, our reputation, and/or our other users’ legitimate rights, which includes but not
							limited to market manipulation activities (such as spoofing, layering, and wash trading) or
							any illicit, improper, fake, unfair or unethical transactions or trading activities
							(collectively referred to “</span><b style="mso-bidi-font-weight:normal"><span class="15"
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;Market Manipulation Activities&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”). In particular, you and/or your affiliates (including any individual,
								subsidiary or entity directly or indirectly controlled by you, under the same control as
								you, having close connection or associate with you, or acting on your behalf) (“&nbsp;
							</font>
						</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Affiliates&nbsp;</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">”) must not open multiple accounts on our Sites to engage in or otherwise
								participate in any of the abovementioned Market Manipulation Activities. You acknowledge
								and understand that Market Manipulative Activities may have an adverse effect on the
								market, such as causing prices of relevant digital assets to become artificially
								inflated or deflated. We take these activities very seriously and undertake to promote
								fairness and integrity of the market and shall take the necessary steps to protect our
								Sites and Services from such abusive behaviour – in the event any of such Market
								Manipulative Activities are detected, noticed or suspected on reasonable grounds by us,
								we may in our sole and absolute discretion take actions we deem proper such as issuing
								warnings, cancelling your trading eligibility, restricting trading, cancelling or revert
								transactions, escrow earning derived from such Market Manipulative Activities,
								suspending our Services to you, freezing or setting off any losses or damages arising
								from your Market Manipulative Activities against any assets held in your and/or your
								Affiliates’ Account and any such Accounts that we suspect or believe in reasonable
								grounds are related to you and/or your Affiliates, or suspending or permanently closing
								all relevant accounts. We do not accept or assume any liability arising from these
								activities and shall continue to take any actions as we see reasonable and necessary
								against any Market Manipulation Activities and shall reserve all our rights including
								but not the right to pursue all available legal and/or equitable remedies to hold
								relevant persons including you and your Affiliates accountable.</font>
						</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">1.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;provides an online service that allows users to exchange between themselves
							different blockchain assets, which are data that typically represents transaction, access,
							or other participation rights on corresponding blockchain networks (collectively,
							“&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Digital Assets</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”). </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;may make available to you other ancillary services to facilitate the exchange
							of Digital Assets. Depending on your country of residence, you may not be able to use all
							the function on this site. It is your responsibility to follow those rules and applicable
							laws in your country of residence and/or country from which you access the Sites and
							Services. By clicking the "Create Account" button or by accessing or using the Services, you
							agree to be legally bound by this Agreement and accept all the terms and condition of this
							Agreement. If you do not agree to be bound by these terms and conditions, you should
							immediately cease to access the Sites and use of any part of the Service.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">1.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">By creating an account with </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;(“</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Account</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”), you agree to maintain the security and confidentiality of your login
							credentials and restrict access to your Account and your computer, tablet, or mobile device.
							You shall take full legal responsibility for all activities that occur under your Account
							and accept all risks of unauthorized access.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">1.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We reserve the right to make changes or modifications to this Agreement, affiliated
							service terms, activities terms or announcement from time to time, in our sole discretion
							without notice to you. The amended terms will be deemed effective immediately upon posting.
							Your continued use of this&nbsp;ite and the ervices acts as acceptance of such changes or
							modifications. If you do not agree to any amended terms, you must discontinue using or
							accessing our Service. By using and accessing our service, you are deemed to have agreed to
							and fully understood that this Agreement and contents in other affiliated service terms,
							including the amended terms made by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;from time to time.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">2.&nbsp;ELIGIBILITY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">By accessing the Sites or using our Services, you represent and warrant that you are
							at least 18 years old and legally capable of entering into and being bound by contracts,
							including but not limited to the Agreement, and have not previously been suspended or
							removed from the Site or Services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">In the event that you are accessing our Sites and/or Services on behalf of any
							beneficiary, natural person or legal person including any forms of incorporation,
							partnership, association, organization or any other entity type (“&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Represented Person</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”), your continued access of our Site and/or Services shall constitute your
							representation to us that you have been duly authorized by such Represented Person to use
							our Site and our Services, perform any transactions or activities thereon, and to therefore
							bind your Represented Person to this Agreement and to any such transactions or activities
							that you have performed. Accordingly, when the term “you” is used herein this Agreement and
							any associated contents, terms and policies, “you” shall refer not only to you the actual
							user as an individual, but also the Represented Person, and therefore both you and the
							Represented Person are jointly and severally bound under the Agreement. Accordingly, you
							also hereby undertake that the Represented Person is capable of and agreeable to being bound
							by the Agreement.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.3You represent and warrant that:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">you are not on any trade or economic sanctions lists, such as the United Nations
							Security Council Sanctions List;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">you are not restricted or prohibited from engaging in any type of trading by the
							European Union, Securities and Futures Commission of Hong Kong, Hong Kong Monetary
							Authority, Hong Kong Customs and Excise Department, Office of Foreign Asset Control as well
							as any other administrative law enforcement agencies or authorities in other
							jurisdictions;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">it is your responsibility to ensure that your access to the Sites and use of the
							Services is in accordance with your local laws and regulations;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">you acknowledge that we reserve the right to make all or just part of the Services
							available in certain markets and jurisdictions only, in our sole absolute discretion and in
							accordance with local applicable laws. We may restrict or prohibit use of all or a portion
							of the Services from the locations:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">that we determinate, in our sole and absolute discretion, not appropriate or suitable
							for us to provide all or a portion of the Services; or</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">where the local laws do not permit us to provide all or a portion of the Services
							from and/or to that jurisdiction,&nbsp;(together, “&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Restricted Locations</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”).</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The Restricted Locations include but not limited to the United States of America,
							Mainland China, Singapore, Canada, France, Germany, Hong Kong, Lithuania, Malaysia, Malta,
							Cuba, Iran, North Korea, Sudan, Syria, Crimea Region, Spain, Luhansk, Donetsk, Netherlands,
							Bolivia, UK and so on. Please note that we may place certain restrictions or terminate
							specific Services to users in some jurisdictions from time to time for the purposes
							hereof.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may in our absolute discretion update the list of the Restricted Locations from
							time to time without any notice to you. It is your responsibility to frequently check the
							Sites to familiarize yourself with the list of the Restricted Locations and immediately
							cease accessing our Sites and use of our Services should you locate in any of the Restricted
							Locations.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The content of the Terms shall not be excluded from the laws of the country or region
							under which the user belongs, otherwise the user shall immediately cease to access the Sites
							and use the Services. As a result, if you do not meet these eligibility requirements, please
							immediately stop accessing our Sites and do not use our Services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">To use our Services, you shall have proper devices and pay for cost that may occur,
							including but not limited to the costs incurred from computer, mobile phone, modem and cost
							for Internet connection and phone call.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">By clicking to “I agree” to the </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;User Agreement button, you will be deemed to have agreed to all the terms and
							conditions contemplated in the Agreement and have the legal right and full capacity to use
							all Services, including but not limited to checking the related information of the Services,
							placing orders, making trading activities rationally. You agree to take all the risks
							associated with, arising from and in connection with such activities.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">When you register an ccount with us, you agree to:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">create a strong password that you do not use for any other website or online service
							or platforms and enable two factor authentication as a further protection
							measure;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">maintain the security of your ccount by protecting your login credentials and
							restricting access to your ccount to yourself only;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">take responsibility for all activities that occur under your account and accept all
							risks of any authorized or unauthorized access to your account;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">accepted to be bound by all terms and conditions of this Agreement;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">confirm that you have attained the age of 18, or another statutory age for entering
							into contracts as is required by a different applicable law, and your registration with our
							Sits, purchase or sale via the Sites, release information on the Sites and other behaviors
							indicating your acceptance of the Services offered by us shall comply with the relevant laws
							and regulations of the sovereign state or region that has jurisdiction over you, and you
							confirm that you have sufficient capacity to accept these terms and conditions, enter into
							transactions and to use the Services;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">undertake all liabilities for your own transaction and non-transaction activities as
							well as all profits and losses therefrom;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">confirm that all information provided at the time of registration of an Account with
							us is true, updated and accurate;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(h)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">comply with all relevant laws, including the reporting of any transaction profits for
							tax purposes; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">receive emails or short messages sent our Sites related to the management and
							operation thereof.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You shall not open sub-accounts for any Represented Persons who are restricted or
							prohibited from accessing our Sites or using our Services. This includes any Represented
							Persons who are residents of any Restricted Locations. You will not open sub-accounts for
							Represented Persons who are themselves or otherwise owned or controlled, directly or
							indirectly, by individuals or entities subject to the Specially Designated Nationals And
							Blocked Persons List (“</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">SDN List</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”) and any other applicable sanction lists. You will not facilitate
							transactions, directly or indirectly, on behalf of, or for the benefit of, any individuals
							or entities which are residents of Restricted Locations or subject to any applicable
							sanctions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">2.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You acknowledge and understand that the Securities and Exchange Commission
							(“</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">SEC</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”) and the Commodity Futures Trading Commission (“&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">CFTC</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”) of the United States, as well as other government agencies of the United
							States, may claim or assert jurisdiction over certain exchange activities outside of the
							United States with respect to the servicing of a “U.S. person” or “U.S. customer,” as those
							terms may be defined or interpreted under the laws of the United States. You further
							acknowledge and understand that we, including our affiliates and related body corporates, do
							not intend to provide Services to or solicit such “U.S. persons” or “U.S. customers,” and
							expressly prohibit the same from using any of our Services. In order to abide by all
							applicable laws, rules, and regulations of the United States, you hereby acknowledge,
							certify, represent, warrant, and agree, with respect to the services contemplated in this
							Agreement, that:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You and any Represented Persons are not “U.S. persons” or “U.S. customers”, as those
							terms are defined or referenced by the laws, rules, or regulations of the United States,
							including but not limited to, the laws, rules, and regulations of the SEC, CFTC, or any
							other United States agency;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You and any Represented Persons have not been advised, suggested, induced, or
							otherwise influenced to evade or attempt to evade any of the above referenced laws, rules,
							or regulations by us including our affiliates and related body corporates;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have not advised, suggested, induced, or otherwise influenced any of your
							Represented Persons to evade or attempt to evade any of the above referenced laws, rules, or
							regulations;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You and any Represented Persons (i) do not reside in the United States if they are
							natural persons, and (ii) are not formed, registered, or organized under the laws of the
							United States, or have their respective principal place of business located within the
							United States;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You and any Represented Persons are not subject to the laws, rules, or regulations in
							any other jurisdiction with materially similar effects;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You will immediately notify us of any change in status to the above; and</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You shall indemnify, defend, and hold harmless us, including any of our affiliates
							and related body corporates, directors, members, officers, employees, agents, service
							providers, against any and all claims, demands, actions, damage, losses, costs and/or
							expenses incurred arising from or in connection with any breach of any part of this clause
							2.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">3.&nbsp;OUR RIGHTS AND OBLIGATIONS</span></b><b><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may restrict, suspend or terminate your ccount, use of the Service, the processing
							of any&nbsp;transaction,&nbsp;any accounts beneficially owned by any of our
							affiliates,&nbsp;related entities, at any time if we in our sole discretion suspect, notice
							and determine that you have violated this Agreement or any part of applicable laws in your
							jurisdiction or that the provision or your use of the Service in your jurisdiction is
							unlawful.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">When we in our sole discretion decide that you or your associated account user is not
							suitable for high-risk investment, we have the right to suspend or terminate the use of your
							account and all associated accounts thereof immediately.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If you do not have relevant registration qualifications set in this Agreement, we
							will have the right to refuse your registration. If you have already registered, we will
							have the right to revoke your account with us, and we reserve the right to hold you or your
							authorized agent accountable. Furthermore, we reserve the right to decide whether to accept
							your application for registration in all circumstances.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">When it is discovered that the person using an Account is not the initial registrant
							of that Account, we will have the right to suspend or terminate the user's access to that
							Account immediately.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If we reasonably suspect that the information you provide is wrong, untrue, invalid
							or incomplete, we shall have the right to notify you to correct or update the information or
							suspend or terminate its supply of the services to you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Should you (whether directly by yourself or indirectly via your request to us)
							upload, post, publish, or transmit any information on or via our Site, or you communicate
							with any other users of our Site, you agree to be fully responsible for all such posts and
							communications. Accordingly, you undertake to only use the Site in a legal and considerate
							manner, not to misuse or abuse the Site or its other users, including but not limited to not
							causing any defamation, harassment, sedition, collecting data of other users for your own
							purposes, and introducing virus, trojans or hacks. In the event that you misuse or abuse the
							Site, we shall be fully entitled to suspend or ban your account, and/or remove your
							information from our Site without any prior notice or liability to you. Nonetheless, you
							agree that we shall not be howsoever liable for any posts or communications by third parties
							that offend you, although we will sincerely look into any complaints in relation to such
							posts or communications that you communicate to us of in writing.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">3.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may take any actions which we deem necessary and reasonable in our sole discretion
							including but not limited to suspending, restricting, or terminating your access to any or
							all of the Service and Sites, deactivating or cancelling your Account with immediate effect,
							or cancelling, suspending, blocking, placing on hold, refusing to complete a digital assets
							transaction if we in our reasonable opinion believe it necessary for us to do so to fulfil
							our legal obligations, protect our reputation, promote the fairness and integrity of the
							market and enforce our rights. We may cooperate with relevant government authorities and
							judicial authorities to freeze, forfeit and transfer Digital Assets in your Account to a
							designated account as directed by these authorities where we consider
							appropriate.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">4.&nbsp;MARGIN TRADING &amp; LENDING AND PERPETUAL
								CONTRACTS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">This clause 4 applies only to the extent that you are permitted to engage in margin
							trading &amp; lending and </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;Contracts on </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">. Margin trading &amp; lending and Perpetual Contracts are not allowed in the
							jurisdictions in which they are prohibited by applicable laws and regulations or, by this
							Agreement. We reserve the right to amend and/or remove margin trading &amp; lending and
							perpetual contracts functionalities in your country any time with or without prior notice to
							you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">4.1</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;Margin Trading and Lending</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Margin trading is a form of trading in which you trade with an extra amount of
							Digital Assets borrowed from someone in addition to the Digital Assets you already have. On
							our Sites, you may use borrowed Digital Assets from other users to go short or long
							position.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Margin trading risks</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Margin trading is high risky. As a margin trader, you acknowledge and agree that you
							shall access and use the margin trading and borrowing service at your own risks. Further,
							you acknowledge, agree, and confirm the following:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Trading markets are extremely volatile and shift quickly in terms of liquidity ，
							market depth, and trading dynamics. The use of leverage can work against you as well as for
							you and can lead to large losses as well as gains.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are not entitled to receive forked coins split from any Digital Assets in your
							margin account, even if you have not engaged in any margin trading or borrowing at
							all.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The loan carries risks and the value of your Digital Assets may drop. If the value of
							your assets drops below a certain level, you are responsible for responding to this market
							circumstance.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iv)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Under certain market conditions, you may find it difficult or impossible to liquidate
							a position. This may occur, for example, there is insufficient liquidity in the market or
							due to technical issues from our end.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">v)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Placing contingent orders will not necessarily limit your losses to the intended
							amounts, since market conditions may make it impossible to execute such orders.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vi)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">There is no guarantee measure against losses on margin trading. As a borrower, you
							may sustain a total loss beyond what you have deposited to your margin account.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Lending risks</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">As a lender, you can lend your Digital Assets to other users on some of the Sites by
							offering a loan at a fixed interest rate and for a duration on lending page. When you lend
							your Digital Assets:</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You may suffer loss of an unpaid principal and interests if the borrower defaults on
							a loan and liquidation of the borrower’s margin account fails to cover the outstanding
							loan.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You may suffer loss of forked coins split from the Digital Assets if your Digital
							Assets are in lending offers or loaned out when the fork takes place.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You may suffer a drop of value for Digital Assets you loaned out when the value drops
							dramatically and you cannot sell it timely.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">To enter into margin trading or lending:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iv)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You should and must fully understand the risks associated with the margin trading and
							lending and solely responsible and liable for any and all trading and non-</span><span
							style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;activity on your account with us. Do not enter into transactions or invest in
							funds that are above your financial abilities or your tolerance to financial
							risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">v)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are solely responsible and liable for knowing the true status of any position or
							lending with any other party on our Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vi)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You agree to maintain in your </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;margin account sufficient amount of Digital Assets required by us for users to
							participate in margin trading and return your loan in due time. Failure to maintain
							sufficient amount of Digital Assets or return outstanding loan in due time may result in
							forced liquidation of Digital Assets in your margin account.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We cannot guarantee to stop losses even with the ability to forcedly liquidate any of
							your positions. If, after your positions are liquidated, your assets are insufficient to
							cover the outstanding loan, you will still be responsible for any additional asset
							shortfall.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">viii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may, in our absolute and sole discretion, undertake all reasonable measures to
							mitigate potential losses for you on your behalf, including, but not limited to,
							transferring balance from your margin account to your exchange account and/or from your
							exchange to your margin account.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ix)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">When you lend your Digital Assets, you acknowledge that we will not be responsible
							for any loss from offering loans on any of our Sites and any losses incurred by a borrower
							or any other party on the Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">x)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You agree that you will conduct all trading, margin trading, lending, and/or
							borrowing on your own account and claim full responsibility for your activities. We do not
							take any responsibility for any loss or damage incurred as a result of your use of any
							Services or your failure to understand the risks involved or associated with access to our
							Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-left:0.0000pt;text-indent:0.0000pt;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;
			background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">4.2</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;Perpetual Contract</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(h)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">A Perpetual Contract is a product similar to a traditional futures contract but does
							not have an expiry date. Perpetual Contracts trade like spot, tracking the underlying Index
							Price closely. It achieves this via mechanics of a funding component, that is, users who
							hold a position over the funding time stamp either pay or receive funding based on a funding
							rate and your position value.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Perpetual Contract Risks</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Perpetual contract trading involves substantial risk of loss and is not suitable for
							most investors. You hereby acknowledge and agree that you fully understand the risks
							involved in trading and have considered and will continue to carefully consider whether the
							perpetual contract trading is suitable considering your financial circumstances and
							resources. You also acknowledge, agree, and confirm that you understand the
							following:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Perpetual contract is highly leveraged. Highly leveraged position and large contract
							sizes means that investors may suffer huge losses even in the case of a small movement in
							the market. You may lose your entire margin on your contract account.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may, at our sole discretion, cancel or close your open order and liquidates your
							position without notice to you to control risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may close your position at the bankruptcy price of other users in the event of
							Auto-Deleveraging if you are at the priority rank of profit and leverage without notice to
							you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iv)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If you hold position over the funding time stamp, you may either pay or receive
							funding based on a funding rate and your position value. The amount of funding may be huge
							depending on the funding rate and your position value.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">v)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may require you increase margin levels for larger position sizes at its sole
							discretion.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vi)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are not eligible for receiving forked coins for any of your assets in your
							Contract account in the event of a fork.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Under certain market conditions, you may find it difficult or impossible to liquidate
							a position. This can occur, for example, if there is insufficient liquidity in the market or
							due to technical issues on our platform. Placing contingent orders, will not necessarily
							limit your losses to your intended amounts, since market conditions may make it impossible
							to execute such orders. The use of leverage can work against you as well as for you and can
							lead to large losses as well as gains.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(j)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">To enter into Perpetual Contracts:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are at least 18 years of age and have the capacity to enter into perpetual
							contracts trading on the Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You fully understand the rules and risks associated with perpetual contracts and
							accept all the risks and consequences led to by perpetual contracts trading.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may, at our sole discretion, close your positions, seize your earnings, and block
							your Account in the event we suspect or have reason to believe you are engaged in illegal or
							suspicious trading or other activities or have breached terms of this Agreement or any of
							our policies. You shall not, in any way hold us liable for any loss howsoever arising from
							or in connection with perpetual contract trading and you may in the meantime be liable for
							any damages to us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iv)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You agree to always maintain sufficient amount of margin to meet our minimum margin
							requirements, which is subject to changes from time to time. If the value of your positions
							drops below a certain level, you are responsible for supplements with additional margin so
							to meet our minimum margin requirements. Failure to supplement additional margin or maintain
							a minimum level of required margin may result in closing your open order and forced-
							liquidation of your positions. In the case of a forced liquidation, your position will be
							taken over by us and liquidated at the bankruptcy price.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">v)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You fully understand and agree that, when a forced liquidation is triggered, in the
							event that we are unable to liquidate the position at the bankruptcy price, we will spend
							insurance funds aggressing the position in the market in an attempt to settle it. If this
							still does not settle the forced liquidation, this will then lead to an Auto-Deleveraging
							event where opposing traders’ positions by profit and leverage priority are automatically
							deleveraged. If we are able to liquidate the position at better than the bankruptcy price,
							the additional funds will be added to the insurance fund.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vi)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If you hold position over the funding time stamp, you may either pay or receive
							funding based on a funding rate and your position value. You agree to such payment exchange
							based on the funding rate and position valued calculated by us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vii) You are solely responsible and liable for any trading and non-trading activities
							on the Sites and accept all associated risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">viii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are solely responsible for obtaining and being aware of the true status of any
							position with any counter-party on the Sites, even if relevant information is presented
							incorrectly by us at any time.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">5.&nbsp;NON-FUNGIABLE TOKENS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The Sites allow account holders to buy, list and sell non-fungible tokens
							(“&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">NFT</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”). Our NFT services are a convenient, simple and user-friendly way of trading
							NFTs.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">To access our NFT services you must have a </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">By accessing our NFT services you acknowledge and warrant that you have read,
							understood and agree to all the terms and conditions that apply to our NFT
							services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You can only access our NFT services for Eligible NFTs available on our Sites from
							time to time. "&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Eligible NFTs</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;" are those NFT collections that we have verified as eligible for purchase from
							time to time. We may publish a list of Eligible NFTs on our website (“&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Eligible NFT List</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”).</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may, at our absolute discretion, add or remove NFT collections from the Eligible
							NFT List for any reason. If we remove a NFT collection from the Eligible NFT List, any open
							orders from that NFT collection on the Sites will be immediately cancelled.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">NFTs sent externally only from an Approved Platform into the managed wallets or
							accounts by us will be accepted. Approved Platform means an external NFT platform or chain
							recognized and approved by us from time to time. As at the date of this Agreement, depending
							upon the type of contract and the chain that relevant NFT is on, the Approved Platform
							includes Opensea, Magic Eden and Binance Smart Chain (BSC). It is your responsibility to
							check on our Sites to make sure you are updated with the list of Approved Platform from time
							to time. We will not be responsible or liable for any NFTs that are sent externally into our
							Sites from any other site, device, platform or wallet other than from those Approved
							Platforms.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">An Eligible NFT on our Sites can only be purchased using “&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Eligible Cryptos</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”. “Eligible Cryptos” are those cryptocurrencies that we have approved for use
							for a particular Eligible NFT purchase. The list of “Eligible Cryptos” will be shown at the
							time of purchase.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Eligible NFTs on our Sites can be sold to a type of currency as approved and accepted
							by us from time to time . All Eligible NFTs listed for sale using our NTF services may be
							listed in USDT or another type of cryptocurrency determined by us in our sole
							discretion.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">A service fee applies to all transactions where Eligible NFTs are purchased or sold
							on our Sites. By using our NFT Services, you accept and acknowledge that we may adjust our
							service fee at any time. We will notify you of the service fee that applies to your
							transaction at the time of the transaction.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">A third-party network fee applies to all transactions where Eligible NFTs are
							purchased or sold on our Sites. We do not set these third-party network fees. By using our
							NFT Services, you accept the third-party fees as they apply at the time of the transaction.
							The third-party network fees will be displayed at the time of the transaction.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.11</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">A conversion rate applies to transactions where Eligible NFTs are purchased using
							some Eligible Cryptos. By using our NFT Services you accept the conversation rate applicable
							at the time of the transaction. The conversation rate will be built into the purchase price
							shown to you at the time of purchase confirmation.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.12</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You may cancel the listing of an Eligible NFT at any time prior to confirmation of
							sale. We may, in some instances, use our discretion to prevent the cancellation of listed
							Eligible NFTs.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.13</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Eligible NFTs purchased on our Sites are stored in secure custodial wallets managed
							by us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.14</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">As NFTs are non-fungible in nature, they cannot be replaced one for one. Given the
							irreplaceable nature of NFTs, you acknowledge that by accessing our NFT services it is your
							responsibility to maintain the security of your account and any Eligible NFTs held. We will
							not be responsible or liable for the misappropriation or theft of Eligible NFTs held on our
							Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.15</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You acknowledge and agree that you access our NFT services “as is” and at your own
							risk. We strongly recommend that you do your own research and obtain your own advice if you
							are unsure.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">5.16</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">For the avoidance of doubt, all clauses in this Agreement apply to our NFT
							services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">6.&nbsp;RISK DISCLOSURE STATEMENT</span></b><b><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Trading Digital Assets can be extremely risky. The markets in relation to Digital
							Assets trading are extremely volatile and can shift quickly. The blockchain networks may go
							offline due to attack, bugs, hard forks, or other unforeseeable reasons. We may experience
							sophisticated cyber-attacks, unexpected surges in activity, or other operational or
							technical difficulties that may cause service interruptions. You are solely responsible and
							liable for any and all trading and non-trading activity for your account on the Sites and
							fully responsible for safeguarding access to your account and any information provided
							through the site.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You do your own appraisal and investigations and accept the risk of trading Digital
							Assets. By accessing our Sites and use of our Services, you represent that you are solely
							responsible for you own appraisal and investigation into the risks of the transaction and
							the underlying Digital Assets. You represent that you have sufficient knowledge and
							experience to make your own evaluation of the merits and risks. Listing of a Digital Asset
							on the Sites does not indicate our approval or disapproval of the underlying technology in
							relation to that Digital Asset, and should not be used as a substitute for your own
							understanding of the risks associated with each Digital Assets. We give you NO warranty as
							to the suitability of the Digital Assets and assume or owe no fiduciary duty in our
							relations with you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You accept all risks associated with or in connection with a transfer of your Digital
							Asset to an address. Digital Asset transactions is not reversible. Once you send Digital
							Asset to an address, you accept the risk that you may lose access to your asset immediately
							and indefinitely. You are solely responsible for the verification of the address to which
							you send your Digital Assets. If you deposit a Digital Asset of a kind or type which is not
							listed on your deposit page, it means that any transactions in relation to such type of
							Digital Asset is not supported by us and therefore we will not be able to return to you any
							of such assets claimed being transferred to us. It is your responsibility to ensure that the
							address to which you are depositing is listed on your deposit page. We take no
							responsibility or liabilities for any Digital Assets sent to a wrong address (including any
							external or internal wallet address and </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;UID).</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We do not advise on trading risk. You must seek your own advice from a financial
							advisor or other professional advisor and shall bear full responsibility for the risks
							involved in trading of Digital Assets on our Sites. Under no circumstances shall any
							information, charts, pictures, contents of any kind and documents shown on the Sites or
							provided by us constitute investment advice or professional advice of any kind.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may delist a Digital Asset at any time in its sole discretion.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may correct, reverse, or cancel any trade impacted by an error in processing your
							purchase or buying, or correct or reverse or cancel your deposit or withdrawal of Digital
							Asset impacted by an error in processing your deposit or withdrawal.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">6.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may seize your abandoned property. If you have not logged into your account on the
							site for an uninterrupted period of two years, we reserve the right to deem that any and all
							property that you hold on the Sites, including Digital Assets, to be abandoned, without
							notice to you. If your property is abandoned, it will be immediately forfeited and seized by
							us and we may donate them to a nonprofit group. You accept all risks associated with or
							arising from missing communication from us. You acknowledge that we may post information on
							the Sites or communicate with you by email or support ticket from time to time. You
							understand and agree that if we post information or send you information but you howsoever
							fail to receive it, we will be deemed to have provided the information to you
							regardless.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">7.&nbsp;PRIVACY POLICY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">7.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We collect information about you in accordance with the laws and regulations,
							including:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">information collected when you create an online account, complete a transaction, fill
							out a form, respond to surveys, post messages to our chatroom or twitters or otherwise
							communicate with us;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">information automatically collected when you use the site and service, including but
							not limited to device identifiers, mobile network information, the type of browser used, IP
							address and other standard web log data and information collected by Cookies and similar
							tracking technologies;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">information collected from third parties, including identity verification services;
							and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">information collected from other sources legally.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">7.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We will implement reasonable security practices to help protect the security of your
							information and will not disclose your non-public information, including name, password and
							phone number, to any other third party without your prior permission, excepting for the
							following cases:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">disclose your information to yourself or a third party with your consent;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">disclose your information with your consent so that you may use products or
							services;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">disclose or share your information to comply with our legal obligations to
							authorities stipulated by laws and regulations, including without limitation to,
							administrative authorities and financial authorities; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">when we believe, in our sole discretion, that the disclosure of your information is
							necessary to prevent physical harm or financial loss, to report suspected illegal activity,
							or to investigate violations of or enforce our user agreements or other policies and
							agreements.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">FOR MORE DETAILS REGARDING THE TYPE OF INFORMATION WEW COLLECT AND THE WAY WE MAY USE
							IT OR DISCLOSE YOUR INFORMATION, PLEASE REFER TO OUR PRIVACY POLICY. WE STRONGLY RECOMMEND
							THAT YOU READ THROUGH OUR PRIVACY POLICY AND FAMILARISE YOURSELF WITH THE
							CONTENTS.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">8.&nbsp;SERVICE MODIFICATION, SUSPENSION AND
								TERMINATION</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You can check transactions information and relevant materials posted on the Sites and
							participate in specific financial related activities provided by us currently or in the
							future according to this Agreement and use of service rules posted.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You should use services on the Sites in accordance with this Agreement and related
							rules on a volunteer, fair, and honest basis. You should not use the Site or our services to
							infringe the legitimate rights and interests of others or make improper profits or disturb
							the normal order of online trading.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">When you accept to use Services, you also agree to accept information service
							provided by us and authorize us to send commercial information to your email address, mobile
							phone and other communication address. You can choose to decline such information service by
							doing specific changes according to our instructions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Though we strive to maintain the site to provide you sustainable, safe, stable and
							smooth services, there is no guarantee that the Services will be no delays, failures,
							errors, omissions or loss of transmitted information. You understand and agree that we have
							the right to suspend service for system update and upgrading, new function addition, and
							other cases where service shall be interrupted by our judgment.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may, in our sole discretion and without liability to you, with or without prior
							notice and at any time, modify or discontinue, temporarily or permanently, any portion of
							our Services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If you disagree to any of the amended terms of the Agreement or is unsatisfied with
							our services, you have the rights to:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">stop accessing the Sites or using Services; or</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">notify us to terminate Services for you by contacting our support. When your service
							is terminated, we have no obligation to deliver to you or third party with information or
							services pending.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may suspend, restrict, or terminate your access to any or all of the Service and
							Sites, and/or deactivate or cancel your Account with immediate effect, or cancel, suspend,
							block, place on hold or refuse to complete a Digital Assets transaction in the event
							that:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">we are, in our reasonable opinion, required to do so by applicable law, regulation or
							any court or other authority to which we are subject in any jurisdiction;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">we reasonably suspect you of acting in breach of this Agreement or any other policies
							as displayed on our Sites from time to time;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">we have concerns that a transaction is erroneous or about the security of your
							Account or we suspect that the Services are being used in a fraudulent or unauthorized
							manner;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">we suspect money laundering, terrorist financing, fraud, or any other financial
							crime;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">use of your Account is subject to any pending litigation, investigation, or
							government proceeding and / or we perceive a heightened risk of legal or regulatory
							non-compliance associated with your Account activity;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">you take any action that may circumvent our controls such as opening multiple
							accounts or abusing promotions which we may offer from time to time; and/or</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">we reasonably believe that we need to do so in order to protect our reputation and/or
							comply with any requests, orders or judgment issued by a court or government authority or
							competent authority.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">8.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may suspend, restrict or terminate your access to any or all of the Sites and/or
							Services and/or deactivate or cancel your Account without a reason by giving you 45 days
							notice. You agree and acknowledge that our decision to take any of these actions may be
							based on confidential criteria that are essential for the purpose of our risk management and
							security protocols. You acknowledge and agree that we are not obligated to disclose the
							details of our risk management and security procedures to you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">9.&nbsp;USER RIGHTS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Your login credentials and security</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the rights to choose to be or not to be our member. If you choose to be a
							member, you may create your account and set a preferred nickname. The nickname shall not
							contain any word with insulating, threatening or pornographic indication or infringing on
							others’ legitimate rights.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You become a member of </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;by creating an account successfully and obtain a combination of username (or
							email address) and password. You are solely responsible and liable for all the activities
							and events logged in using this combination of username (or email) and password and accepts
							all associated risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the obligation to protect all your account registered with us, user name and
							password, SMS verification code (verification code sent to your phone number in message) and
							TOTP code (dynamic code generated by the authentication app associated to your </span><span
							style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account, which can be set in Two Factor Authentication on </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;page), API Key and Secret and is solely responsible for the safety of user name
							and password, SMS code and TOTP, API key and secret. User shall take responsibility and
							liability for legal consequence from leaking the above-mentioned information and shall not
							hold us liable for any loss of asset due to the leakage of the information not caused by
							us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You can reset password via email associated to your </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account or SMS sent to your phone number associated to your </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account in the case the account was created via phone number. You shall
							promptly notify us if you discover or otherwise suspect any security breaches related to
							your </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account or unauthorized use of your </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;account.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We will not ask for your password or ask you to deposit to address not provided on
							the Sites. You should never believe in any discounts or promotion information or send your
							asset to address not provided by the Sites. It is your responsibility to ensure you send
							asset to the correct address provided for that asset by us. You shall not hold us liable for
							any loss of asset by sending assets to address not provided by us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">In the event that you make contributions to the Sites, you might get rewarding or
							privileges (but there is no guarantee) from us subject to any of our rewarding
							policies.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the right to modify some of your account information.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the right to join </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;community and post comments or articles without violation of rules of
						</span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;and laws or regulations.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the right to participate in online or offline activities organized or
							provided by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">9.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You have the right to enjoy related services provided by </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;according to the related rules and terms of </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">10.&nbsp;USER OBLIGATIONS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">10.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You may make comment on the product or service provided by us and make modification
							or deletion within proper ranges. You shall not use the Sites to threat national security,
							leak national secret, infringe on the legitimate rights of other individuals or social
							community or nation and for other illegal activities. You shall not use the Sites to
							propagate information violating policies, laws and regulations and social norms.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">10.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You must not register an Account for malicious purpose, including but not limited to
							registering several accounts for hyping, profit making, receiving awards or any financial
							gains. You must not use another user’ s account, use multiple accounts (whether or not these
							accounts were registered by you, belong to you or are under your control) or utilize any
							potential gap or loopholes in our rules, policies or event designs for any gains. In the
							case we suspect or detect these activities, we may take necessary actions in our sole
							discretion, including but not limited to, deleting the contents you posted, cancelling your
							rewards, deducting any profits that have been accrued or gained through the Sites or
							participation in any events (including any promotion events) such as airdrops, rewards, and
							any profits earned through such fraudulent activities or transferred through multiple
							accounts, freezing your assets held in your account or any account which we suspect (acting
							reasonably) are associated with you, suspending or terminating your account, or taking legal
							proceedings against you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">10.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You should not use the Sites as arena, platform or media for any unauthorized or
							illegal activities. You should not use the name of </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;to participate in any commercial activity or use the Sites as arena, platform
							or media for commercial purpose, without our prior authorization or permission. In the case
							we detect the above mentioned activities, we may take necessary actions in our sole
							discretion, including but not limited to, deleting the contents you posted, canceling your
							rewards, privilege or assets on the Sites, suspending or terminating your account, even
							taking legal proceedings against you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">10.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Any information posted on the Sites by you in any form shall conform to good practice
							of social norms and must not violate laws and regulation and our policies, terms and rules
							or harm or negatively affect the legitimate rights and interest of others. You shall take
							full responsibilities and liabilities for all the circumstances for your behaviors for
							posting such information and we reserve the rights to claim damages against you.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">10.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You fully comply with </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">'s requirements for Restricted Locations when making a recommendation, marketing, or
							soliciting business from potential clients.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">11.&nbsp;LIMITATION OF LIABILITY &amp;
								WAIVER</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We will not be responsible for damages caused by delay or failure to perform
							undertakings when the delay or failure is caused by fires, strikes, floods, power outages or
							failures, acts of God or the state’s enemies, lawful acts of public authorities, any and all
							market movements, shifts, or volatility, computer, server, or internet malfunctions,
							security breaches or cyberattacks, criminal acts, delays or defaults caused by common
							carriers, acts or omissions of third parties, or, any other delays, defaults, failures or
							interruptions that cannot reasonably be foreseen (“&nbsp;</span><b
							style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Force Majeure</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”). In the event of Force Majeure, we will be excused from any and all
							performance obligations and the Services shall be fully and conclusively at an
							end.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We do not guarantee that the information on the Sites and Services fully stratify
							your needs and shall not be hold liability to any error, insulation, slanders, inaction,
							blasphemy or pornography that you may experience during using the Sites or our Services. You
							should always seek your own professional advice based on your own circumstances before using
							any of our Services.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Given the nature and specialty of internet and cyber environment, we cannot guarantee
							our Service will not be interrupted and do not guarantee the timeliness and safety of
							services and do not take liability for damages not directly caused by us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We strive to provide you with safe access to the Sites and Services, but we do not
							represent or guarantee the Sites or Services are safe without malicious element or virus or
							other potential risk. You shall scan and process file or other elements downloaded from the
							Sites with industry recognized software. You should use your own judgment to distinguish the
							true from the false to avoid risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We will not be responsible for the failure of save, modification, deletion or storage
							of information posted by you. We will also not liable for any typographical error or
							negligence not intended by us. You should use your own judgment to distinguish the true from
							the false to avoid risks.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We are entitled but not obliged to correct or update unintentional omission or
							error.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Unless expressly agreed in written form, we do not guarantee the accuracy,
							completeness, or reliability of information (including but not limited to advertisement) you
							may get from, via or by links to the site or in any other methods related to the site. We
							will not be responsible for your purchase or obtaining of product, service, information or
							material due to such information. You shall take all the risks of using the
							information.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Comments or information posted by user on the Sites only stands for the opinion of
							the individual who posts it, which should not be taken as our agreement to or confirmation
							of the information or description. We will not be liable for the comment or information
							posted by users.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We reserve the right to delete information posted on the Sites which violates laws
							and regulation or user agreement without notice.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We may deliver notice or message to you via announcement on webpage, email address,
							support phone, message via mobile phone or regular mail delivery. We will not be responsible
							for information delivered by other channels in related to prize winning, promotion or other
							activities or events.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.11</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We are entitled to adjust the fee for deposit, withdrawal and trading and other
							services according to market and has the right to terminate the promotion at any
							time.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.12</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are responsible for determining whether or which laws that may apply to you,
							including any tax related law. You are solely responsible for reporting and paying any taxes
							arising from your use of our Services and Sites.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">11.13</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You agree to pay us any applicable fees for using our Service and authorize us to
							deduct fees from your Account. You agree and understand we may revise or update Fee schedule
							from time to time in its sole discretion and changes to the fee schedule are effective
							immediately.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">12.&nbsp;LIMITATION AND EXEMPTION OF
								LIABILITY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You understand and agree that under no circumstance will we be held liable for any of
							the following events:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">loss of income;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">loss of transaction profits or contractual losses;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">disruption of the business;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">loss of expected currency losses;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">loss of information;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">loss of opportunity;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">damage to goodwill or reputation;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(h)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">damage or loss of data;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">cost of purchasing alternative products or services;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(j)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">any indirect, special or incidental loss or damage arising from any infringement
							(including negligence), breach of contract or any other cause, regardless of whether or not
							such loss or damage may reasonably be foreseen by us, and regardless of whether or not we
							are notified in advance of the possibility of such loss or damage.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(k)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Items (a) to (j) above are independent of each other.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You understand and agree that we shall not be held liable for any damages caused by
							any of the following events:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Where we are properly justified in believing that your specific transactions may
							involve any serious violation or breach of law or agreement;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Where we are reasonably justified in believing that your conduct on the Sites is
							suspected of being illegal or immoral;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The expenses and losses arising from the purchase or acquisition of any data,
							information or transactions through the services offered by the Sites;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Your misunderstanding of the Services offered by us; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Any other losses related to the Services which cannot be attributed to
							us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Where we fail to provide the Services or delay in providing such Services due to
							information network equipment maintenance, information network connectivity failures, errors
							in computer, communications or other systems, power failures, weather conditions, unexpected
							accidents, industrial actions, labor disputes, revolts, uprisings, riots, lack of
							productivity or production materials, fires, floods, storms, explosions, wars, failure on
							the part of banks or other partners, collapse of the Digital Asset market, actions by
							government, judicial or administrative authorities, other acts that are not within our
							control or beyond our ability to control, or due to causes on the part of third parties, we
							shall not assume any responsibility for such failure to provide Service or delay in
							providing Services, or for the resultant loss you may sustain as a result of such failure or
							delay.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.4</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We cannot guarantee that all the information, programs, texts, etc. contained in our
							Sites are completely safe, free from the interference and destruction by any malicious
							programs such as viruses, trojans, etc., therefore, your log-into the Sites or use of any
							services offered by the Sites, download of any program, information and data from the Sites
							and your use thereof are your personal decisions and therefore you shall bear the any and
							all risks and losses that may possibly arise.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.5</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We do not make any warranties and commitments in connection with any of the
							information, products and business of any third party websites linked to the Sites, as well
							as any other forms of content that do not belong to us; your use any of the Services,
							information, and products provided by a third party website is your personal decision and
							therefore you shall assume any and all the responsibilities arising therefrom.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.6</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We do not make any explicit or implicit warranties regarding your use of the Services
							or the Sites, including but not limited to the applicability, freedom from error or
							omission, consistency, accuracy, reliability, and applicability to a specific purpose, of
							the services provided by the Sites. Furthermore, we do not make any commitment or guarantee
							in connection with the validity, accuracy, correctness, reliability, quality, stability,
							integrity and timeliness of the technology and information covered by the services offered
							by the Sites. Whether to log in to the Sites or use the Services provided by the Sites is
							your personal decision and therefore you shall bear all the risks and possible losses
							arising from such decision. We do not make any explicit or implicit warranties in connection
							with the market, value and price of Digital Assets; you understand and acknowledge that the
							Digital Asset market is unstable, that the price and value of Digital Assets may fluctuate
							or collapse at any time, and that the transaction of Digital Assets is based on your
							personal free will and decision and therefore you shall assume any and all risks and losses
							that may possible arise therefrom.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.7</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">During periods of market volatility, high volume trades, fast movement and
							illiquidity in the market, the market rate in which you buy, sell or trade Digital Assets
							may be different to the price indicated on our Sites and as such we will be unable to
							execute your order and will return the funds to your account. We will not be liable for any
							price variation due to market volatility, market or technology disruptions, delays or any
							other matters that are outside our control. We may reasonably decide not to execute a trade
							if the market rate significantly increases or decreases or in the event of a market
							disruption or other event, which is outside our control. In such cases, we may cancel your
							buy or sell order and return the funds into your account. We will exercise reasonable care
							to notify you of these events and, when you receive a notification, you must check your
							account and any pending or cancelled transactions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.8</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The guarantees and undertakings specified in this Agreement shall be the only
							guarantee and statements that we make in connection with the Services provided by us under
							this Agreement and through the Sites, and shall supersede any and all the warranties and
							commitments arising in any other way and manner, whether in writing or in words, express or
							implied. All these guarantees and statements represent only our own commitments and
							undertakings and do not guarantee any third party's compliance with the guarantees and
							commitments contained in this Agreement.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.9</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We do not waive any of the rights not mentioned in this Agreement and to the maximum
							extent permitted by the applicable law, to limit, exempt or offset our liability for
							damages.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">12.10</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Upon your registration of your account with the Sites, it shall be deemed that you
							approve any and all operations performed by us in accordance with the rules set forth in
							this Agreement, and any and all risks arising from such operations shall be assumed by
							you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">13.&nbsp;APPLICABLE LAWS</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">13.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Making, execution and interpretation of this agreement, and settlement of the
							disputes shall be governed by laws of the Republic of Panama.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">13.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The terms and conditions of this Agreement are severable. If any term or condition of
							this agreement is ruled invalid or unenforceable, the term or condition may be interpreted
							by the applicable laws, without prejudice to the continuation of the remaining terms and
							conditions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">13.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">This Agreement sets forth the entire agreement and understanding of the parties
							hereto in respect of the subject matter contained herein and therein, and supersedes all
							prior agreements, promises, covenants, arrangements, communications, representations or
							warranties, whether oral or written, relating to the subject matter hereof and thereof. We
							reserve the right of final interpretation of this Agreement.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">14.&nbsp;ANTI-MONEY LAUNDERING AND COUNTER-TERRORIST
								FINANCING</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">14.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We are committed to providing you with safe, compliant, and reputable Services.
							Accordingly, we have a comprehensive and thorough customer due diligence process including
							ongoing analysis and reporting. This includes monitoring suspicious transactions and
							reporting to international regulators. We need to keep certain information and documentation
							on file pursuant to applicable laws and as part of our contractual obligations, and we
							hereby expressly reserve the right to store such information and documentation. This will
							apply even when you terminate your relationship with </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;or abandon your application to have an account with </span><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Times;
			mso-hansi-font-family:Times;mso-bidi-font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">
							<font face="Times">AlitaGPT</font>
						</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">15.&nbsp;INDEMNITY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">15.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">In no circumstances may our liability for your direct damage exceed the total cost
							incurred by your three months' use of services offered by us.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">15.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Should you breach this Agreement or any applicable laws or administrative
							regulations, you shall bear and pay to us all damages, losses (whether direct or
							consequential), costs and expenses in connection with such breach (including attorney's
							fees, among others).</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">16.&nbsp;DISPUTE RESOLUTION</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">16.1</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Each Party agrees that any dispute arising out of or in connection with this
							Agreement or any document or transaction in connection with this Agreement (including any
							dispute or claim relating to</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">the existence, validity or termination of this Agreement; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">any non-contractual obligations arising out of or in connection with this Agreement
							(“&nbsp;</span><b style="mso-bidi-font-weight:normal"><span class="15" style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;mso-ansi-font-weight:bold;text-transform:none;
			font-style:normal;font-size:14.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Dispute</span></b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">&nbsp;”)&nbsp;shall at first instance be referred to and resolved amicably through
							negotiation.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">16.2</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">In the event that the Dispute fails to be resolved by negotiation within thirty (30)
							days from the initiation of such negotiations by issuance of a notice of Dispute by one
							Party to the other Party, such Dispute shall be referred to and finally resolved by
							arbitration in Panama to the exclusion of the ordinary courts, in accordance with the
							Arbitration Rules of the International Chamber of Commerce for the time being in force which
							rules are deemed to be incorporated by reference in this clause. The seat of arbitration
							shall be Panama. The arbitration tribunal shall consist of one arbitrator. The language of
							the arbitration shall be in English.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">16.3</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The Parties further agree that following the commencement of arbitration, they will
							attempt in good faith to resolve the Dispute through mediation. Any settlement reached in
							the course of the mediation shall be referred to the then-seating arbitral tribunal and
							maybe made a consent award on agreed terms.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">17.&nbsp;CALCULATION</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;padding:0pt 0pt 0pt 0pt ;
			mso-pagination:widow-orphan;text-align:justify;text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">All the transaction calculations are verified by us, and all the calculation methods
							have been posted on the Website, but we cannot ensure that your use of this Website will not
							be disturbed or free from errors.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">18.&nbsp;INTELLECTUAL PROPERTY</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Unless otherwise indicated by us, all intellectual property rights relating to all
							the material used on the Sites or any associated mobile applications, or provided in
							connection with the Services including, but not limited to, design, structure, layouts,
							graphical images and underlying source code belongs to us. All intellectual proprietary
							rights are reserved.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We grant you a limited, non-exclusive, non-sublicensable, and non- transferable
							license, to access and use the Services solely for approved purposes as determined by us
							from time to time. Any other use of the Services is expressly prohibited.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">19.&nbsp;SUPPLEMENTARY PROVISIONS</span></b><b><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The rules of service or use of product, reminders on pages are integral parts of this
							Agreement and are of equal legal effectiveness with the body of agreement. Rules of service
							include but are not limited to privacy policy, anti-cheating statement, anti-money
							laundering policy and other trading rules.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h4 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.&nbsp;KNOW-YOUR-CUSTOMERS AND ANTI-MONEY LAUNDERING
								POLICIES PREAMBLE</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:12.0000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h4>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We ensure that we comply with know-your-customer and anti-money- laundering laws and
							regulations and will not knowingly violate know-your-customers and anti-money-laundering
							policies. To the extent of our reasonable control, we will adopt necessary measures and
							technology to provide you with Services that are safe and secure, to protect you against the
							loss caused by money laundering to the greatest extent possible.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;margin-right:0.0000pt;margin-bottom:5.0000pt;
			margin-left:0.0000pt;mso-margin-bottom-alt:auto;text-indent:0.0000pt;
			padding:0pt 0pt 0pt 0pt ;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Our know-your-customer and anti-money-laundering policies are a comprehensive system
							of international policies, including the know-your-customer and anti-money-laundering
							policies of the jurisdictions to which you are subject to. Our robust compliance framework
							ensures that we meet regulatory requirements and regulatory standards on both the local and
							global levels and ensure the operational sustainability of our website.</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.1&nbsp;Content of Our Know-Your-Customer and
								Anti-Money-Laundering Policies</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We promulgate and update know-your-customers and anti-money- laundering policies to
							meet the standards set by relevant laws and regulations;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We promulgate and update some of the guidelines and rules in connection with the
							operation of the Sites, and our staff will provide you whole-process service in accordance
							with the guidelines and rules;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We design and complete the procedures for internal monitoring and transaction
							control, such as rigorous identity authentication procedures, and form a professional team
							responsible for anti-money laundering compliance;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We adopt risk-prevention-based approach to carry out due diligence and continuous
							supervision in connection with customers;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(e)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We review and regularly inspect existing transactions;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(f)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We will eport suspicious transactions to the competent authorities;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(g)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Proof documents of identity documents, address certificates and transaction records
							will be maintained for at least six(6) years. If they are submitted to the regulatory
							authorities, a separate notice may not be provided to you; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(h)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Credit cards are prohibited throughout the course of the transaction.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.2&nbsp;Identity Information</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">In accordance with the laws and regulations of relevant jurisdictions and in light of
							the nature of entities concerned, the content of your information as is collected by us may
							vary, and in principle, we will collect the following information of yours if you register
							as an individual:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Basic personal information: your name, address (and permanent address, if the two are
							different), date of birth and nationality, and other information available. Identity
							authentication shall be based on documents issued by the official or other similar
							authorities, such as passports, identity cards or other identity documents as are required
							and issued by relevant jurisdictions. The address you provide will be validated in an
							appropriate manner, such as checking the fare ticket of means of transportation you use,
							your interest rate bills, or voter register.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Valid photo: before you register, you must provide a photograph showing you holding
							your identity document in front of your chest; and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Contact information: telephone/mobile phone number and valid email
							address.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If you are a company or any other type of legal entity, we will collect the following
							information of yours to determine the final beneficiary of your account or your trust
							account:</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">i)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Your corporation enrollment and registration certificates of the company;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">ii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">a copy of the articles of association and memorandum of the company;</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">the detailed certification materials of the ownership structure and ownership
							description of the company;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">iv)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">the decision of the board of directors on designating the authorized agent of the
							company responsible for the opening and execution of the account of the company with
							us;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">v)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">the identity documents of the directors, major shareholders of the company as well as
							the authorized signatory for the company's account with the website, as are required to be
							provided in accordance with relevant rules;</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vi)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">the company's main business address, and the company's mailing address if it is
							different from the main business address of the company. If the local address of the company
							is different from its main business address, the company shall be deemed to be a high- risk
							customer, and consequently the company will be required to provide additional documentation;
							and</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">vii)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Other certification documents, documents issued by competent authorities and other
							documents we may deem necessary in light of the laws and regulations of relevant
							jurisdictions and in light of the specific nature of your entity.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We only accept English and Chinese versions of your identity information. If your
							identity information is not in either of the two languages, you must have your identity
							information translated into English and have the documents duly notarized.</span><span
							style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.3&nbsp;Confirmation and
								Verification</span></b><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are required to provide both the front and back sides of your identity
							documents.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">You are required to provide us with a photograph showing you holding your identity
							documents in front of your chest.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">Copies of certification documents shall be checked against the originals thereof.
							Nonetheless, if a trusted and suitable certified person can prove that such copies are
							accurate and comprehensive duplicates of the originals thereof, such copies shall be deemed
							as acceptable. Such certifiers include ambassadors, members of the judiciary, and
							magistrates.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">The identification of the ultimate beneficiary and controller of the account shall be
							based on the determination of which individuals ultimately own or control the direct
							customer and/or to determining that the ongoing transaction is performed by another person.
							If you are a business enterprise, the identity of major shareholders thereof (for example,
							those holding 10 % or more of the voting equity in such business enterprise) shall be
							verified. Generally, a shareholder holding 25 % of the shares of the company will be deemed
							as involving an average level of risk, and the identity of the shareholder shall be
							verified; a shareholder holding 10 % or more of the voting rights or shares is deemed to be
							involving a high level of risk, and the identity of the shareholder shall be
							verified.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<h6 align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><b><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;
			background:rgb(254,254,254);mso-shading:rgb(254,254,254);">20.4&nbsp;Transaction Supervision</span></b><b><span
								style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;font-weight:bold;text-transform:none;
			font-style:normal;font-size:7.5000pt;mso-font-kerning:0.0000pt;">
								
							</span></b></h6>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(a)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We constantly set and adjust daily trading and cash withdraw all limits based on
							security requirement and actual state of transactions.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(b)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If the transaction occurs frequently in an account registered by you or is beyond
							reasonable circumstances, our professional team will assess and determine whether such
							transaction is suspicious.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(c)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">If we identify a specific transaction as suspicious on the basis of our assessment,
							we may adopt such restrictive measures as suspending the transaction or denying the
							transaction, and if it is possible, we may even reverse the transaction as soon as possible,
							and report to the competent authorities, without, however, notifying you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal" align="justify" style="margin-left:0.0000pt;text-indent:0.0000pt;mso-pagination:widow-orphan;
			text-align:justify;text-justify:inter-ideograph;background:rgb(254,254,254);"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">(d)</span><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:1.0000pt;">
							
						</span></p>
					<p class="p" align="justify" style="margin-top:0.0000pt;mso-pagination:widow-orphan;text-align:justify;
			text-justify:inter-ideograph;"><span style="mso-spacerun:'yes';font-family:Times;color:rgb(51,51,51);
			letter-spacing:0.0000pt;text-transform:none;font-style:normal;
			font-size:14.0000pt;mso-font-kerning:0.0000pt;background:rgb(254,254,254);
			mso-shading:rgb(254,254,254);">We reserve the right to reject registration applications by applicants that do not
							comply with the international standards against money laundering or who may be regarded as
							political and public figures; we reserve the right to suspend or terminate a transaction
							identified as suspicious based on our own assessment, which, however, does not breach any of
							our obligations and duties to you.</span><span style="mso-spacerun:'yes';font-family:Calibri;mso-fareast-font-family:宋体;
			mso-bidi-font-family:'Times New Roman';font-size:12.0000pt;mso-font-kerning:0.0000pt;">
							
						</span></p>
					<p class="MsoNormal"><span style="mso-spacerun:'yes';font-family:宋体;mso-ascii-font-family:Calibri;
			mso-hansi-font-family:Calibri;mso-bidi-font-family:'Times New Roman';font-size:10.5000pt;
			mso-font-kerning:1.0000pt;">
							
						</span></p>
				</div><!--EndFragment-->
			<!-- <web-view src="../../static/file/termsUse/en.html"></web-view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				termsuse: this.$t('login.termsuse'), //用户协议国际化
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