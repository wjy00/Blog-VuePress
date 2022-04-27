(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{546:function(t,a,s){"use strict";s.r(a);var _=s(54),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"九、垃圾回收与内存泄漏-了解即可"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#九、垃圾回收与内存泄漏-了解即可"}},[t._v("#")]),t._v(" 九、垃圾回收与内存泄漏---了解即可")]),t._v(" "),s("h2",{attrs:{id:"_1-浏览器的垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器的垃圾回收机制"}},[t._v("#")]),t._v(" 1. 浏览器的垃圾回收机制")]),t._v(" "),s("h2",{attrs:{id:"_1-垃圾回收的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-垃圾回收的概念"}},[t._v("#")]),t._v(" （1）垃圾回收的概念")]),t._v(" "),s("p",[s("strong",[t._v("垃圾回收")]),t._v("：JavaScript 代码运行时，需要分配内存空间来储存变量和值。当变量不再参与运行时，就需要系统收回被占用的内存空间，这就是垃圾回收。")]),t._v(" "),s("p",[s("strong",[t._v("回收机制")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("Javascript 具有自动垃圾回收机制，会定期对那些不再使用的变量、对象所占用的内存进行释放，原理就是找到不再使用的变量，然后释放掉其占用的内存。")]),t._v(" "),s("li",[t._v("JavaScript 中存在两种变量：局部变量和全局变量。全局变量的生命周期会持续要页面卸载；而局部变量声明在函数中，它的生命周期从函数执行开始，直到函数执行结束，在这个过程中，局部变量会在堆或栈中存储它们的值，当函数执行结束后，这些局部变量不再被使用，它们所占有的空间就会被释放。")]),t._v(" "),s("li",[t._v("不过，当局部变量被外部函数使用时，其中一种情况就是闭包，在函数执行结束后，函数外部的变量依然指向函数内部的局部变量，此时局部变量依然在被使用，所以不会回收。")])]),t._v(" "),s("h2",{attrs:{id:"_2-垃圾回收的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-垃圾回收的方式"}},[t._v("#")]),t._v(" （2）垃圾回收的方式")]),t._v(" "),s("p",[t._v("浏览器通常使用的垃圾回收方法有两种：标记清除，引用计数。")]),t._v(" "),s("p",[s("strong",[t._v("1）标记清除")])]),t._v(" "),s("ul",[s("li",[t._v("标记清除是浏览器常见的垃圾回收方式，当变量进入执行环境时，就标记这个变量“进入环境”，被标记为“进入环境”的变量是不能被回收的，因为他们正在被使用。当变量离开环境时，就会被标记为“离开环境”，被标记为“离开环境”的变量会被内存释放。")]),t._v(" "),s("li",[t._v("垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。")])]),t._v(" "),s("p",[s("strong",[t._v("2）引用计数")])]),t._v(" "),s("ul",[s("li",[t._v("另外一种垃圾回收机制就是引用计数，这个用的相对较少。引用计数就是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减 1。当这个引用次数变为 0 时，说明这个变量已经没有价值，因此，在在机回收期下次再运行时，这个变量所占有的内存空间就会被释放出来。")]),t._v(" "),s("li",[t._v("这种方法会引起"),s("strong",[t._v("循环引用")]),t._v("的问题：例如："),s("code",[t._v("obj1")]),t._v("和"),s("code",[t._v("obj2")]),t._v("通过属性进行相互引用，两个对象的引用次数都是 2。当使用循环计数时，由于函数执行完后，两个对象都离开作用域，函数执行结束，"),s("code",[t._v("obj1")]),t._v("和"),s("code",[t._v("obj2")]),t._v("还将会继续存在，因此它们的引用次数永远不会是 0，就会引起循环引用。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj1 引用 obj2")]),t._v("\n  obj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj2 引用 obj1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这种情况下，就要手动释放变量占用的内存：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("obj1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\nobj2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-减少垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-减少垃圾回收"}},[t._v("#")]),t._v(" （3）减少垃圾回收")]),t._v(" "),s("p",[t._v("虽然浏览器可以进行垃圾自动回收，但是当代码比较复杂时，垃圾回收所带来的代价比较大，所以应该尽量减少垃圾回收。")]),t._v(" "),s("ul",[s("li",[t._v("**对数组进行优化：**在清空一个数组时，最简单的方法就是给其赋值为[ ]，但是与此同时会创建一个新的空对象，可以将数组的长度设置为 0，以此来达到清空数组的目的。")]),t._v(" "),s("li",[s("strong",[t._v("对")]),s("code",[t._v("object")]),t._v("**进行优化：**对象尽量复用，对于不再使用的对象，就将其设置为 null，尽快被回收。")]),t._v(" "),s("li",[t._v("**对函数进行优化：**在循环中的函数表达式，如果可以复用，尽量放在函数的外面。")])]),t._v(" "),s("h2",{attrs:{id:"_2-哪些情况会导致内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-哪些情况会导致内存泄漏"}},[t._v("#")]),t._v(" 2. 哪些情况会导致内存泄漏")]),t._v(" "),s("p",[t._v("以下四种情况会造成内存的泄漏：")]),t._v(" "),s("ul",[s("li",[t._v("**意外的全局变量：**由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。")]),t._v(" "),s("li",[t._v("**被遗忘的计时器或回调函数：**设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。")]),t._v(" "),s("li",[t._v("**脱离 DOM 的引用：**获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。")]),t._v(" "),s("li",[t._v("**闭包：**不合理的使用闭包，从而导致某些变量一直被留在内存当中。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);