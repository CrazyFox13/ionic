(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"6zw3":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),u=e("H+bZ"),i=e("t/Na"),o=function(){function n(n){this.api=n,this.title="\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f",this.items=[],this.isLoaded=!1,this.apiKey=null}return n.prototype.ngOnInit=function(){var n=this;this.api.apiKey.subscribe(function(l){return n.apiKey=l})},n.prototype.ngOnDestroy=function(){},n.prototype.ionViewWillEnter=function(){var n=this;null!==this.apiKey&&this.api._get("notifications",new i.h,new i.g({"X-PI-KEY":this.apiKey})).subscribe(function(l){if(n.isLoaded=!0,!l.errorCode)for(var e in l.result)n.items.push(l.result[e])})},n.prototype.ionViewWillLeave=function(){this.items=[]},n}(),d=function(){return function(){}}(),a=e("pMnS"),r=e("oBZk"),c=e("ZZ/e"),f=e("Ip0R"),m=t["\u0275crt"]({encapsulation:0,styles:[[".skeleton[_ngcontent-%COMP%]{width:100%}.skeleton[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #cecece}.skeleton[_ngcontent-%COMP%]:first-child{padding-bottom:.6rem}.skeleton[_ngcontent-%COMP%]:not(:first-child){padding-bottom:.6rem;padding-top:.6rem}.skeleton-small[_ngcontent-%COMP%]{width:45%;line-height:.6rem}.item[_ngcontent-%COMP%]{width:100%}.item[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid #cecece}.item[_ngcontent-%COMP%]:first-child{padding-bottom:.6rem}.item[_ngcontent-%COMP%]:not(:first-child){padding-bottom:.6rem;padding-top:.6rem}.item-title[_ngcontent-%COMP%]{font-size:.9rem}.item-date[_ngcontent-%COMP%]{font-size:.7rem;color:#aeb4b1;padding-top:.3rem}"]],data:{}});function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","skeleton"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-skeleton-text",[["animated",""]],null,null,null,r.ob,r.D)),t["\u0275did"](2,49152,null,0,c.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,"ion-skeleton-text",[["animated",""],["class","skeleton-small"]],null,null,null,r.ob,r.D)),t["\u0275did"](4,49152,null,0,c.nb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{animated:[0,"animated"]},null)],function(n,l){n(l,2,0,""),n(l,4,0,"")},null)}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,4,"ion-list",[["class","ion-padding"]],null,null,null,r.hb,r.w)),t["\u0275did"](2,49152,null,0,c.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,2,null,s)),t["\u0275did"](4,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275pad"](5,10)],function(n,l){var e=n(l,5,0,1,2,3,4,5,6,7,8,9,10);n(l,4,0,e)},null)}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-title",[],null,null,null,r.ub,r.J)),t["\u0275did"](1,49152,null,0,c.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["\u041d\u0435\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439"]))],null,null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" #"," "]))],null,function(n,l){n(l,1,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.params.taskId)})}function b(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,6,"div",[["class","item"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"div",[["class","item-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](2,null,[" "," "])),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](4,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](5,0,null,null,1,"div",[["class","item-date"]],null,null,null,null,null)),(n()(),t["\u0275ted"](6,null,[" "," "]))],function(n,l){n(l,4,0,null!==(null==l.context.$implicit?null:l.context.$implicit.params.taskId))},function(n,l){n(l,2,0,null==l.context.$implicit?null:l.context.$implicit.name),n(l,6,0,null==l.context.$implicit?null:l.context.$implicit.formattedCreatedAt)})}function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"ion-list",[["inset","true"]],null,null,null,r.hb,r.w)),t["\u0275did"](1,49152,null,0,c.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{inset:[0,"inset"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,b)),t["\u0275did"](3,278528,null,0,f.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,1,0,"true"),n(l,3,0,e.items)},null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ion-content",[],null,null,null,r.S,r.h)),t["\u0275did"](1,49152,null,0,c.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275and"](16777216,null,0,1,null,g)),t["\u0275did"](3,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,C)),t["\u0275did"](5,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,!e.items.length),n(l,5,0,e.items.length)},null)}function v(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,11,"ion-header",[],null,null,null,r.X,r.m)),t["\u0275did"](1,49152,null,0,c.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,9,"ion-toolbar",[],null,null,null,r.vb,r.K)),t["\u0275did"](3,49152,null,0,c.Ab,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](4,0,null,0,2,"ion-title",[],null,null,null,r.ub,r.J)),t["\u0275did"](5,49152,null,0,c.yb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](6,0,["",""])),(n()(),t["\u0275eld"](7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.Q,r.f)),t["\u0275did"](8,49152,null,0,c.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](9,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","/public/home"],["text",""]],null,[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,11).onClick(e)&&u),u},r.N,r.c)),t["\u0275did"](10,49152,null,0,c.f,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"],defaultHref:[1,"defaultHref"],text:[2,"text"]},null),t["\u0275did"](11,16384,null,0,c.g,[[2,c.gb],c.Gb],{defaultHref:[0,"defaultHref"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](13,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](15,16384,null,0,f.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,10,0,"dark","/public/home",""),n(l,11,0,"/public/home"),n(l,13,0,!e.isLoaded),n(l,15,0,e.isLoaded)},function(n,l){n(l,6,0,l.component.title)})}function N(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-notifications",[],null,null,null,v,m)),t["\u0275did"](1,245760,null,0,o,[u.a],null,null)],function(n,l){n(l,1,0)},null)}var I=t["\u0275ccf"]("app-notifications",o,N,{},{},[]),k=e("gIcY"),w=e("ZYCi");e.d(l,"NotificationsPageModuleNgFactory",function(){return O});var O=t["\u0275cmf"](d,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,I]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[t.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,k.s,k.s,[]),t["\u0275mpd"](4608,c.a,c.a,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,c.Fb,c.Fb,[c.a,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,c.Jb,c.Jb,[c.a,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),t["\u0275mpd"](1073742336,k.r,k.r,[]),t["\u0275mpd"](1073742336,k.g,k.g,[]),t["\u0275mpd"](1073742336,c.Cb,c.Cb,[]),t["\u0275mpd"](1073742336,w.n,w.n,[[2,w.s],[2,w.m]]),t["\u0275mpd"](1073742336,d,d,[]),t["\u0275mpd"](1024,w.k,function(){return[[{path:"",component:o}]]},[])])})}}]);