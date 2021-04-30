(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{cRhG:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileModule",(function(){return S}));var i=r("3Pt+"),s=r("ofXK"),n=r("tyNb"),o=r("fXoL");let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Cb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(o.Lb(0,"div",0),o.Lb(1,"div",1),o.Jb(2,"router-outlet"),o.Kb(),o.Kb())},directives:[n.g],encapsulation:2}),e})();var b=r("J9tS");let a=(()=>{class e{constructor(e){this.accountService=e,this.account=this.accountService.accountValue}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(b.a))},e.\u0275cmp=o.Cb({type:e,selectors:[["ng-component"]],decls:13,vars:4,consts:[["routerLink","update"]],template:function(e,t){1&e&&(o.Lb(0,"h1"),o.jc(1,"My Profile"),o.Kb(),o.Lb(2,"p"),o.Lb(3,"strong"),o.jc(4,"Name: "),o.Kb(),o.jc(5),o.Jb(6,"br"),o.Lb(7,"strong"),o.jc(8,"Email: "),o.Kb(),o.jc(9),o.Kb(),o.Lb(10,"p"),o.Lb(11,"a",0),o.jc(12,"Update Profile"),o.Kb(),o.Kb()),2&e&&(o.xb(5),o.mc(" ",t.account.title," ",t.account.firstName," ",t.account.lastName,""),o.xb(4),o.lc(" ",t.account.email,"\n"))},directives:[n.e],encapsulation:2}),e})();var u=r("SxV6"),d=r("XgRA");function l(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"First Name is required"),o.Kb())}function f(e,t){if(1&e&&(o.Lb(0,"div",15),o.ic(1,l,2,0,"div",16),o.Kb()),2&e){const e=o.Ub();o.xb(1),o.Zb("ngIf",e.f.firstName.errors.required)}}function m(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Last Name is required"),o.Kb())}function p(e,t){if(1&e&&(o.Lb(0,"div",15),o.ic(1,m,2,0,"div",16),o.Kb()),2&e){const e=o.Ub();o.xb(1),o.Zb("ngIf",e.f.lastName.errors.required)}}function v(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Email is required"),o.Kb())}function g(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Email must be a valid email address"),o.Kb())}function h(e,t){if(1&e&&(o.Lb(0,"div",15),o.ic(1,v,2,0,"div",16),o.ic(2,g,2,0,"div",16),o.Kb()),2&e){const e=o.Ub();o.xb(1),o.Zb("ngIf",e.f.email.errors.required),o.xb(1),o.Zb("ngIf",e.f.email.errors.email)}}function L(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Password is required"),o.Kb())}function K(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Password must be at least 6 characters"),o.Kb())}function w(e,t){if(1&e&&(o.Lb(0,"div",15),o.ic(1,L,2,0,"div",16),o.ic(2,K,2,0,"div",16),o.Kb()),2&e){const e=o.Ub();o.xb(1),o.Zb("ngIf",e.f.password.errors.required),o.xb(1),o.Zb("ngIf",e.f.password.errors.minlength)}}function j(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Confirm Password is required"),o.Kb())}function x(e,t){1&e&&(o.Lb(0,"div"),o.jc(1,"Passwords must match"),o.Kb())}function C(e,t){if(1&e&&(o.Lb(0,"div",15),o.ic(1,j,2,0,"div",16),o.ic(2,x,2,0,"div",16),o.Kb()),2&e){const e=o.Ub();o.xb(1),o.Zb("ngIf",e.f.confirmPassword.errors.required),o.xb(1),o.Zb("ngIf",e.f.confirmPassword.errors.mustMatch)}}function I(e,t){1&e&&o.Jb(0,"span",17)}function N(e,t){1&e&&o.Jb(0,"span",17)}const Z=function(e){return{"is-invalid":e}},y=[{path:"",component:c,children:[{path:"",component:a},{path:"update",component:(()=>{class e{constructor(e,t,r,i,s){this.formBuilder=e,this.route=t,this.router=r,this.accountService=i,this.alertService=s,this.account=this.accountService.accountValue,this.loading=!1,this.submitted=!1,this.deleting=!1}ngOnInit(){this.form=this.formBuilder.group({title:[this.account.title,i.m.required],firstName:[this.account.firstName,i.m.required],lastName:[this.account.lastName,i.m.required],email:[this.account.email,[i.m.required,i.m.email]],password:["",[i.m.minLength(6)]],confirmPassword:[""]},{validator:Object(d.e)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.update(this.account.id,this.form.value).pipe(Object(u.a)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}onDelete(){confirm("Are you sure?")&&(this.deleting=!0,this.accountService.delete(this.account.id).pipe(Object(u.a)()).subscribe(()=>{this.alertService.success("Account deleted successfully",{keepAfterRouteChange:!0})}))}}return e.\u0275fac=function(t){return new(t||e)(o.Ib(i.c),o.Ib(n.a),o.Ib(n.c),o.Ib(b.a),o.Ib(b.b))},e.\u0275cmp=o.Cb({type:e,selectors:[["ng-component"]],decls:43,vars:25,consts:[[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],[1,"pt-3"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["routerLink","../","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(o.Lb(0,"h1"),o.jc(1,"Update Profile"),o.Kb(),o.Lb(2,"form",0),o.Sb("ngSubmit",(function(){return t.onSubmit()})),o.Lb(3,"div",1),o.Lb(4,"div",2),o.Lb(5,"label"),o.jc(6,"First Name"),o.Kb(),o.Jb(7,"input",3),o.ic(8,f,2,1,"div",4),o.Kb(),o.Lb(9,"div",2),o.Lb(10,"label"),o.jc(11,"Last Name"),o.Kb(),o.Jb(12,"input",5),o.ic(13,p,2,1,"div",4),o.Kb(),o.Kb(),o.Lb(14,"div",6),o.Lb(15,"label"),o.jc(16,"Email"),o.Kb(),o.Jb(17,"input",7),o.ic(18,h,3,2,"div",4),o.Kb(),o.Lb(19,"h3",8),o.jc(20,"Change Password"),o.Kb(),o.Lb(21,"p"),o.jc(22,"Leave blank to keep the same password"),o.Kb(),o.Lb(23,"div",1),o.Lb(24,"div",2),o.Lb(25,"label"),o.jc(26,"Password"),o.Kb(),o.Jb(27,"input",9),o.ic(28,w,3,2,"div",4),o.Kb(),o.Lb(29,"div",2),o.Lb(30,"label"),o.jc(31,"Confirm Password"),o.Kb(),o.Jb(32,"input",10),o.ic(33,C,3,2,"div",4),o.Kb(),o.Kb(),o.Lb(34,"div",6),o.Lb(35,"button",11),o.ic(36,I,1,0,"span",12),o.jc(37," Update "),o.Kb(),o.Lb(38,"button",13),o.Sb("click",(function(){return t.onDelete()})),o.ic(39,N,1,0,"span",12),o.jc(40," Delete "),o.Kb(),o.Lb(41,"a",14),o.jc(42,"Cancel"),o.Kb(),o.Kb(),o.Kb()),2&e&&(o.xb(2),o.Zb("formGroup",t.form),o.xb(5),o.Zb("ngClass",o.cc(15,Z,t.submitted&&t.f.firstName.errors)),o.xb(1),o.Zb("ngIf",t.submitted&&t.f.firstName.errors),o.xb(4),o.Zb("ngClass",o.cc(17,Z,t.submitted&&t.f.lastName.errors)),o.xb(1),o.Zb("ngIf",t.submitted&&t.f.lastName.errors),o.xb(4),o.Zb("ngClass",o.cc(19,Z,t.submitted&&t.f.email.errors)),o.xb(1),o.Zb("ngIf",t.submitted&&t.f.email.errors),o.xb(9),o.Zb("ngClass",o.cc(21,Z,t.submitted&&t.f.password.errors)),o.xb(1),o.Zb("ngIf",t.submitted&&t.f.password.errors),o.xb(4),o.Zb("ngClass",o.cc(23,Z,t.submitted&&t.f.confirmPassword.errors)),o.xb(1),o.Zb("ngIf",t.submitted&&t.f.confirmPassword.errors),o.xb(2),o.Zb("disabled",t.loading),o.xb(1),o.Zb("ngIf",t.loading),o.xb(2),o.Zb("disabled",t.deleting),o.xb(1),o.Zb("ngIf",t.deleting))},directives:[i.o,i.h,i.e,i.b,i.g,i.d,s.i,s.k,n.e],encapsulation:2}),e})()}]}];let P=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[n.f.forChild(y)],n.f]}),e})(),S=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[s.b,i.k,P]]}),e})()}}]);