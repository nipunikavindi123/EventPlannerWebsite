(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-dashboard-dashboard-module"],{

/***/ "2ghS":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table.dataTable thead th, table.dataTable thead td {\n    border-bottom: none !important;\n}\n\n\ntable.dataTable.no-footer {\n    border-bottom: 1px solid #d2d2d2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFHQTtJQUNJLDJDQUEyQztBQUMvQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aCwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxudGFibGUuZGF0YVRhYmxlLm5vLWZvb3RlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "5tTL":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Pending Requests</h5>\n              <h1 class=\"card-text\">{{pending_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Accepted Request</h5>\n              <h1 class=\"card-text\">{{accept_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Canceled Request</h5>\n                <h1 class=\"card-text\">{{cancel_count}}</h1>\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row\"> \n          <div class=\"col-md-12 mt-5\">\n            <table class=\"table  table-hover\" *ngIf=\"request_list?.length > 0 else noEvents\">\n                <thead>\n                  <tr>\n                    <th>Customer</th>\n                    <th>Date</th>\n                    <th>Time</th>\n                    <th>Status</th>\n                    <th>Manage</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let rl of request_list\">\n                    <td>{{rl.customer_id.first_name + \" \" + rl.customer_id.last_name | titlecase }}</td>\n                    <td>{{rl.date}}</td>\n                    <td>{{rl.time}}</td>\n                    <td>\n                      <span class=\"btn badge-light\">{{rl.status}}</span>\n                    </td>\n                    <td>\n                      <a routerLink=\"/admin/request-details/{{rl._id}}\" class=\"btn btn-sm btn-primary\">View</a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <ng-template #noEvents>\n                <div class=\"col-md-12 mt-5 text-center\">\n                    <h3 class=\"pb-4\">No data found</h3>\n                    <img src=\"../../../assets/images/no_data.svg\" class=\"img-fluid\" style=\"width: 50%;\">\n                </div>\n              </ng-template>\n\n          </div>\n      </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "8NEO":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Customers</h5>\n              <h1 class=\"card-text\">{{customer_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Suppliers</h5>\n              <h1 class=\"card-text\">{{supplier_count}}</h1>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Administrators</h5>\n                <h1 class=\"card-text\">{{admin_count}}</h1>\n              </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\"> \n        <div class=\"col-md-12 mt-5\">\n\n        <div class=\"col-lg-12\" *ngIf=\"delete_success\">\n            <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                User has been deleted successfully!\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n        </div>\n\n          <table class=\"table  table-hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Role</th>\n                  <th>Manage</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of user_list\">\n                  <td><img [src]=\"user.avatar.url\" class=\"rounded-circle mr-3\" style=\"width: 30px;\"> {{user.first_name + \" \" + user.last_name | titlecase }}</td>\n                  <td>{{user.email}}</td>\n                  <td>{{user.phone}}</td>\n                  <td>\n                    <span class=\"badge badge-primary\">{{user.role}}</span>\n                  </td>\n                  <td>\n                    <a routerLink=\"/admin/update-user/{{user._id}}\" class=\"btn btn-sm btn-primary mr-3\">Update</a>\n                    <button class=\"btn btn-sm btn-danger\"\n                    [swal]=\"{icon: 'question', title: 'Are you sure want to delete this user?', confirmButtonText: 'Yes', cancelButtonText: 'No',  showCancelButton: true }\"\n                    (confirm)=\"onClickConfirm(user._id)\"\n                    >\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>\n      ");

/***/ }),

/***/ "9wm8":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/update-user/update-user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <h5 class=\"card-header\">\n                    <a routerLink=\"/admin/users\" class=\"btn btn-md btn-primary float-left\">Back</a>\n                    <span class=\"float-right\">Update Users</span>\n                    <div class=\"clearfix\"></div>\n                </h5>\n                <div class=\"card-body\">\n                    <div class=\"col-lg-12\" *ngIf=\"update_success\">\n                        <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                            Profile has been updated successfully!\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                    </div>\n                    <form (ngSubmit)=\"onSubmitUpdateProfile($event)\" [formGroup]=\"profileUpdateForm\">\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"first_name\">First name</label>\n                            <input type=\"text\" class=\"form-control\"  placeholder=\"First Name\" name=\"first_name\" formControlName=\"first_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('first_name').invalid &&  profileUpdateForm.get('first_name').errors &&  (profileUpdateForm.get('first_name').dirty || profileUpdateForm.get('first_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('first_name').hasError('required')\">\n                                    First name is required.\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"last_name\">Last name</label>\n                            <input type=\"text\" class=\"form-control\"  name=\"last_name\" placeholder=\"Last Name\" formControlName=\"last_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('last_name').invalid &&  profileUpdateForm.get('last_name').errors &&  (profileUpdateForm.get('last_name').dirty || profileUpdateForm.get('last_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('last_name').hasError('required')\">\n                                    Last name is required.\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"  formControlName=\"email\" required>\n                                <div *ngIf=\"profileUpdateForm.get('email').invalid &&  profileUpdateForm.get('email').errors &&  (profileUpdateForm.get('email').dirty || profileUpdateForm.get('email').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('email').hasError('required')\">\n                                        Email is required.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"nic\">Nic</label>\n                                <input type=\"text\" class=\"form-control\"  name=\"nic\" placeholder=\"NIC\" formControlName=\"nic\"  required>\n                                <div *ngIf=\"profileUpdateForm.get('nic').invalid &&  profileUpdateForm.get('nic').errors &&  (profileUpdateForm.get('nic').dirty || profileUpdateForm.get('nic').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('nic').hasError('required')\">\n                                        NIC is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"address\">Address</label>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address1\"  formControlName=\"address1\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address1').invalid &&  profileUpdateForm.get('address1').errors &&  (profileUpdateForm.get('address1').dirty || profileUpdateForm.get('address1').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address1').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address2\"  formControlName=\"address2\"  required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address2').invalid &&  profileUpdateForm.get('address2').errors &&  (profileUpdateForm.get('address2').dirty || profileUpdateForm.get('address2').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address2').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address3\"   formControlName=\"address3\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address3').invalid &&  profileUpdateForm.get('address3').errors &&  (profileUpdateForm.get('address3').dirty || profileUpdateForm.get('address3').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address3').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"phone\">Phone</label>\n                            <input type=\"text\" class=\"form-control\"  placeholder=\"Contact Number\" name=\"phone\" formControlName=\"phone\" required>\n                            <div *ngIf=\"profileUpdateForm.get('phone').invalid &&  profileUpdateForm.get('phone').errors &&  (profileUpdateForm.get('phone').dirty || profileUpdateForm.get('phone').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('phone').hasError('required')\">\n                                    Phone is required.\n                                </div>\n                            </div>\n                            <div *ngIf=\"profileUpdateForm.get('phone').hasError('minlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Phone number must be at least 10 characters long.\n                                </div>\n                            </div>\n                            <div *ngIf=\"profileUpdateForm.get('phone').hasError('maxlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Phone number can contain max 10 characters\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"amount\">Event Price</label>\n                                        <input type=\"text\" class=\"form-control\"  placeholder=\"Amount\" name=\"amount\" formControlName=\"amount\">\n                                    </div>\n\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"amount\">Supplier type</label>\n                                        <select class=\"form-control\"  name=\"supplier_type\" formControlName=\"supplier_type\">\n                                            <option value=\"\">-----Select Suppling type-----</option>\n                                            <option value=\"hospitality_partner\">Hospitality partners</option>\n                                            <option value=\"decorater\">Decorations</option>\n                                            <option value=\"entertainer\">Entertaining</option>\n                                            <option value=\"vehicle Hire\">Tranceportation</option>\n                                            <option value=\"photographer\">photography</option>\n                                        </select>\n                                    </div>\n                                 </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"avatar\">Profile picture</label>\n                            <div class=\"progress form-group\" *ngIf=\"progress > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\n                                </div>\n                            </div>\n                            <input type=\"file\" class=\"form-control\"  name=\"avatar\" (change)=\"onAvatarSelect($event)\" placeholder=\"Profile picture\" required>\n                            <img *ngIf=\"avatar_call_back\" src=\"{{avatar_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"avatarFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{avatarFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"nic\">NIC picture</label>\n                            <input type=\"file\" class=\"form-control\" name=\"nic_pic\" (change)=\"onNicSelect($event)\" placeholder=\"NIC\" required>\n                            <div class=\"progress form-group\" *ngIf=\"progressnic > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progressnic\">\n                                </div>\n                            </div>\n                            <img *ngIf=\"nic_pic_call_back\" src=\"{{nic_pic_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"nicPicFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{nicPicFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">New Password(optional)</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"  formControlName=\"password\">\n                            <div *ngIf=\"profileUpdateForm.get('password').hasError('minlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Password must be at least 6 characters long.\n                                </div>\n                              </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileUpdateForm.invalid\">Update</button>\n                      </form>\n\n                </div>\n              </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "FOSW":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/inquiries/inquiries.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container mt-5\">\n    <div class=\"row\"> \n        <div class=\"col-md-12 mt-5\">\n        <div class=\"col-lg-12\" *ngIf=\"delete_success\">\n            <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                Inquiry has been deleted successfully!\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n        </div>\n\n          <table class=\"table  table-hover\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>Comment</th>\n                  <th>Manage</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let inquiry of inquiries\">\n                  <td>{{inquiry.name}}</td>\n                  <td>{{inquiry.email}}</td>\n                  <td>{{inquiry.comment}}</td>\n                  <td>\n                    <button class=\"btn btn-sm btn-danger\"\n                    [swal]=\"{icon: 'question', title: 'Are you sure want to delete this inquiry?', confirmButtonText: 'Yes', cancelButtonText: 'No',  showCancelButton: true }\"\n                    (confirm)=\"onClickDeleteConfirm(inquiry._id)\"\n                    >\n                      Delete\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>\n      \n");

/***/ }),

/***/ "KCec":
/*!**************************************!*\
  !*** ./src/app/utl/user.resolver.ts ***!
  \**************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "zuHl");




let UserResolver = class UserResolver {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    resolve(route, state) {
        let id = route.params['id'];
        return this.api.get_user_details(id).toPromise().then(data => {
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
UserResolver.ctorParameters = () => [
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserResolver);



/***/ }),

/***/ "KGPa":
/*!*********************************************************!*\
  !*** ./src/app/admin/inquiries/inquiries.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2lucXVpcmllcy9pbnF1aXJpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "LDTH":
/*!*****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "MXfZ":
/*!*************************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "o8Ft");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/profile.component */ "t/mg");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.component */ "nRu7");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-user/update-user.component */ "PJP0");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../request-details/request-details.component */ "jCVI");
/* harmony import */ var _inquiries_inquiries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../inquiries/inquiries.component */ "a/9Y");
/* harmony import */ var _utl_user_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utl/user.resolver */ "KCec");
/* harmony import */ var _utl_order_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utl/order.resolver */ "YbcL");











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
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
    },
    {
        path: 'request-details/:id',
        component: _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_7__["RequestDetailsComponent"],
        resolve: { order: _utl_order_resolver__WEBPACK_IMPORTED_MODULE_10__["OrderResolver"] }
    },
    {
        path: 'update-user/:id',
        component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_6__["UpdateUserComponent"],
        resolve: { user: _utl_user_resolver__WEBPACK_IMPORTED_MODULE_9__["UserResolver"] }
    },
    {
        path: 'inquiries',
        component: _inquiries_inquiries_component__WEBPACK_IMPORTED_MODULE_8__["InquiriesComponent"],
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
            _utl_user_resolver__WEBPACK_IMPORTED_MODULE_9__["UserResolver"],
            _utl_order_resolver__WEBPACK_IMPORTED_MODULE_10__["OrderResolver"]
        ]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "PJP0":
/*!************************************************************!*\
  !*** ./src/app/admin/update-user/update-user.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-user.component.html */ "9wm8");
/* harmony import */ var _update_user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-user.component.css */ "l+Dx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");








let UpdateUserComponent = class UpdateUserComponent {
    constructor(api, router, activeRoute, fb) {
        this.api = api;
        this.router = router;
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.avatarFileError = false;
        this.avatar_call_back = '';
        this.progress = 0;
        this.nicPicFileError = false;
        this.nic_pic_call_back = '';
        this.progressnic = 0;
        this.update_success = false;
        this.user_id = this.activeRoute.snapshot.params['id'];
    }
    ngOnInit() {
        this.profileUpdateForm = this.fb.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            nic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]],
            address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            address3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            amount: [''],
            supplier_type: [''],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
        });
        this.activeRoute.data.subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.user.body;
            this.profileUpdateForm.patchValue({
                first_name: responsedata['message'].user.first_name,
                last_name: responsedata['message'].user.last_name,
                email: responsedata['message'].user.email,
                nic: responsedata['message'].user.nic,
                phone: responsedata['message'].user.phone,
                address1: responsedata['message'].user.address.address1,
                address2: responsedata['message'].user.address.address2,
                address3: responsedata['message'].user.address.address3,
                amount: (responsedata['message'].user.role == "supplier") ? responsedata['message'].user.amount : "",
                supplier_type: (responsedata['message'].user.role == "supplier") ? responsedata['message'].user.supplier_type : ""
            });
            this.avatar_call_back = responsedata['message'].user.avatar.url;
            this.nic_pic_call_back = responsedata['message'].user.nic_pic.url;
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
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
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
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].UploadProgress:
                    this.progressnic = Math.round(event.loaded / event.total * 100);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpEventType"].Response:
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
                password: this.profileUpdateForm.get('password').value,
                amount: this.profileUpdateForm.get('amount').value,
                supplier_type: this.profileUpdateForm.get('supplier_type').value
            };
            this.api.update_user_by_admin(this.user_id, formData).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(response);
                if (response.body['type'] == "success") {
                    this.update_success = true;
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('error', error);
            }));
        }
    }
};
UpdateUserComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UpdateUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-user',
        template: _raw_loader_update_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateUserComponent);



/***/ }),

/***/ "QJFE":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js ***!
  \********************************************************************************************************/
/*! exports provided: SwalComponent, SwalDirective, SwalPortalDirective, SwalPortalTargets, SweetAlert2LoaderService, SweetAlert2Module, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalComponent", function() { return SwalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalDirective", function() { return SwalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPortalDirective", function() { return SwalPortalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPortalTargets", function() { return SwalPortalTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2LoaderService", function() { return SweetAlert2LoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return SweetAlert2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return provideDefaultSwal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return swalProviderToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return fireOnInitToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return dismissOnDestroyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SwalPortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SwalPortalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const swalProviderToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#swalProvider');
const fireOnInitToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#fireOnInit');
const dismissOnDestroyToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('@sweetalert2/ngx-sweetalert2#dismissOnDestroy');

class SweetAlert2LoaderService {
    // Using any because Angular metadata generator does not understand a pure TS type here
    constructor(swalProvider) {
        this.swalProvider = swalProvider;
    }
    get swal() {
        if (!this.swalPromiseCache) {
            this.preloadSweetAlertLibrary();
        }
        return this.swalPromiseCache;
    }
    preloadSweetAlertLibrary() {
        if (this.swalPromiseCache)
            return;
        const libPromise = isLoader(this.swalProvider)
            ? this.swalProvider()
            : Promise.resolve(this.swalProvider);
        this.swalPromiseCache = libPromise.then(value => isDefaultExport(value) ? value : value.default);
        function isLoader(value) {
            return typeof value === 'function' && value.version === undefined;
        }
        function isDefaultExport(value) {
            return typeof value === 'function';
        }
    }
}
SweetAlert2LoaderService.ɵfac = function SweetAlert2LoaderService_Factory(t) { return new (t || SweetAlert2LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](swalProviderToken)); };
SweetAlert2LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SweetAlert2LoaderService, factory: SweetAlert2LoaderService.ɵfac });
SweetAlert2LoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [swalProviderToken,] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [swalProviderToken]
            }] }]; }, null); })();

/**
 * <swal> component. See the README.md for usage.
 *
 * It contains a bunch of @Inputs that have a perfect 1:1 mapping with SweetAlert2 options.
 * Their types are directly coming from SweetAlert2 types defintitions, meaning that ngx-sweetalert2 is tightly coupled
 * to SweetAlert2, but also is type-safe even if both libraries do not evolve in sync.
 *
 * (?) If you want to use an object that declares the SweetAlert2 options all at once rather than many @Inputs,
 *     take a look at [swalOptions], that lets you pass a full {@link SweetAlertOptions} object.
 *
 * (?) If you are reading the TypeScript source of this component, you may think that it's a lot of code.
 *     Be sure that a lot of this code is types and Angular boilerplate. Compiled and minified code is much smaller.
 *     If you are really concerned about performance and/or don't care about the API and its convenient integration
 *     with Angular (notably change detection and transclusion), you may totally use SweetAlert2 natively as well ;)
 *
 * /!\ Some SweetAlert options aren't @Inputs but @Outputs: `willOpen`, `didOpen`, `didRender`, `willClose`, `didClose`
 *     and `didDestroy`.
 *     However, `preConfirm`, `preDeny` and `inputValidator` are still @Inputs because they are not event handlers,
 *     there can't be multiple listeners on them, and we need the values they can/must return.
 */
class SwalComponent {
    constructor(sweetAlert2Loader, moduleLevelFireOnInit, moduleLevelDismissOnDestroy) {
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.moduleLevelFireOnInit = moduleLevelFireOnInit;
        this.moduleLevelDismissOnDestroy = moduleLevelDismissOnDestroy;
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */
        this.willOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs before the modal is shown on screen.
         */
        this.didOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the modal is
         * repainted on the screen).
         * Typically, this will happen after `Swal.fire()` or `Swal.update()`.
         * If you want to perform changes in the popup's DOM, that survive `Swal.update()`, prefer {@link didRender} over
         * {@link willOpen}.
         */
        this.didRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup
         * being fired).
         */
        this.willClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to
         * another popup being fired).
         */
        this.didClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Modal lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another
         * popup.
         * If you have cleanup operations that you need to reliably execute each time a modal is closed, prefer
         * {@link didDestroy} over {@link didClose}.
         */
        this.didDestroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */
        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link close} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This Set retains the properties that have been changed from @Inputs, so we can know precisely
         * what options we have to send to {@link Swal.fire}.
         */
        this.touchedProps = new Set();
        /**
         * A function of signature `(propName: string): void` that adds a given property name to the list of
         * touched properties, ie. {@link touchedProps}.
         */
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        /**
         * Is the SweetAlert2 modal represented by this component currently opened?
         */
        this.isCurrentlyShown = false;
    }
    /**
     * An object of SweetAlert2 native options, useful if:
     *  - you don't want to use the @Inputs for practical/philosophical reasons ;
     *  - there are missing @Inputs because ngx-sweetalert2 isn't up-to-date with SweetAlert2's latest changes.
     *
     * /!\ Please note that setting this property does NOT erase what has been set before unless you specify the
     *     previous properties you want to erase again.
     *     Ie. setting { title: 'Title' } and then { text: 'Text' } will give { title: 'Title', text: 'Text' }.
     *
     * /!\ Be aware that the options defined in this object will override the @Inputs of the same name.
     */
    set swalOptions(options) {
        //=> Update properties
        Object.assign(this, options);
        //=> Mark changed properties as touched
        const touchedKeys = Object.keys(options);
        touchedKeys.forEach(this.markTouched);
    }
    /**
     * Computes the options object that will get passed to SweetAlert2.
     * Only the properties that have been set at least once on this component will be returned.
     * Mostly for internal usage.
     */
    get swalOptions() {
        //=> We will compute the options object based on the option keys that are known to have changed.
        //   That avoids passing a gigantic object to SweetAlert2, making debugging easier and potentially
        //   avoiding side effects.
        return [...this.touchedProps].reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [key]: this[key] })), {});
    }
    set swalVisible(visible) {
        visible ? this.fire() : this.close();
    }
    get swalVisible() {
        return this.isCurrentlyShown;
    }
    /**
     * Angular lifecycle hook.
     * Asks the SweetAlert2 loader service to preload the SweetAlert2 library, so it begins to be loaded only if there
     * is a <swal> component somewhere, and is probably fully loaded when the modal has to be displayed,
     * causing no delay.
     */
    ngOnInit() {
        //=> Preload SweetAlert2 library in case this component is activated.
        this.sweetAlert2Loader.preloadSweetAlertLibrary();
    }
    /**
     * Angular lifecycle hook.
     * Fires the modal, if the component or module is configured to do so.
     */
    ngAfterViewInit() {
        const fireOnInit = this.swalFireOnInit === undefined
            ? this.moduleLevelFireOnInit
            : this.swalFireOnInit;
        fireOnInit && this.fire();
    }
    /**
     * Angular lifecycle hook.
     * Updates the SweetAlert options, and if the modal is opened, asks SweetAlert to render it again.
     */
    ngOnChanges(changes) {
        //=> For each changed @Input that matches a SweetAlert2 option, mark as touched so we can
        //   send it with the next fire() or update() calls.
        Object.keys(changes)
            //=> If the filtering logic becomes more complex here, we can use Swal.isValidParameter
            .filter((key) => !key.startsWith('swal'))
            .forEach(this.markTouched);
        //=> Eventually trigger re-render if the modal is open.
        void this.update();
    }
    /**
     * Angular lifecycle hook.
     * Closes the SweetAlert when the component is destroyed.
     */
    ngOnDestroy() {
        //=> Release the modal if the component is destroyed and if that behaviour is not disabled.
        const dismissOnDestroy = this.swalDismissOnDestroy === undefined
            ? this.moduleLevelDismissOnDestroy
            : this.swalDismissOnDestroy;
        dismissOnDestroy && this.close();
    }
    /**
     * Shows the SweetAlert.
     *
     * Returns the SweetAlert2 promise for convenience and use in code behind templates.
     * Otherwise, (confirm)="myHandler($event)" and (dismiss)="myHandler($event)" can be used in templates.
     */
    fire() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const swal = yield this.sweetAlert2Loader.swal;
            const userOptions = this.swalOptions;
            //=> Build the SweetAlert2 options
            const options = Object.assign(Object.assign({}, userOptions), { 
                //=> Handle modal lifecycle events
                willOpen: composeHook(userOptions.willOpen, (modalElement) => {
                    this.willOpen.emit({ modalElement });
                }), didOpen: composeHook(userOptions.didOpen, (modalElement) => {
                    this.isCurrentlyShown = true;
                    this.didOpen.emit({ modalElement });
                }), didRender: composeHook(userOptions.didRender, (modalElement) => {
                    this.didRender.emit({ modalElement });
                }), willClose: composeHook(userOptions.willClose, (modalElement) => {
                    this.isCurrentlyShown = false;
                    this.willClose.emit({ modalElement });
                }), didClose: composeHook(userOptions.didClose, () => {
                    this.didClose.emit();
                }), didDestroy: composeHook(userOptions.didDestroy, () => {
                    this.didDestroy.emit();
                }) });
            //=> Show the Swal! And wait for confirmation or dimissal.
            const result = yield swal.fire(options);
            //=> Emit on (confirm), (deny) or (dismiss)
            switch (true) {
                case result.isConfirmed:
                    this.confirm.emit(result.value);
                    break;
                case result.isDenied:
                    this.deny.emit();
                    break;
                case result.isDismissed:
                    this.dismiss.emit(result.dismiss);
                    break;
            }
            return result;
            function composeHook(userHook, libHook) {
                return (...args) => (libHook(...args), userHook === null || userHook === void 0 ? void 0 : userHook(...args));
            }
        });
    }
    /**
     * Closes the modal, if opened.
     *
     * @param result The value that the modal will resolve with, triggering either (confirm), (deny) or (dismiss).
     *               If the argument is not passed, it is (dismiss) that will emit an `undefined` reason.
     *               {@see Swal.close}.
     */
    close(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isCurrentlyShown)
                return;
            const swal = yield this.sweetAlert2Loader.swal;
            swal.close(result);
        });
    }
    /**
     * Updates SweetAlert2 options while the modal is opened, causing the modal to re-render.
     * If the modal is not opened, the component options will simply be updated and that's it.
     *
     * /!\ Please note that not all SweetAlert2 options are updatable while the modal is opened.
     *
     * @param options
     */
    update(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (options) {
                this.swalOptions = options;
            }
            if (!this.isCurrentlyShown)
                return;
            const swal = yield this.sweetAlert2Loader.swal;
            const allOptions = this.swalOptions;
            const updatableOptions = Object.keys(allOptions)
                .filter(swal.isUpdatableParameter)
                .reduce((obj, key) => (Object.assign(Object.assign({}, obj), { [key]: allOptions[key] })), {});
            swal.update(updatableOptions);
        });
    }
}
SwalComponent.ɵfac = function SwalComponent_Factory(t) { return new (t || SwalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](fireOnInitToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](dismissOnDestroyToken)); };
SwalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalComponent, selectors: [["swal"]], inputs: { swalOptions: "swalOptions", swalVisible: "swalVisible", title: "title", titleText: "titleText", text: "text", html: "html", footer: "footer", icon: "icon", iconColor: "iconColor", iconHtml: "iconHtml", backdrop: "backdrop", toast: "toast", target: "target", input: "input", width: "width", padding: "padding", background: "background", position: "position", grow: "grow", showClass: "showClass", hideClass: "hideClass", customClass: "customClass", timer: "timer", timerProgressBar: "timerProgressBar", animation: "animation", heightAuto: "heightAuto", allowOutsideClick: "allowOutsideClick", allowEscapeKey: "allowEscapeKey", allowEnterKey: "allowEnterKey", stopKeydownPropagation: "stopKeydownPropagation", keydownListenerCapture: "keydownListenerCapture", showConfirmButton: "showConfirmButton", showDenyButton: "showDenyButton", showCancelButton: "showCancelButton", confirmButtonText: "confirmButtonText", denyButtonText: "denyButtonText", cancelButtonText: "cancelButtonText", confirmButtonColor: "confirmButtonColor", denyButtonColor: "denyButtonColor", cancelButtonColor: "cancelButtonColor", confirmButtonAriaLabel: "confirmButtonAriaLabel", denyButtonAriaLabel: "denyButtonAriaLabel", cancelButtonAriaLabel: "cancelButtonAriaLabel", buttonsStyling: "buttonsStyling", reverseButtons: "reverseButtons", focusConfirm: "focusConfirm", focusDeny: "focusDeny", focusCancel: "focusCancel", showCloseButton: "showCloseButton", closeButtonHtml: "closeButtonHtml", closeButtonAriaLabel: "closeButtonAriaLabel", loaderHtml: "loaderHtml", showLoaderOnConfirm: "showLoaderOnConfirm", preConfirm: "preConfirm", preDeny: "preDeny", imageUrl: "imageUrl", imageWidth: "imageWidth", imageHeight: "imageHeight", imageAlt: "imageAlt", inputLabel: "inputLabel", inputPlaceholder: "inputPlaceholder", inputValue: "inputValue", inputOptions: "inputOptions", inputAutoTrim: "inputAutoTrim", inputAttributes: "inputAttributes", inputValidator: "inputValidator", returnInputValueOnDeny: "returnInputValueOnDeny", validationMessage: "validationMessage", progressSteps: "progressSteps", currentProgressStep: "currentProgressStep", progressStepsDistance: "progressStepsDistance", scrollbarPadding: "scrollbarPadding", swalFireOnInit: "swalFireOnInit", swalDismissOnDestroy: "swalDismissOnDestroy" }, outputs: { willOpen: "willOpen", didOpen: "didOpen", didRender: "didRender", willClose: "willClose", didClose: "didClose", didDestroy: "didDestroy", confirm: "confirm", deny: "deny", dismiss: "dismiss" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function SwalComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
SwalComponent.ctorParameters = () => [
    { type: SweetAlert2LoaderService },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [fireOnInitToken,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [dismissOnDestroyToken,] }] }
];
SwalComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    titleText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    html: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    iconHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    toast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    hideClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    timerProgressBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    heightAuto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowOutsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEscapeKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    allowEnterKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    stopKeydownPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keydownListenerCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showConfirmButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showDenyButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirmButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    denyButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    cancelButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    buttonsStyling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    reverseButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    focusCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showCloseButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    closeButtonAriaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loaderHtml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showLoaderOnConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    imageAlt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAutoTrim: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputAttributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    inputValidator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    returnInputValueOnDeny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    validationMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressSteps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentProgressStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    progressStepsDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollbarPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalFireOnInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalDismissOnDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    swalVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    willOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    willClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    didDestroy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    deny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'swal',
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: SweetAlert2LoaderService }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [fireOnInitToken]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [dismissOnDestroyToken]
            }] }]; }, { willOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], willClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], didDestroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swalOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], titleText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], html: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], toast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], timerProgressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], heightAuto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEscapeKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], allowEnterKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stopKeydownPropagation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keydownListenerCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showConfirmButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDenyButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCancelButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], confirmButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], denyButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancelButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], buttonsStyling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], reverseButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], focusCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showCloseButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeButtonAriaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loaderHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLoaderOnConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], imageAlt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAutoTrim: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAttributes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputValidator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], returnInputValueOnDeny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], validationMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentProgressStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], progressStepsDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollbarPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalFireOnInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], swalDismissOnDestroy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * [swal] directive. It takes a value that defines the SweetAlert and can be of three types:
 *
 * 1) A simple array of two or three strings defining [title, text, icon] - the icon being optional, ex:
 *
 *    <button [swal]="['Title', 'Text']">Click me</button>
 *
 * 2) A native SweetAlert2 options object, ex:
 *
 *    <button [swal]="{ title: 'Title', text: 'Text' }">Click me</button>
 *
 * 3) A reference to an existing SwalComponent instance for more advanced uses, ex:
 *
 *    <button [swal]="mySwal">Click me</button>
 *    <swal #mySwal title="Title" text="Text"></swal>
 */
class SwalDirective {
    constructor(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        /**
         * Emits when the user clicks "Confirm".
         * The event value ($event) can be either:
         *  - by default, just `true`,
         *  - when using {@link input}, the input value,
         *  - when using {@link preConfirm}, the return value of this function.
         *
         * Example:
         *     <swal (confirm)="handleConfirm($event)"></swal>
         *
         *     public handleConfirm(email: string): void {
         *         // ... save user email
         *     }
         */
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Deny".
         * This event bears no value.
         * Use `(deny)` (along with {@link showDenyButton}) when you want a modal with three buttons (confirm, deny and
         * cancel), and/or when you want to handle clear refusal in a separate way than simple dismissal.
         *
         * Example:
         *     <swal (deny)="handleDeny()"></swal>
         *
         *     public handleDeny(): void {
         *     }
         */
        this.deny = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the user clicks "Cancel", or dismisses the modal by any other allowed way.
         * The event value ($event) is a string that explains how the modal was dismissed. It is `undefined` when
         * the modal was programmatically closed (through {@link dismiss} for example).
         *
         * Example:
         *     <swal (dismiss)="handleDismiss($event)"></swal>
         *
         *     public handleDismiss(reason: DismissReason | undefined): void {
         *         // reason can be 'cancel', 'overlay', 'close', 'timer' or undefined.
         *         // ... do something
         *     }
         */
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * SweetAlert2 options or a SwalComponent instance.
     * See the class doc block for more informations.
     */
    set swal(options) {
        if (options instanceof SwalComponent) {
            this.swalInstance = options;
        }
        else if (isArrayOptions(options)) {
            this.swalOptions = {};
            [this.swalOptions.title, this.swalOptions.text, this.swalOptions.icon] = options;
        }
        else {
            this.swalOptions = options;
        }
        function isArrayOptions(value) {
            return Array.isArray(options);
        }
    }
    /**
     * OnInit lifecycle handler.
     * Creates a SwalComponent instance if the user didn't provided one and binds on that component (confirm),
     * (deny) and (dismiss) outputs to reemit on the directive.
     */
    ngOnInit() {
        if (!this.swalInstance) {
            const factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    }
    /**
     * OnDestroy lifecycle handler.
     * Destroys the dynamically-created SwalComponent.
     */
    ngOnDestroy() {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    }
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     */
    onClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.swalInstance)
            return;
        if (this.swalOptions) {
            this.swalInstance.swalOptions = this.swalOptions;
        }
        const swalClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.swalInstance.confirm.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.confirm.emit(v));
        this.swalInstance.deny.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.deny.emit(v));
        this.swalInstance.dismiss.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(swalClosed)).subscribe(v => this.dismiss.emit(v));
        this.swalInstance.fire().then(() => swalClosed.next());
    }
}
SwalDirective.ɵfac = function SwalDirective_Factory(t) { return new (t || SwalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
SwalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalDirective, selectors: [["", "swal", ""]], hostBindings: function SwalDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SwalDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { swal: "swal" }, outputs: { confirm: "confirm", deny: "deny", dismiss: "dismiss" } });
SwalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
SwalDirective.propDecorators = {
    swal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    confirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    deny: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { confirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], deny: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismiss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], swal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    /**
     * Click handler.
     * The directive listens for onclick events on its host element.
     * When this happens, it shows the <swal> attached to this directive.
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();

/**
 * Represents an object of targets for <swal> portals (use with *swalPortal directive).
 * We must use thunks to access the Swal.* functions listed below, because they get created after the first modal is
 * shown, so this object lets us reference those functions safely and in a statically-typed manner.
 */
class SwalPortalTargets {
    constructor() {
        /**
         * Targets the modal close button block contents.
         */
        this.closeButton = {
            element: swal => swal.getCloseButton(),
            options: { showCloseButton: true }
        };
        /**
         * Targets the modal title block contents.
         */
        this.title = {
            element: swal => swal.getTitle(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { title: ' ' }
        };
        /**
         * Targets the modal text block contents (that is another block inside the first content block, so you can still
         * use other modal features like Swal inputs, that are situated inside that parent content block).
         */
        this.content = {
            element: swal => swal.getHtmlContainer(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { text: ' ' }
        };
        /**
         * Targets the actions block contents, where are the confirm and cancel buttons in a normal time.
         * /!\ WARNING: using this target destroys some of the native SweetAlert2 modal's DOM, therefore, if you use this
         *     target, do not update the modal via <swal> @Inputs while the modal is open, or you'll get an error.
         *     We could workaround that inconvenient inside this integration, but that'd be detrimental to memory and
         *     performance of everyone, for a relatively rare use case.
         */
        this.actions = {
            element: swal => swal.getActions(),
            // The button will never exist, but SweetAlert2 shows the actions block only if there is at least one button.
            options: { showConfirmButton: true }
        };
        /**
         * Targets the confirm button contents, replacing the text inside it (not the button itself)
         */
        this.confirmButton = {
            element: swal => swal.getConfirmButton(),
            options: { showConfirmButton: true }
        };
        /**
         * Targets the deny button contents, replacing the text inside it (not the button itself)
         */
        this.denyButton = {
            element: swal => swal.getDenyButton(),
            options: { showDenyButton: true }
        };
        /**
         * Targets the cancel button contents, replacing the text inside it (not the button itself)
         */
        this.cancelButton = {
            element: swal => swal.getCancelButton(),
            options: { showCancelButton: true }
        };
        /**
         * Targets the modal footer contents.
         */
        this.footer = {
            element: swal => swal.getFooter(),
            // Empty text that will never be shown but necessary so SweetAlert2 makes the div visible.
            options: { footer: ' ' }
        };
    }
}
SwalPortalTargets.ɵfac = function SwalPortalTargets_Factory(t) { return new (t || SwalPortalTargets)(); };
SwalPortalTargets.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function SwalPortalTargets_Factory() { return new SwalPortalTargets(); }, token: SwalPortalTargets, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalTargets, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @internal
 * Holds a consumer's Angular template and displays it on a Sweet Alert.
 * See SwalPortalDirective for info about the covered feature.
 */
class SwalPortalComponent {
    constructor() {
        this.template = null;
    }
}
SwalPortalComponent.ɵfac = function SwalPortalComponent_Factory(t) { return new (t || SwalPortalComponent)(); };
SwalPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SwalPortalComponent, selectors: [["swal-portal"]], inputs: { template: "template" }, decls: 1, vars: 1, consts: [[4, "ngTemplateOutlet"]], template: function SwalPortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SwalPortalComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
SwalPortalComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'swal-portal',
                template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * A structural directive that lets you use Angular templates inside of SweetAlerts.
 * There are different targetable zones provided by {@link SwalPortalTargets}: title, content, confirmButton, etc, but
 * you can also make your own target by implementing {@link SwalPortalTarget} and giving it to this directive.
 * The default target is the alert text content zone.
 *
 * Usage in your component's TypeScript (if you use another target than {@link SwalPortalTargets.content}):
 *
 *     @Component({ ... })
 *     export class MyComponent {
 *         public constructor(public readonly swalTargets: SwalPortalTargets) {
 *         }
 *     }
 *
 * Usage in the template:
 *
 *     <swal title="Fill the form" (confirm)="confirmHandler()">
 *         <!-- This form will be displayed as the alert main content
 *              Targets the alert's main content zone by default -->
 *         <form *swalPortal [formControl]="myForm">
 *             ...
 *         </form>
 *
 *         <!-- This targets the confirm button's inner content
 *              Notice the usage of ng-container to avoid creating an useless DOM element inside the button -->
 *         <ng-container *swalPortal="swalTargets.confirmButton">
 *              Send ({{ secondsLeft }} seconds left)
 *         </ng-container>
 *     <swal>
 */
class SwalPortalDirective {
    constructor(resolver, injector, app, templateRef, sweetAlert2Loader, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.sweetAlert2Loader = sweetAlert2Loader;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Subscribes to the the SweetAlert appearance/disappearance events to create/destroy the SwalPortalComponent
     * that will receive the consumer's template.
     */
    ngOnInit() {
        // Can't be set in a default property value, if the customer lets *swalPortal empty, the value we get is undef.
        this.target = this.target || this.swalTargets.content;
        //=> Apply the options provided by the target definition
        void this.swalComponent.update(this.target.options);
        //=> Subscribe to a few hooks frm the parent SwalComponent.
        this.swalComponent.didRender.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didRenderHook.bind(this));
        this.swalComponent.willOpen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.willOpenHook.bind(this));
        this.swalComponent.didDestroy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed)).subscribe(this.didDestroyHook.bind(this));
    }
    /**
     * Signal any {@link destroyed} consumer that this is over, so they can unsubscribe from the
     * parent SwalComponent events.
     */
    ngOnDestroy() {
        this.destroyed.next();
    }
    /**
     * This didRender hook runs 1..n times (per modal instance), just before the modal is shown (and also before the
     * {@link willOpenHook}), or after Swal.update() is called.
     * This is a good place to render, or re-render, our portal contents.
     */
    didRenderHook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //=> Ensure the portal component is created
            if (!this.portalComponentRef) {
                this.portalComponentRef = this.createPortalComponent();
            }
            //=> SweetAlert2 created the modal or just erased all of our content, so we need to install/reinstall it.
            // Swal.update() is synchronous, this observable too, and mountComponentOnTarget too (the promise inside
            // this function is already resolved at this point), so the whole process of re-rendering and re-mounting
            // the portal component is fully synchronous, causing no blinks in the modal contents.
            const swal = yield this.sweetAlert2Loader.swal;
            //=> Find target element
            const targetEl = this.target.element(swal);
            if (!targetEl)
                return;
            //=> Replace target's contents with our component
            // https://jsperf.com/innerhtml-vs-removechild/15
            while (targetEl.firstChild) {
                targetEl.removeChild(targetEl.firstChild);
            }
            targetEl.appendChild(this.portalComponentRef.location.nativeElement);
        });
    }
    /**
     * This willOpen hook runs once (per modal instance), just before the modal is shown on the screen.
     * This is a good place to declare our detached view to the Angular app.
     */
    willOpenHook() {
        if (!this.portalComponentRef)
            return;
        //=> Make the Angular app aware of that detached view so rendering and change detection can happen
        this.app.attachView(this.portalComponentRef.hostView);
    }
    /**
     * This didDestroy hook runs once (per modal instance), just after the modal closing animation terminated.
     * This is a good place to detach and destroy our content, that is not visible anymore.
     */
    didDestroyHook() {
        if (!this.portalComponentRef)
            return;
        //=> Detach the portal component from the app and destroy it
        this.app.detachView(this.portalComponentRef.hostView);
        this.portalComponentRef.destroy();
        this.portalComponentRef = void 0;
    }
    /**
     * Creates the {@link SwalPortalComponent} and gives it the customer's template ref.
     */
    createPortalComponent() {
        //=> Create the SwalPortalComponent that will hold our content
        const factory = this.resolver.resolveComponentFactory(SwalPortalComponent);
        // Yes, we do not use the third argument that would directly use the target as the component's view
        // (unfortunately, because that would give a cleaner DOM and would avoid dirty and direct DOM manipulations)
        // That's because we want to keep our component safe from SweetAlert2's operations on the DOM, and to be
        // able to restore it at any moment, ie. after the modal has been re-rendered.
        const componentRef = factory.create(this.injector, []);
        //=> Apply the consumer's template on the component
        componentRef.instance.template = this.templateRef;
        return componentRef;
    }
}
SwalPortalDirective.ɵfac = function SwalPortalDirective_Factory(t) { return new (t || SwalPortalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SweetAlert2LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalPortalTargets), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SwalComponent, 1)); };
SwalPortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SwalPortalDirective, selectors: [["", "swalPortal", ""]], inputs: { target: ["swalPortal", "target"] } });
SwalPortalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: SweetAlert2LoaderService },
    { type: SwalPortalTargets },
    { type: SwalComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
];
SwalPortalDirective.propDecorators = {
    target: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['swalPortal',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwalPortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[swalPortal]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }, { type: SweetAlert2LoaderService }, { type: SwalPortalTargets }, { type: SwalComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }]; }, { target: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['swalPortal']
        }] }); })();

function provideDefaultSwal() {
    return __webpack_require__.e(/*! import() | sweetalert2 */ "sweetalert2").then(__webpack_require__.t.bind(null, /*! sweetalert2 */ "PSD3", 7));
}
class SweetAlert2Module {
    static forRoot(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                SweetAlert2LoaderService,
                { provide: swalProviderToken, useValue: options.provideSwal || provideDefaultSwal },
                { provide: fireOnInitToken, useValue: options.fireOnInit || false },
                { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy || true }
            ]
        };
    }
    static forChild(options = {}) {
        return {
            ngModule: SweetAlert2Module,
            providers: [
                ...options.provideSwal ? [
                    SweetAlert2LoaderService,
                    { provide: swalProviderToken, useValue: options.provideSwal }
                ] : [],
                ...options.fireOnInit !== undefined ? [
                    { provide: fireOnInitToken, useValue: options.fireOnInit }
                ] : [],
                ...options.dismissOnDestroy !== undefined ? [
                    { provide: dismissOnDestroyToken, useValue: options.dismissOnDestroy }
                ] : []
            ]
        };
    }
}
SweetAlert2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SweetAlert2Module });
SweetAlert2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SweetAlert2Module_Factory(t) { return new (t || SweetAlert2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SweetAlert2Module, { declarations: function () { return [SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]; }, exports: function () { return [SwalComponent, SwalPortalDirective, SwalDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SweetAlert2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    SwalDirective, SwalComponent, SwalPortalDirective, SwalPortalComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                exports: [
                    SwalComponent, SwalPortalDirective, SwalDirective
                ],
                entryComponents: [
                    SwalComponent, SwalPortalComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=sweetalert2-ngx-sweetalert2.js.map

/***/ }),

/***/ "SmBw":
/*!***************************************************!*\
  !*** ./src/app/admin/navbar/navbar.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "T/CH":
/*!**************************************************!*\
  !*** ./src/app/admin/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "idG7");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "SmBw");
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

/***/ "a/9Y":
/*!********************************************************!*\
  !*** ./src/app/admin/inquiries/inquiries.component.ts ***!
  \********************************************************/
/*! exports provided: InquiriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiriesComponent", function() { return InquiriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inquiries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inquiries.component.html */ "FOSW");
/* harmony import */ var _inquiries_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiries.component.css */ "KGPa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");






let InquiriesComponent = class InquiriesComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.delete_success = false;
    }
    ngOnInit() {
        this.api.get_inquiries().subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            this.inquiries = responsedata['message'].inquiry_list;
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
    onClickDeleteConfirm(id) {
        this.api.delete_inquiries(id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            if (responsedata['type'] == 'success') {
                this.delete_success = true;
                this.ngOnInit();
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
};
InquiriesComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
InquiriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inquiries',
        template: _raw_loader_inquiries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inquiries_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InquiriesComponent);



/***/ }),

/***/ "e5/l":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <h5 class=\"card-header\">Profile</h5>\n                <div class=\"card-body\">\n                    <div class=\"col-lg-12\" *ngIf=\"update_success\">\n                        <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                            Profile has been updated successfully!\n                            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                    </div>\n                    <form (ngSubmit)=\"onSubmitUpdateProfile($event)\" [formGroup]=\"profileUpdateForm\">\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"first_name\">First name</label>\n                            <input type=\"text\" class=\"form-control\"  placeholder=\"First Name\" name=\"first_name\" formControlName=\"first_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('first_name').invalid &&  profileUpdateForm.get('first_name').errors &&  (profileUpdateForm.get('first_name').dirty || profileUpdateForm.get('first_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('first_name').hasError('required')\">\n                                    First name is required.\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"last_name\">Last name</label>\n                            <input type=\"text\" class=\"form-control\"  name=\"last_name\" placeholder=\"Last Name\" formControlName=\"last_name\" required>\n                            <div *ngIf=\"profileUpdateForm.get('last_name').invalid &&  profileUpdateForm.get('last_name').errors &&  (profileUpdateForm.get('last_name').dirty || profileUpdateForm.get('last_name').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('last_name').hasError('required')\">\n                                    Last name is required.\n                                </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\"  formControlName=\"email\" required>\n                                <div *ngIf=\"profileUpdateForm.get('email').invalid &&  profileUpdateForm.get('email').errors &&  (profileUpdateForm.get('email').dirty || profileUpdateForm.get('email').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('email').hasError('required')\">\n                                        Email is required.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label for=\"nic\">Nic</label>\n                                <input type=\"text\" class=\"form-control\"  name=\"nic\" placeholder=\"NIC\" formControlName=\"nic\"  required>\n                                <div *ngIf=\"profileUpdateForm.get('nic').invalid &&  profileUpdateForm.get('nic').errors &&  (profileUpdateForm.get('nic').dirty || profileUpdateForm.get('nic').touched)\">\n                                    <div class=\"alert alert-danger\"\n                                        *ngIf=\"profileUpdateForm.get('nic').hasError('required')\">\n                                        NIC is required.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"address\">Address</label>\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address1\"  formControlName=\"address1\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address1').invalid &&  profileUpdateForm.get('address1').errors &&  (profileUpdateForm.get('address1').dirty || profileUpdateForm.get('address1').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address1').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address2\"  formControlName=\"address2\"  required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address2').invalid &&  profileUpdateForm.get('address2').errors &&  (profileUpdateForm.get('address2').dirty || profileUpdateForm.get('address2').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address2').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <input type=\"text\" class=\"form-control\"  placeholder=\"Address\"  name=\"address3\"   formControlName=\"address3\" required/>\n                                    <div *ngIf=\"profileUpdateForm.get('address3').invalid &&  profileUpdateForm.get('address3').errors &&  (profileUpdateForm.get('address3').dirty || profileUpdateForm.get('address3').touched)\">\n                                        <div class=\"alert alert-danger\"\n                                            *ngIf=\"profileUpdateForm.get('address3').hasError('required')\">\n                                            Address is required.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"phone\">Phone</label>\n                            <input type=\"text\" class=\"form-control\"  placeholder=\"Contact Number\" name=\"phone\" formControlName=\"phone\" required>\n                            <div *ngIf=\"profileUpdateForm.get('phone').invalid &&  profileUpdateForm.get('phone').errors &&  (profileUpdateForm.get('phone').dirty || profileUpdateForm.get('phone').touched)\">\n                                <div class=\"alert alert-danger\"\n                                    *ngIf=\"profileUpdateForm.get('phone').hasError('required')\">\n                                    Phone is required.\n                                </div>\n                            </div>\n                            <div *ngIf=\"profileUpdateForm.get('phone').hasError('minlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Phone number must be at least 10 characters long.\n                                </div>\n                            </div>\n                            <div *ngIf=\"profileUpdateForm.get('phone').hasError('maxlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Phone number can contain max 10 characters\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"avatar\">Profile picture</label>\n                            <div class=\"progress form-group\" *ngIf=\"progress > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\n                                </div>\n                            </div>\n                            <input type=\"file\" class=\"form-control\"  name=\"avatar\" (change)=\"onAvatarSelect($event)\" placeholder=\"Profile picture\" required>\n                            <img *ngIf=\"avatar_call_back\" src=\"{{avatar_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"avatarFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{avatarFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                            <label for=\"nic\">NIC picture</label>\n                            <input type=\"file\" class=\"form-control\" name=\"nic_pic\" (change)=\"onNicSelect($event)\" placeholder=\"NIC\" required>\n                            <div class=\"progress form-group\" *ngIf=\"progressnic > 0\">\n                                <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progressnic\">\n                                </div>\n                            </div>\n                            <img *ngIf=\"nic_pic_call_back\" src=\"{{nic_pic_call_back}}\" style=\"width: 200px;\" class=\"mt-3\"/>\n                            <div *ngIf=\"nicPicFileError\">\n                                <div class=\"alert alert-danger\">\n                                    {{nicPicFileErrorMsg}}\n                                </div>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"password\">New Password(optional)</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"  formControlName=\"password\">\n                            <div *ngIf=\"profileUpdateForm.get('password').hasError('minlength')\">\n                                <div class=\"alert alert-danger\">\n                                    Password must be at least 6 characters long.\n                                </div>\n                              </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"profileUpdateForm.invalid\">Update</button>\n                      </form>\n\n                </div>\n              </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "idG7":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n     <a class=\"navbar-brand\" routerLink=\"/admin/dashboard\">\n       Dashboard\n     </a>\n     <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n       <span class=\"navbar-toggler-icon\"></span>\n     </button>\n   \n     <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n       <ul class=\"navbar-nav ml-auto\">\n         <li class=\"nav-item active\">\n           <a class=\"nav-link\" routerLink=\"/admin/dashboard\">Home</a>\n         </li>\n         <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink=\"/admin/users\">Users</a>\n         </li>\n         <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/admin/inquiries\">Inquiries</a>\n        </li>\n         <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink=\"/admin/profile\">Profile</a>\n         </li>\n         <li class=\"nav-item\">\n           <button class=\"btn btn-md btn-outline-primary\" (click)=\"onClickLogOut()\">Logout</button>\n         </li>\n       </ul>\n     </div>\n   </div>\n   </nav>\n   \n ");

/***/ }),

/***/ "jCVI":
/*!********************************************************************!*\
  !*** ./src/app/admin/request-details/request-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_request_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./request-details.component.html */ "u53H");
/* harmony import */ var _request_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-details.component.css */ "zozU");
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

/***/ "kw2M":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "l+Dx":
/*!*************************************************************!*\
  !*** ./src/app/admin/update-user/update-user.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "nRu7":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "8NEO");
/* harmony import */ var _users_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component.css */ "kw2M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");






let UsersComponent = class UsersComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.delete_success = false;
    }
    ngOnInit() {
        this.api.get_admin_users().subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            this.customer_count = responsedata['message'].customer_count;
            this.supplier_count = responsedata['message'].supplier_count;
            this.admin_count = responsedata['message'].admin_count;
            this.user_list = responsedata['message'].user_list;
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
    onClickConfirm(user_id) {
        this.api.delete_user(user_id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const responsedata = response.body;
            if (responsedata['type'] == 'success') {
                this.delete_success = true;
                this.ngOnInit();
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.status == 401) {
                this.router.navigate(['Login']);
            }
        }));
    }
};
UsersComponent.ctorParameters = () => [
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UsersComponent.propDecorators = {
    customer_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['customer_count',] }],
    supplier_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['supplier_count',] }],
    admin_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['admin_count',] }],
    user_list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['user_list',] }]
};
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-users',
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_users_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsersComponent);



/***/ }),

/***/ "o8Ft":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "5tTL");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.css */ "2ghS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ "zuHl");






let DashboardComponent = class DashboardComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        this.api.get_admin_order_count().subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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

/***/ "pBKm":
/*!*****************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "o8Ft");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.component */ "t/mg");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar/navbar.component */ "T/CH");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users/users.component */ "nRu7");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../update-user/update-user.component */ "PJP0");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../request-details/request-details.component */ "jCVI");
/* harmony import */ var _inquiries_inquiries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../inquiries/inquiries.component */ "a/9Y");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-routing.module */ "MXfZ");














let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
            _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_10__["UpdateUserComponent"],
            _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_11__["RequestDetailsComponent"],
            _inquiries_inquiries_component__WEBPACK_IMPORTED_MODULE_12__["InquiriesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__["DashboardRoutingModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["SweetAlert2Module"].forRoot()
        ]
    })
], DashboardModule);



/***/ }),

/***/ "t/mg":
/*!****************************************************!*\
  !*** ./src/app/admin/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "e5/l");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "LDTH");
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
                address3: responsedata['message'].user.address.address3
            });
            this.avatar_call_back = responsedata['message'].user.avatar.url;
            this.nic_pic_call_back = responsedata['message'].user.nic_pic.url;
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
                password: this.profileUpdateForm.get('password').value,
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

/***/ "u53H":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/request-details/request-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n           <div class=\"card\">\n               <div class=\"card-header\">\n                 <a routerLink=\"/admin/dashboard\" class=\"btn btn-md btn-primary float-left\">Back</a>\n                 <span class=\"float-right\">Request Details</span>\n                 <div class=\"clearfix\"></div>\n                </div>\n               <div class=\"card-body\">\n                <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <td>Customer</td>\n                        <td>{{order.customer_id.first_name  +  \" \"  + order.customer_id.last_name}}</td>\n                      </tr>\n                      <tr>\n                        <td>Supplier</td>\n                        <td>{{order.supplier_id.first_name  +  \" \"  + order.supplier_id.last_name}}</td>\n                      </tr>\n                      <tr>\n                        <td>Requested Date</td>\n                        <td>{{order.date}}</td>\n                      </tr>\n                      <tr>\n                        <td>Requested time</td>\n                        <td>{{order.time}}</td>\n                      </tr>\n                      <tr>\n                        <td>Additional note</td>\n                        <td>{{order.note}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n\n                  <div *ngIf=\"order.payment.status == 'confirmed'\">\n                    <p>Payment details</p>\n                  <table class=\"table table-striped\">\n                    <tbody>\n                      <tr>\n                        <th>Transition ID</th>\n                        <td>{{ order.payment.details.transition_id }}</td>\n                      </tr>\n                      <tr>\n                        <th>Amount</th>\n                        <td>{{ order.payment.details.amount }}</td>\n                      </tr>\n                      <tr>\n                        <th>Date</th>\n                        <td>{{ order.payment.details.date | date}}</td>\n                      </tr>\n                      <tr>\n                        <th>Name</th>\n                        <td>{{ order.payment.details.name }}</td>\n                      </tr>\n                      <tr>\n                        <th>Email</th>\n                        <td>{{ order.payment.details.email }}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n               </div>\n           </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "zozU":
/*!*********************************************************************!*\
  !*** ./src/app/admin/request-details/request-details.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlcXVlc3QtZGV0YWlscy9yZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=admin-dashboard-dashboard-module.js.map