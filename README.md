# AjanuwWebWidgetsAngular

编写一些我常用的组件

- a-center
- a-row
- a-column
- a-spacer
- a-expanded
- a-padding
- a-margin
- a-sizedbox

```html
<a-margin all="8px">
  <a-padding all="18px 10px">
    <a-row>
      <a-sizedbox width="2em"></a-sizedbox>
      <span>hello</span>
      <!-- <a-spacer></a-spacer> -->
      <a-expanded>
        <a-padding left="1em" right="1em">
          <a-column cross="center">
            <span>world</span>
            <a-sizedbox height="3rem"></a-sizedbox>
            <span>ajanuw</span>
          </a-column>
        </a-padding>
      </a-expanded>
    </a-row>
  </a-padding>
</a-margin>
```
![](./docs/widgets.png)


## 打包组件
```
$ npm run bws
```

## 运行example
```
$ npm run dev
```