function transform(htmlStr){
    let reg = /(<red>|<\/red>)/g
    let testStack = new Stack
    let tmp
    let arr = new BulidArray(htmlStr)
    let result = {}
    while(tmp){
        // tmp用来保存每次匹配到的结果
        tmp = reg.exec(htmlStr)
       if(tmp && !testStack.test(tmp[0])) {
            result.iscorrect = testStack.iscorrect
            return result
       } else if(!!tmp){
            console.log(tmp)
            arr.build(tmp.index,tmp[0] =='<red>',tmp[0])
       }
    }
    result.value = arr.result
    result.iscorrect = !testStack.stack.length
    return result
}
//用来验证格式是否正确的栈
function Stack(){
    this.stack = []
    this.iscorrect = true
    this.test = function(str){
        if(str == '<red>'){this.stack.push(1)
            return true} else if(str == '</red>' && !this.stack.length){
            this.iscorrect = false
            return false
        } else{
            this.stack.pop()
            return true
        }
    }
}
function BulidArray(str){
    this.result = []
    this.str = str
    this.lastIndex = 0
    this.build = function(index,isStart,tag){
            let obj = {}
              obj.value = str.substring(this.lastIndex,index)
            this.lastIndex = index + tag.length
            if(!isStart){
                obj.color = 'red'
            }
              this.result.push(obj)

    }
}
transform('<red></red>')