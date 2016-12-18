# ymd
About year, month, day

### mongoose#populate()
```js
GET localhost:2000/data
```
只get一次，传data进数据库
```js
GET localhost:2000/year
```
显示year的全部
```js
GET localhost:2000/month/:m
```
m:(1～12)，显示该月份及天数
```js
GET localhost:2000/day/:m/:d
```
m:(1～12)，d:(1～31)，显示天数
```js
GET localhost:2000/month/day/:d
```
d:(28,30,31)，显示月份总天数和d一样的月份