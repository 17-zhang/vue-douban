# vue-douban
模仿豆瓣APP，技术栈：Vue2.x + Vuex + Vue-router + Superagent

## 依赖包[SuperAgent](https://www.jianshu.com/p/191d1e21f7ed)

- superagent 是一个轻量的,渐进式的ajax api,可读性好,学习曲线低,内部依赖nodejs原生的请求api,适用于nodejs环境下.

(```)
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
(```)

