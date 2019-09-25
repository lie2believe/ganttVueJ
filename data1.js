moment.prototype.toJSON = function(){return moment(this).format("YYYY-MM-DD HH:mm:ss")} //解决差8小时的问题
var ganttLayout = {
    tableDataType:[{
        label:'车间'
        ,name:'factory'
    }
    ,{
        label:'机台'
            ,name:"machine"
        }
        ,{
        lable:'机台号'
            ,name:'machineid'
            ,hidden:true
        }
        ]
    ,tableData:[{
        factory:'凹印车间'
        ,machine:'凹印机3#'
        ,machineid:'ay3'
        ,attr:{key:'ay3',id:'ay3'}
    }
    ,{
        factory:'凹印车间'
        ,machine:'凹印机4#'
            ,machineid:'ay4'

            ,attr:{key:'ay4',id:'ay4'}
     }
        ,{
            factory:'凹印车间'
            ,machine:'离线赋码'
            ,machineid:'fm3'

            ,attr:{key:'fm3',id:'fm3'}
        }
        ,{
            factory:'烫模车间'
            ,machine:'BMA1#'
            ,machineid:'bma1'

            ,attr:{key:'bma1',id:'bma1'}
        }

        ,{
            factory:'烫模车间'
            ,machine:'BMA2#'
            ,machineid:'bma2'

            ,attr:{key:'bma2',id:'bma2'}
        }

        ,{
            factory:'烫模车间'
            ,machine:'BMA3#'
            ,machineid:'bma3'

            ,attr:{key:'bma3',id:'bma3'}
        }


        ,{
            factory:'烫模车间'
            ,machine:'BMA4#'
            ,machineid:'bma4'

            ,attr:{key:'bma4',id:'bma4'}
        }


        ,{
            factory:'烫模车间'
            ,machine:'BMA5#'
            ,machineid:'bma5'

            ,attr:{key:'bma5',id:'bma5'}
        }


        ,{
            factory:'烫模车间'
            ,machine:'机刀4#'
            ,machineid:'jd4'

            ,attr:{key:'jd4',id:'jd4'}
        }
        ,{
            factory:'综合车间'
            ,machine:'胶印机2#'
            ,machineid:'jy2'
            ,attr:{key:'jy2',id:'jy2'}
        }
        ,{
            factory:'质检车间'
            ,machine:'品检机1#'
            ,machineid:'pj1'
            ,attr:{key:'pj1',id:'pj1'}
        }
     ]
};

;
var ganttData = [{
    id: 1,
    name: "Feature 1",
    key:"ay3",
    series: [{
        id: 'ay3_001',
        groupId:1,
        name: "  001",
        start: moment().add(1, 'h'),
        end: moment().add(12, 'h')
        ,key:'ay3'
        ,progress:90
      },
      {
        id: 'ay3_002',
          groupId:1,
        name: "002",
        start: moment().add(13, 'h'),
        end: moment().add(14, 'h'),
        color: "#f0f0f0"
          ,key:"ay3"
      }
    ]
  },
  {
    id: 2,
    name: "Feature 2",
      key:"bma1",
    series: [{
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
        groupId:2,
        name: "003",
        start: moment().add(5, 'h'),
        end: moment().add(16, 'h')
        ,key:"bma1"
        ,progress:15
      },
      {
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
          groupId:2,
        name: "004",
        start: moment().add(7, 'h'),
        end: moment().add(19, 'h'),
        color: "#f0f0f0"
          ,key:"bma1"
      },
      {
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
          groupId:2,
        name: "005",
        start: moment().add(10, 'h'),
        end: moment().add(33, 'h'),
        color: "#e0e0e0"
          ,key:"bma1"
          ,progress:34.5
      }
    ]
  },
  {
    id: 3,
    name: "Feature 3",
      key:'jy2',
    series: [{
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
        groupId:3,
        name: "006",
        start: moment().add(12, 'h'),
        end: moment().add(25, 'h')
        ,key:'jy2'
        ,progress:100
      },
      {
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
          groupId:3,
        name: "007",
        start: moment().add(17, 'h'),
        end: moment().add(29, 'h'),
        color: "#f0f0f0"
          ,key:'jy2'
      }
    ]
  },
  {
    id: 4,
    name: "Feature 4",
     key:'pj1',
    series: [{
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
        groupId:4,
        name: "008",
        start: moment().add(22, 'h'),
        end: moment().add(31, 'h')
        ,key:'pj1'
      },
      {
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
          groupId:4,
        name: "009",
        start: moment().add(12, 'h'),
        end: moment().add(25, 'h'),
        color: "#f0f0f0"
          ,key:'pj1'
      }
    ]
  },
  {
    id: 5,
    name: "Feature 5",
      key:'bma2',
    series: [{
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
        groupId:5,
        name: "asdf",
        start: moment().add(1, 'h'),
        end: moment().add(13, 'h')
      ,key:'bma2'
      },
      {
        id: (~~(Math.random() *
          (1 << 24))).toString(16),
          groupId:5,
        name: "62362346",
        start: moment().add(1, 'h'),
        end: moment().add(12, 'h'),
        color: "#f0f0f0"
          ,key:'bma2'
      }
    ]
  }

];