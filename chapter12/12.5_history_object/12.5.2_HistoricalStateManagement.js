/**
 * 12.5.2 历史状态管理
 * 
 * 现代Web应用程序开发中最难的环节之一就是历史记录管理.
 * 用户每次点击都会触发页面刷新的时代早已过去, "后退"和"前进"按钮对用户来说就代表"帮我切换一个状态"的历史也就随之结束了.
 * 为了解决这个问题, 首先出现的是haschange事件.
 * HTML5也为history对象增加了方便的状态管理特性.
 * 
 * haschange会在页面URL的散列变化时被触发, 开发者可以在此时执行某些操作.
 * 而状态管理API则可以让开发者改变浏览器URL而不会加载新页面.
 * 为此, 可以使用history.pushState()方法.
 * 这个方法接收3个参数: 一个state对象, 一个新状态的标题, 一个可选的相对URL.
 */
let stateObject = { foo: "bar" };
history.pushState(stateObject, "My title", "baz.html");

/**
 * 因为pushState()会创建新的历史记录, 所以也会相应的启用"后退"按钮.
 * 此时单击"后退"按钮, 就会触发window对象上的popState事件.
 * popState事件的事件对象有一个state属性, 其中包含通过pushState()第一个参数传入的state对象.
 */
window.addEventListener("popstate", event => {
    let state = event.state;
    // 第一个页面加载时状态是null
    if (state) {
        processState(state);
    }
});

/**
 * 可以通过history.state获取当前的状态对象, 也可以使用replaceState()并传入与pushState()同样的前两个参数来更新状态.
 * 更新状态不会创建新历史记录, 只会覆盖当前状态.
 */
history.replaceState({ newFoo: "newBar" }, "New title");
