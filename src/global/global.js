import Vue from "vue";
import store from "@/store";
import router from "@/router";
import axios from "axios";

export const globalFunction = new Vue({
  store,
  router,
  data: {
    baseUrl: "",
  },
  methods: {
    async request(target, body = {}, method = "post") {
      return axios[method.toLowerCase()](target, body).then((response) => {
        return response.data;
      });
    },

    storeToLocalStorage(name, data) {
      localStorage.removeItem(name);
      localStorage.setItem(name, JSON.stringify(data));
    },

    removeLocalStorageItem(name) {
      localStorage.removeItem(name);
    },

    checkLocalStorageItemExisted(name) {
      let localCollection = localStorage.getItem(name);
      localCollection = JSON.parse(localCollection);
      if (!localCollection) {
        return false;
      }

      return localCollection;
    },

    checkValid(value, lengthCheck = true) {
      if (typeof value !== "undefined" && value !== null) {
        const stringValue = value.toString();

        if (typeof value === "function" || typeof value === "object") {
          if (lengthCheck) {
            return !(typeof value.length !== "undefined" && value.length <= 0);
          }

          return true;
        }

        if (typeof value === "boolean") {
          return value;
        }

        if (/\S/.test(stringValue) && !isNaN(stringValue)) {
          return true;
        }

        if (/\S/.test(stringValue)) {
          return true;
        }
      }

      return false;
    },

    isInString(str, subStr, caseSensitive = false) {
      if (!str) str = "";

      if (caseSensitive) {
        return str.includes(subStr);
      } else {
        return str.toLowerCase().includes(subStr.toLowerCase());
      }
    },

    deepCloneObj(obj) {
      if (this.checkValid(obj)) {
        return JSON.parse(JSON.stringify(obj));
      } else {
        return obj;
      }
    },

    removeObj(array, value, isFieldActive = true) {
      if (isFieldActive) {
        return array.filter((ele) => {
          return ele.active != value;
        });
      } else {
        return array.filter((ele) => {
          return ele.areaCode != value;
        });
      }
    },

    handleAlternateColorButton(list, items, itemsInRow) {
      let arr1 = [];
      let arr2 = [];

      for (let i = 0; i < items.length; i++) {
        if (Math.floor(i / itemsInRow) % 2 === 0) {
          arr1.push(items[i]);
        } else {
          arr2.push(items[i]);
        }
      }

      for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
          arr1[i].classList.add("item-type-1");
        } else {
          arr1[i].classList.add("item-type-2");
        }
      }
      for (let i = 0; i < arr2.length; i++) {
        if (i % 2 === 0) {
          arr2[i].classList.add("item-type-2");
        } else {
          arr2[i].classList.add("item-type-1");
        }
      }
    },

    scrollToElement(parentEleClassName, eleClassName, indexEle) {
      document.getElementsByClassName(parentEleClassName)[0].scrollTop =
        document.getElementsByClassName(eleClassName)[indexEle].offsetTop -
        document.getElementsByClassName(parentEleClassName)[0].offsetTop;
    },

    stringForSearch(arr) {
      for (let i = 0; i < arr.length; i++) {
        let strTmp = arr[i].name;

        strTmp = strTmp.toString().toLowerCase();
        strTmp = strTmp.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???|??/g, "a");
        strTmp = strTmp.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
        strTmp = strTmp.replace(/??|??|???|???|??/g, "i");
        strTmp = strTmp.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???|??/g, "o");
        strTmp = strTmp.replace(/??|??|???|???|??|??|???|???|???|???|???|??/g, "u");
        strTmp = strTmp.replace(/???|??|???|???|???/g, "y");
        strTmp = strTmp.replace(/??/g, "d");
        strTmp = strTmp.replace(/ + /g, " ");
        strTmp = strTmp.trim();

        arr[i].nameForSearch = strTmp;
      }

      return arr;
    },

    isInViewport(elements) {
      var scroll = window.scrollY || window.pageYOffset;
      var boundsTop = elements.getBoundingClientRect().top + scroll;

      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };

      var bounds = {
        top: boundsTop,
        bottom: boundsTop + elements.clientHeight,
      };

      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      );
    },

    checkIsObjEmpty(obj) {
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        return true;
      } else {
        return false;
      }
    },

    timeCounter(distance) {
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let strTimeCounter = `${hours}:${minutes}`;

      return strTimeCounter;
    },

    handleHtmlScroll(value) {
      let root = document.documentElement;
      if (value) {
        root.classList.add("disable-scroll");
      } else {
        root.classList.remove("disable-scroll");
      }
    },

    handleBodyScroll(value) {
      let body = document.body;
      if (value) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    },
  },
});
