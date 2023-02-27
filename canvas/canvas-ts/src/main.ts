/**
 * etContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。目前为2d
 * fillStyle：规定的颜色
 * fillRect：画出的位置
 */
const el = document.querySelector<HTMLCanvasElement>('#canvas')!;
const app = el.getContext('2d')!;
// app.fillStyle = 'red';
// app.fillRect(0, 0, 300, 300);

// app.fillStyle = '#2ecc71';
// app.fillRect(el.width / 2 - 150 / 2, el.height / 2 - 150 / 2, 150, 150);

/**
 * 画矩形
 * strokeStyle：画线条颜色
 * lineWidth：线宽度
 * lineJoin：边框是否为直角或圆角
 * strokeRect：画出矩形的位置以及大小
 */
// app.strokeStyle = '#8e44ad';
// app.lineWidth = 30;
// app.lineJoin = 'round';
// app.strokeRect(50, 50, 200, 200);

/**
 * 画圆
 * arc：圆心x坐标, 圆心y坐标, 圆的半径r , 开始角度, 结束角度
 * stroke：绘制空心方法
 * fill:绘制实心方法
 */
// app.strokeStyle = '#8e44ad';
// // app.lineWidth = 20;
// app.arc(150, 150, 150, 0, 1);
// app.stroke();

/**
 * 多边形绘制
 * beginPath：重置绘制路径
 * fillStyle：画实心填充颜色
 * moveTo：把路径移动到画布中的指定点，但不会创建线条(lineTo 方法会绘制线条)
 * lineTo：开始绘制线条
 * closePath：闭合节点方法
 */
// app.beginPath();
// app.strokeStyle = '#e74c3c';
// app.fillStyle = 'red';
// app.lineWidth = 10;
// app.moveTo(el.width / 2, 10);
// app.lineTo(el.width - 10, 150);
// app.lineTo(10, 150);
// app.closePath();
// app.stroke();

/**
 * 渐变色
 * createLinearGradient:创建线性的渐变对象，用于实现线性渐变效果
 * addColorStop：颜色位置以及什么颜色
 */
const gradient = app.createLinearGradient(0, 0, 100, 100);
gradient.addColorStop(0, '#16a085');
gradient.addColorStop(0.5, '#2980b9');
gradient.addColorStop(1, '#d35400');

// app.strokeStyle = gradient;
// app.fillStyle = gradient;
// app.lineWidth = 20;
// app.lineJoin = 'round';
// // app.strokeRect(50, 50, 200, 200);
// app.fillRect(50, 50, 200, 200);

/**
 * 文字处理
 * el.width：可以对canvas进行二次设置
 * font：字体设置大小以及 应用什么样的字体
 * fillText：设置字体内容以及字体位置
 */
// el.width = 1000;
// el.height = 1000;
app.fillStyle = '#34495e';
app.fillRect(0, 0, el.width, el.height);

app.font = '60px Harmonyos Sans SC';
// app.fillStyle = 'white';
app.fillStyle = gradient;
// app.strokeStyle = gradient;
// app.lineWidth = 3;
// app.textBaseline = 'top';
app.fillText('yahoo', 50, 100);
// app.strokeText('yahoo', 50, 100);
