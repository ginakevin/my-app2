class B {
  constructor() {
    this.param ='show B porperty';
  }

  static getInstance() {
    if (!B.instance) {
      B.instance = new B();
    }
    return B.instance;
  }

  publicFunction() {
    return "call B Funtion";
  }
}

export default B.getInstance(); // 导出 B 的单例实例
