/**
 * 在黑板上写字
 * 要绑定一个鼠标按下的事件，还要绑定鼠标移动事件
 * 移除事件
 * 创建一个清屏按钮，并且点击按钮进行重置
 * 用户可以自定义事件
 * #000（黑色） #fff（白色）
 * 创建一个色框，点击其中颜色粉笔发生改变
 */
import './style.css';

class BlackBoard {
    constructor(
        private el: HTMLCanvasElement = document.querySelector('#canvas')!,
        private app = el.getContext('2d')!,
        private width: number = el.width,
        private height: number = el.height,
        private btn: HTMLDivElement = document.createElement('div'),
        private bgColor: string = '#000',
        private lineColorStart: string = '#fff',
        private lineColor: string = '#fff',
    ) {
        this.initCanvas();
        this.bindEvent();
    }

    // 开始写字
    private bindEvent() {
        const callback = this.drawLine.bind(this);
        this.el.addEventListener('mousedown', () => {
            this.app.beginPath();
            this.app.strokeStyle = this.lineColor;
            this.el.addEventListener('mousemove', callback);
        });

        document.addEventListener('mouseup', () => {
            this.el.removeEventListener('mousemove', callback);
        });
    }

    // 划线
    private drawLine(event: MouseEvent) {
        this.app.lineTo(event.offsetX, event.offsetY);
        this.app.stroke();
    }

    // 初始化黑板
    private initCanvas() {
        this.app.fillStyle = this.bgColor;
        this.app.fillRect(0, 0, this.width, this.height);
        this.el.insertAdjacentElement('afterend', this.btn);
        this.btn.classList.add('btn');
    }
    // 创建清屏按钮
    public createBtn() {
        const el: HTMLButtonElement = document.createElement('button');
        el.innerText = '清屏';
        this.btn.insertAdjacentElement('afterbegin', el);
        el.addEventListener('click', () => {
            this.app.fillStyle = this.bgColor;
            this.app.fillRect(0, 0, this.el.width, this.el.height);
        });

        return this;
    }
    // 自定义黑板颜色
    public setBgColor(color: string) {
        this.bgColor = color;
        this.app.fillStyle = this.bgColor;
        this.app.fillRect(0, 0, this.el.width, this.el.height);
        return this;
    }

    // 自定义粉笔颜色
    public setLineColor() {
        const colors = ['#f1c40f', '#e74c3c', '#9b59b6', '#3498db'];
        const container: HTMLDivElement = document.createElement('div');
        container.classList.add('lineColor');
        colors.forEach(color => {
            const div: HTMLDivElement = document.createElement('div');
            div.style.cssText = `width:20px;height:20px;background-color:${color}`;
            container.insertAdjacentElement('beforeend', div);

            div.addEventListener('click', () => (this.lineColor = color));
        });
        this.btn.insertAdjacentElement('beforeend', container);
    }
    // 橡皮擦
    public eraser() {
        const el: HTMLButtonElement = document.createElement('button');
        el.innerText = '橡皮';
        this.btn.insertAdjacentElement('afterbegin', el);
        el.addEventListener('click', () => {
            this.lineColor = this.bgColor;
            this.app.lineWidth = 20;
        });
        return this;
    }

    // 写字
    public draw() {
        const el: HTMLButtonElement = document.createElement('button');
        el.innerText = '写字';
        this.btn.insertAdjacentElement('afterbegin', el);
        el.addEventListener('click', () => {
            this.lineColor = this.lineColorStart;
            this.app.lineWidth = 1;
        });
        return this;
    }

    // 画布截图
    public short() {
        const el: HTMLButtonElement = document.createElement('button');
        el.innerText = '截图';
        this.btn.insertAdjacentElement('afterbegin', el);
        el.addEventListener('click', () => {
            const img: HTMLImageElement = document.createElement('img');
            img.classList.add('short');
            img.src = this.el.toDataURL('jpg/jpeg');
            this.btn.insertAdjacentElement('afterend', img);
        });
        return this;
    }
}

const instance = new BlackBoard();
instance.createBtn().setBgColor('#2ecc71');
instance.setLineColor();
instance.eraser();
instance.draw();
instance.short();
