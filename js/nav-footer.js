var pageIndex = "";
var pageGovernance = "";
var pageAdmissions = "";
var pageAcademics = 'class="mega-menu"';
var pageFacilities = "";
var pageExamination = "";
var pagePlacement = "";
var pageContact = "";
var pageSupport = "";
var pageReports = "";

var PAGE = window.location.pathname.split("/").pop();
var isOthers = true;
var isSubBack = "";

switch(PAGE) {

}


if(isOthers){	
	if(window.location.href.indexOf("facilities") > -1) {    
		pageFacilities = 'class="current-menu-item"';          
	} 
	
	isSubBack = '../';
}



var header = '<div class="nav-container">'+
'			<div class="bar bar--sm visible-xs">'+
'				<div class="container">'+
'					<div class="row">'+
'						<div class="col-xs-8 col-sm-8 ">'+
'							<a href="index.html"> <img class="logo logo-dark" alt="logo" src="images/logo.png" /> <img class="logo logo-light" alt="logo" src="images/logo.png" /> </a>'+
'						</div>'+
'						<div class="col-xs-4 col-sm-4 text-right">'+
'							<a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs"> <i class="icon icon--sm stack-interface stack-menu"></i> </a>'+
'						</div>'+
'					</div>'+
'					<!--end of row-->'+
'				</div>'+
'				<!--end of container-->'+
'			</div>'+
'			<!--end bar-->'+
'			<nav id="menu1" class="bar bar--sm bar-1 hidden-xs hiddem-sm " data-scroll-class=\'366px:pos-fixed\'>'+
'				<div class="container">'+
'					<div class="row">'+
'						<div class="col-md-1 col-sm-2 hidden-xs">'+
'							<div class="bar__module" style="width: 210px">'+
'								<a href="index.html"> <img class="logo logo-dark" alt="logo" src="images/logo.png" /> <img class="logo logo-light" alt="logo" src="images/logo.png" /> </a>'+
'							</div>'+
'							<!--end module-->'+
'						</div>'+
'						<div class="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">'+
'							<div class="bar__module">'+
'								<ul class="menu-horizontal text-left">'+
'									<li class="dropdown">'+
'										<span class="dropdown__trigger">About Us</span>'+
'										<div class="dropdown__container">'+
'											<div class="container">'+
'												<div class="row">'+
'													<div class="dropdown__content col-md-2">'+
'														<ul class="menu-vertical">'+
'															<li class="">'+
'																<a href="about-us.html"> Company </a>'+
'															</li>'+
'															<li class="">'+
'																<a href="about-us.html"> Evolution </a>'+
'															</li>'+
'															<li class="">'+
'																<a href="about-us.html"> Our Team </a>'+
'															</li>'+
'														</ul>'+
'													</div>'+
'													<!--end dropdown content-->'+
'												</div>'+
'												<!--end row-->'+
'											</div>'+
'										</div>'+
'										<!--end dropdown container-->'+
'									</li>'+
''+
'									<li class="dropdown">'+
'										<span class="dropdown__trigger">Services</span>'+
'										<div class="dropdown__container">'+
'											<div class="container">'+
'												<div class="row">'+
'													<div class="col-md-12 dropdown__content dropdown__content--lg">'+
'														<div class="pos-absolute col-md-4 imagebg hidden-sm hidden-xs" data-overlay="4">'+
'															<div class="background-image-holder">'+
'																<img alt="background" src="img/dropdown-1.jpg" />'+
'															</div>'+
'															<div class="container pos-vertical-center">'+
'																<div class="row">'+
'																	<div class="col-md-8 col-md-offset-2" style="display: none">'+
'																		<img alt="Logo" src="img/logo-light.png" class="image--xxs" />'+
'																		<span class="h2 color--white">Beautiful, modular sites in moments.</span>'+
'																		<a href="#" class="btn btn--primary type--uppercase"> <span class="label">$17 USD.</span> <span class="btn__text"> Purchase Stack Now </span> </a>'+
'																	</div>'+
'																</div>'+
'																<!--end of row-->'+
'															</div>'+
'														</div>'+
'														<div class="col-md-2 col-md-offset-4 col-sm-4">'+
'															<h5>Tech Development</h5>'+
'															<ul class="menu-vertical">'+
'																<li>'+
'																	<a href="tech-services.html"> Android Apps (Native) </a>'+
'																</li>'+
'																<li>'+
'																	<a href="tech-services.html"> iOS Apps (Native) </a>'+
'																</li>'+
'																<li>'+
'																	<a href="tech-services.html"> Cloud Infrastructure </a>'+
'																</li>'+
'																<li>'+
'																	<a href="tech-services.html"> Responsive Web Apps </a>'+
'																</li>'+
'																<li>'+
'																	<a href="tech-services.html"> Wearable Apps </a>'+
'																</li>'+
'																<li>'+
'																	<a href="tech-services.html"> AR/VR Technology </a>'+
'																</li>'+
'															</ul>'+
'														</div>'+
''+
'														<div class="col-md-2 col-sm-4">'+
'															<h5>Design</h5>'+
'															<ul class="menu-vertical">'+
'																<li>'+
'																	<a href="design-services.html"> Design Consultation </a>'+
'																</li>'+
'																<li>'+
'																	<a href="design-services.html"> Branding </a>'+
'																</li>'+
'																<li>'+
'																	<a href="design-services.html"> Mobile UI Mock-Ups </a>'+
'																</li>'+
'																<li>'+
'																	<a href="design-services.html"> Web UI Mock-Ups </a>'+
'																</li>'+
'																<li>'+
'																	<a href="design-services.html"> Marketing Banners </a>'+
'																</li>'+
'															</ul>'+
'														</div>'+
''+
'														<div class="col-md-2 col-sm-4">'+
'															<h5>Intelligence</h5>'+
'															<ul class="menu-vertical">'+
'																<li>'+
'																	<a href="intelligence-services.html"> Marketing Stratergy </a>'+
'																</li>'+
'																<li>'+
'																	<a href="intelligence-services.html"> Growth Hacks </a>'+
'																</li>'+
'																<li>'+
'																	<a href="intelligence-services.html"> Market Analysis </a>'+
'																</li>'+
'																<li>'+
'																	<a href="intelligence-services.html"> Competitive Analysis </a>'+
'																</li>'+
'															</ul>'+
'														</div>'+
''+
'														<div class="col-md-2 col-sm-4">'+
'															<h5>Marketing</h5>'+
'															<ul class="menu-vertical">'+
'																<li>'+
'																	<a href="marketing-services.html"> SEO Tweaks </a>'+
'																</li>'+
'																<li>'+
'																	<a href="marketing-services.html"> Content Creation </a>'+
'																</li>'+
'																<li>'+
'																	<a href="marketing-services.html"> Digital Advertisement </a>'+
'																</li>'+
'																<li>'+
'																	<a href="marketing-services.html"> Offline Advertisement </a>'+
'																</li>'+
'																<li>'+
'																	<a href="marketing-services.html"> Social Media Ads </a>'+
'																</li>'+
'																<li>'+
'																	<a href="marketing-services.html"> Social Media'+
'																	<br>'+
'																	Management </a>'+
'																</li>'+
'															</ul>'+
'														</div>'+
''+
'													</div>'+
'													<!--end dropdown content-->'+
'												</div>'+
'											</div>'+
'										</div>'+
'										<!--end dropdown container-->'+
'									</li>'+
'									'+
'									<li class="dropdown">'+
'										<span class="dropdown__trigger">Industries</span>'+
'										<div class="dropdown__container">'+
'											<div class="container">'+
'												<div class="row">'+
'													<div class="dropdown__content dropdown__content--lg col-md-8">'+
'														<div class="pos-absolute col-md-4 imagebg hidden-sm hidden-xs" data-overlay="6">'+
'															<div class="background-image-holder">'+
'																<img alt="background" src="img/inner-6.jpg" />'+
'															</div>'+
'															<div class="container pos-vertical-center">'+
'																<div class="row">'+
'																	<div class="col-md-10 col-md-offset-1" style="display: none">'+
'																		<img alt="Logo" src="img/logo-light.png" class="image--xxs" />'+
'																		<span class="h3 color--white">Over 270 modular interface blocks.</span>'+
'																		<a href="#" class="btn btn--primary type--uppercase"> <span class="btn__text"> Launch Builder </span> </a>'+
'																	</div>'+
'																</div>'+
'																<!--end of row-->'+
'															</div>'+
'														</div>'+
'														<div class="col-md-6 col-md-offset-4">'+
'															<div class="row">'+
'																<div class="col-sm-6">'+
'																	<ul class="menu-vertical">'+
'																		<h5>Generic Industries</h5>'+
'																		<li>'+
'																			<a href="generic-industries.html"> Mobile Apps </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="generic-industries.html"> Web Apps </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="generic-industries.html" > Cloud Infrastructure </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="generic-industries.html" > Data Analytics </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="generic-industries.html" > Big Data </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="generic-industries.html" > Artificial Intelligence </a>'+
'																		</li>'+
'																	</ul>'+
'																</div>'+
'																<div class="col-sm-6">'+
'																	<ul class="menu-vertical">'+
'																		<h5>Expertise Industries</h5>'+
'																		<li>'+
'																			<a href="expertise-industries.html" > Transportation </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="expertise-industries.html" > Education </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="expertise-industries.html" > Marketing </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="expertise-industries.html" > Social </a>'+
'																		</li>'+
'																		<li>'+
'																			<a href="expertise-industries.html" > Others </a>'+
'																		</li>'+
'																	</ul>'+
'																</div>'+
'															</div>'+
'															<!--end of row-->'+
'														</div>'+
'													</div>'+
'													<!--end dropdown content-->'+
'												</div>'+
'												<!--end row-->'+
'											</div>'+
'											<!--end container-->'+
'										</div>'+
'										<!--end dropdown container-->'+
'									</li>'+
'									<li>'+
'										<a class="dropdown__trigger" href="http://blog.weloftlabs.com" target="_blank"><span >Blog</span></a>'+
'									</li>'+
'								</ul>'+
'							</div>'+
'							<!--end module-->'+
'							<div class="bar__module">'+
'								<a class="btn btn--sm type--uppercase" href="affiliate.html" > <span class="btn__text"> Affiliate </span> </a>'+
'								<a class="btn btn--sm btn--primary type--uppercase" href="contact.html"> <span class="btn__text"> Let\'s Talk </span> </a>'+
'							</div>'+
'							<!--end module-->'+
'						</div>'+
'					</div>'+
'					<!--end of row-->'+
'				</div>'+
'				<!--end of container-->'+
'			</nav>'+
'			<!--end bar-->'+
'		</div>';



document.getElementById('my-nav').innerHTML+=header;

// Footer

var footer = '<footer class="space--sm footer-1 text-center-xs bg--secondary" data-gradient-bg="#4876BD,#5448BD,#8F48BD,#BD48B1">'+
'				<div class="container">'+
'					<div class="row">'+
'						<div class="col-sm-6">'+
'							<ul class="list-inline list--hover">'+
'								<li>'+
'									<a href="about-us.html"><span>Our Company</span></a>'+
'								</li>'+
'								<li>'+
'									<a href="careers.html"><span>Careers</span></a>'+
'								</li>'+
'							</ul>'+
'						</div>'+
'						<div class="col-sm-6 text-right text-center-xs">'+
'							<ul class="social-list list-inline list--hover">'+
'								<li>'+
'									<a href="https://www.facebook.com/weloftlabs/" target="_blank"><i class="socicon socicon-facebook icon icon--xs"></i></a>'+
'								</li>'+
'								<li>'+
'									<a href="https://www.linkedin.com/company-beta/10646613/" target="_blank"><i class="socicon socicon-linkedin icon icon--xs"></i></a>'+
'								</li>'+
'							</ul>'+
'							<a href="contact.html" class="btn type--uppercase"> <span class="btn__text" style="color: #ffffff"> Contact Us </span> </a>'+
'						</div>'+
'					</div>'+
'					<div class="row">'+
'						<div class="col-sm-12">'+
'							<img alt="Image" class="logo" src="images/logo-white.png">'+
'							<a class="type--fine-print" target="_blank" href="terms-conditions.html">Legal</a>'+
'						</div>'+
'					</div>'+
'				</div>'+
'			</footer>';
	


document.getElementById('my-footer').innerHTML+=footer;

