

cc.Class({
    extends: cc.Component,

    properties: {
        prefab:{
            type:cc.Prefab,
            default:null,
        },
        size:5,
        _pool:{
            type:cc.NodePool,
            default:null,
        },
        monster:[],

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 創建對象池
        var pool = new cc.NodePool();
        for (let i = 0; i < this.size; i++) {
            // 預創建的對象
            pool.put(cc.instantiate(this.prefab))
        }
        this._pool = pool;
        // console.log("start");
        // 啓動一個 定時器 模擬 對象創建 釋放
        this.schedule(() => {
            // console.log(this.monster.length);
            if (this.monster.length < 2) {
                this.create()
                return
            } else if (this.monster.length > this.size * 3 / 2) {
                this.kill()
                return
            }
            if (Math.floor(Math.random() * 10) % 2 == 0) {
                this.create()
            } else {
                this.kill()
            }
        }, 1 / 2)

    },
    create(){
        // 從 內池池 創建節點
        var node = new cc.Node();
        if (this._pool.size() == 0) {
            node = cc.instantiate(this.prefab)
        } else {
            // 如果 對象池 爲空 會返回 null
            node = this._pool.get()
        }
        // 添加到 場景
        this.monster.push(node)
        node.setPosition(this.randomXY().x,this.randomXY().y)
        cc.director.getScene().addChild(node)
    },
    kill(){
        var node = this.monster.pop()
        if (this._pool.size() == this.size) {
            // 移除節點 並且 將其歸還到 對象池
            this._pool.put(node)
        } else {
            // 移除節點
            node.parent = null
        }
    },
    randomXY(){
        return {
            x:Math.floor(Math.random() * 800),
            y:Math.floor(Math.random() * 640)
        }
    },
    start () {

    },

    // update (dt) {},
});
