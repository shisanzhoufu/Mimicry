
new Vue({
    el: '#app',
    data: {
        equation: '0',
        isDecimalAdded: false,
        isOperatorAdded: false,
        isStarted: false,
    },
    methods: {
        // 
        isOperator(character) {
        return ['+', '-', '×', '÷'].indexOf(character) > -1
        },
        // 
        append(character) {
        // 第一个输入端只能是数字而不是运算符
        if (this.equation === '0' && !this.isOperator(character)) {
            // if输入的是小数点，保留0
            if (character === '.') {
            this.equation += '' + character
            this.isDecimalAdded = true
            } else {
            this.equation = '' + character
            }
            
            this.isStarted = true
            return
        }
        
        // 输入数字时
        if (!this.isOperator(character)) {
            // 控制只能输入一个小数点
            if (character === '.' && this.isDecimalAdded) {
            return
            }
            
            if (character === '.') {
            this.isDecimalAdded = true
            this.isOperatorAdded = true
            } else {
            this.isOperatorAdded = false
            }
            
            this.equation += '' + character
        }
        
        // 添加运算符
        if (this.isOperator(character) && !this.isOperatorAdded) {
            this.equation += '' + character
            this.isDecimalAdded = false
            this.isOperatorAdded = true
        }
        },
        // 等于计算
        calculate() {
        let result = this.equation.replace(new RegExp('×', 'g'), '*').replace(new RegExp('÷', 'g'), '/')
        
        this.equation = parseFloat(eval(result).toFixed(9)).toString()
        this.isDecimalAdded = false
        this.isOperatorAdded = false
        },
        // 正负号
        calculateToggle() {
        if (this.isOperatorAdded || !this.isStarted) {
            return
        }
        
        this.equation = this.equation + '* -1'
        this.calculate()
        },
        // 百分数
        calculatePercentage() {
        if (this.isOperatorAdded || !this.isStarted) {
            return
        }
        
        this.equation = this.equation + '* 0.01'
        this.calculate()
        },
        // 归零
        clear() {
        this.equation = '0'
        this.isDecimalAdded = false
        this.isOperatorAdded = false
        this.isStarted = false
        }
    }
    })