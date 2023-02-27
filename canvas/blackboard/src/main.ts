import './style.css';

class BlackBoard {
    constructor(
        private el: HTMLCanvasElement = document.querySelector('#canvas')!,
        private app = el.getContext('2d')!,
        private width: number = el.width,
        private height: number = el.height,
    ) {
        this.app.fillStyle = '#000';
        this.app.fillRect(0, 0, this.width, this.height);
    }
}

new BlackBoard();
