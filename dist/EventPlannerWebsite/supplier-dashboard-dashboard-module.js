(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-dashboard-dashboard-module"],{

/***/ "9EGA":
/*!************************************************************!*\
  !*** ./src/app/supplier/dashboard/dashboard.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "EiZz":
/*!******************************************************!*\
  !*** ./src/app/supplier/navbar/navbar.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "KEPg":
/*!****************************************************************!*\
  !*** ./src/app/supplier/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "jFeK");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.component */ "wvAc");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../request-details/request-details.component */ "Xv5z");
/* harmony import */ var _utl_supplier_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utl/supplier.resolver */ "LhwF");







const routes = [
    {
        path: 'dashboard',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
    },
    {
        path: 'request-details/:id',
        component: _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_5__["RequestDetailsComponent"],
        resolve: { order: _utl_supplier_resolver__WEBPACK_IMPORTED_MODULE_6__["SupplierResolver"] }
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _utl_supplier_resolver__WEBPACK_IMPORTED_MODULE_6__["SupplierResolver"]
        ]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "LhwF":
/*!******************************************!*\
  !*** ./src/app/utl/supplier.resolver.ts ***!
  \******************************************/
/*! exports provided: SupplierResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierResolver", function() { return SupplierResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "zuHl");




let SupplierResolver = class SupplierResolver {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    resolve(route, state) {
        let id = route.params['id'];
        return this.api.get_supplier_order_details(id).toPromise().then(data => {
            if (data) {
                return data;
            }
            else {
                this.router.navigate(['/Login']);
                return;
            }
        });
    }
};
SupplierResolver.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SupplierResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SupplierResolver);



/***/ }),

/***/ "OJuY":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <h5 class=\"card-header\">Profile</h5>\n                <div class=\"card-body\">\n                    <div class=\"col-lg-12\" *ngIf=\"update_success\">\n                        <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                            Profile has been updated successfully!\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                    </div>\n                    <form (ngSubmit)=\"onSubmitUpdateProfile($event)\" [formGroup]=\"profileUpdateForm\">\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"first_name\">First name</label>\n                            <input type=\"text\" class=\"form-control\"  placeholder=\"First Name\" name=\"first_name\" formControlName=\"first_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('first_name').invalid &&  profileUpdateForm.get('first_name').errors &&  (profileUpdateForm.get('first_name').dirty || profileUpdateForm.get('first_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('first_name').hasError('required')\">\n                                    First name is required.\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"last_name\">Last name</label>\n                            <input type=\"text\" class=\"form-control\"  name=\"last_name\" placeholder=\"Last Name\" formControlName=\"last_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('last_name').invalid &&  profileUpdateForm.get('last_name').errors &&  (profileUpdateForm.get('last_name').dirty || profileUpdateForm.get('last_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('last_name').hasError('required')\">\n                                    Last name is required.\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"  formControlName=\"email\" required>\n                                <div *ngIf=\"profileUpdateForm.get('email').invalid &&  profileUpdateForm.get('email').errors &&  (profileUpdateForm.get('email').dirty || profileUpdateForm.get('email').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('email').hasError('required')\">\n                                        Email is required.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"nic\">Nic</label>\n                                <input type=\"text\" class=\"form-control\"  name=\"nic\" placeholder=\"NIC\" formControlName=\"nic\"  required>\n                                <div *ngIf=\"profileUpdateForm.get('nic').invalid &&  profileUpdateForm.get('nic').errors &&  (profileUpdateForm.get('nic').dirty || profileUpdateForm.get('nic').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('nic').hasError('required')\">\n                                        NIC is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"address\">Address</label>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address1\"  formControlName=\"address1\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address1').invalid &&  profileUpdateForm.get('address1').errors &&  (profileUpdateForm.get('address1').dirty || profileUpdateForm.get('address1').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address1').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address2\"  formControlName=\"address2\"  required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address2').invalid &&  profileUpdateForm.get('address2').errors &&  (profileUpdateForm.get('address2').dirty || profileUpdateForm.get('address2').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address2').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address3\"   formControlName=\"address3\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address3').invalid &&  profileUpdateForm.get('address3').errors &&  (profileUpdateForm.get('address3').dirty || profileUpdateForm.get('address3').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address3').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"location\">Location:</label>\n\n                            <div class=\"row mb-5\">\n                                <div class=\"col-md-6\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Latitude\"  name=\"latitude\"  formControlName=\"latitude\"  required/>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Longitude \"  name=\"longitude\"   formControlName=\"longitude\" required/>\n                                </div>\n                            </div>\n\n                        <google-map height=\"400px\" width=\"100%\" \n                            [center]=\"center\"\n                            [zoom]=\"zoom\"\n                            (mapClick)=\"addMarker($event)\"\n                            >\n                            <map-marker *ngFor=\"let markerPosition of markerPositions\"\n                            [position]=\"markerPosition\"\n                            [options]=\"markerOptions\">\n                             </map-marker>\n                        </google-map>\n\n\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"phone\">Phone</label>\n                                <input type=\"text\" class=\"form-control\"  placeholder=\"Contact Number\" name=\"phone\" formControlName=\"phone\" required>\n                                <div *ngIf=\"profileUpdateForm.get('phone').invalid &&  profileUpdateForm.get('phone').errors &&  (profileUpdateForm.get('phone').dirty || profileUpdateForm.get('phone').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('phone').hasError('required')\">\n                                        Phone is required.\n                                    </div>\n                                </div>\n                                <div *ngIf=\"profileUpdateForm.get('phone').hasError('minlength')\">\n                                    <div class=\"alert alert-danger\">\n                                        Phone number must be at least 10 characters long.\n                                    </div>\n                                </div>\n                                <div *ngIf=\"profileUpdateForm.get('phone').hasError('maxlength')\">\n                                    <div class=\"alert alert-danger\">\n                                        Phone number can contain max 10 characters\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"amount\">Event Price</label>\n                                <input type=\"text\" class=\"form-control\"  placeholder=\"Amount\" name=\"amount\" formControlName=\"amount\" required>\n                                <div *ngIf=\"profileUpdateForm.get('amount').invalid &&  profileUpdateForm.get('amount').errors &&  (profileUpdateForm.get('amount').dirty || profileUpdateForm.get('amount').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('amount').hasError('required')\">\n                                        Event Price is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"avatar\">Profile picture</label>\n                            <div class=\"progress form-group\" *ngIf=\"progress > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\n                                </div>\n                            </div>\n                            <input type=\"file\" class=\"form-control\"  name=\"avatar\" (change)=\"onAvatarSelect($event)\" placeholder=\"Profile picture\" required>\n                            <img *ngIf=\"avatar_call_back\" src=\"{{avatar_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"avatarFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{avatarFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"nic\">NIC picture</label>\n                            <input type=\"file\" class=\"form-control\" name=\"nic_pic\" (change)=\"onNicSelect($event)\" placeholder=\"NIC\" required>\n                            <div class=\"progress form-group\" *ngIf=\"progressnic > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progressnic\">\n                                </div>\n                            </div>\n                            <img *ngIf=\"nic_pic_call_back\" src=\"{{nic_pic_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"nicPicFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{nicPicFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">New Password(optional)</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"  formControlName=\"password\">\n                            <div *ngIf=\"profileUpdateForm.get('password').hasError('minlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Password must be at least 6 characters long.\n                                </div>\n                              </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileUpdateForm.invalid\">Update</button>\n                      </form>\n\n                </div>\n              </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "TzsV":
/*!*****************************************************!*\
  !*** ./src/app/supplier/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRtk");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "EiZz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared.service */ "zuHl");






let NavbarComponent = class NavbarComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
    }
    onClickLogOut() {
        this.api.logout();
        this.router.navigate(['Login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "XoWE":
/*!************************************************************************!*\
  !*** ./src/app/supplier/request-details/request-details.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3JlcXVlc3QtZGV0YWlscy9yZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Xv5z":
/*!***********************************************************************!*\
  !*** ./src/app/supplier/request-details/request-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_request_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./request-details.component.html */ "zvpr");
/* harmony import */ var _request_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-details.component.css */ "XoWE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");






let RequestDetailsComponent = class RequestDetailsComponent {
    constructor(api, router, activeRoute) {
        this.api = api;
        this.router = router;
        this.activeRoute = activeRoute;
        this.order = {};
        this.order_id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.activeRoute.data.subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.order.body;
            this.order = responsedata['message'].order;
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
};
RequestDetailsComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RequestDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-request-details',
        template: _raw_loader_request_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_request_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RequestDetailsComponent);



/***/ }),

/***/ "bxDJ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/dashboard/dashboard.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Pending Requests</h5>\n              <h1 class=\"card-text\">{{pending_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Accepted Request</h5>\n              <h1 class=\"card-text\">{{accept_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Canceled Request</h5>\n                <h1 class=\"card-text\">{{cancel_count}}</h1>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row\"> \n          <div class=\"col-md-12 mt-5\">\n  \n            <div  *ngIf=\"update_success\">\n              <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                  Request has been updated successfully!\n                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n              </div>\n            </div>\n\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th>Customer</th>\n                  <th>Date</th>\n                  <th>Time</th>\n                  <th>Status</th>\n                  <th>Manage</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"request_list?.length > 0 else noEvents\">\n                <tr *ngFor=\"let rl of request_list\">\n                  <th>{{rl.customer_id.first_name + \" \" + rl.customer_id.last_name | titlecase }}</th>\n                  <td>{{rl.date}}</td>\n                  <td>{{rl.time}}</td>\n                  <td>\n                    <span class=\"btn badge-light\">{{rl.status}}</span>\n                  </td>\n                  <td>\n                    <a routerLink=\"/supplier/request-details/{{rl._id}}\" class=\"btn btn-sm btn-primary mr-3\">View</a>\n\n                   <button *ngIf=\"rl.status !='accept'\" type=\"button\" class=\"btn btn-sm btn-success mr-3\" (click)=\"onClickAccept(rl._id);\">Accept</button>\n\n                   <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"onClickCancel(rl._id);\">Cancel</button>\n                  </td>\n                </tr>\n              </tbody>\n              <ng-template #noEvents>\n              <tbody>\n                <tr>\n                  <th scope=\"row\">No data found</th>\n                </tr>\n              </tbody>\n              </ng-template>\n            </table>\n\n          </div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "fDzD":
/*!********************************************************!*\
  !*** ./src/app/supplier/profile/profile.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "jFeK":
/*!***********************************************************!*\
  !*** ./src/app/supplier/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "bxDJ");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "9EGA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");






let DashboardComponent = class DashboardComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.update_success = false;
    }
    ngOnInit() {
        this.api.get_supplier_order_count().subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            this.pending_count = responsedata['message'].pending_count;
            this.accept_count = responsedata['message'].accept_count;
            this.cancel_count = responsedata['message'].cancel_count;
            this.request_list = responsedata['message'].request_list;
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
    onClickAccept(id) {
        const formData = {
            status: "accept",
            order_id: id,
            payment_status: 'pending'
        };
        this.api.update_request_status(formData).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            if (response.body['type'] == "success") {
                this.ngOnInit();
                this.update_success = true;
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('error', error);
        }));
    }
    onClickCancel(id) {
        const formData = {
            status: "cancel",
            order_id: id
        };
        this.api.update_request_status(formData).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            if (response.body['type'] == "success") {
                this.ngOnInit();
                this.update_success = true;
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('error', error);
        }));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DashboardComponent.propDecorators = {
    pending_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['pending_count',] }],
    accept_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['accept_count',] }],
    cancel_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cancel_count',] }],
    request_list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['request_list',] }]
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);



/***/ }),

/***/ "wvAc":
/*!*******************************************************!*\
  !*** ./src/app/supplier/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "OJuY");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "fDzD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let ProfileComponent = class ProfileComponent {
    constructor(fb, api, router) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.avatarFileError = false;
        this.avatar_call_back = '';
        this.progress = 0;
        this.nicPicFileError = false;
        this.nic_pic_call_back = '';
        this.progressnic = 0;
        this.update_success = false;
        this.center = { lat: 6.9271, lng: 79.8612 };
        this.zoom = 8;
        this.markerOptions = { draggable: true };
        this.markerPositions = [];
    }
    ngOnInit() {
        this.profileUpdateForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            nic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            latitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            longitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
        });
        this.api.get_current_user_details().subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            this.profileUpdateForm.patchValue({
                first_name: responsedata['message'].user.first_name,
                last_name: responsedata['message'].user.last_name,
                email: responsedata['message'].user.email,
                nic: responsedata['message'].user.nic,
                phone: responsedata['message'].user.phone,
                address1: responsedata['message'].user.address.address1,
                address2: responsedata['message'].user.address.address2,
                address3: responsedata['message'].user.address.address3,
                amount: responsedata['message'].user.amount,
                latitude: (responsedata['message'].user.geolocation != undefined) ? responsedata['message'].user.geolocation.latitude : '',
                longitude: (responsedata['message'].user.geolocation != undefined) ? responsedata['message'].user.geolocation.longitude : ''
            });
            this.avatar_call_back = responsedata['message'].user.avatar.url;
            this.nic_pic_call_back = responsedata['message'].user.nic_pic.url;
            //this.markerPositions.push({lat: responsedata['message'].user.geolocation.latitude, lng: responsedata['message'].user.geolocation.longitude});
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
    onAvatarSelect(event) {
        this.avatar_input = event.target.files[0];
        let formData = new FormData();
        formData.append("attachment", this.avatar_input);
        this.api.upload(formData).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                    this.avatar_call_back = event.body.message.avatar_url;
                    setTimeout(() => {
                        this.progress = 0;
                        this.avatarFileError = false;
                    }, 1500);
            }
        }, (error) => {
            this.avatarFileError = true;
            this.avatarFileErrorMsg = "Something went wrong, please try again.";
            this.progress = 0;
        });
    }
    onNicSelect(event) {
        this.nic_input = event.target.files[0];
        let formData = new FormData();
        formData.append("attachment", this.nic_input);
        this.api.upload(formData).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                    this.progressnic = Math.round(event.loaded / event.total * 100);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                    this.nic_pic_call_back = event.body.message.avatar_url;
                    setTimeout(() => {
                        this.progressnic = 0;
                        this.nicPicFileError = false;
                    }, 1500);
            }
        }, (error) => {
            this.nicPicFileError = true;
            this.nicPicFileErrorMsg = "Something went wrong, please try again.";
            this.progressnic = 0;
        });
    }
    onSubmitUpdateProfile() {
        if (this.avatar_call_back == "") {
            this.avatarFileError = true;
            this.avatarFileErrorMsg = "Profile picture is required";
        }
        else if (this.nic_pic_call_back == "") {
            this.nicPicFileError = true;
            this.nicPicFileErrorMsg = "NIC picture is required";
        }
        else {
            const formData = {
                first_name: this.profileUpdateForm.get('first_name').value,
                last_name: this.profileUpdateForm.get('last_name').value,
                avatar_url: this.avatar_call_back,
                email: this.profileUpdateForm.get('email').value,
                nic: this.profileUpdateForm.get('nic').value,
                nic_pic_url: this.nic_pic_call_back,
                phone: this.profileUpdateForm.get('phone').value,
                address1: this.profileUpdateForm.get('address1').value,
                address2: this.profileUpdateForm.get('address2').value,
                address3: this.profileUpdateForm.get('address3').value,
                amount: this.profileUpdateForm.get('amount').value,
                password: this.profileUpdateForm.get('password').value,
                latitude: this.profileUpdateForm.get('latitude').value,
                longitude: this.profileUpdateForm.get('longitude').value,
            };
            this.api.update_user_profile(formData).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(response);
                if (response.body['type'] == "success") {
                    this.update_success = true;
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('error', error);
            }));
        }
    }
    addMarker(event) {
        this.markerPositions.push(event.latLng.toJSON());
        this.profileUpdateForm.patchValue({
            latitude: event.latLng.toJSON().lat,
            longitude: event.latLng.toJSON().lng
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "zEb4":
/*!********************************************************!*\
  !*** ./src/app/supplier/dashboard/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "jFeK");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.component */ "wvAc");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "TzsV");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../request-details/request-details.component */ "Xv5z");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-routing.module */ "KEPg");










let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_8__["RequestDetailsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "zRtk":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/navbar/navbar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n     <a class=\"navbar-brand\" routerLink=\"/supplier/dashboard\">\n       Dashboard\n     </a>\n     <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n       <span class=\"navbar-toggler-icon\"></span>\n     </button>\n   \n     <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n       <ul class=\"navbar-nav ml-auto\">\n         <li class=\"nav-item active\">\n           <a class=\"nav-link\" routerLink=\"/supplier/dashboard\">Home</a>\n         </li>\n         <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink=\"/supplier/profile\">Profile</a>\n         </li>\n         <li class=\"nav-item\">\n           <button class=\"btn btn-md btn-outline-primary\" (click)=\"onClickLogOut()\">Logout</button>\n         </li>\n       </ul>\n     </div>\n   </div>\n   </nav>");

/***/ }),

/***/ "zvpr":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/request-details/request-details.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <div class=\"card\">\n               <div class=\"card-header\">\n                 <a routerLink=\"/supplier/dashboard\" class=\"btn btn-md btn-primary float-left\">Back</a>\n                 <span class=\"float-right\">Request Details</span>\n                 <div class=\"clearfix\"></div>\n                </div>\n               <div class=\"card-body\">\n                <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Customer</td>\n                        <td>{{order.customer_id.first_name  +  \" \"  + order.customer_id.last_name}}</td>\n                      </tr>\n                      <tr>\n                        <td>Requested Date</td>\n                        <td>{{order.date}}</td>\n                      </tr>\n                      <tr>\n                        <td>Requested time</td>\n                        <td>{{order.time}}</td>\n                      </tr>\n                      <tr>\n                        <td>Additional note</td>\n                        <td>{{order.note}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n\n                  <div *ngIf=\"order.payment.status == 'confirmed'\">\n                    <p>Payment details</p>\n                  <table class=\"table table-striped\">\n                    <tbody>\n                      <tr>\n                        <th>Transition ID</th>\n                        <td>{{ order.payment.details.transition_id }}</td>\n                      </tr>\n                      <tr>\n                        <th>Amount</th>\n                        <td>{{ order.payment.details.amount }}</td>\n                      </tr>\n                      <tr>\n                        <th>Date</th>\n                        <td>{{ order.payment.details.date | date}}</td>\n                      </tr>\n                      <tr>\n                        <th>Name</th>\n                        <td>{{ order.payment.details.name }}</td>\n                      </tr>\n                      <tr>\n                        <th>Email</th>\n                        <td>{{ order.payment.details.email }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n\n               </div>\n           </div>\n        </div>\n    </div>\n</div>");

/***/ })

}]);
//# sourceMappingURL=supplier-dashboard-dashboard-module.js.map