(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,r){"use strict";var i=r("TqRt");t.__esModule=!0,t.default=void 0;var a,n=i(r("PJYZ")),s=i(r("VbXa")),o=i(r("8OQS")),d=i(r("pVnL")),u=i(r("q1tI")),l=i(r("17x9")),c=function(e){var t=(0,d.default)({},e),r=t.resolutions,i=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=$([].concat(t.fluid))),t.fixed&&(t.fixed=$([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed,i=p(t||r||[]);return i&&i.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=c(e),r=h(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},i&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:i,sizes:n}),r&&u.default.createElement("source",{media:a,srcSet:r,sizes:n}))}))}function $(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function M(e){return e.map((function(e){var t=e.src,r=e.media,i=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,r=e.media,i=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:i})}))}function O(e,t){var r=e.srcSet,i=e.srcSetWebp,a=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?i:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+s+o+r+i+t+n+a+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},D=u.default.forwardRef((function(e,t){var r=e.src,i=e.imageVariants,a=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=u.default.createElement(_,(0,d.default)({ref:t,src:r},n,{ariaHidden:s}));return i.length>1?u.default.createElement("picture",null,a(i),o):o})),_=u.default.forwardRef((function(e,t){var r=e.sizes,i=e.srcSet,a=e.src,n=e.style,s=e.onLoad,l=e.onError,c=e.loading,f=e.draggable,h=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,d.default)({"aria-hidden":h,sizes:r,srcSet:i,src:a},p,{onLoad:s,onError:l,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));_.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var R=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&b&&!r.isCritical&&!r.seenBefore;var i=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=h(t))&&(m[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,i=e.className,a=e.style,n=void 0===a?{}:a,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,h=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,$=e.loading,O=e.draggable,E=m||g;if(!E)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,d.default)({opacity:R?1:0,transition:x?"opacity "+v+"ms":"none"},o),C="boolean"==typeof y?"lightgray":y,T={transitionDelay:v+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},x&&T,o,f),V={title:t,alt:this.state.isVisible?"":r,style:z,className:h,itemProp:S},W=this.state.isHydrated?p(E):E[0];if(m)return u.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},u.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&u.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&T)}),W.base64&&u.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:V,imageVariants:E,generateSources:L}),W.tracedSVG&&u.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:V,imageVariants:E,generateSources:M}),this.state.isVisible&&u.default.createElement("picture",null,w(E),u.default.createElement(_,{alt:r,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:$,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:r,title:t,loading:$},W,{imageVariants:E}))}}));if(g){var k=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete k.display,u.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},C&&u.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},x&&T)}),W.base64&&u.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:V,imageVariants:E,generateSources:L}),W.tracedSVG&&u.default.createElement(D,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:V,imageVariants:E,generateSources:M}),this.state.isVisible&&u.default.createElement("picture",null,w(E),u.default.createElement(_,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:$,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:r,title:t,loading:$},W,{imageVariants:E}))}}))}return null},t}(u.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var x=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),H=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});function C(e){return function(t,r,i){var a;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");l.default.checkPropTypes(((a={})[r]=e,a),t,"prop",i)}}R.propTypes={resolutions:x,sizes:H,fixed:C(l.default.oneOfType([x,l.default.arrayOf(x)])),fluid:C(l.default.oneOfType([H,l.default.arrayOf(H)])),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var T=R;t.default=T},PJ8K:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S})),r.d(t,"pageQuery",(function(){return w}));var i=r("9eSz"),a=r.n(i),n=r("q1tI"),s=r.n(n),o=r("vOnD"),d=r("Wgwc"),u=r.n(d),l=r("+ZDr"),c=r.n(l),f=o.b.ul.withConfig({displayName:"PostList__List",componentId:"gvpmje-0"})(["padding:0.6em 0;"]),h=o.b.li.withConfig({displayName:"PostList__ListItem",componentId:"gvpmje-1"})(["border-bottom:1px solid #ddd;margin-top:1.8em;padding-bottom:1.8em;&:first-child{margin:0;}"]),p=o.b.p.withConfig({displayName:"PostList__Meta",componentId:"gvpmje-2"})(["color:#666;font-size:0.9rem;"]),m=Object(o.b)(c.a).withConfig({displayName:"PostList__Title",componentId:"gvpmje-3"})(["font-size:1.8rem;font-weight:bold;margin-top:0.6em;"]),g=o.b.div.withConfig({displayName:"PostList__Description",componentId:"gvpmje-4"})(["font-size:1.2rem;margin-top:0.3em;"]);function y(e){var t=e.posts;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null,t.map((function(e,t){var r=e.node;return r.fields&&r.frontmatter&&s.a.createElement(h,{key:t},s.a.createElement(p,null,u()(r.frontmatter.date).format("MMM DD, YYYY")," - ",r.timeToRead," min read"),s.a.createElement(m,{to:r.fields.path},r.frontmatter.title),s.a.createElement(g,null,r.frontmatter.description))}))))}var v=r("QWMy"),b=o.b.div.withConfig({displayName:"posts__Illust",componentId:"sc-151vpsc-0"})(["width:100%;"]);function S(e){return s.a.createElement(v.a,{description:e.data.site.siteMetadata.description,title:e.data.site.siteMetadata.title},s.a.createElement(b,null,s.a.createElement(a.a,{fluid:e.data.file.childImageSharp.fluid})),s.a.createElement(y,{posts:e.data.allMarkdownRemark.edges}))}var w="448602770"},Wgwc:function(e,t,r){e.exports=function(){"use strict";var e="millisecond",t="second",r="minute",i="hour",a="day",n="week",s="month",o="quarter",d="year",u="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},p={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),i=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(i,s),n=r-a<0,o=t.clone().add(i+(n?-1:1),s);return+(-(i+(r-a)/(n?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(l){return{M:s,y:d,w:n,d:a,D:u,h:i,m:r,s:t,ms:e,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",g={};g[m]=f;var y=function(e){return e instanceof w},v=function(e,t,r){var i;if(!e)return m;if("string"==typeof e)g[e]&&(i=e),t&&(g[e]=t,i=e);else{var a=e.name;g[a]=e,i=a}return!r&&i&&(m=i),i||!r&&m},b=function(e,t){if(y(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},S=p;S.l=v,S.i=y,S.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function f(e){this.$L=this.$L||v(e.locale,null,!0),this.parse(e)}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(l);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return b(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<b(e)},h.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var l=this,c=!!S.u(o)||o,f=S.p(e),h=function(e,t){var r=S.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?r:r.endOf(a)},p=function(e,t){return S.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case d:return c?h(1,0):h(31,11);case s:return c?h(1,g):h(0,g+1);case n:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(c?y-w:y+(6-w),g);case a:case u:return p(v+"Hours",0);case i:return p(v+"Minutes",1);case r:return p(v+"Seconds",2);case t:return p(v+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,o){var l,c=S.p(n),f="set"+(this.$u?"UTC":""),h=(l={},l[a]=f+"Date",l[u]=f+"Date",l[s]=f+"Month",l[d]=f+"FullYear",l[i]=f+"Hours",l[r]=f+"Minutes",l[t]=f+"Seconds",l[e]=f+"Milliseconds",l)[c],p=c===a?this.$D+(o-this.$W):o;if(c===s||c===d){var m=this.clone().set(u,1);m.$d[h](p),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[S.p(e)]()},h.add=function(e,o){var u,l=this;e=Number(e);var c=S.p(o),f=function(t){var r=b(l);return S.w(r.date(r.date()+Math.round(t*e)),l)};if(c===s)return this.set(s,this.$M+e);if(c===d)return this.set(d,this.$y+e);if(c===a)return f(1);if(c===n)return f(7);var h=(u={},u[r]=6e4,u[i]=36e5,u[t]=1e3,u)[c]||1,p=this.$d.getTime()+e*h;return S.w(p,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$locale(),n=this.$H,s=this.$m,o=this.$M,d=a.weekdays,u=a.months,l=function(e,i,a,n){return e&&(e[i]||e(t,r))||a[i].substr(0,n)},f=function(e){return S.s(n%12||12,e,"0")},h=a.meridiem||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(a.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(a.weekdaysMin,this.$W,d,2),ddd:l(a.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(n),HH:S.s(n,2,"0"),h:f(1),hh:f(2),a:h(n,s,!0),A:h(n,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(c,(function(e,t){return t||p[e]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,u,l){var c,f=S.p(u),h=b(e),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,g=S.m(this,h);return g=(c={},c[d]=g/12,c[s]=g,c[o]=g/3,c[n]=(m-p)/6048e5,c[a]=(m-p)/864e5,c[i]=m/36e5,c[r]=m/6e4,c[t]=m/1e3,c)[f]||m,l?g:S.a(g)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return g[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=v(e,t,!0);return i&&(r.$L=i),r},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),$=w.prototype;return b.prototype=$,[["$ms",e],["$s",t],["$m",r],["$H",i],["$W",a],["$M",s],["$y",d],["$D",u]].forEach((function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),b.extend=function(e,t){return e(t,w,b),b},b.locale=v,b.isDayjs=y,b.unix=function(e){return b(1e3*e)},b.en=g[m],b.Ls=g,b}()}}]);
//# sourceMappingURL=component---src-pages-posts-tsx-0f1ba617d3eb256a8670.js.map