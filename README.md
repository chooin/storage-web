# storage-web

### 安装
``` sh
npm install storage-web --save
```

### 使用

``` js
import storage from 'storage-web'
storage({
  use: 's', // String（使用 localStorage/sessionStorage）
  pre: 'my_', // String（命名空间）
  strict: true // Boolean（强类型，输入什么输出什么）
}).get('store')
```

## get

获取

``` js
storage().get('store') // localStorage
storage('local').get('store')  // localStorage
storage('s').get('store') // sessionStorage
storage('session').get('store') // sessionStorage
storage('sessionStorage').get('store') // sessionStorage
storage({
  use: 's',
  pre: 'my_',
  strict: true
}).get('store')  // sessionStorage name: my_store
```

## set

设置

``` js
// 支持类型 String,Number,Boolean,Array,Object,Null,Undefined...
let storeValue = {
  store_id: 1,
  store_name: 'Tmall'
}

storage().set('store', storeValue)
// 或
storage().set([
  {
    key: 'store',
    value: storeValue
  }
])
```


## remove

移除

``` js
storage().remove('store')
// 或
storage().remove(['store', 'token'])
```

## clear

可以清空当前作用域下的 storage

``` js
storage({ pre: 'my_' }).clear() // 清空 localStorage 和 sessionStorage 下所有以 'my_' 开头的
storage().clear() // 清空所有 localStorage 和 sessionStorage
```