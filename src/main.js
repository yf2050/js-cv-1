let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/*大家好，我是一名前端新人喻峰
*接下来我要演示下我的前端功底
*首先我要准备一个div
*/
#div1 {
    border:1px solid red;
    height: 200px;
    width: 200px;
}
/*接下来我要把div变成八卦图
 *注意看好啦
 *首先，我要把div变成一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 0 3px #ccc;
    border:none;
}
/*八卦图由阴阳组成
 *一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/*加入哪吒的魔丸和灵珠
 */
#div1::before {
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 25%;
    top: 0;
    background: #fff;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(254, 254, 254, 1) 25%, rgba(253, 253, 253, 1) 100%);
}

#div1::after {
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 25%;
    top: 100px;
    background: #000;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
`;
let string2 = '';
let n = 0;
//string = string.replace(/\n/g, `<br>`);
let fn = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 = string2 + `<br>`
        } else if (string[n] === " ") {
            string2 = string2 + `&nbsp`
        } else {
            string2 = string2 + string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n + 1 < string.length) {
            fn();
            n = n + 1;
        }
    }, 35)
}
fn();