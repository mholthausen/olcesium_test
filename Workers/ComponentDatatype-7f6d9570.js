/*! For license information please see ComponentDatatype-7f6d9570.js.LICENSE.txt */
define(["exports","./defaultValue-a6eb9f34","./WebGLConstants-d81b330d"],(function(t,n,r){"use strict";var e=function(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};e.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++)t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0},e.prototype.init_by_array=function(t,n){var r,e,a;for(this.init_seed(19650218),r=1,e=0,a=this.N>n?this.N:n;a;a--){var i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1664525*((4294901760&i)>>>16)<<16)+1664525*(65535&i))+t[e]+e,this.mt[r]>>>=0,e++,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),e>=n&&(e=0)}for(a=this.N-1;a;a--)i=this.mt[r-1]^this.mt[r-1]>>>30,this.mt[r]=(this.mt[r]^(1566083941*((4294901760&i)>>>16)<<16)+1566083941*(65535&i))-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1);this.mt[0]=2147483648},e.prototype.random_int=function(){var t,n=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var r;for(this.mti==this.N+1&&this.init_seed(5489),r=0;r<this.N-this.M;r++)t=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+this.M]^t>>>1^n[1&t];for(;r<this.N-1;r++)t=this.mt[r]&this.UPPER_MASK|this.mt[r+1]&this.LOWER_MASK,this.mt[r]=this.mt[r+(this.M-this.N)]^t>>>1^n[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^n[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},e.prototype.random_int31=function(){return this.random_int()>>>1},e.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},e.prototype.random=function(){return this.random_int()*(1/4294967296)},e.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},e.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)};var a=e;const i={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296};i.sign=n.defaultValue(Math.sign,(function(t){return 0==(t=+t)||t!=t?t:t>0?1:-1})),i.signNotZero=function(t){return t<0?-1:1},i.toSNorm=function(t,r){return r=n.defaultValue(r,255),Math.round((.5*i.clamp(t,-1,1)+.5)*r)},i.fromSNorm=function(t,r){return r=n.defaultValue(r,255),i.clamp(t,0,r)/r*2-1},i.normalize=function(t,n,r){return 0===(r=Math.max(r-n,0))?0:i.clamp((t-n)/r,0,1)},i.sinh=n.defaultValue(Math.sinh,(function(t){return(Math.exp(t)-Math.exp(-t))/2})),i.cosh=n.defaultValue(Math.cosh,(function(t){return(Math.exp(t)+Math.exp(-t))/2})),i.lerp=function(t,n,r){return(1-r)*t+r*n},i.PI=Math.PI,i.ONE_OVER_PI=1/Math.PI,i.PI_OVER_TWO=Math.PI/2,i.PI_OVER_THREE=Math.PI/3,i.PI_OVER_FOUR=Math.PI/4,i.PI_OVER_SIX=Math.PI/6,i.THREE_PI_OVER_TWO=3*Math.PI/2,i.TWO_PI=2*Math.PI,i.ONE_OVER_TWO_PI=1/(2*Math.PI),i.RADIANS_PER_DEGREE=Math.PI/180,i.DEGREES_PER_RADIAN=180/Math.PI,i.RADIANS_PER_ARCSECOND=i.RADIANS_PER_DEGREE/3600,i.toRadians=function(t){return t*i.RADIANS_PER_DEGREE},i.toDegrees=function(t){return t*i.DEGREES_PER_RADIAN},i.convertLongitudeRange=function(t){const n=i.TWO_PI,r=t-Math.floor(t/n)*n;return r<-Math.PI?r+n:r>=Math.PI?r-n:r},i.clampToLatitudeRange=function(t){return i.clamp(t,-1*i.PI_OVER_TWO,i.PI_OVER_TWO)},i.negativePiToPi=function(t){return t>=-i.PI&&t<=i.PI?t:i.zeroToTwoPi(t+i.PI)-i.PI},i.zeroToTwoPi=function(t){if(t>=0&&t<=i.TWO_PI)return t;const n=i.mod(t,i.TWO_PI);return Math.abs(n)<i.EPSILON14&&Math.abs(t)>i.EPSILON14?i.TWO_PI:n},i.mod=function(t,n){return i.sign(t)===i.sign(n)&&Math.abs(t)<Math.abs(n)?t:(t%n+n)%n},i.equalsEpsilon=function(t,r,e,a){e=n.defaultValue(e,0),a=n.defaultValue(a,e);const i=Math.abs(t-r);return i<=a||i<=e*Math.max(Math.abs(t),Math.abs(r))},i.lessThan=function(t,n,r){return t-n<-r},i.lessThanOrEquals=function(t,n,r){return t-n<r},i.greaterThan=function(t,n,r){return t-n>r},i.greaterThanOrEquals=function(t,n,r){return t-n>-r};const s=[1];i.factorial=function(t){const n=s.length;if(t>=n){let r=s[n-1];for(let e=n;e<=t;e++){const t=r*e;s.push(t),r=t}}return s[t]},i.incrementWrap=function(t,r,e){return e=n.defaultValue(e,0),++t>r&&(t=e),t},i.isPowerOfTwo=function(t){return 0!==t&&0==(t&t-1)},i.nextPowerOfTwo=function(t){return--t,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},i.previousPowerOfTwo=function(t){return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,((t|=t>>32)>>>0)-(t>>>1)},i.clamp=function(t,n,r){return t<n?n:t>r?r:t};let o=new a;i.setRandomNumberSeed=function(t){o=new a(t)},i.nextRandomNumber=function(){return o.random()},i.randomBetween=function(t,n){return i.nextRandomNumber()*(n-t)+t},i.acosClamped=function(t){return Math.acos(i.clamp(t,-1,1))},i.asinClamped=function(t){return Math.asin(i.clamp(t,-1,1))},i.chordLength=function(t,n){return 2*n*Math.sin(.5*t)},i.logBase=function(t,n){return Math.log(t)/Math.log(n)},i.cbrt=n.defaultValue(Math.cbrt,(function(t){const n=Math.pow(Math.abs(t),1/3);return t<0?-n:n})),i.log2=n.defaultValue(Math.log2,(function(t){return Math.log(t)*Math.LOG2E})),i.fog=function(t,n){const r=t*n;return 1-Math.exp(-r*r)},i.fastApproximateAtan=function(t){return t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)},i.fastApproximateAtan2=function(t,n){let r,e=Math.abs(t);r=Math.abs(n);const a=Math.max(e,r);r=Math.min(e,r);const s=r/a;return e=i.fastApproximateAtan(s),e=Math.abs(n)>Math.abs(t)?i.PI_OVER_TWO-e:e,e=t<0?i.PI-e:e,e=n<0?-e:e,e};var u=i;const E={BYTE:r.WebGLConstants.BYTE,UNSIGNED_BYTE:r.WebGLConstants.UNSIGNED_BYTE,SHORT:r.WebGLConstants.SHORT,UNSIGNED_SHORT:r.WebGLConstants.UNSIGNED_SHORT,INT:r.WebGLConstants.INT,UNSIGNED_INT:r.WebGLConstants.UNSIGNED_INT,FLOAT:r.WebGLConstants.FLOAT,DOUBLE:r.WebGLConstants.DOUBLE,getSizeInBytes:function(t){switch(t){case E.BYTE:return Int8Array.BYTES_PER_ELEMENT;case E.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case E.SHORT:return Int16Array.BYTES_PER_ELEMENT;case E.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case E.INT:return Int32Array.BYTES_PER_ELEMENT;case E.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case E.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case E.DOUBLE:return Float64Array.BYTES_PER_ELEMENT}},fromTypedArray:function(t){return t instanceof Int8Array?E.BYTE:t instanceof Uint8Array?E.UNSIGNED_BYTE:t instanceof Int16Array?E.SHORT:t instanceof Uint16Array?E.UNSIGNED_SHORT:t instanceof Int32Array?E.INT:t instanceof Uint32Array?E.UNSIGNED_INT:t instanceof Float32Array?E.FLOAT:t instanceof Float64Array?E.DOUBLE:void 0},validate:function(t){return n.defined(t)&&(t===E.BYTE||t===E.UNSIGNED_BYTE||t===E.SHORT||t===E.UNSIGNED_SHORT||t===E.INT||t===E.UNSIGNED_INT||t===E.FLOAT||t===E.DOUBLE)},createTypedArray:function(t,n){switch(t){case E.BYTE:return new Int8Array(n);case E.UNSIGNED_BYTE:return new Uint8Array(n);case E.SHORT:return new Int16Array(n);case E.UNSIGNED_SHORT:return new Uint16Array(n);case E.INT:return new Int32Array(n);case E.UNSIGNED_INT:return new Uint32Array(n);case E.FLOAT:return new Float32Array(n);case E.DOUBLE:return new Float64Array(n)}},createArrayBufferView:function(t,r,e,a){switch(e=n.defaultValue(e,0),a=n.defaultValue(a,(r.byteLength-e)/E.getSizeInBytes(t)),t){case E.BYTE:return new Int8Array(r,e,a);case E.UNSIGNED_BYTE:return new Uint8Array(r,e,a);case E.SHORT:return new Int16Array(r,e,a);case E.UNSIGNED_SHORT:return new Uint16Array(r,e,a);case E.INT:return new Int32Array(r,e,a);case E.UNSIGNED_INT:return new Uint32Array(r,e,a);case E.FLOAT:return new Float32Array(r,e,a);case E.DOUBLE:return new Float64Array(r,e,a)}},fromName:function(t){switch(t){case"BYTE":return E.BYTE;case"UNSIGNED_BYTE":return E.UNSIGNED_BYTE;case"SHORT":return E.SHORT;case"UNSIGNED_SHORT":return E.UNSIGNED_SHORT;case"INT":return E.INT;case"UNSIGNED_INT":return E.UNSIGNED_INT;case"FLOAT":return E.FLOAT;case"DOUBLE":return E.DOUBLE}}};var h=Object.freeze(E);t.CesiumMath=u,t.ComponentDatatype=h}));