/*! For license information please see createSphereGeometry.js.LICENSE.txt */
define(["./defaultValue-a6eb9f34","./Matrix2-276d97d2","./EllipsoidGeometry-2068e447","./VertexFormat-31cdbccc","./ComponentDatatype-7f6d9570","./WebGLConstants-d81b330d","./RuntimeError-07496d94","./Transforms-0c3fa360","./_commonjsHelpers-89c9b271","./combine-7cf28d88","./GeometryAttribute-54019f82","./GeometryAttributes-aff51037","./GeometryOffsetAttribute-102da468","./IndexDatatype-856d3a0c"],(function(e,t,i,r,o,a,n,s,c,d,l,m,u,p){"use strict";function f(r){const o=e.defaultValue(r.radius,1),a={radii:new t.Cartesian3(o,o,o),stackPartitions:r.stackPartitions,slicePartitions:r.slicePartitions,vertexFormat:r.vertexFormat};this._ellipsoidGeometry=new i.EllipsoidGeometry(a),this._workerName="createSphereGeometry"}f.packedLength=i.EllipsoidGeometry.packedLength,f.pack=function(e,t,r){return i.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};const y=new i.EllipsoidGeometry,G={radius:void 0,radii:new t.Cartesian3,vertexFormat:new r.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return f.unpack=function(o,a,n){const s=i.EllipsoidGeometry.unpack(o,a,y);return G.vertexFormat=r.VertexFormat.clone(s._vertexFormat,G.vertexFormat),G.stackPartitions=s._stackPartitions,G.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,G.radii),n._ellipsoidGeometry=new i.EllipsoidGeometry(G),n):(G.radius=s._radii.x,new f(G))},f.createGeometry=function(e){return i.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=f.unpack(t,i)),f.createGeometry(t)}}));