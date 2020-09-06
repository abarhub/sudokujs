(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_grille_grille_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/grille/grille.component */ "./src/app/component/grille/grille.component.ts");
/* harmony import */ var _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/niveau-difficulte.enum */ "./src/app/models/niveau-difficulte.enum.ts");
/* harmony import */ var _service_jeux_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/jeux.service */ "./src/app/service/jeux.service.ts");
/* harmony import */ var _service_solve_backtrack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/solve-backtrack.service */ "./src/app/service/solve-backtrack.service.ts");
/* harmony import */ var _service_creation_grille_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/creation-grille.service */ "./src/app/service/creation-grille.service.ts");
/* harmony import */ var _component_selection_chiffres_selection_chiffres_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/selection-chiffres/selection-chiffres.component */ "./src/app/component/selection-chiffres/selection-chiffres.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class AppComponent {
    constructor(jeux, solveBacktrack, creationGrilleService) {
        this.jeux = jeux;
        this.solveBacktrack = solveBacktrack;
        this.creationGrilleService = creationGrilleService;
        this.title = 'sudokujs';
        this.derniereValeurSelectionnee = 0;
        this.niveau = 'facile';
        this.nombreCasesVides = 0;
    }
    ngAfterViewInit() {
        // cf : https://commons.wikimedia.org/wiki/File:Sdk_ex00s.gif?uselang=fr
        /*const tab: number[][] = [
          [2, 8, 3, 4, 1, 9, 7, 4, 6],
          [9, 6, 4, 8, 7, 3, 5, 2, 1],
          [5, 1, 7, 6, 2, 4, 9, 3, 8],
          [1, 5, 6, 7, 4, 2, 3, 8, 9],
          [4, 2, 9, 3, 8, 6, 1, 7, 5],
          [3, 7, 8, 1, 9, 5, 2, 6, 4],
          [8, 9, 5, 4, 3, 7, 6, 1, 2],
          [7, 4, 2, 9, 6, 1, 8, 5, 3],
          [6, 3, 1, 2, 5, 8, 4, 9, 7]
        ];
        const visible: boolean[][] = [
          [true, false, false, false, false, false, false, true, false],
          [false, false, false, false, false, false, true, false, false],
          [false, true, false, true, false, true, false, true, true],
          [true, false, false, true, true, false, false, true, true],
          [false, false, true, false, true, false, true, false, false],
          [true, true, false, false, true, true, false, false, true],
          [true, true, false, true, false, true, false, true, false],
          [false, false, true, false, false, false, false, false, false],
          [false, true, false, false, false, false, false, false, true]
        ];
    
        const modifiable = visible.map(x => x.map(y => !y));
        const grille: Grille = new Grille(tab, visible, modifiable);*/
        const niveauDifficulte = _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__["NiveauDifficulteEnum"].FACILE;
        const grille = this.creationGrilleService.nouvelleGrille(niveauDifficulte);
        this.grille.init2(grille);
        this.nombreCasesVides = grille.nombreCasesVides();
        // this.resolve(tab, visible);
    }
    onSelection($event) {
        this.derniereValeurSelectionnee = $event.valeur;
        if ((this.derniereValeurSelectionnee >= 1 && this.derniereValeurSelectionnee <= 9)
            || this.derniereValeurSelectionnee === -1) {
            this.grille.setSelection(this.derniereValeurSelectionnee);
        }
        else {
            this.grille.setSelection(null);
        }
    }
    creationGrille() {
        let niveauDifficulte;
        if (this.niveau === 'facile') {
            niveauDifficulte = _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__["NiveauDifficulteEnum"].FACILE;
        }
        else if (this.niveau === 'moyen') {
            niveauDifficulte = _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__["NiveauDifficulteEnum"].MOYEN;
        }
        else if (this.niveau === 'difficile') {
            niveauDifficulte = _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__["NiveauDifficulteEnum"].DIFFICILE;
        }
        else {
            niveauDifficulte = _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_2__["NiveauDifficulteEnum"].FACILE;
        }
        console.log("difficulte", this.niveau, niveauDifficulte);
        const res = this.creationGrilleService.nouvelleGrille(niveauDifficulte);
        console.log('res', res);
        this.grille.init2(res);
        this.nombreCasesVides = res.nombreCasesVides();
    }
    resolve(tab, visible) {
        let tab2;
        tab2 = tab.map(x => x.map(y => y));
        for (let i = 0; i < tab2.length; i++) {
            for (let j = 0; j < tab2[i].length; j++) {
                if (!visible[i][j]) {
                    tab2[i][j] = 0;
                }
            }
        }
        console.log('tab2:', tab2);
        const res = this.solveBacktrack.solve(tab2);
        console.log('res', res, tab2);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_jeux_service__WEBPACK_IMPORTED_MODULE_3__["JeuxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_solve_backtrack_service__WEBPACK_IMPORTED_MODULE_4__["SolveBacktrack"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_creation_grille_service__WEBPACK_IMPORTED_MODULE_5__["CreationGrilleService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_component_grille_grille_component__WEBPACK_IMPORTED_MODULE_1__["GrilleComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.grille = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "container"], [1, "row"], [3, "selection"], [1, "col-12"], [3, "click"], [3, "ngModel", "ngModelChange"], [3, "ngValue"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-selection-chiffres", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selection", function AppComponent_Template_app_selection_chiffres_selection_4_listener($event) { return ctx.onSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_10_listener() { return ctx.creationGrille(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nouvelle grille");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_12_listener($event) { return ctx.niveau = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Facile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Moyen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Difficile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Selection: ", ctx.derniereValeurSelectionnee, " Nombre de cases vide: ", ctx.nombreCasesVides, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.niveau);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "facile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "moyen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", "difficile");
    } }, directives: [_component_grille_grille_component__WEBPACK_IMPORTED_MODULE_1__["GrilleComponent"], _component_selection_chiffres_selection_chiffres_component__WEBPACK_IMPORTED_MODULE_6__["SelectionChiffresComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]], styles: ["td[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFIWTtFQUlaLFdBSlk7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kdGFpbGxlLWNhc2U6IDVlbTtcclxuXHJcbnRkIHtcclxuICB3aWR0aDogJHRhaWxsZS1jYXNlO1xyXG4gIGhlaWdodDogJHRhaWxsZS1jYXNlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _service_jeux_service__WEBPACK_IMPORTED_MODULE_3__["JeuxService"] }, { type: _service_solve_backtrack_service__WEBPACK_IMPORTED_MODULE_4__["SolveBacktrack"] }, { type: _service_creation_grille_service__WEBPACK_IMPORTED_MODULE_5__["CreationGrilleService"] }]; }, { grille: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_component_grille_grille_component__WEBPACK_IMPORTED_MODULE_1__["GrilleComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _component_grille_grille_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/grille/grille.component */ "./src/app/component/grille/grille.component.ts");
/* harmony import */ var _component_selection_chiffres_selection_chiffres_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/selection-chiffres/selection-chiffres.component */ "./src/app/component/selection-chiffres/selection-chiffres.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _component_grille_grille_component__WEBPACK_IMPORTED_MODULE_5__["GrilleComponent"],
        _component_selection_chiffres_selection_chiffres_component__WEBPACK_IMPORTED_MODULE_6__["SelectionChiffresComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _component_grille_grille_component__WEBPACK_IMPORTED_MODULE_5__["GrilleComponent"],
                    _component_selection_chiffres_selection_chiffres_component__WEBPACK_IMPORTED_MODULE_6__["SelectionChiffresComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/grille/grille.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/grille/grille.component.ts ***!
  \******************************************************/
/*! exports provided: GrilleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrilleComponent", function() { return GrilleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_grille_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/grille.utils */ "./src/app/utils/grille.utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "non-modifiable": a0, "modifiable": a1, "premier-bord": a2, "dernier-bord": a3, "premier-bord-haut": a4, "dernier-bord-bas": a5, "case-selectionnee": a6, "ligne-colonne-selectionnee-modifiable": a7, "ligne-colonne-selectionnee-non-modifiable": a8 }; };
function GrilleComponent_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GrilleComponent_tr_2_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const colonne_r5 = ctx.index; const ligne_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.definiChiffre(ligne_r2, colonne_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colonne_r5 = ctx.index;
    const ligne_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](2, _c0, [!ctx_r3.estModifiable(ligne_r2, colonne_r5), ctx_r3.estModifiable(ligne_r2, colonne_r5), colonne_r5 % 3 === 0, colonne_r5 === 8, ligne_r2 % 3 === 0, ligne_r2 === 8, ctx_r3.isCaseSelectionnee(ligne_r2, colonne_r5), ctx_r3.isLigneColonneSelectionnee(ligne_r2, colonne_r5) && ctx_r3.estModifiable(ligne_r2, colonne_r5), ctx_r3.isLigneColonneSelectionnee(ligne_r2, colonne_r5) && !ctx_r3.estModifiable(ligne_r2, colonne_r5)]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.case(ligne_r2, colonne_r5), " ");
} }
const _c1 = function () { return []; };
function GrilleComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GrilleComponent_tr_2_td_1_Template, 2, 12, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).constructor(9));
} }
class GrilleComponent {
    constructor() {
        this.valeurSelectionnee = null;
        this.ligneSelectionnee = null;
        this.colonneSelectionnee = null;
    }
    ngOnInit() {
    }
    case(ligne, colonne) {
        if (this.grille && this.grille.estInitialise()) {
            if (this.estVisible(ligne, colonne)) {
                const valeur = this.grille.getValeur(ligne, colonne);
                return '' + valeur;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }
    init2(grille) {
        this.grille = grille;
    }
    estVisible(ligne, colonne) {
        if (this.grille && this.grille.estInitialise()) {
            return this.grille.estVisible(ligne, colonne);
        }
        else {
            return false;
        }
    }
    estModifiable(ligne, colonne) {
        if (this.grille && this.grille.estInitialise()) {
            return this.grille.estModifiable(ligne, colonne);
        }
        else {
            return false;
        }
    }
    setSelection(derniereValeurSelectionnee) {
        this.valeurSelectionnee = derniereValeurSelectionnee;
        if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null) {
            this.definiChiffre(this.ligneSelectionnee, this.colonneSelectionnee);
            this.ligneSelectionnee = null;
            this.colonneSelectionnee = null;
        }
    }
    definiChiffre(ligne, colonne) {
        if (this.valeurSelectionnee) {
            if (this.estModifiable(ligne, colonne)) {
                if (this.valeurSelectionnee >= 1 && this.valeurSelectionnee <= 9) {
                    this.grille.setValeur(ligne, colonne, this.valeurSelectionnee);
                    this.grille.setVisible(ligne, colonne, true);
                }
                else if (this.valeurSelectionnee === -1) {
                    this.grille.setVisible(ligne, colonne, false);
                }
            }
        }
        else {
            if (this.estModifiable(ligne, colonne)) {
                if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null &&
                    this.ligneSelectionnee === ligne && this.colonneSelectionnee === colonne) {
                    this.ligneSelectionnee = null;
                    this.colonneSelectionnee = null;
                }
                else if (this.ligneSelectionnee !== null || this.colonneSelectionnee !== null) {
                    this.ligneSelectionnee = ligne;
                    this.colonneSelectionnee = colonne;
                }
                else if (this.ligneSelectionnee !== ligne || this.colonneSelectionnee !== colonne) {
                    this.ligneSelectionnee = ligne;
                    this.colonneSelectionnee = colonne;
                }
            }
        }
    }
    isCaseSelectionnee(ligne, colonne) {
        return this.ligneSelectionnee && this.colonneSelectionnee && this.ligneSelectionnee === ligne && this.colonneSelectionnee === colonne;
    }
    isLigneColonneSelectionnee(ligne, colonne) {
        if (this.ligneSelectionnee !== null && this.colonneSelectionnee !== null) {
            if (this.ligneSelectionnee === ligne || this.colonneSelectionnee === colonne) {
                return true;
            }
            else if (_utils_grille_utils__WEBPACK_IMPORTED_MODULE_1__["GrilleUtils"].memeCarre(ligne, colonne, this.ligneSelectionnee, this.colonneSelectionnee)) {
                return true;
            }
        }
        return false;
    }
}
GrilleComponent.ɵfac = function GrilleComponent_Factory(t) { return new (t || GrilleComponent)(); };
GrilleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GrilleComponent, selectors: [["app-grille"]], decls: 3, vars: 2, consts: [[1, "table-bordered"], [4, "ngFor", "ngForOf"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function GrilleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GrilleComponent_tr_2_Template, 2, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).constructor(9));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["td[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n  text-align: center;\n  vertical-align: middle;\n  \n  \n}\n\n.non-modifiable[_ngcontent-%COMP%] {\n  background-color: #ccffff;\n}\n\n.modifiable[_ngcontent-%COMP%] {\n  background-color: #ffffcc;\n}\n\n.premier-bord[_ngcontent-%COMP%] {\n  border-left-width: 8px;\n}\n\n.dernier-bord[_ngcontent-%COMP%] {\n  border-right-width: 8px;\n}\n\n.premier-bord-haut[_ngcontent-%COMP%] {\n  border-top-width: 8px;\n}\n\n.dernier-bord-bas[_ngcontent-%COMP%] {\n  border-bottom-width: 8px;\n}\n\n.case-selectionnee[_ngcontent-%COMP%] {\n  background-color: #f5f565;\n}\n\n.ligne-colonne-selectionnee-modifiable[_ngcontent-%COMP%] {\n  background-color: #fafa87;\n}\n\n.ligne-colonne-selectionnee-non-modifiable[_ngcontent-%COMP%] {\n  background-color: #c9fa44;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dyaWxsZS9ncmlsbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxVQUxZO0VBTVosV0FOWTtFQU9aLGtCQUFBO0VBQ0Esc0JBQUE7RUFFQSw2QkFBQTtFQUNBLDJCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7QUFKRjs7QUFPQTtFQUNFLHdCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQVFBO0VBQ0UseUJBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZ3JpbGxlL2dyaWxsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0YWlsbGUtY2FzZTogNWVtO1xyXG5cclxuJHRhaWxsZS1mb250ZTogMS4yZW07XHJcblxyXG50ZCB7XHJcbiAgd2lkdGg6ICR0YWlsbGUtY2FzZTtcclxuICBoZWlnaHQ6ICR0YWlsbGUtY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAkdGFpbGxlLWZvbnRlOiAkdGFpbGxlLWZvbnRlO1xyXG4gIC8qYm9yZGVyLWxlZnQtc3R5bGU6IGRvdWJsZTsqL1xyXG4gIC8qYm9yZGVyOiA0cHggZG91YmxlIGJsdWU7Ki9cclxufVxyXG5cclxuLm5vbi1tb2RpZmlhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmZmO1xyXG59XHJcblxyXG4ubW9kaWZpYWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZjYztcclxufVxyXG5cclxuLnByZW1pZXItYm9yZCB7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDhweDtcclxufVxyXG5cclxuLmRlcm5pZXItYm9yZCB7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbi5wcmVtaWVyLWJvcmQtaGF1dCB7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogOHB4O1xyXG59XHJcblxyXG4uZGVybmllci1ib3JkLWJhcyB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogOHB4O1xyXG59XHJcblxyXG4uY2FzZS1zZWxlY3Rpb25uZWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1NjU7XHJcbn1cclxuXHJcblxyXG4ubGlnbmUtY29sb25uZS1zZWxlY3Rpb25uZWUtbW9kaWZpYWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmE4NztcclxufVxyXG5cclxuLmxpZ25lLWNvbG9ubmUtc2VsZWN0aW9ubmVlLW5vbi1tb2RpZmlhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmYTQ0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrilleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grille',
                templateUrl: './grille.component.html',
                styleUrls: ['./grille.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/selection-chiffres/selection-chiffres.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/selection-chiffres/selection-chiffres.component.ts ***!
  \******************************************************************************/
/*! exports provided: SelectionChiffresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionChiffresComponent", function() { return SelectionChiffresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_selection_chiffre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/selection-chiffre */ "./src/app/models/selection-chiffre.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { selectionne: a0 }; };
class SelectionChiffresComponent {
    constructor() {
        this.chiffreSelectionnee = null;
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    selectionChiffre(chiffre) {
        if (this.chiffreSelectionnee !== chiffre) {
            const selection = new _models_selection_chiffre__WEBPACK_IMPORTED_MODULE_1__["SelectionChiffre"]();
            selection.valeur = chiffre;
            this.chiffreSelectionnee = chiffre;
            this.selection.emit(selection);
        }
        else {
            this.chiffreSelectionnee = null;
            const selection = new _models_selection_chiffre__WEBPACK_IMPORTED_MODULE_1__["SelectionChiffre"]();
            selection.valeur = 0;
            this.selection.emit(selection);
        }
    }
    estSelectionne(chiffre) {
        return this.chiffreSelectionnee && this.chiffreSelectionnee === chiffre;
    }
}
SelectionChiffresComponent.ɵfac = function SelectionChiffresComponent_Factory(t) { return new (t || SelectionChiffresComponent)(); };
SelectionChiffresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectionChiffresComponent, selectors: [["app-selection-chiffres"]], outputs: { selection: "selection" }, decls: 24, vars: 30, consts: [[1, "row"], [1, "bord", "col-1"], [1, "bouton-chiffre", "col-1", 3, "ngClass", "click"]], template: function SelectionChiffresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_3_listener() { return ctx.selectionChiffre(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_5_listener() { return ctx.selectionChiffre(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_7_listener() { return ctx.selectionChiffre(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_9_listener() { return ctx.selectionChiffre(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_11_listener() { return ctx.selectionChiffre(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_13_listener() { return ctx.selectionChiffre(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_15_listener() { return ctx.selectionChiffre(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_17_listener() { return ctx.selectionChiffre(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_19_listener() { return ctx.selectionChiffre(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionChiffresComponent_Template_div_click_21_listener() { return ctx.selectionChiffre(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Suppr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.estSelectionne(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.estSelectionne(2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.estSelectionne(3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.estSelectionne(4)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.estSelectionne(5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.estSelectionne(6)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.estSelectionne(7)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.estSelectionne(8)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.estSelectionne(9)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.estSelectionne(0 - 1)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".bouton-chiffre[_ngcontent-%COMP%] {\n  background-color: aqua;\n  padding: 20px;\n  margin: 5px;\n}\n\n.bord[_ngcontent-%COMP%] {\n  \n}\n\n.selectionne[_ngcontent-%COMP%] {\n  background-color: aquamarine;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NlbGVjdGlvbi1jaGlmZnJlcy9zZWxlY3Rpb24tY2hpZmZyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtBQUFGOztBQUdBO0VBQ0UsNEJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZWxlY3Rpb24tY2hpZmZyZXMvc2VsZWN0aW9uLWNoaWZmcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3V0b24tY2hpZmZyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYm9yZCB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyovXHJcbn1cclxuXHJcbi5zZWxlY3Rpb25uZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionChiffresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selection-chiffres',
                templateUrl: './selection-chiffres.component.html',
                styleUrls: ['./selection-chiffres.component.scss']
            }]
    }], function () { return []; }, { selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/models/grille.ts":
/*!**********************************!*\
  !*** ./src/app/models/grille.ts ***!
  \**********************************/
/*! exports provided: Grille */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grille", function() { return Grille; });
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array.utils */ "./src/app/utils/array.utils.ts");

class Grille {
    constructor(solution, visible, modifiable) {
        this.solution = _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].cloneArrayNumber(solution);
        this.visible = _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].cloneArrayBoolean(visible);
        this.modifiable = _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].cloneArrayBoolean(modifiable);
        this.valeurs = _utils_array_utils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].cloneArrayNumber(this.solution);
    }
    getValeur(ligne, colonne) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        if (this.isUndefined(this.valeurs)) {
            return 0;
        }
        else {
            return this.valeurs[ligne][colonne];
        }
    }
    estVisible(ligne, colonne) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        if (this.isUndefined(this.visible)) {
            return false;
        }
        else {
            return this.visible[ligne][colonne];
        }
    }
    setVisible(ligne, colonne, visibilite) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        this.visible[ligne][colonne] = visibilite;
    }
    setValeur(ligne, colonne, valeur) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        this.verifieValeur(valeur);
        if (!this.estModifiable(ligne, colonne)) {
            throw new Error('Impossible de mofifier la case ' + ligne + '/' + colonne + ' !');
        }
        else {
            this.valeurs[ligne][colonne] = valeur;
        }
    }
    estModifiable(ligne, colonne) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        if (this.isUndefined(this.modifiable)) {
            return false;
        }
        else {
            return this.modifiable[ligne][colonne];
        }
    }
    verifieLigne(ligne) {
        if (ligne < 0 || ligne > 8) {
            throw new Error('ligne invalide ' + ligne + ' !');
        }
    }
    verifieColonne(colonne) {
        if (colonne < 0 || colonne > 8) {
            throw new Error('colonne invalide ' + colonne + ' !');
        }
    }
    verifieCase(tableau, ligne, colonne) {
        if (this.isUndefined(tableau)) {
            console.log('tableau', tableau);
            throw new Error('Le tableau n\'existe pas !');
        }
        if (this.isUndefined(tableau[ligne])) {
            throw new Error('La ligne ' + ligne + ' n\'existe pas !');
        }
        if (this.isUndefined(tableau[ligne][colonne])) {
            throw new Error('La colonne ' + colonne + ' n\'existe pas !');
        }
    }
    verifieValeur(valeur) {
        if (valeur < 1 || valeur > 9) {
            throw new Error('valeur invalide ' + valeur + ' !');
        }
    }
    isUndefined(value) {
        return value === undefined || value === null;
    }
    estInitialise() {
        return !this.isUndefined(this.valeurs) &&
            !this.isUndefined(this.visible) &&
            !this.isUndefined(this.modifiable);
    }
    nombreCasesVides() {
        let compteur = 0;
        console.log("nombreCasesVides", this.visible);
        for (const item of this.visible) {
            for (const item2 of item) {
                if (!item2) {
                    compteur++;
                }
            }
        }
        console.log("nombreCasesVides compteur", compteur);
        return compteur;
    }
}


/***/ }),

/***/ "./src/app/models/niveau-difficulte.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/models/niveau-difficulte.enum.ts ***!
  \**************************************************/
/*! exports provided: NiveauDifficulteEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiveauDifficulteEnum", function() { return NiveauDifficulteEnum; });
var NiveauDifficulteEnum;
(function (NiveauDifficulteEnum) {
    NiveauDifficulteEnum[NiveauDifficulteEnum["FACILE"] = 0] = "FACILE";
    NiveauDifficulteEnum[NiveauDifficulteEnum["MOYEN"] = 1] = "MOYEN";
    NiveauDifficulteEnum[NiveauDifficulteEnum["DIFFICILE"] = 2] = "DIFFICILE";
})(NiveauDifficulteEnum || (NiveauDifficulteEnum = {}));


/***/ }),

/***/ "./src/app/models/selection-chiffre.ts":
/*!*********************************************!*\
  !*** ./src/app/models/selection-chiffre.ts ***!
  \*********************************************/
/*! exports provided: SelectionChiffre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionChiffre", function() { return SelectionChiffre; });
class SelectionChiffre {
}


/***/ }),

/***/ "./src/app/service/creation-grille.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/creation-grille.service.ts ***!
  \****************************************************/
/*! exports provided: CreationGrilleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationGrilleService", function() { return CreationGrilleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_grille__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/grille */ "./src/app/models/grille.ts");
/* harmony import */ var _utils_array_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/array.utils */ "./src/app/utils/array.utils.ts");
/* harmony import */ var _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/niveau-difficulte.enum */ "./src/app/models/niveau-difficulte.enum.ts");
/* harmony import */ var _utils_random_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/random.utils */ "./src/app/utils/random.utils.ts");






class CreationGrilleService {
    constructor() {
        this.SUBSECTION_SIZE = 3;
    }
    nouvelleGrille(niveauDificulte) {
        // création de la grille vide
        const tab = [];
        for (let ligne = 0; ligne < 9; ligne++) {
            tab[ligne] = [];
            for (let colonne = 0; colonne < 9; colonne++) {
                tab[ligne][colonne] = 0;
            }
        }
        console.log('tab vide=', tab);
        // génération des numéros
        this.calculCase(tab);
        console.log('tab=', tab);
        // suppression des cases
        let nombreCase;
        switch (niveauDificulte) {
            case _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_3__["NiveauDifficulteEnum"].FACILE:
                // 40 à 45
                nombreCase = _utils_random_utils__WEBPACK_IMPORTED_MODULE_4__["RandomUtils"].getRandomInt(40, 45);
                break;
            case _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_3__["NiveauDifficulteEnum"].MOYEN:
                // 46 à 49
                nombreCase = _utils_random_utils__WEBPACK_IMPORTED_MODULE_4__["RandomUtils"].getRandomInt(46, 49);
                break;
            case _models_niveau_difficulte_enum__WEBPACK_IMPORTED_MODULE_3__["NiveauDifficulteEnum"].DIFFICILE:
                // 50 à 53 (Plus de 54 à 58)
                nombreCase = _utils_random_utils__WEBPACK_IMPORTED_MODULE_4__["RandomUtils"].getRandomInt(50, 53);
                break;
        }
        console.log("nomCaseVide", nombreCase);
        const caseSupprimee = _utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].cloneArrayNumber(tab);
        this.suppressionCases(caseSupprimee, nombreCase);
        const visible = [];
        for (let i = 0; i < caseSupprimee.length; i++) {
            visible.push([]);
            for (let j = 0; j < caseSupprimee[i].length; j++) {
                visible[i][j] = caseSupprimee[i][j] > 0;
            }
        }
        const modifiable = visible.map(x => x.map(y => !y));
        const grille = new _models_grille__WEBPACK_IMPORTED_MODULE_1__["Grille"](tab, visible, modifiable);
        return grille;
    }
    calculCase(tab) {
        const listePositions = this.listePositions();
        const valeursPossibles = new Map();
        const valeursPossiblesSelectionnee = new Map();
        for (let position = 0; position < listePositions.length; position++) {
            const val = listePositions[position];
            const ligne2 = val[0];
            const colonne2 = val[1];
            const valeurActuelle = tab[ligne2][colonne2];
            let retourArriere = false;
            console.log('position', position, ligne2, colonne2);
            console.log('tab', tab, this.afficheTab(tab));
            let valeurs;
            let recalcul = false;
            if (valeursPossibles.has(position)) {
                valeurs = valeursPossibles.get(position);
            }
            else {
                valeurs = this.calculValeursPossibles(tab, ligne2, colonne2);
                valeurs = _utils_array_utils__WEBPACK_IMPORTED_MODULE_2__["ArrayUtils"].shuttle(valeurs);
                recalcul = true;
                valeursPossibles.set(position, valeurs);
            }
            console.log('valeurs', valeurs);
            if (valeurs.length === 0) {
                if (position >= listePositions.length) {
                    // pas de solution
                    console.log('pas de solution');
                    break;
                }
                else {
                    // pas de solution trouvée => on retourne en arrière
                    retourArriere = true;
                }
            }
            else if (valeurs.length === 1) {
                if (valeurActuelle !== 0 && valeurActuelle === valeurs[0]) {
                    retourArriere = true;
                }
                else {
                    valeursPossiblesSelectionnee.set(position, 0);
                    tab[ligne2][colonne2] = valeurs[0];
                }
            }
            else {
                let valeurPosition;
                if (valeursPossiblesSelectionnee.has(position)) {
                    valeurPosition = valeursPossiblesSelectionnee.get(position) + 1;
                }
                else {
                    valeurPosition = 0;
                }
                if (valeurPosition < valeurs.length) {
                    valeursPossiblesSelectionnee.set(position, valeurPosition);
                    const val2 = valeursPossibles.get(position)[valeurPosition];
                    tab[ligne2][colonne2] = val2;
                }
                else {
                    // on a parcouru toutes les valeurs
                    retourArriere = true;
                }
            }
            if (retourArriere) {
                valeursPossibles.delete(position);
                valeursPossiblesSelectionnee.delete(position);
                tab[ligne2][colonne2] = 0;
                position -= 2;
            }
        }
    }
    listePositions() {
        const res = [];
        for (let ligne = 0; ligne < 9; ligne++) {
            for (let colonne = 0; colonne < 9; colonne++) {
                res.push([ligne, colonne]);
            }
        }
        return res;
    }
    calculValeursPossibles(tab, ligne, colonne) {
        const valeursPossibles = new Set();
        for (let i = 1; i <= 9; i++) {
            valeursPossibles.add(i);
        }
        for (let i = 0; i < 9; i++) {
            const val = tab[i][colonne];
            if (val > 0 && i !== ligne) {
                valeursPossibles.delete(val);
            }
        }
        for (let i = 0; i < 9; i++) {
            const val = tab[ligne][i];
            if (val > 0 && i != colonne) {
                valeursPossibles.delete(val);
            }
        }
        let subsectionRowStart = 0;
        if (ligne < this.SUBSECTION_SIZE) {
            subsectionRowStart = 0;
        }
        else if (ligne >= this.SUBSECTION_SIZE && ligne < this.SUBSECTION_SIZE * 2) {
            subsectionRowStart = this.SUBSECTION_SIZE;
        }
        else if (ligne >= this.SUBSECTION_SIZE * 2) {
            subsectionRowStart = this.SUBSECTION_SIZE * 2;
        }
        const subsectionRowEnd = subsectionRowStart + this.SUBSECTION_SIZE;
        let subsectionColumnStart = 0;
        if (colonne < this.SUBSECTION_SIZE) {
            subsectionColumnStart = 0;
        }
        else if (colonne >= this.SUBSECTION_SIZE && colonne < this.SUBSECTION_SIZE * 2) {
            subsectionColumnStart = this.SUBSECTION_SIZE;
        }
        else {
            subsectionColumnStart = this.SUBSECTION_SIZE * 2;
        }
        const subsectionColumnEnd = subsectionColumnStart + this.SUBSECTION_SIZE;
        for (let r = subsectionRowStart; r < subsectionRowEnd; r++) {
            for (let c = subsectionColumnStart; c < subsectionColumnEnd; c++) {
                const val = tab[r][c];
                if (val > 0 && r !== ligne && c !== colonne) {
                    valeursPossibles.delete(val);
                }
            }
        }
        return Array.from(valeursPossibles.values())
            .sort((n1, n2) => n1 - n2);
    }
    afficheTab(tab) {
        let s = '';
        for (let i = 0; i < tab.length; i++) {
            for (let j = 0; j < tab.length; j++) {
                s += tab[i][j] + ',';
            }
            s += '\n';
        }
        return s;
    }
    suppressionCases(tab, nombreCaseSupprimee) {
        const listePositions = this.listePositions();
        for (let i = 0; i < nombreCaseSupprimee; i++) {
            const min = 0;
            const max = listePositions.length - 1;
            const caseASupprimer = Math.floor(Math.random() * (max - min + 1)) + min;
            const pos = listePositions[caseASupprimer];
            const ligne = pos[0];
            const colonne = pos[1];
            if (tab[ligne][colonne] > 0) {
                tab[ligne][colonne] = 0;
                listePositions.splice(caseASupprimer, 1);
            }
            else {
            }
        }
    }
}
CreationGrilleService.ɵfac = function CreationGrilleService_Factory(t) { return new (t || CreationGrilleService)(); };
CreationGrilleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreationGrilleService, factory: CreationGrilleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreationGrilleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/grille.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/grille.service.ts ***!
  \*******************************************/
/*! exports provided: GrilleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrilleService", function() { return GrilleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GrilleService {
    constructor() {
    }
    initialisation(valeurs, visible) {
        this.valeurs = valeurs;
        this.visible = visible;
    }
    getValue(ligne, colonne) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.valeurs, ligne, colonne);
        return this.valeurs[ligne][colonne];
    }
    isVisible(ligne, colonne) {
        this.verifieLigne(ligne);
        this.verifieColonne(colonne);
        this.verifieCase(this.visible, ligne, colonne);
        return this.visible[ligne][colonne];
    }
    verifieLigne(ligne) {
        if (ligne < 0 || ligne > 8) {
            throw new Error('ligne invalide ' + ligne + ' !');
        }
    }
    verifieColonne(colonne) {
        if (colonne < 0 || colonne > 8) {
            throw new Error('colonne invalide ' + colonne + ' !');
        }
    }
    verifieCase(tableau, ligne, colonne) {
        if (this.isUndefined(tableau)) {
            console.log('tableau', tableau);
            throw new Error('Le tableau n\'existe pas !');
        }
        if (this.isUndefined(tableau[ligne])) {
            throw new Error('La ligne ' + ligne + ' n\'existe pas !');
        }
        if (this.isUndefined(tableau[ligne][colonne])) {
            throw new Error('La colonne ' + colonne + ' n\'existe pas !');
        }
    }
    isUndefined(value) {
        return value === undefined || value === null;
    }
    estInitialise() {
        return !this.isUndefined(this.valeurs) &&
            !this.isUndefined(this.visible);
    }
}
GrilleService.ɵfac = function GrilleService_Factory(t) { return new (t || GrilleService)(); };
GrilleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GrilleService, factory: GrilleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GrilleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/jeux.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/jeux.service.ts ***!
  \*****************************************/
/*! exports provided: JeuxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JeuxService", function() { return JeuxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _grille_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grille.service */ "./src/app/service/grille.service.ts");



class JeuxService {
    constructor(grille) {
        this.grille = grille;
    }
    initialisation() {
        // cf : https://commons.wikimedia.org/wiki/File:Sdk_ex00s.gif?uselang=fr
        const tab = [
            [2, 8, 3, 4, 1, 9, 7, 4, 6],
            [9, 6, 4, 8, 7, 3, 5, 2, 1],
            [5, 1, 7, 6, 2, 4, 9, 3, 8],
            [1, 5, 6, 7, 4, 2, 3, 8, 9],
            [4, 2, 9, 3, 8, 6, 1, 7, 5],
            [3, 7, 8, 1, 9, 5, 2, 6, 4],
            [8, 9, 5, 4, 3, 7, 6, 1, 2],
            [7, 4, 2, 9, 6, 1, 8, 5, 3],
            [6, 3, 1, 2, 5, 8, 4, 9, 7]
        ];
        const visible = [
            [true, false, false, false, false, false, false, true, false],
            [false, false, false, false, false, false, true, false, false],
            [false, true, false, true, false, true, false, true, true],
            [true, false, false, true, true, false, false, true, true],
            [false, false, true, false, true, false, true, false, false],
            [true, true, false, false, true, true, false, false, true],
            [true, true, false, true, false, true, false, true, false],
            [false, false, true, false, false, false, false, false, false],
            [false, true, false, false, false, false, false, false, true]
        ];
        this.grille.initialisation(tab, visible);
    }
    getValue(ligne, colonne) {
        if (this.grille.estInitialise()) {
            return this.grille.getValue(ligne, colonne);
        }
        else {
            return 0;
        }
    }
    isVisible(ligne, colonne) {
        return this.grille.isVisible(ligne, colonne);
    }
}
JeuxService.ɵfac = function JeuxService_Factory(t) { return new (t || JeuxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_grille_service__WEBPACK_IMPORTED_MODULE_1__["GrilleService"])); };
JeuxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JeuxService, factory: JeuxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JeuxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _grille_service__WEBPACK_IMPORTED_MODULE_1__["GrilleService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/solve-backtrack.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/solve-backtrack.service.ts ***!
  \****************************************************/
/*! exports provided: SolveBacktrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveBacktrack", function() { return SolveBacktrack; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SolveBacktrack {
    constructor() {
        this.BOARD_START_INDEX = 0;
        this.BOARD_SIZE = 9;
        this.NO_VALUE = 0;
        this.MIN_VALUE = 1;
        this.MAX_VALUE = 9;
        this.SUBSECTION_SIZE = 3;
    }
    resolution(grille) {
    }
    solve(board) {
        for (let row = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
            for (let column = this.BOARD_START_INDEX; column < this.BOARD_SIZE; column++) {
                if (board[row][column] === this.NO_VALUE) {
                    //console.log('test case', row, column);
                    for (let k = this.MIN_VALUE; k <= this.MAX_VALUE; k++) {
                        board[row][column] = k;
                        //console.log('affectation', k, row, column);
                        if (this.isValid(board, row, column)) {
                            //console.log('trouve', k, row, column);
                            if (this.solve(board)) {
                                //console.log('solution', board);
                                return true;
                            }
                        }
                        board[row][column] = this.NO_VALUE;
                    }
                    //console.log('aucune valeur trouver pour la case ', row, column, board);
                    return false;
                }
            }
        }
        return true;
    }
    isValid(board, row, column) {
        return (this.rowConstraint(board, row)
            && this.columnConstraint(board, column)
            && this.subsectionConstraint(board, row, column));
    }
    rowConstraint(board, row) {
        const constraint = this.createArrayBoolean(this.BOARD_SIZE);
        for (let column = this.BOARD_START_INDEX; column < this.BOARD_SIZE; column++) {
            if (!this.checkConstraint(board, row, constraint, column)) {
                return false;
            }
        }
        // return IntStream.range(this.BOARD_START_INDEX, this.BOARD_SIZE)
        //   .allMatch(column -> checkConstraint(board, row, constraint, column));
        return true;
    }
    columnConstraint(board, column) {
        const constraint = this.createArrayBoolean(this.BOARD_SIZE);
        for (let row = this.BOARD_START_INDEX; row < this.BOARD_SIZE; row++) {
            if (!this.checkConstraint(board, row, constraint, column)) {
                return false;
            }
        }
        // return IntStream.range(BOARD_START_INDEX, BOARD_SIZE)
        //   .allMatch(row -> checkConstraint(board, row, constraint, column));
        return true;
    }
    subsectionConstraint(board, row, column) {
        const constraint = this.createArrayBoolean(this.BOARD_SIZE);
        let subsectionRowStart = 0;
        if (row < this.SUBSECTION_SIZE) {
            subsectionRowStart = 0;
        }
        else if (row >= this.SUBSECTION_SIZE && row < this.SUBSECTION_SIZE * 2) {
            subsectionRowStart = this.SUBSECTION_SIZE;
        }
        else if (row >= this.SUBSECTION_SIZE * 2) {
            subsectionRowStart = this.SUBSECTION_SIZE * 2;
        }
        const subsectionRowEnd = subsectionRowStart + this.SUBSECTION_SIZE;
        let subsectionColumnStart = 0;
        if (column < this.SUBSECTION_SIZE) {
            subsectionColumnStart = 0;
        }
        else if (column >= this.SUBSECTION_SIZE && column < this.SUBSECTION_SIZE * 2) {
            subsectionColumnStart = this.SUBSECTION_SIZE;
        }
        else {
            subsectionColumnStart = this.SUBSECTION_SIZE * 2;
        }
        const subsectionColumnEnd = subsectionColumnStart + this.SUBSECTION_SIZE;
        for (let r = subsectionRowStart; r < subsectionRowEnd; r++) {
            for (let c = subsectionColumnStart; c < subsectionColumnEnd; c++) {
                if (!this.checkConstraint(board, r, constraint, c)) {
                    return false;
                }
            }
        }
        return true;
    }
    checkConstraint(board, row, constraint, column) {
        if (board[row][column] !== this.NO_VALUE) {
            if (!constraint[board[row][column] - 1]) {
                constraint[board[row][column] - 1] = true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    createArrayBoolean(size) {
        const tab = new Array();
        for (let i = 0; i < size; i++) {
            tab.push(false);
        }
        return tab;
    }
}
SolveBacktrack.ɵfac = function SolveBacktrack_Factory(t) { return new (t || SolveBacktrack)(); };
SolveBacktrack.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SolveBacktrack, factory: SolveBacktrack.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolveBacktrack, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/array.utils.ts":
/*!**************************************!*\
  !*** ./src/app/utils/array.utils.ts ***!
  \**************************************/
/*! exports provided: ArrayUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return ArrayUtils; });
/* harmony import */ var _random_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.utils */ "./src/app/utils/random.utils.ts");

class ArrayUtils {
    /**
     * clone un tableau d'entier
     * @param tab le tableau a cloner
     */
    static cloneArrayNumber(tab) {
        const resultat = [];
        if (tab) {
            for (let i = 0; i < tab.length; i++) {
                resultat.push([]);
                for (let j = 0; j < tab[i].length; j++) {
                    resultat[i][j] = tab[i][j];
                }
            }
        }
        return resultat;
    }
    /**
     * clone un tableau de booleen
     * @param tab le tableau a cloner
     */
    static cloneArrayBoolean(tab) {
        const resultat = [];
        if (tab) {
            for (let i = 0; i < tab.length; i++) {
                resultat.push([]);
                for (let j = 0; j < tab[i].length; j++) {
                    resultat[i][j] = tab[i][j];
                }
            }
        }
        return resultat;
    }
    /**
     * retourne une copie du tableau avec les elements mélangés
     * @param tab le tableau à mélanger. Il n'est pas modifié
     */
    static shuttle(tab) {
        const resultat = [];
        const temporaire = [];
        for (const item of tab) {
            temporaire.push(item);
        }
        while (temporaire.length > 0) {
            const position = _random_utils__WEBPACK_IMPORTED_MODULE_0__["RandomUtils"].getRandomNumber(temporaire.length);
            const val = temporaire[position];
            resultat.push(val);
            temporaire.splice(position, 1);
        }
        return resultat;
    }
}


/***/ }),

/***/ "./src/app/utils/grille.utils.ts":
/*!***************************************!*\
  !*** ./src/app/utils/grille.utils.ts ***!
  \***************************************/
/*! exports provided: GrilleUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrilleUtils", function() { return GrilleUtils; });
class GrilleUtils {
    static memeCarre(ligne, colonne, ligne2, colonne2) {
        return Math.floor(ligne / 3) === Math.floor(ligne2 / 3) && Math.floor(colonne / 3) === Math.floor(colonne2 / 3);
    }
}


/***/ }),

/***/ "./src/app/utils/random.utils.ts":
/*!***************************************!*\
  !*** ./src/app/utils/random.utils.ts ***!
  \***************************************/
/*! exports provided: RandomUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomUtils", function() { return RandomUtils; });
class RandomUtils {
    /**
     * retourne un nombre aléatoire entre 0 et le nombre max
     * le nombre max est exclu des nombres retournés
     * le nombre retourné est un entier
     * @param max le paramètre ma
     */
    static getRandomNumber(max) {
        return this.getRandomInt(0, max);
    }
    /**
     * retourne un entre entre min (inclu) et max (exclu)
     * @param min la valeur minimum. Cette valeur est incluse dans les résultat
     * @param max la valeur maximum. Cette valeur est exclue des résultats
     */
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projet\sudokujs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map