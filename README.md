# vue-douban
模仿豆瓣APP，技术栈：Vue2.x + Vuex + Vue-router + Superagent

## 依赖包[SuperAgent](https://www.jianshu.com/p/191d1e21f7ed)

- superagent 是一个轻量的,渐进式的ajax api,可读性好,学习曲线低,内部依赖nodejs原生的请求api,适用于nodejs环境下.

```
  request
      .post('/api/pet')
      .send({ name: 'Manny', species: 'cat' })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(res){
        if (res.ok) {
          alert('yay got ' + JSON.stringify(res.body));
        } else {
          alert('Oh no! error ' + res.text);
        }
      });
```
## 无限加载滚动插件[vue-infinite-loading](https://www.jianshu.com/p/bfb5ca56b4fb)

### 特点
- 移动端支持友好
- 兼容任何一个可以滚动的元素
- 有不同的旋转器可以作为加载动画
- 支持加载后显示结果
- 支持两个方向的无限加载

### 安装

` npm install vue-infinite-loading --save `

### 导入方式

#### es6模块导入方式

```
  import InfiniteLoading from 'vue-infinite-loading';
  export default {
    components: {
      InfiniteLoading,
    },
  };

```
#### CommonJS 模块导入方式

```
  const InfiniteLoading = require('vue-infinite-loading');
  export default {
    components: {
        InfiniteLoading,
    },
  };
```
#### 其他方式

` <script src="/path/to/vue-infinite-loading/dist/vue-infinite-loading.js"></script> `



## Vuex的理解，来源[vue--vuex详解](https://www.cnblogs.com/first-time/p/6815036.html)

### 什么是vuex?

- 官方：Vuex专门为vue.js应用程序开发的状态管理模式。它集中式存储管理应用的所有组件的状态，并以相应的规则保证状态可预测。
- 个人: Vuex是用来管理组件之间通信的一个插件

### 为什么要用Vuex？

- 我们知道组件之间是独立的，组件之间想要实现通信，我目前知道的就只有props选项，但这也仅限于父组件和子组件之间的通信。如果兄弟组件之间想要实现通信呢？嗯..，方法应该有。抛开怎么实现的问题，试想一下，当做中大型项目时，面对一大堆组件之间的通信，还有一大堆的逻辑代码，会不会很抓狂？？那为何不把组件之间共享的数据给“拎”出来，在一定的规则下管理这些数据呢？ 这就是Vuex的基本思想了。

### Vuex核心理念

- state
- mutations
- getters
- actions

### Vuex核心理念详解

- state: 用来存放组件之间的共享数据。它跟组件中的data()选项类似，只不过data存放组件的私有数据。
- getters: 有时候我们需要对state的数据进行筛选，过滤。这些操作都是在组件的计算属性进行的。如果多个组件需要用到筛选后的数据，那我们就必须到处重写该计算属性函数。
- mutations: 前面讲到的都是如果获取state的数据，那如何把数据存储到state中呢？在Vuex store中，实际改变状态(state)的唯一方式是通过提交(commit)一个mutations。mutations下的函数接收state作为第一参数，接收payload(载荷)作为第二参数。* mutations方法必须是同步方法！ *
- actions:既然mutations 只能处理同步函数，我大js全靠‘异步回调’吃饭，怎么能没有异步，于是actions出现了...

### 总结
1. mutation 只管存，你给我（dispatch）我就存；
2. action只管中间处理，处理完我就给你，你怎么存我不管；
3. Getter 我只管取，我不改的。
4. action放在了 methods 里面，说明我们应该把它当成函数来用（讲道理，钩子函数也应该可以的） mutation是写在store里面的，这说明，它就是个半成品，中间量，我们不应该在外面去操作它。getter写在了 computed 里面，这说明虽然 getter我们写的是函数，但是我们应该把它当成计算属性来用。

