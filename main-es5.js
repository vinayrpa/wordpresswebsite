(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+gYf":
    /*!**********************************************!*\
      !*** ./src/app/shared/header/pipes/index.ts ***!
      \**********************************************/

    /*! exports provided: ShortNamePipe */

    /***/
    function gYf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _short_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./short-name */
      "Ohnk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ShortNamePipe", function () {
        return _short_name__WEBPACK_IMPORTED_MODULE_0__["ShortNamePipe"];
      });
      /***/

    },

    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var ngx_trend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-trend */
      "LNGT");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./containers */
      "ggrH");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components */
      "HB4E");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services */
      "AGcZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        providers: [_services__WEBPACK_IMPORTED_MODULE_18__["DashboardService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsModule"], ngx_trend__WEBPACK_IMPORTED_MODULE_3__["TrendModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__["NgApexchartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_15__["DashboardPageComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["VisitsChartComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["PerformanceChartComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["ServerChartComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["RevenueChartComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["DailyLineChartComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["SupportRequestsComponent"], _components__WEBPACK_IMPORTED_MODULE_16__["ProjectStatChartComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsModule"], ngx_trend__WEBPACK_IMPORTED_MODULE_3__["TrendModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__["NgApexchartsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"]],
          exports: [_components__WEBPACK_IMPORTED_MODULE_16__["DailyLineChartComponent"]]
        });
      })();
      /***/

    },

    /***/
    "/Z0x":
    /*!*************************************************!*\
      !*** ./src/app/pages/dashboard/consts/index.ts ***!
      \*************************************************/

    /*! exports provided: customTooltip */

    /***/
    function Z0x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _custom_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./custom-tooltip */
      "QSZ3");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "customTooltip", function () {
        return _custom_tooltip__WEBPACK_IMPORTED_MODULE_0__["customTooltip"];
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Project\angular-material-admin\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0MCZ":
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/layout.component.ts ***!
      \***************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function MCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "0MNC");
      /* harmony import */


      var _header_containers_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../header/containers/header/header.component */
      "dGVw");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "sRhs");

      var _c0 = ["sidenav"];
      var _c1 = ["*"];

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(changeDetectorRef, media) {
          _classCallCheck(this, LayoutComponent);

          this.mobileQuery = media.matchMedia('(max-width: 1024px)');

          this.mobileQueryListener = function () {
            return changeDetectorRef.detectChanges();
          };

          this.mobileQuery.addListener(this.mobileQueryListener);
          this.isShowSidebar = !this.mobileQuery.matches;
        }

        _createClass(LayoutComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.mobileQuery.removeListener(this.mobileQueryListener);
            this.sidenav.close();
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]));
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        viewQuery: function LayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
          }
        },
        ngContentSelectors: _c1,
        decls: 7,
        vars: 4,
        consts: [[3, "isMenuOpened", "isShowSidebar"], [1, "layout"], ["mode", "side", 1, "layout-sidebar", 3, "opened", "mode", "fixedInViewport", "openedChange"], ["sidenav", ""], [1, "layout-content"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isShowSidebar", function LayoutComponent_Template_app_header_isShowSidebar_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return _r0.toggle($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function LayoutComponent_Template_mat_sidenav_openedChange_2_listener($event) {
              return ctx.isShowSidebar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isMenuOpened", ctx.isShowSidebar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.isShowSidebar)("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
          }
        },
        directives: [_header_containers_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"]],
        styles: [".layout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.layout-sidebar[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  margin-top: 64px;\n}\n\n@media (max-width: 576px) {\n  .layout-sidebar[_ngcontent-%COMP%] {\n    width: 218px;\n  }\n}\n\n.layout-content[_ngcontent-%COMP%] {\n  background-color: #F6F7FF;\n  height: calc(100vh - 64px);\n  margin-top: 64px;\n}\n\n@media (max-width: 576px) {\n  .layout-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlFO0VBSkY7SUFLSSxZQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLHlCQ21CaUI7RURsQmpCLDBCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHRTtFQUxGO0lBTUksV0FBQTtFQUFGO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29sb3JzXCI7XHJcblxyXG4ubGF5b3V0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxheW91dC1zaWRlYmFyIHtcclxuICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgIHdpZHRoOiAyMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5sYXlvdXQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgaGVpZ2h0OmNhbGMoMTAwdmggLSA2NHB4KTtcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "0QMH":
    /*!********************!*\
      !*** ./src/hmr.ts ***!
      \********************/

    /*! exports provided: hmrBootstrap */

    /***/
    function QMH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function () {
        return hmrBootstrap;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angularclass/hmr */
      "rB/T");
      /* harmony import */


      var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__);

      var hmrBootstrap = function hmrBootstrap(module, bootstrap) {
        var ngModule;
        module.hot.accept();
        bootstrap().then(function (mod) {
          return ngModule = mod;
        });
        module.hot.dispose(function () {
          var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
          var elements = appRef.components.map(function (c) {
            return c.location.nativeElement;
          });
          var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_1__["createNewHosts"])(elements);
          ngModule.destroy();
          makeVisible();
        });
      };
      /***/

    },

    /***/
    "0fNd":
    /*!********************************************!*\
      !*** ./src/app/pages/auth/guards/index.ts ***!
      \********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function fNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "yULc");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "3x5P":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/header/components/search/search.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function x5P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SearchComponent_input_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "show-search-input": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "open-search": a0
        };
      };

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent() {
          _classCallCheck(this, SearchComponent);

          this.isShowInput = false;
        }

        _createClass(SearchComponent, [{
          key: "showInput",
          value: function showInput() {
            this.isShowInput = true;
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)();
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 4,
        vars: 7,
        consts: [[1, "search", 3, "ngClass", "click"], [1, "search-icon", 3, "ngClass"], ["class", "search-input", "placeholder", "Search...", 4, "ngIf"], ["placeholder", "Search...", 1, "search-input"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_0_listener() {
              return ctx.showInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_input_3_Template, 1, 0, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isShowInput));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isShowInput));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowInput);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  border-radius: 32px;\n  box-sizing: border-box;\n  align-items: center;\n  width: 36px;\n  padding-left: 4px;\n  cursor: pointer;\n  flex-direction: row-reverse;\n}\n.search[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 576px) {\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.show-search-input[_ngcontent-%COMP%] {\n  -webkit-animation: 0.3s open_search;\n          animation: 0.3s open_search;\n  width: 250px;\n  padding-left: 22.4px;\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.search-input[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 19px;\n  font-size: 14px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  height: 36px;\n  width: 100%;\n}\n.search-input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.35);\n}\n.search-icon[_ngcontent-%COMP%] {\n  padding: 0 7px 3px 0;\n  color: rgba(255, 255, 255, 0.35);\n}\n.open-search[_ngcontent-%COMP%] {\n  -webkit-animation: 0.3s move_search-icon;\n          animation: 0.3s move_search-icon;\n  padding-right: 16px;\n  padding-left: 4px;\n}\n@-webkit-keyframes open_search {\n  from {\n    width: 36px;\n  }\n  to {\n    width: 250px;\n  }\n}\n@keyframes open_search {\n  from {\n    width: 36px;\n  }\n  to {\n    width: 250px;\n  }\n}\n@-webkit-keyframes open_search_large {\n  from {\n    width: 36px;\n  }\n  to {\n    width: 150px;\n  }\n}\n@keyframes open_search_large {\n  from {\n    width: 36px;\n  }\n  to {\n    width: 150px;\n  }\n}\n@-webkit-keyframes move_search-icon {\n  from {\n    padding: 0 7px 3px 0;\n  }\n  to {\n    padding-right: 16px;\n  }\n}\n@keyframes move_search-icon {\n  from {\n    padding: 0 7px 3px 0;\n  }\n  to {\n    padding-right: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUhGO0FBS0U7RUFDRSxxQ0NPTztBRFZYO0FBTUU7RUFmRjtJQWdCSSxhQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0UsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQ0xTO0FERVg7QUFNQTtFQUNFLFlDdkJNO0VEd0JOLHVEQUFBO0VBQ0EsaUJBQUE7RUFDQSxlRTdCUztFRjhCVCw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjtBQUtFO0VBQ0UsZ0NDM0JPO0FEd0JYO0FBT0E7RUFDRSxvQkFBQTtFQUNBLGdDQ2pDUztBRDZCWDtBQU9BO0VBQ0Usd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQU9BO0VBQXlCO0lBQU8sV0FBQTtFQUY5QjtFQUU2QztJQUFLLFlBQUE7RUFDbEQ7QUFDRjtBQUZBO0VBQXlCO0lBQU8sV0FBQTtFQUY5QjtFQUU2QztJQUFLLFlBQUE7RUFDbEQ7QUFDRjtBQURBO0VBQStCO0lBQU8sV0FBQTtFQUtwQztFQUxtRDtJQUFLLFlBQUE7RUFReEQ7QUFDRjtBQVRBO0VBQStCO0lBQU8sV0FBQTtFQUtwQztFQUxtRDtJQUFLLFlBQUE7RUFReEQ7QUFDRjtBQVJBO0VBQThCO0lBQU8sb0JBQUE7RUFZbkM7RUFaMkQ7SUFBSyxtQkFBQTtFQWVoRTtBQUNGO0FBaEJBO0VBQThCO0lBQU8sb0JBQUE7RUFZbkM7RUFaMkQ7SUFBSyxtQkFBQTtFQWVoRTtBQUNGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9jb2xvcnNcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2ZvbnRcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stMDg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3ctc2VhcmNoLWlucHV0IHtcclxuICBhbmltYXRpb246IDAuM3Mgb3Blbl9zZWFyY2g7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjIuNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjay0wODtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIGZvbnQtc2l6ZTogJGZzLXNtYWxsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMzZweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHdoaXRlLTM1O1xyXG4gIH1cclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBwYWRkaW5nOiAwIDdweCAzcHggMDtcclxuICBjb2xvcjogJHdoaXRlLTM1O1xyXG59XHJcblxyXG4ub3Blbi1zZWFyY2gge1xyXG4gIGFuaW1hdGlvbjogMC4zcyBtb3ZlX3NlYXJjaC1pY29uO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgb3Blbl9zZWFyY2ggeyBmcm9tIHsgd2lkdGg6IDM2cHg7IH0gdG8geyB3aWR0aDogMjUwcHg7IH0gIH1cclxuQGtleWZyYW1lcyBvcGVuX3NlYXJjaF9sYXJnZSB7IGZyb20geyB3aWR0aDogMzZweDsgfSB0byB7IHdpZHRoOiAxNTBweDsgfSAgfVxyXG5Aa2V5ZnJhbWVzIG1vdmVfc2VhcmNoLWljb24geyBmcm9tIHsgcGFkZGluZzogMCA3cHggM3B4IDA7IH0gdG8geyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyB9ICB9XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "7F+1":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/components/index.ts ***!
      \***************************************************/

    /*! exports provided: UserComponent, EmailComponent, NotificationsComponent, SearchComponent */

    /***/
    function F1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user/user.component */
      "Nva9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"];
      });
      /* harmony import */


      var _email_email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email/email.component */
      "T64g");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmailComponent", function () {
        return _email_email_component__WEBPACK_IMPORTED_MODULE_1__["EmailComponent"];
      });
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "Qw5a");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"];
      });
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search/search.component */
      "3x5P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"];
      });
      /***/

    },

    /***/
    "AGcZ":
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/services/index.ts ***!
      \***************************************************/

    /*! exports provided: DashboardService */

    /***/
    function AGcZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.service */
      "Ge/P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return _dashboard_service__WEBPACK_IMPORTED_MODULE_0__["DashboardService"];
      });
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        hmr: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "B9Og":
    /*!************************************************!*\
      !*** ./src/app/pages/auth/components/index.ts ***!
      \************************************************/

    /*! exports provided: LoginFormComponent, SignFormComponent */

    /***/
    function B9Og(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-form/login-form.component */
      "m9mz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
        return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"];
      });
      /* harmony import */


      var _sign_form_sign_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sign-form/sign-form.component */
      "EglS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SignFormComponent", function () {
        return _sign_form_sign_form_component__WEBPACK_IMPORTED_MODULE_1__["SignFormComponent"];
      });
      /***/

    },

    /***/
    "BUwF":
    /*!***************************************************!*\
      !*** ./src/app/pages/auth/auth-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function BUwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers */
      "e/e7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_1__["AuthPageComponent"]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "DejO":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/support-requests/support-requests.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: SupportRequestsComponent */

    /***/
    function DejO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupportRequestsComponent", function () {
        return SupportRequestsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SupportRequestsComponent_ng_container_7_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3);
        }
      }

      function SupportRequestsComponent_ng_container_7_td_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r7[column_r3]);
        }
      }

      function SupportRequestsComponent_ng_container_7_td_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", element_r7[column_r3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r7[column_r3]);
        }
      }

      function SupportRequestsComponent_ng_container_7_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SupportRequestsComponent_ng_container_7_td_2_span_1_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupportRequestsComponent_ng_container_7_td_2_div_2_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 !== "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r3 === "status");
        }
      }

      function SupportRequestsComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SupportRequestsComponent_ng_container_7_th_1_Template, 2, 1, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupportRequestsComponent_ng_container_7_td_2_Template, 3, 2, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r3);
        }
      }

      function SupportRequestsComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
        }
      }

      function SupportRequestsComponent_tr_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
        }
      }

      var SupportRequestsComponent = function SupportRequestsComponent() {
        _classCallCheck(this, SupportRequestsComponent);

        this.displayedColumns = ['name', 'email', 'product', 'price', 'date', 'city', 'status'];
      };

      SupportRequestsComponent.ɵfac = function SupportRequestsComponent_Factory(t) {
        return new (t || SupportRequestsComponent)();
      };

      SupportRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SupportRequestsComponent,
        selectors: [["app-support-requests"]],
        inputs: {
          supportRequestData: "supportRequestData"
        },
        decls: 10,
        vars: 4,
        consts: [[1, "support-requests"], [1, "support-requests__header"], [1, "support-requests__title"], [1, "support-requests__content"], ["mat-table", "", 1, "support-requests__table", 3, "dataSource"], ["class", "support-requests__table-row", 3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "support-requests__table-row", 3, "matColumnDef"], ["mat-header-cell", "", "class", "support-requests__table-row-title", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "support-requests__table-content", 4, "matCellDef"], ["mat-header-cell", "", 1, "support-requests__table-row-title"], ["mat-cell", "", 1, "support-requests__table-content"], [4, "ngIf"], ["class", "support-requests__content-badge", 3, "ngClass", 4, "ngIf"], [1, "support-requests__content-badge", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function SupportRequestsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Support Requests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-settings-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SupportRequestsComponent_ng_container_7_Template, 3, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SupportRequestsComponent_tr_8_Template, 1, 0, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SupportRequestsComponent_tr_9_Template, 1, 0, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.supportRequestData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_2__["SettingsMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: [".support-requests[_ngcontent-%COMP%] {\n  margin: 0 24px;\n  padding: 0;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n.support-requests__header[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  display: flex;\n  justify-content: space-between;\n  padding: 24px 24px 8px;\n  margin-bottom: 0;\n}\n.support-requests__title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 400;\n  margin: 0;\n  line-height: 40px;\n}\n.support-requests__content[_ngcontent-%COMP%] {\n  height: 427px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n@media (max-width: 576px) {\n  .support-requests__content[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.support-requests__table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.support-requests__table-row[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.support-requests__table-row-title[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 18.4px;\n}\n.support-requests__table-content[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  font-size: 14px;\n  padding: 20px;\n}\n.support-requests__content-badge[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 32px;\n  color: white;\n  text-align: center;\n  padding: 5px 10px;\n  font-size: 13px;\n  box-sizing: border-box;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.75;\n  letter-spacing: 0.45px;\n}\n.support-requests__content-badge[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\nmat-menu[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.send[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.pending[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.declined[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN1cHBvcnQtcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxpRkFBQTtBQUhGO0FBS0U7RUFDRSxjQ0VHO0VEREgsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxlRVRRO0VGVVIsZ0JFbkJTO0VGb0JULFNBQUE7RUFDQSxpQkFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0k7RUFMRjtJQU1JLFlBQUE7RUFKSjtBQUNGO0FBT0U7RUFDRSxXQUFBO0FBTEo7QUFRRTtFQUNFLFlBQUE7QUFOSjtBQVNFO0VBQ0UsY0NqQ1E7RURrQ1IsZUV0Q087RUZ1Q1AsZ0JFN0NTO0VGOENULGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBUEo7QUFVRTtFQUNFLGNDMUNRO0VEMkNSLGVFL0NPO0VGZ0RQLGFBQUE7QUFSSjtBQVdFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQ25ESTtFRG9ESixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkVsRVM7RUZtRVQsaUJBQUE7RUFDQSxzQkFBQTtBQVRKO0FBV0k7RUFDRSx5QkFBQTtBQVROO0FBY0E7RUFDRSxrQkFBQTtBQVhGO0FBY0E7RUFDRSx5QkMxRU07QUQrRFI7QUFjQTtFQUNFLHlCQ3JGTztBRDBFVDtBQWNBO0VBQ0UseUJDcEZLO0FEeUVQIiwiZmlsZSI6InN1cHBvcnQtcmVxdWVzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9mb250JztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5zdXBwb3J0LXJlcXVlc3RzIHtcclxuICBtYXJnaW46IDAgMjRweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDNweCAzcHggLTJweCAkc2hhZG93LWdyZXksIDAgMXB4IDhweCAwICRzaGFkb3ctZGFyay1ncmV5O1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDI0cHggMjRweCA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAkZnMtbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIGhlaWdodDogNDI3cHg7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX190YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICZfX3RhYmxlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAmX190YWJsZS1yb3ctdGl0bGUge1xyXG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDE4LjRweDtcclxuICB9XHJcblxyXG4gICZfX3RhYmxlLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50LWJhZGdlIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNDVweDtcclxuXHJcbiAgICAmOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubWF0LW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnNlbmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3c7XHJcbn1cclxuXHJcbi5kZWNsaW5lZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "EglS":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/components/sign-form/sign-form.component.ts ***!
      \************************************************************************/

    /*! exports provided: SignFormComponent */

    /***/
    function EglS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignFormComponent", function () {
        return SignFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var SignFormComponent = /*#__PURE__*/function () {
        function SignFormComponent() {
          _classCallCheck(this, SignFormComponent);

          this.sendSignForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SignFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "sign",
          value: function sign() {
            if (this.form.valid) {
              this.sendSignForm.emit();
            }
          }
        }]);

        return SignFormComponent;
      }();

      SignFormComponent.ɵfac = function SignFormComponent_Factory(t) {
        return new (t || SignFormComponent)();
      };

      SignFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignFormComponent,
        selectors: [["app-sign-form"]],
        outputs: {
          sendSignForm: "sendSignForm"
        },
        decls: 10,
        vars: 1,
        consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "form__input"], ["matInput", "", "placeholder", "Full name", "formControlName", "name"], ["matInput", "", "placeholder", "Email Address", "type", "email", "formControlName", "email"], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "form-actions__create"]],
        template: function SignFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.sign();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: -15px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n}\n.form-actions__create[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 95%;\n  box-shadow: 0 0 11px 0 #E8EAFC, 0 0 0 -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNpZ24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUFERjtBQUdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJFQUFBO0FBRkoiLCJmaWxlIjoic2lnbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2NvbG9yc1wiO1xyXG5cclxuLmZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmX19pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgJl9fY3JlYXRlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTFweCAwICRzaGFkb3ctd2hpdGUsIDAgMCAwIC0ycHggJHNoYWRvdy1ncmV5LCAwIDFweCA4cHggMCAkc2hhZG93LWRhcmstZ3JleTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Ge/P":
    /*!***************************************************************!*\
      !*** ./src/app/pages/dashboard/services/dashboard.service.ts ***!
      \***************************************************************/

    /*! exports provided: DashboardService */

    /***/
    function GeP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
        return DashboardService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardService = /*#__PURE__*/function () {
        function DashboardService() {
          _classCallCheck(this, DashboardService);
        }

        _createClass(DashboardService, [{
          key: "loadDailyLineChartData",
          value: function loadDailyLineChartData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              dailyData: {
                mobile: [16, 46, 45, 12, 37, 16, 41, 13, 25, 22, 30],
                desktop: [42, 60, 49, 50, 13, 15, 16, 57, 56, 27, 43],
                tablet: [35, 25, 36, 30, 67, 35, 64, 12, 25, 36, 39]
              },
              weeklyData: {
                mobile: [23, 31, 45, 10, 37, 67, 43, 63, 15, 22, 30],
                desktop: [67, 60, 49, 50, 25, 15, 16, 57, 13, 27, 43],
                tablet: [56, 48, 23, 48, 13, 35, 64, 12, 45, 36, 39]
              },
              monthlyData: {
                mobile: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                desktop: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                tablet: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
              },
              labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003']
            });
          }
        }, {
          key: "loadPerformanceChartData",
          value: function loadPerformanceChartData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              integration: 40,
              sdk: 75
            });
          }
        }, {
          key: "loadRevenueChartData",
          value: function loadRevenueChartData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              groupA: Math.round(Math.random() * 100),
              groupB: Math.round(Math.random() * 100),
              groupC: Math.round(Math.random() * 100),
              groupD: Math.round(Math.random() * 100)
            });
          }
        }, {
          key: "loadServerChartData",
          value: function loadServerChartData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              firstServerChartData: [18107.85, 49128.0, 38122.9, 28965.5, 49340.7],
              firstDataTitle: '45% / 78°С / 78 Ghz',
              secondServerChartData: [18423.7, 48423.5, 28514.3, 48481.85, 18487.7],
              secondDataTitle: '57% / 45°С / 54 Ghz',
              thirdServerChartData: [17114.25, 27126.6, 47116.95, 37203.7, 17233.75],
              thirdDataTitle: '87% / 55°С / 76 Ghz',
              dates: ['13 Nov 2017', '14 Nov 2017', '15 Nov 2017', '16 Nov 2017', '17 Nov 2017']
            });
          }
        }, {
          key: "loadSupportRequestData",
          value: function loadSupportRequestData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([{
              name: 'Mark Otto',
              email: 'ottoto@wxample.com',
              product: 'ON the Road',
              price: '$25 224.2',
              date: '11 May 2017',
              city: 'Otsego',
              status: 'send'
            }, {
              name: 'Jacob Thornton',
              email: 'thornton@wxample.com',
              product: 'HP Core i7',
              price: '$1 254.2',
              date: '4 Jun 2017',
              city: 'Fivepointville',
              status: 'send'
            }, {
              name: 'Larry the Bird',
              email: 'bird@wxample.com',
              product: 'Air Pro',
              price: '$1 570.0',
              date: '27 Aug 2017',
              city: 'Leadville North',
              status: 'pending'
            }, {
              name: 'Joseph May',
              email: 'josephmay@wxample.com',
              product: 'Version Control',
              price: '$5 224.5',
              date: '19 Feb 2018',
              city: 'Seaforth',
              status: 'declined'
            }, {
              name: 'Peter Horadnia',
              email: 'horadnia@wxample.com',
              product: 'Let\'s Dance',
              price: '$43 594.7',
              date: '1 Mar 2018',
              city: 'Hanoverton',
              status: 'send'
            }]);
          }
        }, {
          key: "loadVisitsChartData",
          value: function loadVisitsChartData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              data: [7, 6, 3, 8, 10, 6, 7, 8, 3, 0, 7, 6, 2, 7, 4, 7, 3, 6, 2, 3, 8, 1, 0, 4, 9],
              registration: '860',
              signOut: '32',
              rate: '3.25',
              all: '12.678'
            });
          }
        }, {
          key: "loadProjectsStatsData",
          value: function loadProjectsStatsData() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              lightBlue: {
                daily: {
                  name: 'Light Blue',
                  users: '199',
                  percent: -3.7,
                  registrations: '33',
                  bounce: '3.25%',
                  views: '330',
                  series: [{
                    name: 'Net Profit',
                    data: [210, 95, 155, 200, 61, 135, 63]
                  }]
                },
                week: {
                  name: 'Light Blue',
                  users: '1293',
                  percent: 3.1,
                  registrations: '233',
                  bounce: '3.1%',
                  views: '2310',
                  series: [{
                    name: 'Net Profit',
                    data: [65, 195, 135, 95, 72, 155, 200]
                  }]
                },
                monthly: {
                  name: 'Light Blue',
                  users: '9991',
                  percent: -3.1,
                  registrations: '725',
                  bounce: '3.3%',
                  views: '12301',
                  series: [{
                    name: 'Net Profit',
                    data: [152, 61, 142, 183, 74, 195, 210]
                  }]
                }
              },
              singApp: {
                daily: {
                  name: 'Sing App',
                  users: '121',
                  percent: -3.2,
                  registrations: '15',
                  bounce: '3.01%',
                  views: '302',
                  series: [{
                    name: 'Net Profit',
                    data: [135, 65, 192, 215, 85, 154, 75]
                  }]
                },
                week: {
                  name: 'Sing App',
                  users: '956',
                  percent: 2.9,
                  registrations: '295',
                  bounce: '3.15%',
                  views: '2401',
                  series: [{
                    name: 'Net Profit',
                    data: [78, 145, 186, 64, 78, 135, 224]
                  }]
                },
                monthly: {
                  name: 'Sing App',
                  users: '9982',
                  percent: -3.23,
                  registrations: '712',
                  bounce: '3.2%',
                  views: '12256',
                  series: [{
                    name: 'Net Profit',
                    data: [59, 75, 153, 194, 87, 205, 215]
                  }]
                }
              },
              rns: {
                daily: {
                  name: 'RNS',
                  users: '175',
                  percent: -3.1,
                  registrations: '31',
                  bounce: '3.23%',
                  views: '301',
                  series: [{
                    name: 'Net Profit',
                    data: [205, 81, 175, 192, 52, 199, 206]
                  }]
                },
                week: {
                  name: 'RNS',
                  users: '1395',
                  percent: 3.21,
                  registrations: '235',
                  bounce: '3.23%',
                  views: '2215',
                  series: [{
                    name: 'Net Profit',
                    data: [51, 186, 159, 201, 72, 86, 212]
                  }]
                },
                monthly: {
                  name: 'RNS',
                  users: '9125',
                  percent: -3.3,
                  registrations: '756',
                  bounce: '3.1%',
                  views: '12025',
                  series: [{
                    name: 'Net Profit',
                    data: [161, 84, 151, 201, 45, 196, 57]
                  }]
                }
              }
            });
          }
        }]);

        return DashboardService;
      }();

      DashboardService.ɵfac = function DashboardService_Factory(t) {
        return new (t || DashboardService)();
      };

      DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DashboardService,
        factory: DashboardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "HB4E":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/components/index.ts ***!
      \*****************************************************/

    /*! exports provided: VisitsChartComponent, PerformanceChartComponent, RevenueChartComponent, ServerChartComponent, DailyLineChartComponent, SupportRequestsComponent, ProjectStatChartComponent */

    /***/
    function HB4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _visits_chart_visits_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./visits-chart/visits-chart.component */
      "qw33");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VisitsChartComponent", function () {
        return _visits_chart_visits_chart_component__WEBPACK_IMPORTED_MODULE_0__["VisitsChartComponent"];
      });
      /* harmony import */


      var _performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./performance-chart/performance-chart.component */
      "Ojze");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PerformanceChartComponent", function () {
        return _performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceChartComponent"];
      });
      /* harmony import */


      var _revenue_chart_revenue_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./revenue-chart/revenue-chart.component */
      "WZvx");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RevenueChartComponent", function () {
        return _revenue_chart_revenue_chart_component__WEBPACK_IMPORTED_MODULE_2__["RevenueChartComponent"];
      });
      /* harmony import */


      var _server_chart_server_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./server-chart/server-chart.component */
      "wG6G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ServerChartComponent", function () {
        return _server_chart_server_chart_component__WEBPACK_IMPORTED_MODULE_3__["ServerChartComponent"];
      });
      /* harmony import */


      var _daily_line_chart_daily_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./daily-line-chart/daily-line-chart.component */
      "V9Mq");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DailyLineChartComponent", function () {
        return _daily_line_chart_daily_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["DailyLineChartComponent"];
      });
      /* harmony import */


      var _support_requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./support-requests/support-requests.component */
      "DejO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SupportRequestsComponent", function () {
        return _support_requests_support_requests_component__WEBPACK_IMPORTED_MODULE_5__["SupportRequestsComponent"];
      });
      /* harmony import */


      var _project_stat_chart_project_stat_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project-stat-chart/project-stat-chart.component */
      "oTV+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ProjectStatChartComponent", function () {
        return _project_stat_chart_project_stat_chart_component__WEBPACK_IMPORTED_MODULE_6__["ProjectStatChartComponent"];
      });
      /***/

    },

    /***/
    "L9iM":
    /*!************************************************!*\
      !*** ./src/app/shared/header/header.module.ts ***!
      \************************************************/

    /*! exports provided: HeaderModule */

    /***/
    function L9iM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderModule", function () {
        return HeaderModule;
      });
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers */
      "atiG");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components */
      "7F+1");
      /* harmony import */


      var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/notifications/notifications.component */
      "Qw5a");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/search/search.component */
      "3x5P");
      /* harmony import */


      var _pipes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pipes */
      "+gYf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderModule = function HeaderModule() {
        _classCallCheck(this, HeaderModule);
      };

      HeaderModule.ɵfac = function HeaderModule_Factory(t) {
        return new (t || HeaderModule)();
      };

      HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: HeaderModule
      });
      HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](HeaderModule, {
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _components__WEBPACK_IMPORTED_MODULE_9__["EmailComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__["NotificationsComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _pipes__WEBPACK_IMPORTED_MODULE_12__["ShortNamePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]],
          exports: [_containers__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "LAZa":
    /*!************************************************************************!*\
      !*** ./src/app/pages/auth/containers/auth-page/auth-page.component.ts ***!
      \************************************************************************/

    /*! exports provided: AuthPageComponent */

    /***/
    function LAZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function () {
        return AuthPageComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services */
      "foWl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/login-form/login-form.component */
      "m9mz");
      /* harmony import */


      var _components_sign_form_sign_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/sign-form/sign-form.component */
      "EglS");
      /* harmony import */


      var _pipes_year_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/year.pipe */
      "Q+Is");

      var AuthPageComponent = /*#__PURE__*/function () {
        function AuthPageComponent(service, router) {
          _classCallCheck(this, AuthPageComponent);

          this.service = service;
          this.router = router;
          this.todayDate = new Date();
          this.routers = _consts__WEBPACK_IMPORTED_MODULE_0__["routes"];
        }

        _createClass(AuthPageComponent, [{
          key: "sendLoginForm",
          value: function sendLoginForm() {
            this.service.login();
            this.router.navigate([this.routers.DASHBOARD]).then();
          }
        }, {
          key: "sendSignForm",
          value: function sendSignForm() {
            this.service.sign();
            this.router.navigate([this.routers.DASHBOARD]).then();
          }
        }]);

        return AuthPageComponent;
      }();

      AuthPageComponent.ɵfac = function AuthPageComponent_Factory(t) {
        return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AuthPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AuthPageComponent,
        selectors: [["app-auth-page"]],
        decls: 43,
        vars: 3,
        consts: [[1, "auth-page"], [1, "auth-page__content-block"], [1, "auth-page__content-wrapper"], [1, "auth-page__group"], ["label", "Login"], [1, "auth-page__group-title"], [1, "auth-page__google-button-wrapper"], ["mat-raised-button", "", 1, "auth-page__google-button"], ["src", "./assets/auth/google.svg", "alt", "google", 1, "auth-page__google-button-icon"], [1, "auth-page__border-wrapper"], [1, "auth-page__border-line"], [1, "auth-page__border-title"], [3, "sendLoginForm"], ["label", "New User"], [1, "auth-page__group-sub-title"], [3, "sendSignForm"], [1, "auth-page__footer-title"], ["href", "https://flatlogic.com/"], [1, "auth-page__logo"], [1, "auth-page__logo-wrapper"], ["src", "./assets/auth/logo.svg", "alt", "logo", 1, "auth-page__logo-img"], [1, "auth-page__logo-title"]],
        template: function AuthPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-tab-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Good Morning, User");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sign in with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "or");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-login-form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sendLoginForm", function AuthPageComponent_Template_app_login_form_sendLoginForm_16_listener() {
              return ctx.sendLoginForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Welcome!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Create you account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "app-sign-form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sendSignForm", function AuthPageComponent_Template_app_sign_form_sendSignForm_22_listener() {
              return ctx.sendSignForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "or");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sign in with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Flatlogic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, ", LLC. All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h6", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Material Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\xA9 2014-", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 1, ctx.todayDate), " ");
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _components_sign_form_sign_form_component__WEBPACK_IMPORTED_MODULE_7__["SignFormComponent"]],
        pipes: [_pipes_year_pipe__WEBPACK_IMPORTED_MODULE_8__["YearPipe"]],
        styles: [".auth-page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.auth-page__content-block[_ngcontent-%COMP%] {\n  width: 37%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media (max-width: 768px) {\n  .auth-page__content-block[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.auth-page__content-wrapper[_ngcontent-%COMP%] {\n  width: 45%;\n  height: 100%;\n  padding: 16px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .auth-page__content-wrapper[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n  .auth-page__content-wrapper[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n.auth-page__group[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.auth-page__group-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n  margin-top: 37px;\n  letter-spacing: -0.7px;\n  text-align: center;\n  line-height: 37px;\n  color: #4A4A4A;\n}\n.auth-page__group-sub-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 60px;\n  letter-spacing: -0.5px;\n  text-align: center;\n  line-height: 24px;\n  color: #4A4A4A;\n}\n.auth-page__google-button-wrapper[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  margin-bottom: 10px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.auth-page__google-button[_ngcontent-%COMP%] {\n  width: 95%;\n  padding: 0;\n  box-shadow: 0 0 11px 0 #E8EAFC, 0 0 0 -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n.auth-page__google-button-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 16px;\n}\n.auth-page__border-wrapper[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin: 32px 0;\n}\n.auth-page__border-line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: #B9B9B9;\n  opacity: 0.3;\n}\n.auth-page__border-title[_ngcontent-%COMP%] {\n  font-size: 11.2px;\n  padding: 0 16px;\n  margin: 0;\n  color: #4A4A4A;\n}\n.auth-page__logo[_ngcontent-%COMP%] {\n  width: 63%;\n  height: 100%;\n  background-color: #536DFE;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .auth-page__logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-page__logo-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.auth-page__logo-img[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.auth-page__logo-title[_ngcontent-%COMP%] {\n  font-size: 62px;\n  color: white;\n  font-weight: 500;\n  letter-spacing: -1.5px;\n  line-height: 62px;\n}\n.auth-page__footer-title[_ngcontent-%COMP%] {\n  color: #536DFE;\n  font-size: 10px;\n  opacity: 0.7;\n}\n.auth-page__footer-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #536DFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGF1dGgtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjtBQUtFO0VBTEY7SUFNSSxzQkFBQTtFQUZGO0FBQ0Y7QUFJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJDUEk7RURRSixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSUk7RUFSRjtJQVNJLFdBQUE7RUFESjtBQUNGO0FBSUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBSUk7RUFSRjtJQVNJLFVBQUE7RUFESjtBQUNGO0FBR0k7RUFaRjtJQWFJLFVBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxnQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EsZ0JFaERRO0VGaURSLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0M1Q1E7QUQwQ1o7QUFLRTtFQUNFLGVFaERPO0VGaURQLGdCRTFEUTtFRjJEUixtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDdERRO0FEbURaO0FBTUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPRTtFQUNFLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMkVBQUE7QUFMSjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQVBKO0FBVUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQ3RGUztFRHVGVCxZQUFBO0FBUko7QUFXRTtFQUNFLGlCRWpHSTtFRmtHSixlQUFBO0VBQ0EsU0FBQTtFQUNBLGNDL0ZRO0FEc0ZaO0FBWUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzlHRztFRCtHSCxhQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQVlJO0VBUEY7SUFRSSxhQUFBO0VBVEo7QUFDRjtBQVlFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQWFFO0VBQ0UsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsZUFBQTtFQUNBLFlDN0hJO0VEOEhKLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVpKO0FBZUU7RUFDRSxjQzVJRztFRDZJSCxlQUFBO0VBQ0EsWUFBQTtBQWJKO0FBY0k7RUFDRSxxQkFBQTtFQUNBLGNDakpDO0FEcUlQIiwiZmlsZSI6ImF1dGgtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9jb2xvcnNcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZm9udFwiO1xyXG5cclxuLmF1dGgtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudC1ibG9jayB7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWVkaXVtKSBhbmQgKG1heC13aWR0aDogJGxhcmdlKXtcclxuICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2dyb3VwIHtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAmX19ncm91cC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LW5vcm1hbDtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICB9XHJcblxyXG4gICZfX2dyb3VwLXN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmcy1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbm9ybWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAkZGFyay1ncmV5O1xyXG4gIH1cclxuXHJcbiAgJl9fZ29vZ2xlLWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19nb29nbGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDAgMCAtMnB4ICRzaGFkb3ctZ3JleSwgMCAxcHggOHB4IDAgJHNoYWRvdy1kYXJrLWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19nb29nbGUtYnV0dG9uLWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAmX19ib3JkZXItd3JhcHBlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5cclxuICAmX19ib3JkZXItbGluZSB7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG5cclxuICAmX19ib3JkZXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAkZnMteHM7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleVxyXG4gIH1cclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICB3aWR0aDogNjMlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbG9nby13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sb2dvLWltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nby10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDYycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMS41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICB9XHJcblxyXG4gICZfX2Zvb3Rlci10aXRsZSB7XHJcbiAgICBjb2xvcjogJGJsdWU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Nva9":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/header/components/user/user.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserComponent */

    /***/
    function Nva9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent() {
          _classCallCheck(this, UserComponent);

          this.signOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.routes = _consts__WEBPACK_IMPORTED_MODULE_1__["routes"];
          this.flatlogicEmail = "https://flatlogic.com";
        }

        _createClass(UserComponent, [{
          key: "signOutEmit",
          value: function signOutEmit() {
            this.signOut.emit();
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)();
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        inputs: {
          user: "user"
        },
        outputs: {
          signOut: "signOut"
        },
        decls: 25,
        vars: 4,
        consts: [["mat-mini-fab", "", 1, "user-button", 3, "matMenuTriggerFor"], [1, "user-button__icon"], ["xPosition", "before"], ["userMenu", "matMenu"], [1, "user-menu-title"], [1, "user-menu-title__name"], [1, "user-menu-title__link", 3, "href"], ["mat-menu-item", "", 1, "user-menu__item-title"], [1, "user-menu-icon"], [1, "sign-button-wrapper"], ["mat-flat-button", "", 1, "sign-button", 3, "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Flatlogic.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tasks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Messages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_23_listener() {
              return ctx.signOutEmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.name, " ", ctx.user.lastName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.flatlogicEmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"]],
        styles: [".user-button[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  box-shadow: none;\n  margin-left: 16px;\n}\n.user-button__icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35);\n}\n.user-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 576px) {\n  .user-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.user-menu-title[_ngcontent-%COMP%] {\n  padding: 16px 48px 0 16px;\n  margin-bottom: 4px;\n}\n.user-menu-title__name[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-weight: 400;\n  font-size: 24px;\n  color: #4A4A4A;\n}\n.user-menu-title__link[_ngcontent-%COMP%] {\n  color: #536DFE;\n  font-weight: 400;\n  font-size: 14px;\n  text-decoration: none;\n}\n.user-menu-icon[_ngcontent-%COMP%] {\n  color: #B9B9B9;\n  margin-right: 16px;\n  opacity: 0.8;\n}\n.sign-button-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px 0 16px 0;\n  width: 100%;\n}\n.sign-button[_ngcontent-%COMP%] {\n  border: 1px solid;\n  color: #536DFE;\n  width: 80%;\n}\n.user-menu__item-title[_ngcontent-%COMP%] {\n  color: #B9B9B9;\n}\n.user-menu__item-title[_ngcontent-%COMP%]:hover {\n  color: #4A4A4A;\n  background-color: #F3F5FF;\n}\n.user-menu__item-title[_ngcontent-%COMP%]:hover   .user-menu-icon[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVzZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UseUJDSks7RURLTCxnQkFBQTtFQUNBLGlCQUFBO0FBSEY7QUFLRTtFQUNFLGdDQ01PO0FEVFg7QUFNRTtFQUNFLHFDQ1NPO0FEYlg7QUFPRTtFQWJGO0lBY0ksYUFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxnQkU1QlM7RUY2QlQsZUVuQk87RUZvQlAsY0NwQlE7QURnQlo7QUFPRTtFQUNFLGNDakNHO0VEa0NILGdCRW5DUztFRm9DVCxlRTlCTztFRitCUCxxQkFBQTtBQUxKO0FBU0E7RUFDRSxjQy9CVztFRGdDWCxrQkFBQTtFQUNBLFlBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFORjtBQVNBO0VBQ0UsaUJBQUE7RUFDQSxjQ3RESztFRHVETCxVQUFBO0FBTkY7QUFVRTtFQUNFLGNDbERTO0FEMkNiO0FBU0k7RUFDRSxjQ3RETTtFRHVETix5QkM3RE87QURzRGI7QUFTTTtFQUNFLGNBQUE7QUFQUiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvZm9udCc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG4udXNlci1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgY29sb3I6ICR3aGl0ZS0zNTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLTA4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLW1lbnUtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDE2cHggNDhweCAwIDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICAmX19uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZzLWxhcmdlO1xyXG4gICAgY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19saW5rIHtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZzLXNtYWxsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItbWVudS1pY29uIHtcclxuICBjb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIG9wYWNpdHk6IC44O1xyXG59XHJcblxyXG4uc2lnbi1idXR0b24td3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCAwIDE2cHggMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZ24tYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBjb2xvcjogJGJsdWU7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnVzZXItbWVudSB7XHJcbiAgJl9faXRlbS10aXRsZSB7XHJcbiAgICBjb2xvcjogJGxpZ2h0LWdyZXk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkZGFyay1ncmV5O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS13aGl0ZTtcclxuXHJcbiAgICAgICYgLnVzZXItbWVudS1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzUzNkRGRTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Ohnk":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/pipes/short-name.ts ***!
      \***************************************************/

    /*! exports provided: ShortNamePipe */

    /***/
    function Ohnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShortNamePipe", function () {
        return ShortNamePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShortNamePipe = /*#__PURE__*/function () {
        function ShortNamePipe() {
          _classCallCheck(this, ShortNamePipe);
        }

        _createClass(ShortNamePipe, [{
          key: "transform",
          value: function transform(value) {
            var commaIndex = value.search('\\s');
            return '' + value[0].toUpperCase() + value[commaIndex + 1].toUpperCase();
          }
        }]);

        return ShortNamePipe;
      }();

      ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) {
        return new (t || ShortNamePipe)();
      };

      ShortNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "shortName",
        type: ShortNamePipe,
        pure: true
      });
      /***/
    },

    /***/
    "Ojze":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/performance-chart/performance-chart.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PerformanceChartComponent */

    /***/
    function Ojze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerformanceChartComponent", function () {
        return PerformanceChartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      var PerformanceChartComponent = function PerformanceChartComponent() {
        _classCallCheck(this, PerformanceChartComponent);
      };

      PerformanceChartComponent.ɵfac = function PerformanceChartComponent_Factory(t) {
        return new (t || PerformanceChartComponent)();
      };

      PerformanceChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PerformanceChartComponent,
        selectors: [["app-performance-chart"]],
        inputs: {
          performanceChartData: "performanceChartData"
        },
        decls: 22,
        vars: 2,
        consts: [[1, "performance-chart"], [1, "performance-chart__header"], [1, "performance-chart__header-title"], [1, "performance-chart__content"], [1, "performance-chart__content-header"], [1, "performance-chart__content-header-item"], [1, "performance-chart__content-header-item-icon_blue"], [1, "performance-chart__content-header-item-text"], [1, "performance-chart__content-header-item-icon_yellow"], [1, "performance-chart__progress-wrapper"], [1, "performance-chart__progress-title"], ["mode", "determinate", 1, "performance-chart__progress-bar", 3, "value"], ["mode", "determinate", "color", "accent", 1, "performance-chart__progress-bar", 3, "value"]],
        template: function PerformanceChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "App Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-settings-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SDK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Integration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-progress-bar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SDK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-progress-bar", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.performanceChartData.integration);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.performanceChartData.sdk);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_2__["SettingsMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
        styles: [".performance-chart[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  display: flex;\n  flex-direction: column;\n  height: 192px;\n  justify-content: space-between;\n}\n.performance-chart__header[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #6E6E6E;\n  display: flex;\n  justify-content: space-between;\n}\n.performance-chart__header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  margin: 0;\n  line-height: 40px;\n}\n.performance-chart__content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 70%;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.performance-chart__content-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n.performance-chart__content-header-item[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin-right: 16px;\n}\n.performance-chart__content-header-item-icon_blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n}\n.performance-chart__content-header-item-icon_yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n}\n.performance-chart__content-header-item-text[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #6E6E6E;\n}\n.performance-chart__progress-title[_ngcontent-%COMP%] {\n  margin: 20px 0 5px 0;\n  font-weight: 400;\n  font-size: 21px;\n  color: #6E6E6E;\n}\n.performance-chart__progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n@media (576px) {\n  .performance-chart__progress-bar[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBlcmZvcm1hbmNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlGQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBSEY7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsY0NERztFREVILGFBQUE7RUFDQSw4QkFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFITjtBQU9FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBTEo7QUFPSTtFQUNFLGFBQUE7QUFMTjtBQU9NO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQU9RO0VBQ0UseUJDdkNIO0VEd0NHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFMVjtBQVFRO0VBQ0UseUJDL0NEO0VEZ0RDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFOVjtBQVNRO0VBQ0UsZ0JBQUE7RUFDQSxjQzNDSDtBRG9DUDtBQWFFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVFdkRRO0VGd0RSLGNDckRHO0FEMENQO0FBY0U7RUFDRSxrQkFBQTtBQVpKO0FBY0k7RUFIRjtJQUlJLG1CQUFBO0VBWEo7QUFDRiIsImZpbGUiOiJwZXJmb3JtYW5jZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2ZvbnQnO1xyXG5cclxuLnBlcmZvcm1hbmNlLWNoYXJ0IHtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMXB4IDAgI0U4RUFGQywgMCAzcHggM3B4IC0ycHggI0IyQjJCMjFBLCAwIDFweCA4cHggMCAjOUE5QTlBMUE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTkycHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAmLWl0ZW0ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICYtaWNvbl9ibHVlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1pY29uX3llbGxvdyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19wcm9ncmVzcy10aXRsZSB7XHJcbiAgICBtYXJnaW46IDIwcHggMCA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6ICRmcy1tZWRpdW07XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbiAgfVxyXG5cclxuICAmX19wcm9ncmVzcy1iYXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgIEBtZWRpYSAoJHNtYWxsKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _header_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./header/header.module */
      "L9iM");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "sRhs");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./footer/footer.component */
      "jQpT");
      /* harmony import */


      var _ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var _ui_elements_date_menu_date_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./ui-elements/date-menu/date-menu.component */
      "h0g5");
      /* harmony import */


      var _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layout/layout.component */
      "0MCZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"]], _header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_12__["SettingsMenuComponent"], _ui_elements_date_menu_date_menu_component__WEBPACK_IMPORTED_MODULE_13__["DateMenuComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"]],
          imports: [_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_0__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"]],
          exports: [_header_header_module__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_12__["SettingsMenuComponent"], _ui_elements_date_menu_date_menu_component__WEBPACK_IMPORTED_MODULE_13__["DateMenuComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"]]
        });
      })();
      /***/

    },

    /***/
    "PmEB":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/dashboard/containers/dashboard-page/dashboard-page.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: DashboardPageComponent */

    /***/
    function PmEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
        return DashboardPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services */
      "AGcZ");
      /* harmony import */


      var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/layout/layout.component */
      "0MCZ");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _components_visits_chart_visits_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/visits-chart/visits-chart.component */
      "qw33");
      /* harmony import */


      var _components_performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/performance-chart/performance-chart.component */
      "Ojze");
      /* harmony import */


      var _components_server_chart_server_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/server-chart/server-chart.component */
      "wG6G");
      /* harmony import */


      var _components_revenue_chart_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/revenue-chart/revenue-chart.component */
      "WZvx");
      /* harmony import */


      var _components_daily_line_chart_daily_line_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/daily-line-chart/daily-line-chart.component */
      "V9Mq");
      /* harmony import */


      var _components_project_stat_chart_project_stat_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/project-stat-chart/project-stat-chart.component */
      "oTV+");
      /* harmony import */


      var _components_support_requests_support_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/support-requests/support-requests.component */
      "DejO");
      /* harmony import */


      var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/footer/footer.component */
      "jQpT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DashboardPageComponent = function DashboardPageComponent(service) {
        _classCallCheck(this, DashboardPageComponent);

        this.service = service;
        this.dailyLineChartData$ = this.service.loadDailyLineChartData();
        this.performanceChartData$ = this.service.loadPerformanceChartData();
        this.revenueChartData$ = this.service.loadRevenueChartData();
        this.serverChartData$ = this.service.loadServerChartData();
        this.supportRequestData$ = this.service.loadSupportRequestData();
        this.visitsChartData$ = this.service.loadVisitsChartData();
        this.projectsStatsData$ = this.service.loadProjectsStatsData();
      };

      DashboardPageComponent.ɵfac = function DashboardPageComponent_Factory(t) {
        return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]));
      };

      DashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardPageComponent,
        selectors: [["app-dashboard-page"]],
        decls: 26,
        vars: 21,
        consts: [["role", "heading", 1, "page-header"], ["mat-flat-button", "", "color", "warn"], [1, "charts-wrapper"], [1, "chart"], [3, "visitsChartData"], [3, "performanceChartData"], [3, "serverChartData"], [3, "revenueCharData"], [3, "dailyLineChartData"], [3, "projectsStatsData"], [3, "supportRequestData"]],
        template: function DashboardPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Latest Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-visits-chart", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-performance-chart", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-server-chart", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-revenue-chart", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-daily-line-chart", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-project-stat-chart", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-support-requests", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visitsChartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.visitsChartData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("performanceChartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.performanceChartData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serverChartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, ctx.serverChartData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("revenueCharData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, ctx.revenueChartData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dailyLineChartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, ctx.dailyLineChartData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectsStatsData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 17, ctx.projectsStatsData$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("supportRequestData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, ctx.supportRequestData$));
          }
        },
        directives: [_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _components_visits_chart_visits_chart_component__WEBPACK_IMPORTED_MODULE_5__["VisitsChartComponent"], _components_performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_6__["PerformanceChartComponent"], _components_server_chart_server_chart_component__WEBPACK_IMPORTED_MODULE_7__["ServerChartComponent"], _components_revenue_chart_revenue_chart_component__WEBPACK_IMPORTED_MODULE_8__["RevenueChartComponent"], _components_daily_line_chart_daily_line_chart_component__WEBPACK_IMPORTED_MODULE_9__["DailyLineChartComponent"], _components_project_stat_chart_project_stat_chart_component__WEBPACK_IMPORTED_MODULE_10__["ProjectStatChartComponent"], _components_support_requests_support_requests_component__WEBPACK_IMPORTED_MODULE_11__["SupportRequestsComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        styles: [".charts-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 8px;\n}\n@media (max-width: 1024px) {\n  .charts-wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 1024px) {\n  .chart[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 576px) {\n  .chart[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBSkY7SUFLSSxlQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBRUU7RUFIRjtJQUlJLFVBQUE7RUFDRjtBQUNGO0FBQ0U7RUFQRjtJQVFJLFdBQUE7RUFFRjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5jaGFydHMtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgOHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJG5vcm1hbCkge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRub3JtYWwpIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Q+Is":
    /*!***********************************************!*\
      !*** ./src/app/pages/auth/pipes/year.pipe.ts ***!
      \***********************************************/

    /*! exports provided: YearPipe */

    /***/
    function QIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YearPipe", function () {
        return YearPipe;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var YearPipe = /*#__PURE__*/function (_angular_common__WEBP) {
        _inherits(YearPipe, _angular_common__WEBP);

        var _super = _createSuper(YearPipe);

        function YearPipe() {
          _classCallCheck(this, YearPipe);

          return _super.apply(this, arguments);
        }

        _createClass(YearPipe, [{
          key: "transform",
          value: function transform(date) {
            return _get(_getPrototypeOf(YearPipe.prototype), "transform", this).call(this, date, 'y');
          }
        }]);

        return YearPipe;
      }(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]);

      YearPipe.ɵfac = function YearPipe_Factory(t) {
        return ɵYearPipe_BaseFactory(t || YearPipe);
      };

      YearPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "year",
        type: YearPipe,
        pure: true
      });

      var ɵYearPipe_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](YearPipe);
      /***/

    },

    /***/
    "QSZ3":
    /*!**********************************************************!*\
      !*** ./src/app/pages/dashboard/consts/custom-tooltip.ts ***!
      \**********************************************************/

    /*! exports provided: customTooltip */

    /***/
    function QSZ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customTooltip", function () {
        return customTooltip;
      });

      var customTooltip = '<div>' + '<div style="padding: 16px; 16px; display: flex; align-items: center;"> <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #FFC260"></div><span style="color: #4A4A4A; margin-left: 8px">' + 'mobile' + '</span></div>' + '<div style="padding: 16px; 16px; display: flex; align-items: center;"> <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #536DFE"></div><span style="color: #4A4A4A; margin-left: 8px">' + 'desktop' + '</span></div>' + '<div style="padding: 16px; 16px; display: flex; align-items: center;"> <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #B1BCFF"></div><span style="color: #4A4A4A; margin-left: 8px">' + 'tablet' + '</span></div>' + '</div>';
      /***/
    },

    /***/
    "Qw5a":
    /*!***********************************************************************************!*\
      !*** ./src/app/shared/header/components/notifications/notifications.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function Qw5a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");

      var NotificationsComponent = function NotificationsComponent() {
        _classCallCheck(this, NotificationsComponent);
      };

      NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || NotificationsComponent)();
      };

      NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsComponent,
        selectors: [["app-notifications"]],
        decls: 21,
        vars: 1,
        consts: [["mat-mini-fab", "", 1, "notification-button", 3, "matMenuTriggerFor"], ["matBadge", "4", "matBadgeColor", "warn", 1, "notification-button__icon"], ["xPosition", "before", 1, "notification-menu"], ["bell", "matMenu"], ["mat-menu-item", "", 1, "notification-menu__button"], [1, "notification-menu__icon_yellow"], [1, "notification-menu__icon_green"], [1, "notification-menu__icon_pink"], [1, "notification-menu__icon_blue"]],
        template: function NotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "local_offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Check out this awesome ticket ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What is the best way to get ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This is just a simple notification ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "local_grocery_store");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "12 new orders has arrived today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadge"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]],
        styles: [".notification-button[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  box-shadow: none;\n  margin-left: 16px;\n}\n.notification-button__icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35);\n}\n.notification-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 576px) {\n  .notification-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.notification-menu__button[_ngcontent-%COMP%]:hover {\n  background-color: #F3F5FF;\n}\n.notification-menu__icon_yellow[_ngcontent-%COMP%] {\n  color: #ffc260;\n}\n.notification-menu__icon_green[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n}\n.notification-menu__icon_pink[_ngcontent-%COMP%] {\n  color: #ff4081;\n}\n.notification-menu__icon_blue[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNISztFRElMLGdCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUlFO0VBQ0UsZ0NDT087QURUWDtBQUtFO0VBQ0UscUNDVU87QURiWDtBQU1FO0VBYkY7SUFjSSxhQUFBO0VBSEY7QUFDRjtBQVFJO0VBQ0UseUJDcEJPO0FEZWI7QUFVSTtFQUNFLGNDOUJHO0FEc0JUO0FBV0k7RUFDRSxjQzNCRTtBRGtCUjtBQVlJO0VBQ0UsY0NqQ0M7QUR1QlA7QUFhSTtFQUNFLGNDekNDO0FEOEJQIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLm5vdGlmaWNhdGlvbi1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgY29sb3I6ICR3aGl0ZS0zNTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLTA4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tbWVudSB7XHJcbiAgJl9fYnV0dG9uIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS13aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgJl95ZWxsb3cge1xyXG4gICAgICBjb2xvcjogJHllbGxvdztcclxuICAgIH1cclxuXHJcbiAgICAmX2dyZWVuIHtcclxuICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAmX3Bpbmsge1xyXG4gICAgICBjb2xvcjogJHBpbms7XHJcbiAgICB9XHJcblxyXG4gICAgJl9ibHVlIHtcclxuICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "T64g":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/header/components/email/email.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EmailComponent */

    /***/
    function T64g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailComponent", function () {
        return EmailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_short_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/short-name */
      "Ohnk");

      function EmailComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "shortName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var email_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.colors[i_r3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, email_r2.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](email_r2.message);
        }
      }

      var EmailComponent = function EmailComponent() {
        _classCallCheck(this, EmailComponent);

        this.colors = ['yellow', 'green', 'blue', 'ping'];
      };

      EmailComponent.ɵfac = function EmailComponent_Factory(t) {
        return new (t || EmailComponent)();
      };

      EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmailComponent,
        selectors: [["app-email"]],
        inputs: {
          emails: "emails"
        },
        decls: 16,
        vars: 3,
        consts: [["mat-mini-fab", "", 1, "email-button", 3, "matMenuTriggerFor"], ["matBadge", "4", "matBadgeColor", "accent", 1, "email-button__icon"], ["xPosition", "before"], ["email", "matMenu"], [1, "email-menu-header"], [1, "email-menu-header__title"], [1, "email-menu-header__subtitle"], ["class", "mail-wrapper", 4, "ngFor", "ngForOf"], [1, "send-message-button-wrapper"], ["mat-fab", "", 1, "send-message-button"], [1, "send-message-button__icon"], [1, "mail-wrapper"], [1, "mail-wrapper__icon-wrapper"], ["mat-mini-fab", "", 1, "mail-wrapper__icon", 3, "ngClass"], [1, "mail-wrapper__time"], [1, "mail-content"], [1, "mail-content__user"], [1, "mail-content__message"]],
        template: function EmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mail_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailComponent_div_10_Template, 12, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Send New Message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.emails.length, " New Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emails);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadge"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        pipes: [_pipes_short_name__WEBPACK_IMPORTED_MODULE_6__["ShortNamePipe"]],
        styles: [".email-button[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  box-shadow: none;\n  margin-left: 16px;\n}\n.email-button__icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35);\n}\n.email-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 576px) {\n  .email-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.email-menu-header[_ngcontent-%COMP%] {\n  padding: 16px 16px 0 16px;\n}\n.email-menu-header__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  font-size: 24px;\n  color: #4A4A4A;\n}\n.email-menu-header__subtitle[_ngcontent-%COMP%] {\n  color: #ff4081;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 4px 0 16px 0;\n}\n.mail-wrapper[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  padding: 6px 16px;\n}\n.mail-wrapper[_ngcontent-%COMP%]:hover {\n  background-color: #F3F5FF;\n}\n.mail-wrapper__icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mail-wrapper__icon[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: none;\n  width: 30px;\n  height: 30px;\n}\n.mail-wrapper__time[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6E6E6E;\n  font-weight: 400;\n  font-size: 11.2px;\n}\n.mail-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding-left: 16px;\n  justify-content: space-between;\n}\n.mail-content__user[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-weight: 500;\n  font-size: 14px;\n  color: #4A4A4A;\n}\n.mail-content__message[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  font-weight: 14px;\n  font-size: 14px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.send-message-button-wrapper[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  text-align: center;\n  padding: 0 16px;\n}\n.send-message-button[_ngcontent-%COMP%] {\n  width: 224px;\n  height: 48px;\n  padding: 0 16px;\n  border-radius: 32px;\n  color: white;\n  background-color: #536DFE;\n}\n.send-message-button[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.send-message-button__icon[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 16px;\n}\n.yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #3CD4A0;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.ping[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVtYWlsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHlCQ0pLO0VES0wsZ0JBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0U7RUFDRSxnQ0NNTztBRFRYO0FBTUU7RUFDRSxxQ0NTTztBRGJYO0FBT0U7RUFiRjtJQWNJLGFBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRSx5QkFBQTtBQUpGO0FBTUU7RUFDRSxTQUFBO0VBQ0EsZ0JFM0JTO0VGNEJULGVFbEJPO0VGbUJQLGNDbkJRO0FEZVo7QUFPRTtFQUNFLGNDNUJHO0VENkJILGdCRWxDUztFRm1DVCxlRTdCTztFRjhCUCxvQkFBQTtBQUxKO0FBU0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTkY7QUFRRTtFQUNFLHlCQzFDUztBRG9DYjtBQVNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUEo7QUFVRTtFQUNFLGdCRXZEUztFRndEVCxlRWxETztFRm1EUCxZQ2hESTtFRGlESixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxjQ3hERztFRHlESCxnQkVyRVM7RUZzRVQsaUJFakVJO0FGd0RSO0FBYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFWRjtBQVlFO0VBQ0UsZUFBQTtFQUNBLGdCRWxGUTtFRm1GUixlRTlFTztFRitFUCxjQzNFUTtBRGlFWjtBQWFFO0VBQ0UsY0M3RUc7RUQ4RUgsaUJFcEZPO0VGcUZQLGVFckZPO0VGc0ZQLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVhKO0FBZUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWkY7QUFlQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUNwR007RURxR04seUJDN0dLO0FEaUdQO0FBY0U7RUFDRSxVQUFBO0FBWko7QUFlRTtFQUNFLFlDNUdJO0VENkdKLGlCQUFBO0FBYko7QUFpQkE7RUFDRSx5QkMzSE87QUQ2R1Q7QUFpQkE7RUFDRSx5QkN4SE07QUQwR1I7QUFpQkE7RUFDRSx5QkNsSUs7QURvSFA7QUFpQkE7RUFDRSx5QkNsSUs7QURvSFAiLCJmaWxlIjoiZW1haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9mb250JztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5lbWFpbC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgY29sb3I6ICR3aGl0ZS0zNTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLTA4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5lbWFpbC1tZW51LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAkZnMtbGFyZ2U7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICB9XHJcblxyXG4gICZfX3N1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAkcGluaztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZzLXNtYWxsO1xyXG4gICAgbWFyZ2luOiA0cHggMCAxNnB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbC13cmFwcGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA2cHggMTZweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZS13aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX2ljb24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAkZnMtc21hbGw7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gICZfX3RpbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAkZnMteHM7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmX191c2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAkZnMtc21hbGw7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICB9XHJcblxyXG4gICZfX21lc3NhZ2Uge1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmcy1zbWFsbDtcclxuICAgIGZvbnQtc2l6ZTogJGZzLXNtYWxsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2UtYnV0dG9uLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5zZW5kLW1lc3NhZ2UtYnV0dG9uIHtcclxuICB3aWR0aDogMjI0cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcblxyXG4gICYgLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9faWNvbiB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG59XHJcblxyXG4ucGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBpbms7XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "UtzL":
    /*!**********************************!*\
      !*** ./src/app/consts/routes.ts ***!
      \**********************************/

    /*! exports provided: routes */

    /***/
    function UtzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });

      var routes;

      (function (routes) {
        routes["DASHBOARD"] = "/dashboard";
        routes["TYPOGRAPHY"] = "/typography";
        routes["TABLES"] = "/tables";
        routes["NOTIFICATION"] = "/notification";
        routes["UI_ELEMENTS_ICONS"] = "/ui/icons";
        routes["UI_ELEMENTS_CHARTS"] = "/ui/charts";
        routes["UI_ELEMENTS_MAP"] = "/ui/map";
        routes["LOGIN"] = "/login";
      })(routes || (routes = {}));
      /***/

    },

    /***/
    "V9Mq":
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/daily-line-chart/daily-line-chart.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DailyLineChartComponent */

    /***/
    function V9Mq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DailyLineChartComponent", function () {
        return DailyLineChartComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../consts */
      "/Z0x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var _c0 = ["chart"];
      var matSelectedFields;

      (function (matSelectedFields) {
        matSelectedFields["daily"] = "Daily";
        matSelectedFields["weekly"] = "Weekly";
        matSelectedFields["monthly"] = "Monthly";
      })(matSelectedFields || (matSelectedFields = {}));

      var DailyLineChartComponent = /*#__PURE__*/function () {
        function DailyLineChartComponent() {
          _classCallCheck(this, DailyLineChartComponent);

          this.matSelectFields = matSelectedFields;
          this.selectedMatSelectValue = matSelectedFields.monthly;
          this.colors = _consts__WEBPACK_IMPORTED_MODULE_0__["colors"];
        }

        _createClass(DailyLineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initChart(this.dailyLineChartData.monthlyData, this.dailyLineChartData.labels);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.chartObj = new ApexCharts(this.chart.nativeElement, this.chartOptions);
            this.chartObj.render();
          }
        }, {
          key: "initChart",
          value: function initChart(data, labels) {
            this.chartOptions = {
              legend: {
                show: false
              },
              markers: {
                size: [0, 0, 5]
              },
              series: [{
                name: 'Mobile',
                type: 'line',
                data: data.mobile
              }, {
                name: 'Desktop',
                type: 'area',
                data: data.desktop
              }, {
                name: 'Tablet',
                type: 'line',
                data: data.tablet
              }],
              colors: [_consts__WEBPACK_IMPORTED_MODULE_0__["colors"].BLUE, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].LIGHT_BLUE, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].YELLOW],
              chart: {
                toolbar: {
                  show: false
                },
                height: 350,
                width: '100%',
                type: 'line',
                stacked: true
              },
              stroke: {
                width: [2, 0, 2],
                curve: ['smooth', 'smooth', 'straight']
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%'
                }
              },
              grid: {
                yaxis: {
                  lines: {
                    show: false
                  }
                }
              },
              fill: {
                opacity: 1,
                gradient: {
                  inverseColors: false,
                  shade: 'light',
                  type: 'vertical',
                  opacityFrom: 0.85,
                  opacityTo: 0.55,
                  stops: [0, 100, 100, 100]
                }
              },
              labels: labels,
              xaxis: {
                type: 'datetime',
                labels: {
                  style: {
                    colors: '#4A4A4A',
                    fontSize: '0.875rem',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    fontWeight: 400
                  }
                }
              },
              yaxis: {
                show: true,
                labels: {
                  style: {
                    colors: '#4A4A4A',
                    fontSize: '0.875rem',
                    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                    fontWeight: 400
                  }
                }
              },
              tooltip: {
                custom: function custom(_ref) {
                  var series = _ref.series,
                      seriesIndex = _ref.seriesIndex,
                      dataPointIndex = _ref.dataPointIndex,
                      w = _ref.w;
                  return _consts__WEBPACK_IMPORTED_MODULE_1__["customTooltip"];
                }
              }
            };
          }
        }, {
          key: "changedMatSelectionValue",
          value: function changedMatSelectionValue() {
            switch (this.selectedMatSelectValue) {
              case matSelectedFields.daily:
                this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), {
                  series: [{
                    name: 'Mobile',
                    type: 'line',
                    data: this.dailyLineChartData.dailyData.mobile
                  }, {
                    name: 'Desktop',
                    type: 'area',
                    data: this.dailyLineChartData.dailyData.desktop
                  }, {
                    name: 'Tablet',
                    type: 'line',
                    data: this.dailyLineChartData.dailyData.tablet
                  }]
                });
                break;

              case matSelectedFields.weekly:
                this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), {
                  series: [{
                    name: 'Mobile',
                    type: 'line',
                    data: this.dailyLineChartData.weeklyData.mobile
                  }, {
                    name: 'Desktop',
                    type: 'area',
                    data: this.dailyLineChartData.weeklyData.desktop
                  }, {
                    name: 'Tablet',
                    type: 'line',
                    data: this.dailyLineChartData.weeklyData.tablet
                  }]
                });
                break;

              default:
                this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), {
                  series: [{
                    name: 'Mobile',
                    type: 'line',
                    data: this.dailyLineChartData.monthlyData.mobile
                  }, {
                    name: 'Desktop',
                    type: 'area',
                    data: this.dailyLineChartData.monthlyData.desktop
                  }, {
                    name: 'Tablet',
                    type: 'line',
                    data: this.dailyLineChartData.monthlyData.tablet
                  }]
                });
            }

            this.chartObj.updateSeries(this.chartOptions.series);
          }
        }]);

        return DailyLineChartComponent;
      }();

      DailyLineChartComponent.ɵfac = function DailyLineChartComponent_Factory(t) {
        return new (t || DailyLineChartComponent)();
      };

      DailyLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: DailyLineChartComponent,
        selectors: [["app-daily-line-chart"]],
        viewQuery: function DailyLineChartComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        inputs: {
          dailyLineChartData: "dailyLineChartData"
        },
        decls: 27,
        vars: 4,
        consts: [[1, "chart"], [1, "chart__header"], [1, "chart__title"], [1, "chart-legend"], [1, "chart-legend__item"], [1, "chart-legend__icon", "yellow"], [1, "chart-legend__title"], [1, "chart-legend__icon", "blue"], [1, "chart-legend__icon", "light-blue"], [1, "chart-select", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value"], [1, "chart__content"], [1, "chart__content-item"], ["chart", ""]],
        template: function DailyLineChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Daily Line Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tablet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Desktop");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DailyLineChartComponent_Template_mat_select_ngModelChange_17_listener($event) {
              return ctx.selectedMatSelectValue = $event;
            })("selectionChange", function DailyLineChartComponent_Template_mat_select_selectionChange_17_listener() {
              return ctx.changedMatSelectionValue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-card-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "div", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedMatSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.matSelectFields.daily);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.matSelectFields.weekly);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.matSelectFields.monthly);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
        styles: [".chart[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  margin: 16px 24px;\n}\n.chart__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n}\n@media (max-width: 576px) {\n  .chart__header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.chart__title[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  color: #6E6E6E;\n  font-weight: 500;\n  font-size: 18px;\n  text-transform: none;\n  line-height: 1.6;\n  letter-spacing: 0.12px;\n  order: 1;\n}\n.chart__content[_ngcontent-%COMP%] {\n  height: 380px;\n  width: 100%;\n}\n@media (max-width: 576px) {\n  .chart__content[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n}\n@media (max-width: 576px) {\n  .chart__content-item[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  order: 2;\n}\n.chart-legend__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 2.24px;\n  margin-right: 24px;\n}\n.chart-legend__icon[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n}\n.chart-legend__title[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-weight: 500;\n  font-size: 18px;\n  color: #6E6E6E;\n  margin-left: 8px;\n}\n@media (max-width: 576px) {\n  .chart-legend[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    order: 3;\n  }\n}\n.chart-select[_ngcontent-%COMP%] {\n  order: 3;\n}\n@media (max-width: 576px) {\n  .chart-select[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n.yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.light-blue[_ngcontent-%COMP%] {\n  background-color: #B1BCFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhaWx5LWxpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUZBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0c7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBSEw7QUFLSztFQUxGO0lBTUksZUFBQTtFQUZMO0FBQ0Y7QUFLRztFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ1ZFO0VEV0YsZ0JFdEJPO0VGdUJQLGVFaEJRO0VGaUJSLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFITDtBQU1FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFKSjtBQUtJO0VBSEY7SUFJSSxrQkFBQTtFQUZKO0FBQ0Y7QUFNSTtFQURGO0lBRUksWUFBQTtFQUhKO0FBQ0Y7QUFPQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9FO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxKO0FBUUU7RUFDRSxvQkFBQTtFQUNBLGdCRWhFUTtFRmlFUixlRTFEUztFRjJEVCxjQ3ZERztFRHdESCxnQkFBQTtBQU5KO0FBU0U7RUF6QkY7SUEwQkksZ0JBQUE7SUFDQSxRQUFBO0VBTkY7QUFDRjtBQVNBO0VBQ0UsUUFBQTtBQU5GO0FBUUU7RUFIRjtJQUlJLFFBQUE7RUFMRjtBQUNGO0FBUUE7RUFDRSx5QkN0Rk87QURpRlQ7QUFRQTtFQUNFLHlCQ3pGSztBRG9GUDtBQVFBO0VBQ0UseUJDM0ZXO0FEc0ZiIiwiZmlsZSI6ImRhaWx5LWxpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9mb250XCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jaGFydCB7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICRzaGFkb3ctd2hpdGUsIDAgM3B4IDNweCAtMnB4ICRzaGFkb3ctZ3JleSwgMCAxcHggOHB4IDAgJHNoYWRvdy1kYXJrLWdyZXk7XHJcbiAgbWFyZ2luOiAxNnB4IDI0cHg7XHJcblxyXG4gICAmX19oZWFkZXIge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgIH1cclxuICAgfVxyXG5cclxuICAgJl9fdGl0bGUge1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiAkZnctbm9ybWFsO1xyXG4gICAgIGZvbnQtc2l6ZTogJGZzLXJlZ3VsYXI7XHJcbiAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgICBsZXR0ZXItc3BhY2luZzogMC4xMnB4O1xyXG4gICAgIG9yZGVyOiAxO1xyXG4gICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAzODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50LWl0ZW0ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtbGVnZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG9yZGVyOiAyO1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMi4yNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9faWNvbiB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAkZnMtcmVndWxhcjtcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgb3JkZXI6IDM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtc2VsZWN0IHtcclxuICBvcmRlcjogMztcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgfVxyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbn1cclxuXHJcbi5saWdodC1ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtYmx1ZTtcclxufVxyXG5cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "WZvx":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/revenue-chart/revenue-chart.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RevenueChartComponent */

    /***/
    function WZvx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RevenueChartComponent", function () {
        return RevenueChartComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");

      var RevenueChartComponent = /*#__PURE__*/function () {
        function RevenueChartComponent() {
          _classCallCheck(this, RevenueChartComponent);

          this.colors = _consts__WEBPACK_IMPORTED_MODULE_0__["colors"];
        }

        _createClass(RevenueChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initChart();
          }
        }, {
          key: "initChart",
          value: function initChart() {
            this.revenueChart = {
              color: [_consts__WEBPACK_IMPORTED_MODULE_0__["colors"].GREEN, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].PINK, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].YELLOW, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].BLUE],
              tooltip: {
                trigger: 'item'
              },
              legend: {
                top: 'center',
                right: 'right',
                data: ['Group A', 'Group B', 'Group C', 'Group D'],
                textStyle: {
                  color: '#6E6E6E'
                }
              },
              series: [{
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['24%', '50%'],
                label: {
                  show: false
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                hoverAnimation: false,
                avoidLabelOverlap: false,
                data: [{
                  name: 'Group A',
                  value: this.revenueCharData.groupA
                }, {
                  name: 'Group B',
                  value: this.revenueCharData.groupB
                }, {
                  name: 'Group C',
                  value: this.revenueCharData.groupC
                }, {
                  name: 'Group D',
                  value: this.revenueCharData.groupD
                }]
              }]
            };
          }
        }]);

        return RevenueChartComponent;
      }();

      RevenueChartComponent.ɵfac = function RevenueChartComponent_Factory(t) {
        return new (t || RevenueChartComponent)();
      };

      RevenueChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RevenueChartComponent,
        selectors: [["app-revenue-chart"]],
        inputs: {
          revenueCharData: "revenueCharData"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "revenue-chart"], [1, "revenue-chart__header"], [1, "revenue-chart__header-title"], [1, "revenue-chart__content"], ["echarts", "", 1, "revenue-chart__content-chart", 3, "options"]],
        template: function RevenueChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Revenue Breakdown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-settings-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.revenueChart);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__["SettingsMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsDirective"]],
        styles: [".revenue-chart[_ngcontent-%COMP%] {\n  height: 192px;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n.revenue-chart__header[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  display: flex;\n  justify-content: space-between;\n}\n.revenue-chart__header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  margin: 0;\n  line-height: 40px;\n}\n.revenue-chart__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.revenue-chart__content-chart[_ngcontent-%COMP%] {\n  height: 140px;\n  width: 100%;\n  max-width: 218px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJldmVudWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZm9udC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLGlGQUFBO0FBSEY7QUFLRTtFQUNFLGNDR0c7RURGSCxhQUFBO0VBQ0EsOEJBQUE7QUFISjtBQUtJO0VBQ0UsZUFBQTtFQUNBLGdCRWZPO0VGZ0JQLFNBQUE7RUFDQSxpQkFBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxKO0FBT0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTE4iLCJmaWxlIjoicmV2ZW51ZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9jb2xvcnNcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2ZvbnRcIjtcclxuQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnJldmVudWUtY2hhcnQge1xyXG4gIGhlaWdodDogMTkycHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTFweCAwICRzaGFkb3ctd2hpdGUsIDAgM3B4IDNweCAtMnB4ICRzaGFkb3ctZ3JleSwgMCAxcHggOHB4IDAgJHNoYWRvdy1kYXJrLWdyZXk7XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmLWNoYXJ0IHtcclxuICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMjE4cHhcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "WwWl":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/ui-elements/settings-menu/settings-menu.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SettingsMenuComponent */

    /***/
    function WwWl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsMenuComponent", function () {
        return SettingsMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SettingsMenuComponent = function SettingsMenuComponent() {
        _classCallCheck(this, SettingsMenuComponent);
      };

      SettingsMenuComponent.ɵfac = function SettingsMenuComponent_Factory(t) {
        return new (t || SettingsMenuComponent)();
      };

      SettingsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SettingsMenuComponent,
        selectors: [["app-settings-menu"]],
        decls: 14,
        vars: 1,
        consts: [["mat-mini-fab", "", 1, "settings-button", 3, "matMenuTriggerFor"], [1, "settings-button__icon"], [1, "settings-menu"], ["xPosition", "before"], ["settings", "matMenu"], ["mat-menu-item", "", 1, "settings-menu__item"]],
        template: function SettingsMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]],
        styles: [".settings-button[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background-color: white;\n  color: #B9B9B9;\n}\n.settings-button[_ngcontent-%COMP%]:hover {\n  background-color: #536DFE;\n  color: rgba(255, 255, 255, 0.35);\n}\n.settings-button__icon[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.settings-menu[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.settings-menu__item[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n}\n.settings-menu__item[_ngcontent-%COMP%]:hover {\n  background-color: #F3F5FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2V0dGluZ3MtbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSx1QkNJTTtFREhOLGNDS1c7QURQYjtBQUlFO0VBQ0UseUJDUkc7RURTSCxnQ0NNTztBRFJYO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUFPQTtFQUNFLGtCQUFBO0FBSkY7QUFNRTtFQUNFLGNDWlE7QURRWjtBQU1JO0VBQ0UseUJDckJPO0FEaUJiIiwiZmlsZSI6InNldHRpbmdzLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5zZXR0aW5ncy1idXR0b24ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNldHRpbmdzLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGNvbG9yOiAkc2V0dGluZ3MtYnV0dG9uLWNvbG9yO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgY29sb3I6ICRzZXR0aW5ncy1idXR0b24tY29sb3ItaG92ZXI7XHJcbiAgfVxyXG5cclxuICAmX19pY29uIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLnNldHRpbmdzLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNldHRpbmdzLW1lbnUtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.module */
      "/2RN");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/auth/auth.module */
      "lBUW");
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-echarts */
      "DKVz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"], _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(), _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_12__["NgxEchartsModule"].forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() | echarts */
            "echarts").then(__webpack_require__.bind(null,
            /*! echarts */
            "MT78"));
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _pages_auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"], _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["DashboardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_12__["NgxEchartsModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZDxe":
    /*!*******************************************!*\
      !*** ./src/app/pages/auth/pipes/index.ts ***!
      \*******************************************/

    /*! exports provided: YearPipe */

    /***/
    function ZDxe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _year_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./year.pipe */
      "Q+Is");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "YearPipe", function () {
        return _year_pipe__WEBPACK_IMPORTED_MODULE_0__["YearPipe"];
      });
      /***/

    },

    /***/
    "atiG":
    /*!***************************************************!*\
      !*** ./src/app/shared/header/containers/index.ts ***!
      \***************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function atiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      "dGVw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
      });
      /***/

    },

    /***/
    "dGVw":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/header/containers/header/header.component.ts ***!
      \*********************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function dGVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _pages_auth_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../pages/auth/services */
      "foWl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/search/search.component */
      "3x5P");
      /* harmony import */


      var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/notifications/notifications.component */
      "Qw5a");
      /* harmony import */


      var _components_email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/email/email.component */
      "T64g");
      /* harmony import */


      var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/user/user.component */
      "Nva9");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function HeaderComponent_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(userService, emailService, router) {
          _classCallCheck(this, HeaderComponent);

          this.userService = userService;
          this.emailService = emailService;
          this.router = router;
          this.isShowSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.routers = _consts__WEBPACK_IMPORTED_MODULE_1__["routes"];
          this.user$ = this.userService.getUser();
          this.emails$ = this.emailService.loadEmails();
        }

        _createClass(HeaderComponent, [{
          key: "openMenu",
          value: function openMenu() {
            this.isMenuOpened = !this.isMenuOpened;
            this.isShowSidebar.emit(this.isMenuOpened);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.userService.signOut();
            this.router.navigate([this.routers.LOGIN]);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_services__WEBPACK_IMPORTED_MODULE_2__["EmailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          isMenuOpened: "isMenuOpened"
        },
        outputs: {
          isShowSidebar: "isShowSidebar"
        },
        decls: 16,
        vars: 8,
        consts: [[1, "header"], [1, "header__title"], ["mat-mini-fab", "", 1, "header__title-button", 3, "click"], ["class", "header__title-button-icon", 4, "ngIf"], [1, "header__title-text"], [1, "header-toolbar"], ["mat-flat-button", "", "href", "https://flatlogic.com/templates/angular-material-admin-full/demo", "target", "_blank", 1, "unlock-button"], [3, "emails"], [3, "user", "signOut"], [1, "header__title-button-icon"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() {
              return ctx.openMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_mat_icon_4_Template, 2, 0, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular Material Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unlock Full Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-email", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-user", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("signOut", function HeaderComponent_Template_app_user_signOut_14_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMenuOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenuOpened);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("emails", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, ctx.emails$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx.user$));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"], _components_email_email_component__WEBPACK_IMPORTED_MODULE_9__["EmailComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".header[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 2;\n  height: 64px;\n}\n.header__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header__title-button[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  box-shadow: none;\n}\n.header__title-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n@media (max-width: 576px) {\n  .header__title-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.header__title-button-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.header__title-text[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 32px;\n  font-weight: 400;\n}\n@media (max-width: 576px) {\n  .header__title-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.header-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.header-toolbar[_ngcontent-%COMP%]   .unlock-button[_ngcontent-%COMP%] {\n  border-color: #3CD4A0;\n  margin-right: 16px;\n  text-transform: uppercase;\n  background-color: #3CD4A0;\n  color: white;\n  letter-spacing: 0.0892857143em;\n}\n@media (max-width: 576px) {\n  .header-toolbar[_ngcontent-%COMP%]   .unlock-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkNKSztFREtMLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUVzRGM7QUZ6RGhCO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1FO0VBQ0UseUJDakJHO0VEa0JILGdCQUFBO0FBSko7QUFNSTtFQUNFLHFDQ0NLO0FETFg7QUFPSTtFQVJGO0lBU0ksYUFBQTtFQUpKO0FBQ0Y7QUFPRTtFQUNFLFlDdEJJO0FEaUJSO0FBUUU7RUFDRSxZQzFCSTtFRDJCSixpQkFBQTtFQUNBLGdCR3JDUztBSCtCYjtBQVFJO0VBTEY7SUFNSSxhQUFBO0VBTEo7QUFDRjtBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBTkY7QUFRRTtFQUNFLHFCQzNDSTtFRDRDSixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJDOUNJO0VEK0NKLFlBQUE7RUFFQSw4QkFBQTtBQVBKO0FBUUk7RUFSRjtJQVNJLGFBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ3NyYy9hcHAvc3R5bGVzL2ZvbnQnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlLWJ1dHRvbi1pY29uIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLWJ1dHRvbi1mb250LWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtdGV4dCB7XHJcbiAgICBjb2xvcjogJGhlYWRlci10aXRsZS1mb250LWNvbG9yO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LWxpZ2h0ZXI7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC51bmxvY2stYnV0dG9uIHtcclxuICAgIGJvcmRlci1jb2xvcjogJGdyZWVuO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjA4OTI4NTcxNDNlbTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkc21hbGwpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcblxyXG4vLz09IFZpZXdwb3J0c1xyXG5cclxuJGV4dHJhLXNtYWxsOiA1NzZweDtcclxuJHNtYWxsOiA1NzZweDtcclxuJG1lZGl1bTogNzY4cHg7XHJcbiRub3JtYWw6IDEwMjRweDtcclxuJGxhcmdlOiA5OTJweDtcclxuJGV4dHJhLWxhcmdlOiAxMjAwcHg7XHJcblxyXG5cclxuLy89PSBTaWRlYmFyXHJcblxyXG4kc2lkZWJhci13aWR0aDogMjEwcHg7XHJcbiRzaWRlYmFyLWZvbnQtY29sb3I6ICRncmF5LTA4O1xyXG4kc2lkZWJhci1mb250LWNvbG9yLWFjdGl2ZTogJGRhcmstZ3JleTtcclxuJHNpZGViYXItYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICRibHVlLXdoaXRlO1xyXG4kc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmx1ZS13aGl0ZTtcclxuJHNpZGViYXItaWNvbi1jb2xvci1hY3RpdmU6ICRibHVlO1xyXG4kc2lkZWJhci1pY29uLWNvbG9yOiAkZ3JheS0wNjtcclxuJHNpZGViYXItdGl0bGUtY29sb3I6ICRzaWRlYmFyLWZvbnQtY29sb3I7XHJcbiRzaWRlYmFyLWNpcmNsZS1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcblxyXG4vLz09IE1hdGVyaWFsIENhcmRcclxuLy9cclxuXHJcbiRjYXJkLWZvbnQtY29sb3I6ICRkYXJrLWdyZXk7XHJcbiRjYXJkLXRpdGxlLWZvbnQtY29sb3I6ICRncmV5O1xyXG5cclxuLy89PSBNYXRlcmlhbCBUb29sYmFyXHJcblxyXG4kdG9vbGJhci10aXRsZS1mb250LWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuJHRvb2xiYXItYnV0dG9uLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuJHRvb2xiYXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4kdG9vbGJhci1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICRkYXJrLXBpbms7XHJcblxyXG4vLz09IE1hdGVyaWFsIFNpZGViYXIgQ29udGVudFxyXG5cclxuJHNpZGViYXItY29udGVudC1wYWRkaW5nOiA0OHB4O1xyXG5cclxuLy89PSBNYXRlcmlhbCBUYWJzXHJcblxyXG4kdGFicy1oZWFkZXItZm9udC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiR0YWJzLWhlYWRlci1mb250LWNvbG9yLWFjdGl2ZTogJGJsdWU7XHJcbiR0YWJzLWluay1iYXItY29sb3I6ICRibHVlO1xyXG5cclxuXHJcbi8vPT0gQXBleCBDaGFydCBYIGF4aXMgdG9vbHRpcFxyXG5cclxuJGNoYXJ0LXRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiRjaGFydC10b29sdGlwLWJvcmRlci1jb2xvcjogJGJsdWU7XHJcbiRjaGFydC10b29sdGlwLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuXHJcbi8vPT0gU2Nyb2xsIGJhclxyXG5cclxuJHNjcm9sbGJhci10cmFjay1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzY3JvbGxiYXItdHJhY2stcGllY2UtY29sb3I6ICR3aGl0ZTtcclxuJHNjcm9sbGJhci10aHVtYi1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzY3JvbGxiYXItY29ybmVyLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuXHJcbi8vPT0gSGVhZGVyXHJcblxyXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4kaGVhZGVyLWhlaWdodDogNjRweDtcclxuJGhlYWRlci1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiRoZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICRibGFjay0wODtcclxuJGhlYWRlci1idXR0b24tZm9udC1jb2xvcjogJHdoaXRlO1xyXG4kaGVhZGVyLXRpdGxlLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuXHJcbi8vPT0gRm9vdGVyXHJcblxyXG4kZm9vdGVyLWhlaWdodDogNDhweDtcclxuJGZvb3Rlci13aWR0aDogY2FsYygxMDAlIC0gI3skc2lkZWJhci1jb250ZW50LXBhZGRpbmd9KTtcclxuJGZvb3Rlci1saW5rLWNvbG9yOiAkYmx1ZTtcclxuJGZvb3Rlci1pY29uLWNvbG9yOiAkZ3JheS0wNjtcclxuJGZvb3Rlci1pY29uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICRibGFjay0wODtcclxuXHJcbi8vPT0gU2V0dGluZ3MgbWVudSBlbGVtZW50XHJcblxyXG4kc2V0dGluZ3MtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJHNldHRpbmdzLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmx1ZTtcclxuJHNldHRpbmdzLWJ1dHRvbi1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzZXR0aW5ncy1idXR0b24tY29sb3ItaG92ZXI6ICR3aGl0ZS0zNTtcclxuJHNldHRpbmdzLW1lbnUtZm9udC1jb2xvcjogJGRhcmstZ3JleTtcclxuJHNldHRpbmdzLW1lbnUtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogJGJsdWUtd2hpdGU7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "e/e7":
    /*!************************************************!*\
      !*** ./src/app/pages/auth/containers/index.ts ***!
      \************************************************/

    /*! exports provided: AuthPageComponent */

    /***/
    function eE7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth-page/auth-page.component */
      "LAZa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function () {
        return _auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_0__["AuthPageComponent"];
      });
      /***/

    },

    /***/
    "fGB4":
    /*!******************************************************!*\
      !*** ./src/app/pages/auth/services/email.service.ts ***!
      \******************************************************/

    /*! exports provided: EmailService */

    /***/
    function fGB4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailService", function () {
        return EmailService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmailService = /*#__PURE__*/function () {
        function EmailService() {
          _classCallCheck(this, EmailService);
        }

        _createClass(EmailService, [{
          key: "loadEmails",
          value: function loadEmails() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([{
              name: 'Jane Hew',
              time: '9:32',
              message: 'Hey! How is it going?'
            }, {
              name: 'Lloyd Brown',
              time: '9:18',
              message: 'Check out my new Dashboard'
            }, {
              name: 'Mark Winstein',
              time: '9:15',
              message: 'I want rearrange the appointment'
            }, {
              name: 'Liana Dutti',
              time: '9:09',
              message: 'Good news from sale department'
            }]);
          }
        }]);

        return EmailService;
      }();

      EmailService.ɵfac = function EmailService_Factory(t) {
        return new (t || EmailService)();
      };

      EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EmailService,
        factory: EmailService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "foWl":
    /*!**********************************************!*\
      !*** ./src/app/pages/auth/services/index.ts ***!
      \**********************************************/

    /*! exports provided: AuthService, EmailService */

    /***/
    function foWl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      "vRae");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /* harmony import */


      var _email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email.service */
      "fGB4");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EmailService", function () {
        return _email_service__WEBPACK_IMPORTED_MODULE_1__["EmailService"];
      });
      /***/

    },

    /***/
    "ggrH":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/containers/index.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardPageComponent */

    /***/
    function ggrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-page/dashboard-page.component */
      "PmEB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function () {
        return _dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__["DashboardPageComponent"];
      });
      /***/

    },

    /***/
    "h0g5":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/ui-elements/date-menu/date-menu.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DateMenuComponent */

    /***/
    function h0g5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateMenuComponent", function () {
        return DateMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var matSelectedFields;

      (function (matSelectedFields) {
        matSelectedFields["daily"] = "Daily";
        matSelectedFields["weekly"] = "Weekly";
        matSelectedFields["monthly"] = "Monthly";
      })(matSelectedFields || (matSelectedFields = {}));

      var DateMenuComponent = /*#__PURE__*/function () {
        function DateMenuComponent() {
          _classCallCheck(this, DateMenuComponent);

          this.changeDateType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.matSelectFields = matSelectedFields;
          this.selectedMatSelectValue = matSelectedFields.daily;
        }

        _createClass(DateMenuComponent, [{
          key: "changedMatSelectionValue",
          value: function changedMatSelectionValue(dateType) {
            this.changeDateType.emit(dateType);
          }
        }]);

        return DateMenuComponent;
      }();

      DateMenuComponent.ɵfac = function DateMenuComponent_Factory(t) {
        return new (t || DateMenuComponent)();
      };

      DateMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateMenuComponent,
        selectors: [["app-date-menu"]],
        outputs: {
          changeDateType: "changeDateType"
        },
        decls: 7,
        vars: 4,
        consts: [[1, "date-menu", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value"]],
        template: function DateMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DateMenuComponent_Template_mat_select_ngModelChange_0_listener($event) {
              return ctx.selectedMatSelectValue = $event;
            })("selectionChange", function DateMenuComponent_Template_mat_select_selectionChange_0_listener($event) {
              return ctx.changedMatSelectionValue($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Daily");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weekly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Monthly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMatSelectValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.matSelectFields.daily);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.matSelectFields.weekly);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.matSelectFields.monthly);
          }
        },
        directives: [_angular_material_select__WEBPACK_IMPORTED_MODULE_1__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]],
        styles: [".date-menu[_ngcontent-%COMP%] {\n  border: none;\n  width: 55px;\n  padding: 8px 0 8px 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImRhdGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLW1lbnUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogNTVweDtcclxuICBwYWRkaW5nOiA4cHggMCA4cHggNHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "i+Fg":
    /*!**********************************!*\
      !*** ./src/app/consts/colors.ts ***!
      \**********************************/

    /*! exports provided: colors */

    /***/
    function iFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "colors", function () {
        return colors;
      });

      var colors;

      (function (colors) {
        colors["YELLOW"] = "#ffc260";
        colors["BLUE"] = "#536DFE";
        colors["LIGHT_BLUE"] = "#F8F9FF";
        colors["PINK"] = "#ff4081";
        colors["GREEN"] = "#3CD4A0";
        colors["VIOLET"] = "#9013FE";
      })(colors || (colors = {}));
      /***/

    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.flatlogic = 'https://flatlogic.com/';
        this.flatlogicAbout = 'https://flatlogic.com/about';
        this.flatlogicBlog = 'https://flatlogic.com/blog';
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 15,
        vars: 3,
        consts: [[1, "footer"], [1, "footer__link"], [1, "footer__link-item", 3, "href"], [1, "footer__icon"], ["mat-mini-fab", ""], ["fontSet", "fa fa-fs", "fontIcon", "fa-facebook-square"], ["fontSet", "fa fa-fs", "fontIcon", "fa-twitter-square"], ["fontSet", "fa fa-fs", "fontIcon", "fa-github-square"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flatlogic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.flatlogic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.flatlogicAbout, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.flatlogicBlog, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
        styles: [".footer[_ngcontent-%COMP%] {\n  height: 48px;\n  margin-top: 40px;\n  width: calc(100% - 48px);\n  display: flex;\n  justify-content: space-between;\n  padding: 0 24px 24px 24px;\n}\n@media (max-width: 576px) {\n  .footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: start;\n  }\n}\n.footer__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .footer__link[_ngcontent-%COMP%] {\n    margin-bottom: 8px;\n  }\n}\n@media (max-width: 576px) {\n  .footer__icon[_ngcontent-%COMP%] {\n    margin: 0 0 8px -14px;\n  }\n}\n.footer__link-item[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  color: #536DFE;\n  text-decoration: none;\n}\n.footer__link-item[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.mat-mini-fab[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background-color: inherit;\n  width: 46px;\n  height: 46px;\n}\n.mat-mini-fab[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.mat-icon[_ngcontent-%COMP%] {\n  color: rgba(110, 110, 110, 0.6);\n  padding: 3px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlDb0VjO0VEbkVkLGdCQUFBO0VBQ0Esd0JDbUVhO0VEbEViLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBRkY7QUFJRTtFQVJGO0lBU0ksc0JBQUE7SUFDQSxrQkFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFKRjtJQUtJLGtCQUFBO0VBQUo7QUFDRjtBQUlJO0VBREY7SUFFSSxxQkFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsY0VoQ0c7RUZpQ0gscUJBQUE7QUFGSjtBQUlJO0VBQ0UsMEJBQUE7QUFGTjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSkY7QUFNRTtFQUNFLHFDRTFCTztBRnNCWDtBQVFBO0VBQ0UsK0JFakNRO0VGa0NSLGtCQUFBO0FBTEYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB3aWR0aDogJGZvb3Rlci13aWR0aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDI0cHggMjRweCAyNHB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgJl9fbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBtYXJnaW46IDAgMCA4cHggLTE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19saW5rLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICRmb290ZXItbGluay1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LW1pbmktZmFiIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItaWNvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICBjb2xvcjogJGZvb3Rlci1pY29uLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDNweCAwIDAgMDtcclxufVxyXG4iLCJAaW1wb3J0IFwiY29sb3JzXCI7XHJcblxyXG4vLz09IFZpZXdwb3J0c1xyXG5cclxuJGV4dHJhLXNtYWxsOiA1NzZweDtcclxuJHNtYWxsOiA1NzZweDtcclxuJG1lZGl1bTogNzY4cHg7XHJcbiRub3JtYWw6IDEwMjRweDtcclxuJGxhcmdlOiA5OTJweDtcclxuJGV4dHJhLWxhcmdlOiAxMjAwcHg7XHJcblxyXG5cclxuLy89PSBTaWRlYmFyXHJcblxyXG4kc2lkZWJhci13aWR0aDogMjEwcHg7XHJcbiRzaWRlYmFyLWZvbnQtY29sb3I6ICRncmF5LTA4O1xyXG4kc2lkZWJhci1mb250LWNvbG9yLWFjdGl2ZTogJGRhcmstZ3JleTtcclxuJHNpZGViYXItYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICRibHVlLXdoaXRlO1xyXG4kc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmx1ZS13aGl0ZTtcclxuJHNpZGViYXItaWNvbi1jb2xvci1hY3RpdmU6ICRibHVlO1xyXG4kc2lkZWJhci1pY29uLWNvbG9yOiAkZ3JheS0wNjtcclxuJHNpZGViYXItdGl0bGUtY29sb3I6ICRzaWRlYmFyLWZvbnQtY29sb3I7XHJcbiRzaWRlYmFyLWNpcmNsZS1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcblxyXG4vLz09IE1hdGVyaWFsIENhcmRcclxuLy9cclxuXHJcbiRjYXJkLWZvbnQtY29sb3I6ICRkYXJrLWdyZXk7XHJcbiRjYXJkLXRpdGxlLWZvbnQtY29sb3I6ICRncmV5O1xyXG5cclxuLy89PSBNYXRlcmlhbCBUb29sYmFyXHJcblxyXG4kdG9vbGJhci10aXRsZS1mb250LWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuJHRvb2xiYXItYnV0dG9uLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuJHRvb2xiYXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xyXG4kdG9vbGJhci1idXR0b24tYmFja2dyb3VuZC1jb2xvci1hY3RpdmU6ICRkYXJrLXBpbms7XHJcblxyXG4vLz09IE1hdGVyaWFsIFNpZGViYXIgQ29udGVudFxyXG5cclxuJHNpZGViYXItY29udGVudC1wYWRkaW5nOiA0OHB4O1xyXG5cclxuLy89PSBNYXRlcmlhbCBUYWJzXHJcblxyXG4kdGFicy1oZWFkZXItZm9udC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiR0YWJzLWhlYWRlci1mb250LWNvbG9yLWFjdGl2ZTogJGJsdWU7XHJcbiR0YWJzLWluay1iYXItY29sb3I6ICRibHVlO1xyXG5cclxuXHJcbi8vPT0gQXBleCBDaGFydCBYIGF4aXMgdG9vbHRpcFxyXG5cclxuJGNoYXJ0LXRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiRjaGFydC10b29sdGlwLWJvcmRlci1jb2xvcjogJGJsdWU7XHJcbiRjaGFydC10b29sdGlwLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuXHJcbi8vPT0gU2Nyb2xsIGJhclxyXG5cclxuJHNjcm9sbGJhci10cmFjay1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzY3JvbGxiYXItdHJhY2stcGllY2UtY29sb3I6ICR3aGl0ZTtcclxuJHNjcm9sbGJhci10aHVtYi1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzY3JvbGxiYXItY29ybmVyLWNvbG9yOiAkbGlnaHQtZ3JleTtcclxuXHJcbi8vPT0gSGVhZGVyXHJcblxyXG4kaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4kaGVhZGVyLWhlaWdodDogNjRweDtcclxuJGhlYWRlci1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiRoZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICRibGFjay0wODtcclxuJGhlYWRlci1idXR0b24tZm9udC1jb2xvcjogJHdoaXRlO1xyXG4kaGVhZGVyLXRpdGxlLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuXHJcbi8vPT0gRm9vdGVyXHJcblxyXG4kZm9vdGVyLWhlaWdodDogNDhweDtcclxuJGZvb3Rlci13aWR0aDogY2FsYygxMDAlIC0gI3skc2lkZWJhci1jb250ZW50LXBhZGRpbmd9KTtcclxuJGZvb3Rlci1saW5rLWNvbG9yOiAkYmx1ZTtcclxuJGZvb3Rlci1pY29uLWNvbG9yOiAkZ3JheS0wNjtcclxuJGZvb3Rlci1pY29uLWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICRibGFjay0wODtcclxuXHJcbi8vPT0gU2V0dGluZ3MgbWVudSBlbGVtZW50XHJcblxyXG4kc2V0dGluZ3MtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuJHNldHRpbmdzLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmx1ZTtcclxuJHNldHRpbmdzLWJ1dHRvbi1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiRzZXR0aW5ncy1idXR0b24tY29sb3ItaG92ZXI6ICR3aGl0ZS0zNTtcclxuJHNldHRpbmdzLW1lbnUtZm9udC1jb2xvcjogJGRhcmstZ3JleTtcclxuJHNldHRpbmdzLW1lbnUtYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogJGJsdWUtd2hpdGU7XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "lBUW":
    /*!*******************************************!*\
      !*** ./src/app/pages/auth/auth.module.ts ***!
      \*******************************************/

    /*! exports provided: AuthModule */

    /***/
    function lBUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./containers */
      "e/e7");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth-routing.module */
      "BUwF");
      /* harmony import */


      var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pipes */
      "ZDxe");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services */
      "foWl");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components */
      "B9Og");
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./guards */
      "0fNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _services__WEBPACK_IMPORTED_MODULE_8__["EmailService"], _guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_containers__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"], _pipes__WEBPACK_IMPORTED_MODULE_7__["YearPipe"], _components__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"], _components__WEBPACK_IMPORTED_MODULE_9__["SignFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "m9mz":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/auth/components/login-form/login-form.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LoginFormComponent */

    /***/
    function m9mz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function () {
        return LoginFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent() {
          _classCallCheck(this, LoginFormComponent);

          this.sendLoginForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.flatlogicEmail = 'admin@flatlogic.com';
          this.flatlogicPassword = 'admin';
        }

        _createClass(LoginFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.flatlogicEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.flatlogicPassword, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "login",
          value: function login() {
            if (this.form.valid) {
              this.sendLoginForm.emit();
            }
          }
        }]);

        return LoginFormComponent;
      }();

      LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
        return new (t || LoginFormComponent)();
      };

      LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["app-login-form"]],
        outputs: {
          sendLoginForm: "sendLoginForm"
        },
        decls: 10,
        vars: 1,
        consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "form__input"], ["matInput", "", "placeholder", "Email Address", "type", "email", "formControlName", "email"], ["matInput", "", "placeholder", "Password", "type", "password", "formControlName", "password"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "form-actions__login"], ["mat-button", "", 1, "form-actions__forget"]],
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Forget password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form__input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 6px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.form-actions__login[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.form-actions__forget[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  color: #536DFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcZm9udC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUZKO0FBTUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JDdkJTO0VEd0JULGNFdkJHO0FGbUJQIiwiZmlsZSI6ImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9mb250XCI7XHJcblxyXG4uZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICZfX2lucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fbG9naW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fZm9yZ2V0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGNvbG9yOiAkYmx1ZTtcclxuICB9XHJcbn1cclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "oTV+":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/project-stat-chart/project-stat-chart.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ProjectStatChartComponent */

    /***/
    function oTV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectStatChartComponent", function () {
        return ProjectStatChartComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_date_menu_date_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/date-menu/date-menu.component */
      "h0g5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ProjectStatChartComponent_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r0.selectedStatsLightBlueData.percent, "%");
        }
      }

      function ProjectStatChartComponent_p_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.selectedStatsLightBlueData.percent, "%");
        }
      }

      function ProjectStatChartComponent_p_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r2.selectedStatsSingAppData.percent, "%");
        }
      }

      function ProjectStatChartComponent_p_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.selectedStatsSingAppData.percent, "%");
        }
      }

      function ProjectStatChartComponent_p_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r4.selectedStatsRNSData.percent, "%");
        }
      }

      function ProjectStatChartComponent_p_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.selectedStatsRNSData.percent, "%");
        }
      }

      var ProjectsType;

      (function (ProjectsType) {
        ProjectsType["lightBlue"] = "lightBlue";
        ProjectsType["SingApp"] = "SingApp";
        ProjectsType["RNS"] = "RNS";
      })(ProjectsType || (ProjectsType = {}));

      var ProjectStatChartComponent = /*#__PURE__*/function () {
        function ProjectStatChartComponent() {
          _classCallCheck(this, ProjectStatChartComponent);

          this.projectsType = ProjectsType;
          this.colors = _consts__WEBPACK_IMPORTED_MODULE_0__["colors"];
        }

        _createClass(ProjectStatChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.daily;
            this.selectedStatsSingAppData = this.projectsStatsData.singApp.daily;
            this.selectedStatsRNSData = this.projectsStatsData.rns.daily;
            this.initChart();
          }
        }, {
          key: "initChart",
          value: function initChart() {
            this.chartOptions = {
              chart: {
                type: 'bar',
                height: 100,
                width: 130,
                toolbar: {
                  show: false
                }
              },
              legend: {
                show: false
              },
              grid: {
                show: false
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '70%'
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                labels: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                axisBorder: {
                  show: false
                }
              },
              yaxis: {
                show: false
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return '$ ' + val + ' thousands';
                  }
                }
              }
            };
          }
        }, {
          key: "changeDateType",
          value: function changeDateType(dateType, projectType) {
            switch (projectType) {
              case this.projectsType.lightBlue:
                switch (dateType) {
                  case 'Weekly':
                    this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.week;
                    break;

                  case 'Monthly':
                    this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.monthly;
                    break;

                  default:
                    this.selectedStatsLightBlueData = this.projectsStatsData.lightBlue.daily;
                }

                break;

              case this.projectsType.SingApp:
                switch (dateType) {
                  case 'Weekly':
                    this.selectedStatsSingAppData = this.projectsStatsData.singApp.week;
                    break;

                  case 'Monthly':
                    this.selectedStatsSingAppData = this.projectsStatsData.singApp.monthly;
                    break;

                  default:
                    this.selectedStatsSingAppData = this.projectsStatsData.singApp.daily;
                }

                break;

              case this.projectsType.RNS:
                switch (dateType) {
                  case 'Weekly':
                    this.selectedStatsRNSData = this.projectsStatsData.rns.week;
                    break;

                  case 'Monthly':
                    this.selectedStatsRNSData = this.projectsStatsData.rns.monthly;
                    break;

                  default:
                    this.selectedStatsRNSData = this.projectsStatsData.rns.daily;
                }

                break;
            }
          }
        }]);

        return ProjectStatChartComponent;
      }();

      ProjectStatChartComponent.ɵfac = function ProjectStatChartComponent_Factory(t) {
        return new (t || ProjectStatChartComponent)();
      };

      ProjectStatChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProjectStatChartComponent,
        selectors: [["app-project-stat-chart"]],
        inputs: {
          projectsStatsData: "projectsStatsData"
        },
        decls: 118,
        vars: 57,
        consts: [[1, "project-stat"], [1, "project-stat__item"], [1, "project-stat__title"], [1, "project-stat__title-text"], [3, "changeDateType"], [1, "project-stat-content"], [1, "project-stat-content__total-info-wrapper"], [1, "project-stat-content__total-info"], [1, "project-stat-content__total-info-users"], ["class", "project-stat-content__total-info-percent", 4, "ngIf"], ["class", "project-stat-content__total-info-percent-warn", 4, "ngIf"], [1, "project-stat-content__total-info-chart"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "grid", "colors"], [1, "project-stat-content__stat-wrapper"], [1, "project-stat-content__stat-item"], [1, "project-stat-content__stat-value-wrapper"], [1, "project-stat-content__stat-value"], [1, "project-stat-content__stat-icon"], [1, "project-stat-content__stat-item-title"], [1, "project-stat-content__stat-icon-warn"], [1, "project-stat-content__total-info-percent"], [1, "project-stat-content__total-info-percent-warn"]],
        template: function ProjectStatChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-date-menu", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeDateType", function ProjectStatChartComponent_Template_app_date_menu_changeDateType_5_listener($event) {
              return ctx.changeDateType($event, ctx.projectsType.lightBlue);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectStatChartComponent_p_11_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProjectStatChartComponent_p_12_Template, 2, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "apx-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Registrations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "app-date-menu", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeDateType", function ProjectStatChartComponent_Template_app_date_menu_changeDateType_44_listener($event) {
              return ctx.changeDateType($event, ctx.projectsType.SingApp);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ProjectStatChartComponent_p_50_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ProjectStatChartComponent_p_51_Template, 2, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "apx-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Registrations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h5", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "app-date-menu", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("changeDateType", function ProjectStatChartComponent_Template_app_date_menu_changeDateType_83_listener($event) {
              return ctx.changeDateType($event, ctx.projectsType.RNS);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "mat-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ProjectStatChartComponent_p_89_Template, 2, 1, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ProjectStatChartComponent_p_90_Template, 2, 1, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "apx-chart", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-icon", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Registrations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Bounce Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h6", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "arrow_upward");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsLightBlueData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsLightBlueData.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsLightBlueData.percent > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsLightBlueData.percent < 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.selectedStatsLightBlueData.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("grid", ctx.chartOptions.grid)("colors", ctx.colors.BLUE);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsLightBlueData.registrations);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsLightBlueData.bounce);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsLightBlueData.views);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsSingAppData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsSingAppData.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsSingAppData.percent > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsSingAppData.percent < 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.selectedStatsSingAppData.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("grid", ctx.chartOptions.grid)("colors", ctx.colors.YELLOW);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsSingAppData.registrations);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsSingAppData.bounce);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsSingAppData.views);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsRNSData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsRNSData.users);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsRNSData.percent > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedStatsRNSData.percent < 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.selectedStatsRNSData.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("grid", ctx.chartOptions.grid)("colors", ctx.colors.PINK);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsRNSData.registrations);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsRNSData.bounce);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedStatsRNSData.views);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _shared_ui_elements_date_menu_date_menu_component__WEBPACK_IMPORTED_MODULE_3__["DateMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".project-stat[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: calc(100% - 16px);\n  margin: 16px 8px;\n}\n.project-stat__item[_ngcontent-%COMP%] {\n  height: 208px;\n  margin: 16px;\n  width: 100%;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n}\n@media (min-width: 576px) and (max-width: 992px) {\n  .project-stat__item[_ngcontent-%COMP%] {\n    width: 41.4%;\n  }\n}\n@media (min-width: 992px) and (max-width: 1024px) {\n  .project-stat__item[_ngcontent-%COMP%] {\n    width: 43.6%;\n  }\n}\n.project-stat__title[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.project-stat__title-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 21px;\n  color: #4A4A4A;\n  margin: 0;\n}\n@media (min-width: 576px) and (max-width: 1024px) {\n  .project-stat[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n}\n@media (max-width: 1024px) {\n  .project-stat[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.project-stat-content[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.project-stat-content__total-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n}\n.project-stat-content__total-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.project-stat-content__total-info-users[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  font-weight: 400;\n  font-size: 42px;\n  margin: 0;\n  height: 45px;\n  letter-spacing: 0.15px;\n}\n.project-stat-content__total-info-percent[_ngcontent-%COMP%] {\n  color: #3CD4A0;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 0 5px;\n}\n.project-stat-content__total-info-percent-warn[_ngcontent-%COMP%] {\n  color: #ff4081;\n  font-weight: 400;\n  font-size: 14px;\n  margin: 0 0 0 5px;\n}\n.project-stat-content__total-info-chart[_ngcontent-%COMP%] {\n  position: relative;\n  right: -9px;\n  top: -2px;\n}\n.project-stat-content__stat-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 24px;\n}\n.project-stat-content__stat-value-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.project-stat-content__stat-value[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  color: #4A4A4A;\n  margin: 0;\n}\n.project-stat-content__stat-icon[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  color: #3CD4A0;\n}\n.project-stat-content__stat-icon-warn[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  color: #ff4081;\n}\n.project-stat-content__stat-item-title[_ngcontent-%COMP%] {\n  color: #6E6E6E;\n  font-weight: 400;\n  font-size: 11.2px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2plY3Qtc3RhdC1jaGFydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlGQUFBO0FBSEo7QUFLSTtFQU5GO0lBT0ksWUFBQTtFQUZKO0FBQ0Y7QUFJSTtFQVZGO0lBV0ksWUFBQTtFQURKO0FBQ0Y7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkNqQ1M7RURrQ1QsZUN6QlE7RUQwQlIsY0V6QlE7RUYwQlIsU0FBQTtBQUhKO0FBTUU7RUFuQ0Y7SUFvQ0ksc0JBQUE7RUFIRjtBQUNGO0FBS0U7RUF2Q0Y7SUF3Q0ksZUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUNFLFlBQUE7QUFGRjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBSEo7QUFNRTtFQUNFLGNFckRHO0VGc0RILGdCQ2xFUztFRG1FVCxlQ3RETTtFRHVETixTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSko7QUFPRTtFQUNFLGNFbkVJO0VGb0VKLGdCQzNFUztFRDRFVCxlQ3RFTztFRHVFUCxpQkFBQTtBQUxKO0FBUUU7RUFDRSxjRTVFRztFRjZFSCxnQkNsRlM7RURtRlQsZUM3RU87RUQ4RVAsaUJBQUE7QUFOSjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBV0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVlFO0VBQ0UsZ0JDekdTO0VEMEdULGVDbEdTO0VEbUdULGNFakdRO0VGa0dSLFNBQUE7QUFWSjtBQWFFO0VBQ0Usd0JBQUE7RUFDQSxjRTFHSTtBRitGUjtBQWNFO0VBQ0UseUJBQUE7RUFDQSxjRWpIRztBRnFHUDtBQWVFO0VBQ0UsY0U5R0c7RUYrR0gsZ0JDM0hTO0VENEhULGlCQ3ZISTtFRHdISixTQUFBO0FBYkoiLCJmaWxlIjoicHJvamVjdC1zdGF0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9mb250XCI7XHJcblxyXG4ucHJvamVjdC1zdGF0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcclxuICBtYXJnaW46IDE2cHggOHB4O1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGhlaWdodDogMjA4cHg7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDNweCAzcHggLTJweCAkc2hhZG93LWdyZXksIDAgMXB4IDhweCAwICRzaGFkb3ctZGFyay1ncmV5O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkc21hbGwpIGFuZCAobWF4LXdpZHRoOiAkbGFyZ2UpIHtcclxuICAgICAgd2lkdGg6IDQxLjQlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbGFyZ2UpIGFuZCAobWF4LXdpZHRoOiAkbm9ybWFsKSB7XHJcbiAgICAgIHdpZHRoOiA0My42JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LWxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6ICRmcy1tZWRpdW07XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc21hbGwpIGFuZCAobWF4LXdpZHRoOiAkbm9ybWFsKSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRub3JtYWwpIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN0YXQtY29udGVudCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG5cclxuICAmX190b3RhbC1pbmZvLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAmX190b3RhbC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAmX190b3RhbC1pbmZvLXVzZXJzIHtcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZzLXh4eGw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdG90YWwtaW5mby1wZXJjZW50IHtcclxuICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICBmb250LXdlaWdodDogJGZ3LWxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICAgIG1hcmdpbjogMCAwIDAgNXB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdG90YWwtaW5mby1wZXJjZW50LXdhcm4ge1xyXG4gICAgY29sb3I6ICRwaW5rO1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgZm9udC1zaXplOiAkZnMtc21hbGw7XHJcbiAgICBtYXJnaW46IDAgMCAwIDVweDtcclxuICB9XHJcblxyXG4gICZfX3RvdGFsLWluZm8tY2hhcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IC05cHg7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0LXZhbHVlLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0LXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIGZvbnQtc2l6ZTogJGZzLXJlZ3VsYXI7XHJcbiAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gICZfX3N0YXQtaWNvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBjb2xvcjogJGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgJl9fc3RhdC1pY29uLXdhcm4ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIGNvbG9yOiAkcGluaztcclxuICB9XHJcblxyXG4gICZfX3N0YXQtaXRlbS10aXRsZSB7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbiAgICBmb250LXdlaWdodDogJGZ3LWxpZ2h0ZXI7XHJcbiAgICBmb250LXNpemU6ICRmcy14cztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "qw33":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/visits-chart/visits-chart.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: VisitsChartComponent */

    /***/
    function qw33(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitsChartComponent", function () {
        return VisitsChartComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var ngx_trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-trend */
      "LNGT");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var VisitsChartComponent = function VisitsChartComponent() {
        _classCallCheck(this, VisitsChartComponent);

        this.colors = _consts__WEBPACK_IMPORTED_MODULE_0__["colors"];
      };

      VisitsChartComponent.ɵfac = function VisitsChartComponent_Factory(t) {
        return new (t || VisitsChartComponent)();
      };

      VisitsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: VisitsChartComponent,
        selectors: [["app-visits-chart"]],
        inputs: {
          visitsChartData: "visitsChartData"
        },
        decls: 26,
        vars: 11,
        consts: [[1, "visits-chart"], [1, "visits-chart__header"], [1, "visits-chart__title"], [1, "visits-chart__content"], [1, "visits-chart__content-info"], [1, "visits-chart__content-info-title"], [1, "visits-chart__content-info-chart", 3, "data", "gradient", "height", "smooth", "strokeWidth"], [1, "visits-chart__content-stats"], [1, "visits-chart__content-stats-title"], [1, "visits-chart__content-stats-data"]],
        template: function VisitsChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Visits Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-settings-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-trend", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Sign Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.visitsChartData.all);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.visitsChartData.data)("gradient", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.colors.GREEN))("height", 44)("smooth", true)("strokeWidth", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.visitsChartData.registration);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.visitsChartData.signOut);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.visitsChartData.rate, "%");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__["SettingsMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ngx_trend__WEBPACK_IMPORTED_MODULE_4__["TrendComponent"]],
        styles: [".visits-chart[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  height: 192px;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.visits-chart__header[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #6E6E6E;\n  display: flex;\n  justify-content: space-between;\n}\n.visits-chart__title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n  margin: 0;\n  line-height: 40px;\n}\n.visits-chart__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 75%;\n}\n.visits-chart__content-info[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 96px;\n  justify-content: space-between;\n}\n.visits-chart__content-info-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n  color: #4A4A4A;\n}\n.visits-chart__content-info-chart[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.visits-chart__content-stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.visits-chart__content-stats-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6E6E6E;\n  font-weight: 400;\n  font-size: 14px;\n}\n.visits-chart__content-stats-data[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 400;\n  font-size: 21px;\n  color: #4A4A4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHZpc2l0cy1jaGFydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsaUZBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUZGO0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQ25CUztFRG9CVCxTQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUpOO0FBTU07RUFDRSxTQUFBO0VBQ0EsZ0JDdENLO0VEdUNMLGVDN0JHO0VEOEJILGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjRWhDSTtBRjRCWjtBQU9NO0VBQ0UsaUJBQUE7QUFMUjtBQVNJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7RUFDQSxjRTVDRDtFRjZDQyxnQkN6REs7RUQwREwsZUNwREc7QUQ2Q1g7QUFVTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQ2hFSztFRGlFTCxlQ3hESTtFRHlESixjRXhESTtBRmdEWiIsImZpbGUiOiJ2aXNpdHMtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvY29sb3JzXCI7XHJcbkBpbXBvcnQgXCJzcmMvYXBwL3N0eWxlcy9mb250XCI7XHJcblxyXG4udmlzaXRzLWNoYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDNweCAzcHggLTJweCAkc2hhZG93LWdyZXksIDAgMXB4IDhweCAwICRzaGFkb3ctZGFyay1ncmV5O1xyXG4gIGhlaWdodDogMTkycHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNzUlO1xyXG5cclxuICAgICYtaW5mbyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZzLWxhcmdlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxuICAgICAgICBjb2xvcjogJGRhcmstZ3JleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1jaGFydCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLXN0YXRzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgICAgICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1kYXRhIHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgICAgICBmb250LXNpemU6ICRmcy1tZWRpdW07XHJcbiAgICAgICAgY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGZ3LWxpZ2h0ZXI6IDQwMDtcclxuJGZ3LW5vcm1hbDogNTAwO1xyXG4kZnctYm9sZDogNjAwO1xyXG5cclxuXHJcbiRmcy14czogMTEuMnB4O1xyXG4kZnMtc21hbGw6IDE0cHg7XHJcbiRmcy1ub3JtYWw6IDE2cHg7XHJcbiRmcy1yZWd1bGFyOiAxOHB4O1xyXG4kZnMtbWVkaXVtOiAyMXB4O1xyXG4kZnMtbGFyZ2U6IDI0cHg7XHJcbiRmcy14bDogMjhweDtcclxuJGZzLXh4bDogMzhweDtcclxuJGZzLXh4eGw6IDQycHg7XHJcbiIsIiR5ZWxsb3c6ICNmZmMyNjA7XHJcbiRibHVlOiAjNTM2REZFO1xyXG4kbGlnaHQtYmx1ZTogIzc5OERGRTtcclxuJHdoaXRlLWJsdWU6ICNCMUJDRkY7XHJcbiRibHVlLXdoaXRlOiAjRjNGNUZGO1xyXG4kcGluazogI2ZmNDA4MTtcclxuJGRhcmstcGluazogI2ZmMGY2MDtcclxuJGdyZWVuOiAjM0NENEEwO1xyXG4kdmlvbGV0OiAjOTAxM0ZFO1xyXG4kd2hpdGU6IHdoaXRlO1xyXG4kZGFyay1ncmV5OiAjNEE0QTRBO1xyXG4kbGlnaHQtZ3JleTogI0I5QjlCOTtcclxuJGdyZXk6ICM2RTZFNkU7XHJcbiRza3k6ICNjMGNhZmY7XHJcblxyXG5cclxuJHdoaXRlLTM1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG4kd2hpdGUtODA6ICNGRkZGRkY4MDtcclxuXHJcbiRncmF5LTA4OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuOCk7XHJcbiRncmF5LTgwOiAjRDhEOEQ4ODA7XHJcbiRncmF5LTA2OiByZ2JhKDExMCwgMTEwLCAxMTAsIDAuNik7XHJcblxyXG4kYmxhY2stMDg6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4kcGluay0xNTogcmdiYSgyNTUsIDkyLCAxNDcsIDAuMTUpO1xyXG4kYmx1ZS0xNTogcmdiYSg4MywgMTA5LCAyNTQsIDAuMTUpO1xyXG4kZ3JlZW4tMTU6IHJnYmEoNjAsIDIxMiwgMTYwLCAwLjE1KTtcclxuJHllbGxvdy0xNTogcmdiYSgyNTUsIDE5NCwgOTYsIDAuMTUpO1xyXG4kdmlvbGV0LTE1OiByZ2JhKDE0NCwgMTksIDI1NCwgMC4xNSk7XHJcblxyXG5cclxuJHNoYWRvdy13aGl0ZTogI0U4RUFGQztcclxuJHNoYWRvdy1ncmV5OiAjQjJCMkIyMUE7XHJcbiRzaGFkb3ctZGFyay1ncmV5OiAjOUE5QTlBMUE7XHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI0Y2RjdGRjtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "sRhs":
    /*!*****************************************************!*\
      !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
      \*****************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function sRhs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _consts_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../consts/routes */
      "UtzL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);

          this.routes = _consts_routes__WEBPACK_IMPORTED_MODULE_0__["routes"];
          this.isOpenUiElements = false;
        }

        _createClass(SidebarComponent, [{
          key: "openUiElements",
          value: function openUiElements() {
            this.isOpenUiElements = !this.isOpenUiElements;
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)();
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 61,
        vars: 7,
        consts: [["routerLinkActive", "active", 3, "routerLink"], [3, "click"], ["routerLinkActive", "active", 1, "ui-element", 3, "routerLink"], [1, "circle"], [1, "sidebar-title"], ["href", "https://flatlogic.com/templates", "target", "_blank", 2, "text-decoration", "none"], ["href", "https://flatlogic.com/forum/", "target", "_blank", 2, "text-decoration", "none"], ["href", "https://flatlogic.com/forum", "target", "_blank", 2, "text-decoration", "none"], [1, "project-circle", "project-circle_yellow"], [1, "project-circle", "project-circle_blue"], [1, "project-circle", "project-circle_pink"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "text_fields");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Typography ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "border_all");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Tables ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-list-item", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Notification ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-list-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_mat_list_item_click_17_listener() {
              return ctx.openUiElements();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "filter_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " UI Elements ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Icons ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Charts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Map ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "library_books");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Library ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "question_answer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "help_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " FAQ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " My resend ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Starred");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Background ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.DASHBOARD);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.TYPOGRAPHY);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.TABLES);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.NOTIFICATION);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.UI_ELEMENTS_ICONS);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.UI_ELEMENTS_CHARTS);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.routes.UI_ELEMENTS_MAP);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".mat-list-base[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #D8D8D880;\n  width: 210px;\n  padding-bottom: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  color: rgba(110, 110, 110, 0.8);\n  width: auto;\n  padding-left: 4px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.active[_ngcontent-%COMP%] {\n  color: #4A4A4A;\n  background-color: #F3F5FF;\n  outline: none;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.active[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #536DFE;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #F3F5FF;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: rgba(110, 110, 110, 0.6);\n}\n.sidebar-title[_ngcontent-%COMP%] {\n  color: rgba(110, 110, 110, 0.8);\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 32px;\n  margin-left: 24px;\n  margin-bottom: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item.ui-element[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background-color: #B9B9B9;\n  margin-right: 30px;\n}\n.project-circle[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 15px;\n  margin-left: 8px;\n}\n.project-circle_yellow[_ngcontent-%COMP%] {\n  background-color: #ffc260;\n}\n.project-circle_blue[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n}\n.project-circle_pink[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGZvbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGtDQUFBO0VBQ0EsWUNRYztFRFBkLG9CQUFBO0FBSEY7QUFLRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsK0JFT007RUZOTixXQUFBO0VBQ0EsaUJBQUE7QUFISjtBQUtJO0VBQ0UsY0VQTTtFRlFOLHlCRWRPO0VGZVAsYUFBQTtBQUhOO0FBS007RUFDRSxjRXJCRDtBRmtCUDtBQU1NO0VBQ0UseUJFekJEO0FGcUJQO0FBUUk7RUFDRSx5QkUzQk87QUZxQmI7QUFTSTtFQUNFLGFBQUE7QUFQTjtBQVlBO0VBQ0Usa0JBQUE7RUFDQSwrQkVyQlE7QUZZVjtBQWFBO0VBQ0UsK0JFNUJRO0VGNkJSLGVHekNVO0VIMENWLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0FBVkY7QUFhQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVwRFc7RUZxRFgsa0JBQUE7QUFWRjtBQWFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UseUJFM0VLO0FGaUVUO0FBYUU7RUFDRSx5QkU5RUc7QUZtRVA7QUFjRTtFQUNFLHlCRTlFRztBRmtFUCIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hcHAvc3R5bGVzL2NvbG9yc1wiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvZm9udFwiO1xyXG5AaW1wb3J0IFwic3JjL2FwcC9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ubWF0LWxpc3QtYmFzZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5LTgwO1xyXG4gIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuXHJcbiAgJiAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRzaWRlYmFyLWZvbnQtY29sb3I7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICRzaWRlYmFyLWZvbnQtY29sb3ItYWN0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1iYWNrZ3JvdW5kLWNvbG9yLWFjdGl2ZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgICYgLm1hdC1pY29uIHtcclxuICAgICAgICBjb2xvcjogJHNpZGViYXItaWNvbi1jb2xvci1hY3RpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgLmNpcmNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItaWNvbi1jb2xvci1hY3RpdmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItYmFja2dyb3VuZC1jb2xvci1ob3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGNvbG9yOiAkc2lkZWJhci1pY29uLWNvbG9yO1xyXG59XHJcblxyXG5cclxuLnNpZGViYXItdGl0bGUge1xyXG4gIGNvbG9yOiAkc2lkZWJhci10aXRsZS1jb2xvcjtcclxuICBmb250LXNpemU6ICRmcy1ub3JtYWw7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtLnVpLWVsZW1lbnQge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgd2lkdGg6IDVweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItY2lyY2xlLWNvbG9yO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnByb2plY3QtY2lyY2xlIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuXHJcbiAgJl95ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcclxuICB9XHJcblxyXG4gICZfYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICB9XHJcblxyXG4gICZfcGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcImNvbG9yc1wiO1xyXG5cclxuLy89PSBWaWV3cG9ydHNcclxuXHJcbiRleHRyYS1zbWFsbDogNTc2cHg7XHJcbiRzbWFsbDogNTc2cHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbm9ybWFsOiAxMDI0cHg7XHJcbiRsYXJnZTogOTkycHg7XHJcbiRleHRyYS1sYXJnZTogMTIwMHB4O1xyXG5cclxuXHJcbi8vPT0gU2lkZWJhclxyXG5cclxuJHNpZGViYXItd2lkdGg6IDIxMHB4O1xyXG4kc2lkZWJhci1mb250LWNvbG9yOiAkZ3JheS0wODtcclxuJHNpZGViYXItZm9udC1jb2xvci1hY3RpdmU6ICRkYXJrLWdyZXk7XHJcbiRzaWRlYmFyLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAkYmx1ZS13aGl0ZTtcclxuJHNpZGViYXItYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogJGJsdWUtd2hpdGU7XHJcbiRzaWRlYmFyLWljb24tY29sb3ItYWN0aXZlOiAkYmx1ZTtcclxuJHNpZGViYXItaWNvbi1jb2xvcjogJGdyYXktMDY7XHJcbiRzaWRlYmFyLXRpdGxlLWNvbG9yOiAkc2lkZWJhci1mb250LWNvbG9yO1xyXG4kc2lkZWJhci1jaXJjbGUtY29sb3I6ICRsaWdodC1ncmV5O1xyXG5cclxuLy89PSBNYXRlcmlhbCBDYXJkXHJcbi8vXHJcblxyXG4kY2FyZC1mb250LWNvbG9yOiAkZGFyay1ncmV5O1xyXG4kY2FyZC10aXRsZS1mb250LWNvbG9yOiAkZ3JleTtcclxuXHJcbi8vPT0gTWF0ZXJpYWwgVG9vbGJhclxyXG5cclxuJHRvb2xiYXItdGl0bGUtZm9udC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiR0b29sYmFyLWJ1dHRvbi1mb250LWNvbG9yOiAkd2hpdGU7XHJcbiR0b29sYmFyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcclxuJHRvb2xiYXItYnV0dG9uLWJhY2tncm91bmQtY29sb3ItYWN0aXZlOiAkZGFyay1waW5rO1xyXG5cclxuLy89PSBNYXRlcmlhbCBTaWRlYmFyIENvbnRlbnRcclxuXHJcbiRzaWRlYmFyLWNvbnRlbnQtcGFkZGluZzogNDhweDtcclxuXHJcbi8vPT0gTWF0ZXJpYWwgVGFic1xyXG5cclxuJHRhYnMtaGVhZGVyLWZvbnQtY29sb3I6ICRsaWdodC1ncmV5O1xyXG4kdGFicy1oZWFkZXItZm9udC1jb2xvci1hY3RpdmU6ICRibHVlO1xyXG4kdGFicy1pbmstYmFyLWNvbG9yOiAkYmx1ZTtcclxuXHJcblxyXG4vLz09IEFwZXggQ2hhcnQgWCBheGlzIHRvb2x0aXBcclxuXHJcbiRjaGFydC10b29sdGlwLWJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4kY2hhcnQtdG9vbHRpcC1ib3JkZXItY29sb3I6ICRibHVlO1xyXG4kY2hhcnQtdG9vbHRpcC1mb250LWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IFNjcm9sbCBiYXJcclxuXHJcbiRzY3JvbGxiYXItdHJhY2stY29sb3I6ICRsaWdodC1ncmV5O1xyXG4kc2Nyb2xsYmFyLXRyYWNrLXBpZWNlLWNvbG9yOiAkd2hpdGU7XHJcbiRzY3JvbGxiYXItdGh1bWItY29sb3I6ICRsaWdodC1ncmV5O1xyXG4kc2Nyb2xsYmFyLWNvcm5lci1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcblxyXG4vLz09IEhlYWRlclxyXG5cclxuJGhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuJGhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRoZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4kaGVhZGVyLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmxhY2stMDg7XHJcbiRoZWFkZXItYnV0dG9uLWZvbnQtY29sb3I6ICR3aGl0ZTtcclxuJGhlYWRlci10aXRsZS1mb250LWNvbG9yOiAkd2hpdGU7XHJcblxyXG4vLz09IEZvb3RlclxyXG5cclxuJGZvb3Rlci1oZWlnaHQ6IDQ4cHg7XHJcbiRmb290ZXItd2lkdGg6IGNhbGMoMTAwJSAtICN7JHNpZGViYXItY29udGVudC1wYWRkaW5nfSk7XHJcbiRmb290ZXItbGluay1jb2xvcjogJGJsdWU7XHJcbiRmb290ZXItaWNvbi1jb2xvcjogJGdyYXktMDY7XHJcbiRmb290ZXItaWNvbi1iYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkYmxhY2stMDg7XHJcblxyXG4vLz09IFNldHRpbmdzIG1lbnUgZWxlbWVudFxyXG5cclxuJHNldHRpbmdzLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiRzZXR0aW5ncy1idXR0b24tYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogJGJsdWU7XHJcbiRzZXR0aW5ncy1idXR0b24tY29sb3I6ICRsaWdodC1ncmV5O1xyXG4kc2V0dGluZ3MtYnV0dG9uLWNvbG9yLWhvdmVyOiAkd2hpdGUtMzU7XHJcbiRzZXR0aW5ncy1tZW51LWZvbnQtY29sb3I6ICRkYXJrLWdyZXk7XHJcbiRzZXR0aW5ncy1tZW51LWJhY2tncm91bmQtY29sb3ItaG92ZXI6ICRibHVlLXdoaXRlO1xyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "v/4h":
    /*!*********************************!*\
      !*** ./src/app/consts/index.ts ***!
      \*********************************/

    /*! exports provided: routes, colors */

    /***/
    function v4h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./routes */
      "UtzL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return _routes__WEBPACK_IMPORTED_MODULE_0__["routes"];
      });
      /* harmony import */


      var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./colors */
      "i+Fg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "colors", function () {
        return _colors__WEBPACK_IMPORTED_MODULE_1__["colors"];
      });
      /***/

    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NotFoundComponent = function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);

        this.routes = _consts__WEBPACK_IMPORTED_MODULE_0__["routes"];
      };

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 16,
        vars: 1,
        consts: [[1, "not-found-page"], [1, "not-found-page__content"], [1, "not-found-page__title"], ["src", "./assets/hot-found/logo.svg", "alt", "logo", 1, "not-found-page__title-img"], [1, "not-found-page__title-text"], [1, "not-found-page__card"], [1, "not-found-page__card-title"], [1, "not-found-page__card-sub-title"], [1, "not-found-page__card-sub-title-second"], ["mat-raised-button", "", "color", "primary", 1, "not-found-page__card-button", 3, "routerLink"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Material Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Oops. Looks like the page you're looking for no longer exists");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "But we're here to bring you back to safety");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Back to Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routes.DASHBOARD);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".not-found-page[_ngcontent-%COMP%] {\n  background-color: #536DFE;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n}\n.not-found-page__content[_ngcontent-%COMP%] {\n  width: 355px;\n}\n.not-found-page__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 42px;\n  margin-bottom: 67px;\n}\n.not-found-page__title-img[_ngcontent-%COMP%] {\n  width: 48px;\n  margin-left: 20px;\n  margin-top: -6px;\n}\n.not-found-page__title-text[_ngcontent-%COMP%] {\n  color: white;\n  margin: 1px 30px 0 0;\n  font-weight: 500;\n  font-size: 32px;\n  letter-spacing: 0.6px;\n}\n.not-found-page__card[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 70vh;\n  padding: 56px 0 36px 0;\n  margin: 0;\n}\n.not-found-page__card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.not-found-page__card-title[_ngcontent-%COMP%] {\n  font-size: 107px;\n  font-weight: 500;\n  color: #536DFE;\n  line-height: 108px;\n  text-align: center;\n}\n.not-found-page__card-sub-title[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: -0.05px;\n  color: #536DFE;\n  text-align: center;\n}\n.not-found-page__card-sub-title-second[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: -0.2px;\n  color: #6E6E6E;\n  text-align: center;\n}\n.not-found-page__card-button[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-left: 36px;\n  width: 150px;\n  line-height: 40px;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXGNvbG9ycy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSx5QkNISztFRElMLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQU1JO0VBQ0UsWUNsQkU7RURtQkYsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUpOO0FBUUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBTko7QUFRSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFOTjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbkRDO0VEb0RELGtCQUFBO0VBQ0Esa0JBQUE7QUFQTjtBQVVJO0VBQ0UsZ0JBQUE7RUFDQSxlRXBETTtFRnFETixnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0M3REM7RUQ4REQsa0JBQUE7QUFSTjtBQVdJO0VBQ0UsZ0JBQUE7RUFDQSxlRTdETTtFRjhETixnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MzREM7RUQ0REQsa0JBQUE7QUFUTjtBQVlJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVk4iLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvY29sb3JzJztcclxuQGltcG9ydCAnc3JjL2FwcC9zdHlsZXMvZm9udCc7XHJcblxyXG4ubm90LWZvdW5kLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICB3aWR0aDogMzU1cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2N3B4O1xyXG5cclxuICAgICYtaW1nIHtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtdGV4dCB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMXB4IDMwcHggMCAwO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NhcmQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgcGFkZGluZzogNTZweCAwIDM2cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxMDdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLXN1Yi10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZzLW5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cHg7XHJcbiAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtc3ViLXRpdGxlLXNlY29uZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZzLW5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzZweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHllbGxvdzogI2ZmYzI2MDtcclxuJGJsdWU6ICM1MzZERkU7XHJcbiRsaWdodC1ibHVlOiAjNzk4REZFO1xyXG4kd2hpdGUtYmx1ZTogI0IxQkNGRjtcclxuJGJsdWUtd2hpdGU6ICNGM0Y1RkY7XHJcbiRwaW5rOiAjZmY0MDgxO1xyXG4kZGFyay1waW5rOiAjZmYwZjYwO1xyXG4kZ3JlZW46ICMzQ0Q0QTA7XHJcbiR2aW9sZXQ6ICM5MDEzRkU7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRkYXJrLWdyZXk6ICM0QTRBNEE7XHJcbiRsaWdodC1ncmV5OiAjQjlCOUI5O1xyXG4kZ3JleTogIzZFNkU2RTtcclxuJHNreTogI2MwY2FmZjtcclxuXHJcblxyXG4kd2hpdGUtMzU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XHJcbiR3aGl0ZS04MDogI0ZGRkZGRjgwO1xyXG5cclxuJGdyYXktMDg6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC44KTtcclxuJGdyYXktODA6ICNEOEQ4RDg4MDtcclxuJGdyYXktMDY6IHJnYmEoMTEwLCAxMTAsIDExMCwgMC42KTtcclxuXHJcbiRibGFjay0wODogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuXHJcbiRwaW5rLTE1OiByZ2JhKDI1NSwgOTIsIDE0NywgMC4xNSk7XHJcbiRibHVlLTE1OiByZ2JhKDgzLCAxMDksIDI1NCwgMC4xNSk7XHJcbiRncmVlbi0xNTogcmdiYSg2MCwgMjEyLCAxNjAsIDAuMTUpO1xyXG4keWVsbG93LTE1OiByZ2JhKDI1NSwgMTk0LCA5NiwgMC4xNSk7XHJcbiR2aW9sZXQtMTU6IHJnYmEoMTQ0LCAxOSwgMjU0LCAwLjE1KTtcclxuXHJcblxyXG4kc2hhZG93LXdoaXRlOiAjRThFQUZDO1xyXG4kc2hhZG93LWdyZXk6ICNCMkIyQjIxQTtcclxuJHNoYWRvdy1kYXJrLWdyZXk6ICM5QTlBOUExQTtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGN0ZGO1xyXG4iLCIkZnctbGlnaHRlcjogNDAwO1xyXG4kZnctbm9ybWFsOiA1MDA7XHJcbiRmdy1ib2xkOiA2MDA7XHJcblxyXG5cclxuJGZzLXhzOiAxMS4ycHg7XHJcbiRmcy1zbWFsbDogMTRweDtcclxuJGZzLW5vcm1hbDogMTZweDtcclxuJGZzLXJlZ3VsYXI6IDE4cHg7XHJcbiRmcy1tZWRpdW06IDIxcHg7XHJcbiRmcy1sYXJnZTogMjRweDtcclxuJGZzLXhsOiAyOHB4O1xyXG4kZnMteHhsOiAzOHB4O1xyXG4kZnMteHh4bDogNDJweDtcclxuIl19 */"]
      });
      /***/
    },

    /***/
    "vRae":
    /*!*****************************************************!*\
      !*** ./src/app/pages/auth/services/auth.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthService */

    /***/
    function vRae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login() {
            localStorage.setItem('token', 'token');
          }
        }, {
          key: "sign",
          value: function sign() {
            localStorage.setItem('token', 'token');
          }
        }, {
          key: "signOut",
          value: function signOut() {
            localStorage.removeItem('token');
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
              name: 'John',
              lastName: 'Smith'
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_dashboard_containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/dashboard/containers */
      "ggrH");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/auth/guards */
      "0fNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [_pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _pages_dashboard_containers__WEBPACK_IMPORTED_MODULE_1__["DashboardPageComponent"]
      }, {
        path: 'typography',
        pathMatch: 'full',
        canActivate: [_pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-typography-typography-module */
          "pages-typography-typography-module").then(__webpack_require__.bind(null,
          /*! ./pages/typography/typography.module */
          "R+Zu")).then(function (m) {
            return m.TypographyModule;
          });
        }
      }, {
        path: 'tables',
        pathMatch: 'full',
        canActivate: [_pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tables-tables-module */
          "pages-tables-tables-module").then(__webpack_require__.bind(null,
          /*! ./pages/tables/tables.module */
          "w2km")).then(function (m) {
            return m.TablesModule;
          });
        }
      }, {
        path: 'notification',
        pathMatch: 'full',
        canActivate: [_pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-notification-notification-module */
          "pages-notification-notification-module").then(__webpack_require__.bind(null,
          /*! ./pages/notification/notification.module */
          "UUPU")).then(function (m) {
            return m.NotificationModule;
          });
        }
      }, {
        path: 'ui',
        canActivate: [_pages_auth_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-ui-elements-ui-elements-module */
          "pages-ui-elements-ui-elements-module").then(__webpack_require__.bind(null,
          /*! ./pages/ui-elements/ui-elements.module */
          "xIyE")).then(function (m) {
            return m.UiElementsModule;
          });
        }
      }, {
        path: '404',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/auth/auth.module */
          "lBUW")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: '**',
        redirectTo: '404'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true,
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wG6G":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/dashboard/components/server-chart/server-chart.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: ServerChartComponent */

    /***/
    function wG6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerChartComponent", function () {
        return ServerChartComponent;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/ui-elements/settings-menu/settings-menu.component */
      "WwWl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");

      function ServerChartComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "apx-chart", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chart_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.serverDataTitles[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", chart_r1.series)("chart", chart_r1.chart)("xaxis", chart_r1.xaxis)("stroke", chart_r1.stroke)("dataLabels", chart_r1.dataLabels)("yaxis", chart_r1.yaxis)("labels", chart_r1.labels)("legend", chart_r1.legend)("grid", chart_r1.grid)("tooltip", chart_r1.tooltip)("colors", chart_r1.colors)("fill", chart_r1.fill);
        }
      }

      var ServerChartComponent = /*#__PURE__*/function () {
        function ServerChartComponent() {
          _classCallCheck(this, ServerChartComponent);

          this.colors = _consts__WEBPACK_IMPORTED_MODULE_0__["colors"];
        }

        _createClass(ServerChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.charts = [this.initChart(this.serverChartData.firstServerChartData, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].PINK), this.initChart(this.serverChartData.secondServerChartData, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].BLUE), this.initChart(this.serverChartData.thirdServerChartData, _consts__WEBPACK_IMPORTED_MODULE_0__["colors"].YELLOW)];
            this.serverDataTitles = [this.serverChartData.firstDataTitle, this.serverChartData.secondDataTitle, this.serverChartData.thirdDataTitle];
          }
        }, {
          key: "initChart",
          value: function initChart(data, color) {
            return {
              chart: {
                type: 'area',
                height: 80,
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false
                }
              },
              series: [{
                name: 'STOCK ABC',
                data: data
              }],
              colors: [color],
              fill: {
                type: 'solid',
                opacity: 0.3
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth',
                width: 2
              },
              labels: this.serverChartData.dates,
              xaxis: {
                type: 'datetime',
                labels: {
                  show: false
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                }
              },
              yaxis: {
                max: 50000,
                show: false
              },
              legend: {
                show: false
              },
              grid: {
                show: false,
                padding: {
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0
                }
              },
              tooltip: {
                enabled: false
              }
            };
          }
        }]);

        return ServerChartComponent;
      }();

      ServerChartComponent.ɵfac = function ServerChartComponent_Factory(t) {
        return new (t || ServerChartComponent)();
      };

      ServerChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ServerChartComponent,
        selectors: [["app-server-chart"]],
        inputs: {
          serverChartData: "serverChartData"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "server-chart"], [1, "server-chart__header"], [1, "server-chart__header-title"], [1, "server-chart__content"], ["class", "server-chart__content-item", 4, "ngFor", "ngForOf"], [1, "server-chart__content-item"], [1, "server-chart__content-item-text"], [3, "series", "chart", "xaxis", "stroke", "dataLabels", "yaxis", "labels", "legend", "grid", "tooltip", "colors", "fill"]],
        template: function ServerChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Server Overview");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-settings-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ServerChartComponent_div_6_Template, 4, 13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.charts);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _shared_ui_elements_settings_menu_settings_menu_component__WEBPACK_IMPORTED_MODULE_3__["SettingsMenuComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"]],
        styles: [".server-chart[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 11px 0 #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;\n  display: flex;\n  flex-direction: column;\n  height: 192px;\n}\n.server-chart__header[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #6E6E6E;\n  display: flex;\n  justify-content: space-between;\n}\n.server-chart__header-title[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: 400;\n  margin: 0;\n  line-height: 40px;\n}\n.server-chart__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.server-chart__content-item[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 50px;\n  justify-content: space-between;\n}\n.server-chart__content-item-text[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #6E6E6E;\n  font-weight: 400;\n  font-size: 14px;\n  padding-right: 16px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNlcnZlci1jaGFydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxjb2xvcnMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxmb250LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpRkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFGRjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxjQ0NHO0VEQUgsYUFBQTtFQUNBLDhCQUFBO0FBRko7QUFJSTtFQUNFLGVFUE07RUZRTixnQkVqQk87RUZrQlAsU0FBQTtFQUNBLGlCQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUpKO0FBTUk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFKTjtBQU1NO0VBQ0UsV0FBQTtFQUNBLGNDekJEO0VEMEJDLGdCRXRDSztFRnVDTCxlRWpDRztFRmtDSCxtQkFBQTtFQUNBLFNBQUE7QUFKUiIsImZpbGUiOiJzZXJ2ZXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdzcmMvYXBwL3N0eWxlcy9mb250JztcclxuXHJcbi5zZXJ2ZXItY2hhcnQge1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDExcHggMCAkc2hhZG93LXdoaXRlLCAwIDNweCAzcHggLTJweCAkc2hhZG93LWdyZXksIDAgMXB4IDhweCAwICRzaGFkb3ctZGFyay1ncmV5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDE5MnB4O1xyXG5cclxuICAmX19oZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZzLW1lZGl1bTtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmdy1saWdodGVyO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAmLWl0ZW0ge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZnctbGlnaHRlcjtcclxuICAgICAgICBmb250LXNpemU6ICRmcy1zbWFsbDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIkeWVsbG93OiAjZmZjMjYwO1xyXG4kYmx1ZTogIzUzNkRGRTtcclxuJGxpZ2h0LWJsdWU6ICM3OThERkU7XHJcbiR3aGl0ZS1ibHVlOiAjQjFCQ0ZGO1xyXG4kYmx1ZS13aGl0ZTogI0YzRjVGRjtcclxuJHBpbms6ICNmZjQwODE7XHJcbiRkYXJrLXBpbms6ICNmZjBmNjA7XHJcbiRncmVlbjogIzNDRDRBMDtcclxuJHZpb2xldDogIzkwMTNGRTtcclxuJHdoaXRlOiB3aGl0ZTtcclxuJGRhcmstZ3JleTogIzRBNEE0QTtcclxuJGxpZ2h0LWdyZXk6ICNCOUI5Qjk7XHJcbiRncmV5OiAjNkU2RTZFO1xyXG4kc2t5OiAjYzBjYWZmO1xyXG5cclxuXHJcbiR3aGl0ZS0zNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxuJHdoaXRlLTgwOiAjRkZGRkZGODA7XHJcblxyXG4kZ3JheS0wODogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjgpO1xyXG4kZ3JheS04MDogI0Q4RDhEODgwO1xyXG4kZ3JheS0wNjogcmdiYSgxMTAsIDExMCwgMTEwLCAwLjYpO1xyXG5cclxuJGJsYWNrLTA4OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuJHBpbmstMTU6IHJnYmEoMjU1LCA5MiwgMTQ3LCAwLjE1KTtcclxuJGJsdWUtMTU6IHJnYmEoODMsIDEwOSwgMjU0LCAwLjE1KTtcclxuJGdyZWVuLTE1OiByZ2JhKDYwLCAyMTIsIDE2MCwgMC4xNSk7XHJcbiR5ZWxsb3ctMTU6IHJnYmEoMjU1LCAxOTQsIDk2LCAwLjE1KTtcclxuJHZpb2xldC0xNTogcmdiYSgxNDQsIDE5LCAyNTQsIDAuMTUpO1xyXG5cclxuXHJcbiRzaGFkb3ctd2hpdGU6ICNFOEVBRkM7XHJcbiRzaGFkb3ctZ3JleTogI0IyQjJCMjFBO1xyXG4kc2hhZG93LWRhcmstZ3JleTogIzlBOUE5QTFBO1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNGNkY3RkY7XHJcbiIsIiRmdy1saWdodGVyOiA0MDA7XHJcbiRmdy1ub3JtYWw6IDUwMDtcclxuJGZ3LWJvbGQ6IDYwMDtcclxuXHJcblxyXG4kZnMteHM6IDExLjJweDtcclxuJGZzLXNtYWxsOiAxNHB4O1xyXG4kZnMtbm9ybWFsOiAxNnB4O1xyXG4kZnMtcmVndWxhcjogMThweDtcclxuJGZzLW1lZGl1bTogMjFweDtcclxuJGZzLWxhcmdlOiAyNHB4O1xyXG4kZnMteGw6IDI4cHg7XHJcbiRmcy14eGw6IDM4cHg7XHJcbiRmcy14eHhsOiA0MnB4O1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "yULc":
    /*!*************************************************!*\
      !*** ./src/app/pages/auth/guards/auth.guard.ts ***!
      \*************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function yULc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../consts */
      "v/4h");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.routers = _consts__WEBPACK_IMPORTED_MODULE_0__["routes"];
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var token = localStorage.getItem('token');

            if (token) {
              return true;
            } else {
              this.router.navigate([this.routers.LOGIN]);
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./hmr */
      "0QMH");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      var bootstrap = function bootstrap() {
        return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
      };

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
        if (false) {} else {
          console.error('HMR is not enabled for webpack-dev-server!');
          console.log('Are you using the --hmr flag for ng serve?');
        }
      } else {
        bootstrap()["catch"](function (err) {
          return console.log(err);
        });
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map