(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-432707cf"],{"7cb4":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"body-wrapper",class:{"small-screen":t.isOnSmallScreen,"disable-scroll":t.isOpenInfoPopup}},[i("div",{staticClass:"overlay-body",class:{"active-info-popup":t.isOpenInfoPopup,"active-delivery-popup":t.isOpenDeliveryPopup,"active-payment-popup":t.isOpenPaymentPopup},on:{click:t.closeAllPopup}}),i("Header"),i("main",[i("Cart"),i("Banner"),i("section",{staticClass:"main-checkout"},[i("div",{staticClass:"container"},[i("h2",[i("span",{staticClass:"checkout-heading"},[t._v("Checkout")]),i("div",{staticClass:"back"},[i("div",{staticClass:"back-btn",on:{click:t.backToOrder}},[i("span",{staticClass:"back-icon icon-navigate_before"}),i("span",[t._v("Back")])])])]),i("div",{staticClass:"shipping-methods"},[i("div",{staticClass:"shipping-select-wrap"},[i("h4",[t._v("Shipping methods")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.shipMethod,expression:"shipMethod"}],staticClass:"shipping-select",on:{change:[function(s){var i=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.shipMethod=s.target.multiple?i:i[0]},t.handleChangeSelect]}},[i("option",{attrs:{value:"delivery"}},[t._v("Delivery")]),i("option",{attrs:{value:"pickup"}},[t._v("Pickup")])])])]),i("div",{staticClass:"shipping-info-form"},["delivery"===t.shipMethod?i("div",{staticClass:"delivery-address"},[i("h4",[t._v("Delivery Address")]),t._m(0)]):t._e(),t._m(1)]),i("div",{staticClass:"checkout-row delivery-time",on:{click:function(s){return t.showHideDeliveryPopup(!0)}}},[t._m(2)]),i("div",{staticClass:"checkout-row pay-with",on:{click:function(s){return t.showHidePaymentPopup(!0)}}},[t._m(3)]),i("div",{staticClass:"order-rule"},[t._v(" By clicking on ORDER & PAY WITH CASH you agree with the contents of the shopping cart, the data you filled out ")]),i("div",{staticClass:"order-btn"},[t._v("Order & pay with Cash (30.00 €)")])]),i("div",{staticClass:"checkout-popup delivery-popup",class:{open:t.isOpenDeliveryPopup}},[i("div",{staticClass:"popup-content"},[i("h3",{staticClass:"popup-heading"},[t._v(" Delivery time "),i("div",{staticClass:"close-popup",on:{click:function(s){return t.showHideDeliveryPopup(!1)}}},[i("span",{staticClass:"icon-close"})])]),t._m(4)])]),i("div",{staticClass:"checkout-popup payment-popup",class:{open:t.isOpenPaymentPopup}},[i("div",{staticClass:"popup-content"},[i("h3",{staticClass:"popup-heading"},[t._v(" Payment methods "),i("div",{staticClass:"close-popup",on:{click:function(s){return t.showHidePaymentPopup(!1)}}},[i("span",{staticClass:"icon-close"})])]),t._m(5)])])])],1),i("Footer")],1)},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"form-list"},[i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Street name")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type street name"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("House number")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type house number"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Postcode")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type your postal code"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("City")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type your city"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Entrance (optional)")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type entrance"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Floor (optional)")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type floor number"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Door (optional)")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type door"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Company name (optional)")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type company name"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Add note (optional)")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"ie: Please don't ring the bell. Baby is sleeping."}})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"personal-details"},[i("h4",[t._v("Personal Details")]),i("div",{staticClass:"form-list"},[i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("First and last name")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type your first and last name"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("E-mail")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"youremail@email.com"}})])]),i("div",{staticClass:"form-item"},[i("div",{staticClass:"form-heading"},[t._v("Phone Number")]),i("div",{staticClass:"wrap-input"},[i("input",{staticClass:"form-input",attrs:{type:"text",placeholder:"Type your phone number"}})])])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row-content"},[i("span",{staticClass:"col-icon icon-clock"}),i("div",{staticClass:"col-content"},[i("h5",[t._v("Delivery time")]),i("p",[t._v("11:00")])]),i("div",{staticClass:"row-icon"},[i("div",{staticClass:"row-icon-wrap"},[i("span",{staticClass:"icon-checkmark"})])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row-content"},[e("img",{attrs:{src:i("a3b4"),alt:"icon"}}),e("div",{staticClass:"col-content"},[e("h5",[t._v("Pay with")]),e("p",[t._v("Cash")])]),e("div",{staticClass:"row-icon"},[e("div",{staticClass:"row-icon-wrap"},[e("span",{staticClass:"icon-checkmark"})])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"popup-content-wrap"},[i("div",{staticClass:"select-wrap"},[i("select",{staticClass:"delivery-time-select"},[i("option",[t._v("As soon as possible")]),i("option",[t._v("12:00")]),i("option",[t._v("13:00")]),i("option",[t._v("14:00")]),i("option",[t._v("15:00")]),i("option",[t._v("16:00")])]),i("span",{staticClass:"icon-chevron-down"})]),i("div",{staticClass:"popup-action"},[i("div",{staticClass:"popup-btn"},[t._v("Done")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"popup-content-wrap"},[e("div",{staticClass:"payment-methods-box"},[e("div",{staticClass:"method-opt"},[e("img",{attrs:{src:i("a3b4"),alt:"icon"}}),e("p",[t._v("Cash")]),e("span",{staticClass:"icon-checkmark"})]),e("div",{staticClass:"method-opt"},[e("img",{attrs:{src:i("2fb3"),alt:"icon"}}),e("p",[t._v("Card")])])]),e("div",{staticClass:"popup-action"},[e("div",{staticClass:"popup-btn"},[t._v("Done")])])])}],o=i("5530"),n=i("82c0"),c=i("2f62"),p=i("0418"),l=i("84af"),r=i("b3b1"),u=i("fd2d"),d={components:{Header:p["a"],Banner:l["a"],Cart:r["a"],Footer:u["a"]},data:function(){return{shipMethod:"delivery"}},computed:Object(o["a"])({},Object(c["b"])({isOnSmallScreen:function(t){return t.helper.isOnSmallScreen},isOpenInfoPopup:function(t){return t.helper.isOpenInfoPopup},isOpenDeliveryPopup:function(t){return t.helper.isOpenDeliveryPopup},isOpenPaymentPopup:function(t){return t.helper.isOpenPaymentPopup},isInCheckout:function(t){return t.helper.isInCheckout}})),methods:{showHideDeliveryPopup:function(t){this.$store.commit("helper/setDeliveryPopupState",t)},showHidePaymentPopup:function(t){this.$store.commit("helper/setPaymentPopupState",t)},closeAllPopup:function(){this.$store.commit("helper/setInfoPopupState",!1),this.$store.commit("helper/setDeliveryPopupState",!1),this.$store.commit("helper/setPaymentPopupState",!1),n["a"].handleHtmlScroll(!1)},backToOrder:function(){this.$router.push({path:"/"})},handleChangeSelect:function(){var t=this;setTimeout((function(){t.$store.dispatch("cart/calculateCartHeight")}))}},created:function(){this.$store.commit("helper/setInCheckoutState",!0)}},v=d,m=i("2877"),h=Object(m["a"])(v,e,a,!1,null,null,null);s["default"]=h.exports},a3b4:function(t,s,i){t.exports=i.p+"img/ta-cash.a00fd14f.svg"}}]);
//# sourceMappingURL=chunk-432707cf.6ac3d8bb.js.map