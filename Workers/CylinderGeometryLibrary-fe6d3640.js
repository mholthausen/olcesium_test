/*! For license information please see CylinderGeometryLibrary-fe6d3640.js.LICENSE.txt */
define(["exports","./ComponentDatatype-7f6d9570"],(function(t,n){"use strict";const o={computePositions:function(t,o,e,r,s){const i=.5*t,a=-i,c=r+r,u=new Float64Array(3*(s?2*c:c));let f,y=0,m=0;const p=s?3*c:0,d=s?3*(c+r):3*r;for(f=0;f<r;f++){const t=f/r*n.CesiumMath.TWO_PI,c=Math.cos(t),h=Math.sin(t),l=c*e,C=h*e,M=c*o,P=h*o;u[m+p]=l,u[m+p+1]=C,u[m+p+2]=a,u[m+d]=M,u[m+d+1]=P,u[m+d+2]=i,m+=3,s&&(u[y++]=l,u[y++]=C,u[y++]=a,u[y++]=M,u[y++]=P,u[y++]=i)}return u}};var e=o;t.CylinderGeometryLibrary=e}));