(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90cf2ea4"],{"5f86":function(i,t,s){},"93c7":function(i,t,s){"use strict";var a=s("5f86"),n=s.n(a);n.a},bb95:function(i,t,s){"use strict";s.r(t);var a=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"demo-swipe"},[s("h2",[i._v("常规--分页器在底部")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"show-pagination":!0,loop:!0,"pagination-position":"out",lazy:!0,"lazy-loading":"http://whfront.zmjiudian.com/app/img/pic-def-16x9.png"},on:{slideChange:i.handleChange,slidePrevTransitionStart:i.slidePrevTransitionStart,slideNextTransitionStart:i.slideNextTransitionStart,click:i.onClick}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("div",[s("img",{staticClass:"swiper-img",attrs:{"data-src":i}})])])})),1)],1),s("h2",[i._v("常规--分页器在里边")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"show-pagination":!0,loop:!0,lazy:!0,"lazy-loading":"http://whfront.zmjiudian.com/app/img/pic-def-16x9.png"},on:{slideChange:i.handleChange,slidePrevTransitionStart:i.slidePrevTransitionStart,slideNextTransitionStart:i.slideNextTransitionStart,click:i.onClick}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("div",[s("img",{staticClass:"swiper-img",attrs:{"data-src":i}})])])})),1)],1),s("h2",[i._v("常规--分页器在里面-动态指示器")]),s("button",{on:{click:function(t){return i.addData()}}},[i._v(" 切换数据多条 ")]),s("div",{staticClass:"zmjd-swipe custom-pagination"},[s("zmjd-swipe",{ref:"swiperContainer",attrs:{"dynamic-bullets":!0,"show-pagination":i.images1.length>1,loop:!1},on:{slideChange:i.handleChange}},i._l(i.images1,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{src:i}})])})),1)],1),s("h2",[i._v("中间大两端小")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"show-small-side":!0,"padding-lr":18,lazy:!0,"lazy-loading":"http://whfront.zmjiudian.com/app/img/pic-def-16x9.png"}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{"data-src":i}})])})),1)],1),s("h2",[i._v("显示2个")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"slides-number":2.7,lazy:!0,"free-mode":!0,"lazy-loading":"http://whfront.zmjiudian.com/app/img/pic-def-16x9.png"}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{"data-src":i}})])})),1)],1),s("h2",[i._v("显示3个")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"slides-number":3}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{src:i}})])})),1)],1),s("h2",[i._v("coverflow模式")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{loop:!0,effect:"coverflow",lazy:!0,"lazy-loading":"http://whfront.zmjiudian.com/app/img/pic-def-16x9.png"}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{"data-src":i}})])})),1)],1),s("h2",[i._v("自定义内容")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{loop:!0}},i._l(i.images,(function(t,a){return s("zmjd-swipe-item",{key:a},[s("div",{staticClass:"customContent"},[i._v(" 头像"+i._s(a+1)+" "),s("img",{attrs:{src:t}})])])})),1)],1),s("h2",[i._v("自定义指示器样式")]),s("div",{staticClass:"zmjd-swipe"},[s("zmjd-swipe",{attrs:{"show-pagination":!0,"pagination-class":"my-pagination","pagination-active-class":"my-pagination-active"}},i._l(i.images,(function(i,t){return s("zmjd-swipe-item",{key:t},[s("img",{staticClass:"swiper-img",attrs:{src:i}})])})),1)],1)])},n=[],e=["http://p1.zmjiudian.com/120FPQR2DO_640x360","http://p1.zmjiudian.com/120FPQR4Tp_640x360","http://p1.zmjiudian.com/121ZPJU1I2_640x360","http://p1.zmjiudian.com/121ZPJU07T_640x360","http://p1.zmjiudian.com/121ZPJU3HB_640x360","http://p1.zmjiudian.com/THKGY16_640x360","http://p1.zmjiudian.com/120FPQR2DO_640x360","http://p1.zmjiudian.com/120FPQR4Tp_640x360","http://p1.zmjiudian.com/121ZPJU1I2_640x360","http://p1.zmjiudian.com/121ZPJU07T_640x360","http://p1.zmjiudian.com/121ZPJU3HB_640x360","http://p1.zmjiudian.com/THKGY16_640x360"],r={data:function(){return{images:e,images1:e}},mounted:function(){var i=this;this.$nextTick((function(){i.$refs.swiperContainer.swiperInstance.destroy(),i.$refs.swiperContainer.initSwiper()}))},methods:{onClick:function(i){i.realIndex},handleChange:function(i){},slidePrevTransitionStart:function(i){},slideNextTransitionStart:function(i){},addData:function(){var i=this;this.images1=this.images1.length>1?["http://p1.zmjiudian.com/THKGY16_640x360"]:e,this.$nextTick((function(){i.$refs.swiperContainer.swiperInstance.destroy(),i.$refs.swiperContainer.initSwiper()}))}}},m=r,p=(s("93c7"),s("2877")),o=Object(p["a"])(m,a,n,!1,null,null,null);t["default"]=o.exports}}]);