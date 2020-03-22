var questionData = {
    list1: [{
        title: '是否经常上火、口腔溃疡？', //题目名称
        icon: './images/ICON4.png', // 顶部icon url
        type: 1, // type表示多选单选 1：简单单选 2：简单多选 3：两个大圆形按钮单选 5：带小icon单选
        name: 'question1', // 数据提交参数名
        // desc: '题目介绍文案',
        choose: [ //选项
            {
                value: 0,
                text: '很少'
            },
            {
                value: 1,
                text: '每年会有几次',
                jump: 'question7' // 选择此项会跳转到的题目名
            },
            {
                value: 2,
                text: '一两个月就有一次'
            },
            {
                value: 3,
                text: '一两个星期就有一次',
                jump: 'question3'
            }
        ]
    }, {
        title: '经常生病感冒吗？',
        icon: './images/ICON5.png',
        type: 1,
        name: 'question2',
        choose: [{
                value: 0,
                text: '经常生病感冒'
            },
            {
                value: 1,
                text: '每季度有一两次生病感冒'
            },
            {
                value: 2,
                text: '每年有一两次生病感冒'
            },
            {
                value: 3,
                text: '有一两年没感冒了'
            }
        ]
    }, {
        title: '每次感冒后多久才能康复？',
        icon: './images/ICON6.png',
        type: 1,
        name: 'question3',
        choose: [{
                value: 0,
                text: '3-5天就能好'
            },
            {
                value: 1,
                text: '1周左右'
            },
            {
                value: 2,
                text: '1-2周'
            },
            {
                value: 3,
                text: '超过2周才能好'
            }
        ]
    }, {
        title: '是否经常熬夜？',
        icon: './images/ICON7.png',
        type: 1,
        name: 'question4',
        choose: [{
                value: 0,
                text: '基本不熬夜'
            },
            {
                value: 1,
                text: '每月有两三次熬夜'
            },
            {
                value: 2,
                text: '每周有两三次熬夜'
            },
            {
                value: 3,
                text: '几乎每天熬夜'
            }
        ]
    }, {
        title: '平均每周运动几次？',
        icon: './images/ICON8.png',
        type: 1,
        name: 'question5',
        choose: [{
                value: 0,
                text: '基本没有'
            },
            {
                value: 1,
                text: '1-2次'
            },
            {
                value: 2,
                text: '3-4次'
            },
            {
                value: 3,
                text: '4次以上'
            }
        ]
    }],
    list2: [{
        title: '您的饮食特点？',
        icon: './images/ICON9.png',
        type: 1,
        name: 'question6',
        choose: [{
                value: 0,
                text: '纯素食'
            },
            {
                value: 1,
                text: '偏素食'
            },
            {
                value: 2,
                text: '偏肉食'
            },
            {
                value: 3,
                text: '基本都吃'
            }
        ]
    }, {
        title: '平均每天吃几份蔬菜？',
        desc: '一份蔬菜：约为一个拳头大小的做熟的蔬菜，不包含如土豆、山药、鲜玉米等淀粉类蔬菜', // 题目描述
        icon: './images/ICON10.png',
        type: 1,
        name: 'question7',
        choose: [{
                value: 0,
                text: '0-1份'
            },
            {
                value: 1,
                text: '2-3份'
            },
            {
                value: 2,
                text: '3-4份'
            },
            {
                value: 3,
                text: '4份以上'
            }
        ]
    }, {
        title: '平均每天吃几份水果？',
        desc: '一份水果：约为半个拳头或半个中等苹果大小的新鲜水果，不包括果汁、水果罐头和果脯',
        icon: './images/ICON11.png',
        type: 1,
        name: 'question8',
        choose: [{
                value: 0,
                text: '几乎不'
            },
            {
                value: 1,
                text: '1-2份'
            },
            {
                value: 2,
                text: '2-3份'
            },
            {
                value: 3,
                text: '4份以上'
            }
        ]
    }, {
        title: '平均每天吃几次大豆及豆制品？',
        desc: '豆制品：豆浆、豆腐、豆干、豆皮、腐竹等',
        icon: './images/ICON12.png',
        type: 1,
        name: 'question9',
        choose: [{
                value: 0,
                text: '几乎不'
            },
            {
                value: 1,
                text: '1-2次'
            },
            {
                value: 2,
                text: '3次以上'
            }
        ]
    }, {
        title: '平均每天喝几份牛奶或酸奶？',
        desc: '一份奶：约200-250ml，即常见的纯牛奶1袋或1纸盒，常见的酸奶2小盒或1中盒/中瓶或1/2大瓶，或1杯奶',
        icon: './images/ICON13.png',
        type: 1,
        name: 'question10',
        choose: [{
                value: 0,
                text: '几乎不'
            },
            {
                value: 1,
                text: '1-2次'
            },
            {
                value: 2,
                text: '3次以上'
            }
        ]
    }, {
        title: '平均每周吃几个蛋类？',
        icon: './images/ICON14.png',
        type: 1,
        name: 'question11',
        choose: [{
                value: 0,
                text: '0-3个'
            },
            {
                value: 1,
                text: '4-7个'
            },
            {
                value: 2,
                text: '8个以上'
            }
        ]
    }, {
        title: '平均每周吃几次水产/海鲜？',
        icon: './images/ICON15.png',
        type: 1,
        name: 'question12',
        choose: [{
                value: 0,
                text: '几乎不'
            },
            {
                value: 1,
                text: '1-2次'
            },
            {
                value: 2,
                text: '3次以上'
            }
        ]
    }, {
        title: '平均每天吃几份畜禽肉类？',
        icon: './images/ICON16.png',
        desc: '一份肉类：约1两，2根手指或1个乒乓球大小，或一盘荤菜中，菜多肉少算1份肉，菜少肉多算2份肉',
        type: 1,
        name: 'question13',
        choose: [{
                value: 0,
                text: '0-1份'
            },
            {
                value: 1,
                text: '2-3份'
            },
            {
                value: 2,
                text: '4份以上'
            }
        ]
    }, {
        title: '是否吃动物内脏？',
        icon: './images/ICON17.png',
        type: 1,
        name: 'question14',
        choose: [{
                value: 0,
                text: '基本不吃'
            },
            {
                value: 1,
                text: '吃血制品'
            },
            {
                value: 2,
                text: '吃肝脏'
            },
            {
                value: 3,
                text: '吃腰花'
            },
            {
                value: 4,
                text: '基本都吃'
            }
        ]
    }, {
        title: '近半年的饮酒情况？',
        desc: '一份酒：1罐啤酒、1杯红酒或1两白酒',
        icon: './images/ICON18.png',
        type: 1,
        name: 'question15',
        choose: [{
                value: 0,
                text: '每周少于1份'
            },
            {
                value: 1,
                text: '每周2-3份'
            },
            {
                value: 2,
                text: '每天1-2份'
            },
            {
                value: 3,
                text: '每天超过4份'
            }
        ]
    }, {
        title: '近半年的吸烟情况？',
        icon: './images/ICON19.png',
        type: 1,
        name: 'question16',
        choose: [{
                value: 0,
                text: '不吸烟'
            },
            {
                value: 1,
                text: '每周1~2包'
            },
            {
                value: 2,
                text: '每天半包~1包'
            },
            {
                value: 3,
                text: '每天超过1包'
            }
        ]
    }, {
        title: '是否对以下食物过敏？',
        icon: './images/ICON20.png',
        type: 2,
        name: 'question17',
        choose: [{
                value: 0,
                text: '面食、谷物'
            },
            {
                value: 1,
                text: '大豆'
            },
            {
                value: 2,
                text: '鱼类'
            },
            {
                value: 3,
                text: '虾蟹类'
            },
            {
                value: 4,
                text: '蛋类'
            },
            {
                value: 5,
                text: '奶类'
            },
            {
                value: 6,
                text: '花生'
            },
            {
                value: 7,
                text: '坚果'
            }
        ]
    }],
    list3: [{
        title: '您是否在备孕？',
        icon: './images/ICON24.png',
        type: 3,
        name: 'question18',
        choose: [{
                value: 0,
                text: '是'
            },
            {
                value: 1,
                text: '否'
            },
        ]
    }, {
        title: '您处在以下哪个阶段？',
        icon: './images/ICON24.png',
        type: 4,
        name: 'question19',
        choose: [{
                value: 0,
                text: '备孕期',
                icon: './images/ICON21.png'
            },
            {
                value: 1,
                text: '怀孕期',
                icon: './images/ICON22.png'
            },
            {
                value: 2,
                text: '哺乳期',
                icon: './images/ICON23.png'
            }
        ],
    }, {
        title: '现在是否有以下疾病或症状？',
        icon: './images/ICON26.png',
        type: 2,
        name: 'question20',
        choose: [{
                value: 0,
                text: '高血糖'
            },
            {
                value: 1,
                text: '高血压'
            },
            {
                value: 2,
                text: '高血脂'
            },
            {
                value: 3,
                text: '高胆固醇'
            },
            {
                value: 4,
                text: '心脏病'
            },
            {
                value: 5,
                text: '痛风'
            },
            {
                value: 6,
                text: '脂肪肝/肝炎'
            },
            {
                value: 7,
                text: '肾炎/肾结石'
            }
        ]
    }, {
        title: '最近半年是否曾被诊断出缺乏以下营养素？',
        icon: './images/ICON27.png',
        type: 2,
        name: 'question21',
        choose: [{
                value: 0,
                text: '铁'
            },
            {
                value: 1,
                text: '钙'
            },
            {
                value: 2,
                text: '维生素B族'
            },
            {
                value: 3,
                text: '维生素C'
            },
            {
                value: 4,
                text: '维生素D'
            },
            {
                value: 5,
                text: '其他营养素'
            }
        ]
    }, {
        title: '是否服用维生素或其他补充剂？',
        icon: './images/ICON28.png',
        type: 1,
        name: 'question22',
        choose: [{
                value: 0,
                text: '经常'
            },
            {
                value: 1,
                text: '偶尔'
            },
            {
                value: 2,
                text: '很少'
            }
        ]
    }, {
        title: '最近1年内是否购买并服用过营养素补充剂？',
        icon: './images/ICON29.png',
        type: 1,
        name: 'question23',
        choose: [{
                value: 0,
                text: '没有购买和服用过'
            },
            {
                value: 1,
                text: '服用过他人赠送的'
            },
            {
                value: 2,
                text: '购买过1-2次'
            },
            {
                value: 3,
                text: '购买过3次以上'
            }
        ]
    }]
}