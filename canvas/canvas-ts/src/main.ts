/**
 * HTMLCanvasElement：约束返回canvas对象
 * getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。目前为2d
 * fillStyle：规定的颜色
 * fillRect：画出的（矩形）位置（实心）
 * el.width：获取canvas宽
 * el.height：获取canvas高
 */
const el = document.querySelector<HTMLCanvasElement>('#canvas')!;
const app = el.getContext('2d')!;
// app.fillStyle = 'blue';
// app.fillRect(0, 0, 100, 100);

// app.fillStyle = '#27ae60';
// app.fillRect(el.width / 2 - 150, el.height / 2 - 150, el.width, el.height);

/**
 * 画矩形
 * strokeStyle：画线条颜色
 * lineWidth：线宽度
 * lineJoin：边框是否为直角或圆角
 * strokeRect：画出矩形的位置以及大小（空心）
 * stroke：空心
 * fill：实心
 * rect：矩形
 */
// app.fillStyle = '#3498db';
// app.fillRect(50, 50, 200, 200);
// -----------------------------------
// app.beginPath();
// app.strokeStyle = '#e67e22';
// app.lineWidth = 20;
// app.lineJoin = 'round';
// app.strokeRect(50, 50, 200, 200);

/**
 * 画圆
 * arc：圆心x坐标, 圆心y坐标, 圆的半径r , 开始角度, 结束角度
 * stroke：创建空心图形方法
 * fill：创建实心图形方法
 */
// app.strokeStyle = '#2980b9';
// app.arc(el.width / 2, el.height / 2, el.width / 2, 0, Math.PI * 2);
// app.stroke();

// app.fillStyle = '#d35400';
// app.arc(el.width / 2, el.height / 2, el.width / 2, 0, Math.PI * 2);
// app.fill();

/**
 * 多边形绘制
 * beginPath：重置绘制路径
 * moveTo：把路径移动到画布中的指定点，但不会创建线条(lineTo 方法会绘制线条)
 * lineTo：开始绘制线条
 * closePath：闭合节点方法
 */
// // app.fillStyle = '#c0392b';
// app.strokeStyle = '#8e44ad';
// app.lineWidth = 20;
// app.lineJoin = 'round';
// app.moveTo(el.width / 2, 20);
// app.lineTo(20, el.height - 20);
// app.lineTo(el.width - 20, el.height - 20);
// app.closePath();
// // app.fill();
// app.stroke();

/**
 * 渐变色
 * createLinearGradient:创建线性的渐变对象，用于实现线性渐变效果
 * addColorStop：颜色位置以及什么颜色
 */
// const gradient = app.createLinearGradient(
//     0,
//     0,
//     el.width - 100,
//     el.height - 100,
// );
// gradient.addColorStop(0, '#2c3e50');
// gradient.addColorStop(0.5, '#8e44ad');
// gradient.addColorStop(1, '#c0392b');

// // app.fillStyle = gradient;
// // app.fillRect(0, 0, el.width, el.height);

// app.strokeStyle = gradient;
// app.lineWidth = 50;
// app.strokeRect(0, 0, el.width, el.height);

/**
 * 文字处理
 * font：字体设置大小以及 应用什么样的字体
 * fillText：设置字体内容以及字体位置
 * textBaseline：设置字体基线
 */
// app.fillStyle = '#2c3e50';
// app.fillRect(0, 0, el.width, el.height);

// app.fillStyle = '#d35400';
// // app.font = '50px Harmonyos Sans SC';
// // app.fillText('yahoo', 80, 150);

// app.strokeStyle = gradient;
// app.lineWidth = 3;
// app.font = '80px Harmonyos Sans SC';
// app.textBaseline = 'middle';
// app.strokeText('yahoo', 50, 150);

/**
 * 图片贴图的使用
 * 相当于背景图，不能控制放置图片位置
 * createPattern:canvas图片贴图函数
 */
// const img = document.createElement('img');
// img.src = './images/2.jpg';

// // document.body.insertAdjacentElement('afterbegin', img);

// img.onload = () => {
//     const pattern = app.createPattern(img, 'no-repeat')!;
//     app.fillStyle = pattern;
//     app.fillRect(0, 0, el.width, el.height);
// };

/**
 * 图片绘制
 * naturalWidth:图片原始的宽
 * naturalHeight:图片原始的高
 * drawImage：控制图片位置大小
 */
// const img = document.createElement('img');
// img.src = './images/5.jpg';
// img.onload = () => {
//     el.width = img.naturalWidth * scale(img, el);
//     el.height = img.naturalHeight * scale(img, el);
//     app.drawImage(img, 0, 0, el.width, el.height);
// };

// function scale(img: HTMLImageElement, el: HTMLCanvasElement) {
//     return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight);
// }

/**
 * 绘制随机色块
 */
// app.fillStyle = '#2c3e50';
// app.fillRect(0, 0, 300, 300);

// for (let i = 0; i < 1000; i++) {
//     app.fillStyle = '#ecf0f1';
//     app.fillRect(Math.random() * el.width, Math.random() * el.height, 2, 2);
// }

app.fillStyle = '#2c3e50';
app.fillRect(0, 0, el.width, el.height);

for (let i = 0; i < 20; i++) {
    app.beginPath();
    app.fillStyle = [
        '#2ecc71',
        '#3498db',
        '#9b59b6',
        '#f1c40f',
        '#e67e22',
        '#e74c3c',
    ].sort(() => (Math.floor(Math.random() * 3) ? 1 : -1))[0];
    app.arc(
        Math.random() * el.width,
        Math.random() * el.height,
        10 + Math.random() * 10,
        0,
        2 * Math.PI,
    );
    app.fill();
}
