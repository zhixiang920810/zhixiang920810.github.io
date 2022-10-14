
layui.config({
    base: 'layuiadmin/' //静态资源所在路径
}).extend({
    index: 'lib/index' //主入口模块
}).use(['index', 'console']);
// var khd_num=[8,14,26,27,30,33];//看好的号码
var khd_num=[];//看好的号码
layui.use(['jquery', 'table', 'form', 'element', 'excel'], function () {
    var $ = layui.jquery;
    var excel = layui.excel;
    console.log($('#test').html());
    var table = layui.table;
    var element = layui.element;
    var form = layui.form;
    console.log(table);
    //控制隐藏 - 方便测试
    $('.layui-colla-content').attr('class', "layui-colla-content");
    console.log($('.layui-colla-content').length);
    $('.layui-colla-content').eq($('.layui-colla-content').length - 1).attr('class', "layui-colla-content layui-show");

    element.on('collapse(form_zd)', function (data) {
        console.log(data);

        console.log(data.show);

    })
    //随机数字 （可排除部分数字）
    form.on('submit(formData)', function (res) {
        console.log(res);
        var field = res.field;
        var red_pc_number = $('#red_pc_number').val().replace(/，/g, ',').split(',')[0] == '' ? '' : $('#red_pc_number').val().replace(/，/g, ',').split(',');
        var lan_pc_number = $('#lan_pc_number').val().replace(/，/g, ',').split(',')[0] == '' ? '' : $('#lan_pc_number').val().replace(/，/g, ',').split(',');
        console.log(red_pc_number);
        console.log(lan_pc_number);
        var red_number = [];
        var blue_number = [];
        //生成数字范围
        for (var index = 0; index < 33; index++) {
            var flag = true;
            if (red_pc_number.length != 0) {
                for (var j = 0; j < red_pc_number.length; j++) {//去掉不想要的数字
                    // console.log(parseInt(red_pc_number[j]));
                    // console.log(index+1);
                    // console.log(parseInt(red_pc_number[j]) != index+1);
                    if (parseInt(red_pc_number[j]) == index + 1) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) {
                red_number.push(index + 1)
            }
        }
        for (var index = 0; index < 16; index++) {
            var flag = true;
            if (lan_pc_number.length != 0) {
                for (var j = 0; j < lan_pc_number.length; j++) {
                    // console.log(parseInt(red_pc_number[j]));
                    // console.log(index+1);
                    // console.log(parseInt(red_pc_number[j]) != index+1);
                    if (parseInt(lan_pc_number[j]) == index + 1) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) {
                blue_number.push(index + 1)
            }
        }
        // console.log(blue_number);
        var ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
        $('#number1').val(red_number[ran]);
        red_number.splice(ran, 1);
        ran = parseInt(Math.random() * red_number.length);
        $('#number2').val(red_number[ran]);
        red_number.splice(ran, 1);
        ran = parseInt(Math.random() * red_number.length);
        $('#number3').val(red_number[ran]);
        red_number.splice(ran, 1);
        ran = parseInt(Math.random() * red_number.length);
        $('#number4').val(red_number[ran]);
        red_number.splice(ran, 1);
        ran = parseInt(Math.random() * red_number.length);
        $('#number5').val(red_number[ran]);
        red_number.splice(ran, 1);
        ran = parseInt(Math.random() * red_number.length);
        $('#number6').val(red_number[ran]);
        red_number.splice(ran, 1);


        var blue_ran = parseInt(Math.random() * blue_number.length);
        $('#lan_number').val(blue_number[blue_ran]);
    })


    var col_column = [];
    col_column.unshift({ type: 'checkbox', width: '5%' })//插入
    col_column.push({ field: 'red', title: 'red', align: 'center', width: '50%', edit: 'text' })//插入   
    col_column.push({ field: 'blue', title: 'blue', align: 'center', width: '10%', edit: 'text' })//插入
    col_column.push({ field: 'lx', title: 'lx', align: 'center', width: '15%', edit: 'text' })//插入
    col_column.push({ field: 'title', title: '操作', toolbar: '#barDemo', align: 'center', width: '20%' })

    // col_column.
    var table_data = table.render({
        elem: '#tableDate',
        id: 'tableDate',
        method: 'get',
        toolbar: '#toolbarDemo',
        url: 'layuiadmin/json/console/top-card.js',
        // url:'',
        // page: true,
        // even: even,
        limit: 1000,
        cols: [
            col_column

        ],
        // done: function (res, curr, count) {
        //     console.log(res);
        //     var arr = res.data;
        //     for (var index = 0; index < arr.length; index++) {
        //         var element = arr[index];
        //         console.log(element.SJCOUNT);
        //         console.log(element.SJCOUNT != '0');
        //         if (element.SJCOUNT != '0') {
        //             if (sjxx_map.has(element.QBZTNRBH)) {
        //                 if (sjxx_map.get(element.QBZTNRBH) == 1) {
        //                     sjxx_map.set(element.QBZTNRBH, 0);
        //                     $('#' + element.QBZTNRBH).attr("class", "button3  layui-btn-xs");
        //                     $('#' + element.QBZTNRBH).attr("lay-event", "delete");
        //                     $('#' + element.QBZTNRBH).text("取消物建");
        //                 }
        //             } else {
        //                 sjxx_map.set(element.QBZTNRBH, 0);
        //                 $('#' + element.QBZTNRBH).attr("class", "button3  layui-btn-xs");
        //                 $('#' + element.QBZTNRBH).attr("lay-event", "delete");
        //                 $('#' + element.QBZTNRBH).text("取消物建");
        //             }
        //         }
        //     }
        // }
    });
    table.on('tool(tableDate)', function (obj) {
        var data = obj.data;
        console.log(obj);
        if (obj.event == 'del') {

        } else if (obj.event == 'delete') {
            obj.del();
            var list = table.cache['tableDate'];//从缓存中拿数据
            //去除空数组
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element.length == 0) {
                    list.remove_arr(element)
                }
            }
            console.log(list);
            //重新渲染列表信息
            table_data.reload({
                // page:{curr:1},
                url: '',
                data: list
            })
        }

    });
    table.on('toolbar(tableDate)', function (obj) {
        console.log(obj);
        var checkStatus = table.checkStatus(obj.config.id);
        console.log(checkStatus);
        if (obj.event == 'checkStatus') {
            var list = [];//先定义一个空数组，每次导出都会清空  -- 防止了第二次导出会出现多次列名
            console.log(obj.config.data);
            list.push(...obj.config.data);
            list.unshift({ red: '红', blue: '蓝', lx: '类型' });
            console.log(list);
            var data = excel.filterExportData(list, [//列头顺序可以重新排列的函数
                'red',
                'blue',
                'lx',
            ]);
            excel.setExportCellStyle(data, 'A1:D1', {
                s: {
                    // fill:{},
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                        wrapText: true,
                    }

                }
            })
            // layer.close(index);
            excel.exportExcel({
                sheet1: data
            }, '随机号码.xlsx');
        }

    })

    //比对中奖号码
    var col_column1 = [];
    col_column1.unshift({ type: 'numbers', align: 'center', title: '序号', width: '8%' })//插入
    col_column1.unshift({ type: 'checkbox', align: 'center', width: '5%' })//插入
    col_column1.push({ field: 'lx', title: '期号', align: 'center', width: '15%', edit: 'text' })//插入
    col_column1.push({ field: 'red', title: '红球', align: 'center', width: '25%', edit: 'text' })//插入   
    col_column1.push({ field: 'blue', title: '篮球', align: 'center', width: '10%', edit: 'text' })//插入
    col_column1.push({ field: 'result', title: '结果', align: 'center', width: '15%', edit: 'text' })//插入
    col_column1.push({ field: 'title', title: '操作', toolbar: '#barDemo', align: 'center', width: '20%' })

    // col_column1.
    var table_data1 = table.render({
        elem: '#tableDate1',
        id: 'tableDate1',
        method: 'get',
        toolbar: '#toolbarDemo1',
        url: 'layuiadmin/json/console/top-card.js',
        // url:'',
        // page: true,
        // even: even,
        limit: 1000,
        cols: [
            col_column1

        ],
        // done: function (res, curr, count) {
        //     console.log(res);
        //     var arr = res.data;
        //     for (var index = 0; index < arr.length; index++) {
        //         var element = arr[index];
        //         console.log(element.SJCOUNT);
        //         console.log(element.SJCOUNT != '0');
        //         if (element.SJCOUNT != '0') {
        //             if (sjxx_map.has(element.QBZTNRBH)) {
        //                 if (sjxx_map.get(element.QBZTNRBH) == 1) {
        //                     sjxx_map.set(element.QBZTNRBH, 0);
        //                     $('#' + element.QBZTNRBH).attr("class", "button3  layui-btn-xs");
        //                     $('#' + element.QBZTNRBH).attr("lay-event", "delete");
        //                     $('#' + element.QBZTNRBH).text("取消物建");
        //                 }
        //             } else {
        //                 sjxx_map.set(element.QBZTNRBH, 0);
        //                 $('#' + element.QBZTNRBH).attr("class", "button3  layui-btn-xs");
        //                 $('#' + element.QBZTNRBH).attr("lay-event", "delete");
        //                 $('#' + element.QBZTNRBH).text("取消物建");
        //             }
        //         }
        //     }
        // }
    });
    table.on('tool(tableDate1)', function (obj) {
        var data = obj.data;
        console.log(obj);
        if (obj.event == 'del') {

        } else if (obj.event == 'delete') {
            obj.del();
            var list = table.cache['tableDate1'];//从缓存中拿数据
            //去除空数组
            for (var index = 0; index < list.length; index++) {
                var element = list[index];
                if (element.length == 0) {
                    list.remove_arr(element)
                }
            }
            console.log(list);
            //重新渲染列表信息
            table_data1.reload({
                // page:{curr:1},
                url: '',
                data: list
            })
        }

    });
    table.on('toolbar(tableDate1)', function (obj) {
        console.log(obj);
        var checkStatus = table.checkStatus(obj.config.id);
        console.log(checkStatus);
        if (obj.event == 'checkStatus') {
            var list = [];//先定义一个空数组，每次导出都会清空  -- 防止了第二次导出会出现多次列名
            console.log(obj.config.data);
            list.push(...obj.config.data);
            list.unshift({ red: '红', blue: '蓝', lx: '类型' });
            console.log(list);
            var data = excel.filterExportData(list, [//列头顺序可以重新排列的函数
                'red',
                'blue',
                'lx',
            ]);
            excel.setExportCellStyle(data, 'A1:D1', {
                s: {
                    // fill:{},
                    alignment: {
                        horizontal: 'center',
                        vertical: 'center',
                        wrapText: true,
                    }

                }
            })
            // layer.close(index);
            excel.exportExcel({
                sheet1: data
            }, '随机号码.xlsx');
        }

    })



    //新增一行
    form.on('submit(formData1)', function (res) {
        var field = res.field;
        //排序
        var cl_data = [field.number1, field.number2, field.number3, field.number4, field.number5, field.number6]
        for (var i = 0; i < cl_data.length - 1; i++) {
            for (var j = 0; j < cl_data.length - i - 1; j++) {
                if (parseInt(cl_data[j]) > parseInt(cl_data[j + 1])) {
                    var temp = cl_data[j];
                    cl_data[j] = cl_data[j + 1]
                    cl_data[j + 1] = temp;
                }

            }
        }
        var red_number = '';
        for (var i = 0; i < cl_data.length; i++) {
            red_number += cl_data[i] + " "
        }
        var newData = { red: red_number, blue: field.lan_number, lx: $('#lx option:selected').text() }
        var oldData = table.cache['tableDate'];//从缓存中拿数据
        console.log(oldData);
        oldData.unshift(newData)
        table_data.reload({
            // page:{curr:1},
            url: '',
            data: oldData
        })
    })
    //新增一行 套路一 : 重叠码推演
    form.on('submit(formData2)', function (res) {
        console.log(res);
        var field = res.field;
        //重叠码
        var cd_number1 = parseInt(field.cd_number1);
        var cd_number2 = parseInt(field.cd_number2);
        var cd_number3 = parseInt(field.cd_number3);
        var cd_numbers = [parseInt(field.cd_number1), parseInt(field.cd_number2), parseInt(field.cd_number3)]
        var selected_number = [];
        var all_result_fx = [];
        //叠连码  选1个：人工看自己看图    我这边是随机
        selected_number.push(dlm(cd_number1, cd_number2, cd_number3, all_result_fx));
        //同位码  一般是间隔0,1,2,3步 如果重叠码为33 最好间隔1步  则为31  这时候同位码为01,11或21 选两个
        twm_way(cd_numbers, selected_number, all_result_fx);
        //叠码选择
        dm_xz(selected_number, all_result_fx);
        //筋斗码 : 12-21  13-31等
        jdm_xz(selected_number, all_result_fx)
        //倍数码：7.12.32   7+12=19 32/8=4  4和19可选  太多了，不好计算 ？？？  
        // var bs_get = [];
        // for (var index = 0; index < selected_number.length; index++) {
        //     var element = selected_number[index];
        //     if(element <= 17){
        //         bs_get.push(element);
        //     }
        // }
        // bs_xz(selected_number);
        //常用组合号码 http://www.360doc.com/content/18/1218/21/6610157_802737278.shtml
        zh_xz(selected_number, all_result_fx);

        selected_number = unique(selected_number)//去重
        mp(selected_number)//排序
        console.log(selected_number);
        var newData = { red: selected_number + all_result_fx, blue: field.lan_number, lx: $('#lx option:selected').text() }
        var oldData = table.cache['tableDate'];//从缓存中拿数据
        // console.log(oldData);
        oldData.unshift(newData)
        table_data.reload({
            // page:{curr:1},
            url: '',
            data: oldData
        })

    })
    //新增一行 套路二  和值推演
    form.on('submit(formData3)', function (res) {
        console.log(res);
        var field = res.field;
        //计算和值
        var kjhm = field.kjhm.replace(/，/g, ',').substring(0, field.kjhm.lastIndexOf("+"));
        var kjhms = kjhm.split(",");
        var hz = 0;
        for (var index = 0; index < kjhms.length; index++) {
            var element = kjhms[index];
            hz += parseInt(element)
        }
        var yz = []; //计算商，小数点后面不要
        for (var index = 0; index < kjhms.length; index++) {
            var element = kjhms[index];
            var sz = Math.floor((hz - element) / element);//取商值，小数点后面不要
            var weihao = sz >= 10 ? sz % 10 : sz;//取尾号
            yz.push(weihao);
        }
        yz = unique(yz)//去重
        mp(yz)//排序
        var selected_number = []; //关于计算后的尾号所有的号码陈列
        for (var index = 0; index < yz.length; index++) {
            var element = yz[index];
            if (element > 3) {
                for (var j = 0; j < 3; j++) {
                    selected_number.push(j + "" + element);
                }
            } else {
                for (var j = 0; j < 4; j++) {
                    selected_number.push(j + "" + element);
                }
            }
        }
        //如果上期没有遗传号（本期就找和上期重叠的号码），本期很可能出现反之 ？？ 标记一下


        selected_number = unique(selected_number)//去重
        mp(selected_number)//排序
        console.log(selected_number + "");
        var newData = { red: selected_number + "", blue: field.lan_number, lx: $('#lx option:selected').text() }
        var oldData = table.cache['tableDate'];//从缓存中拿数据
        // console.log(oldData);
        oldData.unshift(newData)
        table_data.reload({
            // page:{curr:1},
            url: '',
            data: oldData
        })

    })

    //新增一行 蓝色套路  杀号
    form.on('submit(formData4)', function (res) {
        console.log(res);
        var field = res.field;
        //重叠码
        var selected_number = []; //关于计算后的尾号所有的号码陈列

        var kjhm = field.kjhm.replace(/，/g, ',').substring(0, field.kjhm.lastIndexOf("+"));//红球
        var kjhms = kjhm.split(",");
        var sq_number = parseInt(field.sq_number);//上1期
        var sq_number1 = parseInt(field.sq_number1);//上2期
        var sq_number2 = parseInt(field.sq_number2);//上3期
        var sq_number3 = parseInt(field.sq_number3);//上4期
        var qh = parseInt(field.qh);//上期期号
        //a+b 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        var hz = sq_number + sq_number1;
        console.log(hz);
        if (hz < 10) {
            selected_number.push({ "杀上期+上2期(99%)": hz, 'hz': hz });
        } else if (hz % 10 == 0) {
            selected_number.push({ "杀上期+上2期(99%)": 10, 'hz': 10 });
        } else if (hz > 10) {
            selected_number.push({ "杀上期+上2期(99%)": hz % 10, 'hz': hz % 10 });
        }
        //a+16 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        var hz01 = sq_number + 16;
        if (hz01 < 10) {
            selected_number.push({ "杀上期+16(95%)": hz01, 'hz': hz01 });
        } else if (hz01 % 10 == 0) {
            selected_number.push({ "杀上期+16(95%)": 10, 'hz': 10 });
        } else if (hz01 > 10) {
            selected_number.push({ "杀上期+16(95%)": hz01 % 10, 'hz': hz01 % 10 });
        }
        //a+b+c 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        /**错误期号：
         *22006期：篮球2 
         */
        var hz02 = sq_number + sq_number1 + sq_number2;
        if (hz02 < 10) {
            selected_number.push({ "杀上期+上2期+上3期(100%)": hz02, 'hz': hz02 });
        } else if (hz02 % 10 == 0) {
            selected_number.push({ "杀上期+上2期+上3期(100%)": 10, 'hz': 10 });
        } else if (hz02 > 10) {
            selected_number.push({ "杀上期+上2期+上3期(100%)": hz02 % 10, 'hz': hz02 % 10 });
        }
        //a+b+c+d 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        var hz03 = sq_number + sq_number1 + sq_number2 + sq_number3;
        if (hz03 < 10) {
            selected_number.push({ "杀上期+上2期+上3期+上4期(98%)": hz03, 'hz': hz03 });
        } else if (hz03 % 10 == 0) {
            selected_number.push({ "杀上期+上2期+上3期+上4期(98%)": 10, 'hz': 10 });
        } else if (hz03 > 10) {
            selected_number.push({ "杀上期+上2期+上3期+上4期(98%)": hz03 % 10, 'hz': hz03 % 10 });
        }
        //上期6红+蓝值的和值 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        var kjhm = field.kjhm.replace(/，/g, ',').substring(0, field.kjhm.lastIndexOf("+"));
        var kjhms = kjhm.split(",");
        var hz04 = 0;
        for (var index = 0; index < kjhms.length; index++) {
            var element = kjhms[index];
            hz04 += parseInt(element)
        }
        hz04 += sq_number;//和值
        if (hz04 < 10) {
            selected_number.push({ "杀上期6红+蓝值的和值(96%)": hz04, 'hz': hz04 });
        } else if (hz04 % 10 == 0) {
            selected_number.push({ "杀上期6红+蓝值的和值(96%)": 10, 'hz': 10 });
        } else if (hz04 > 10) {
            selected_number.push({ "杀上期6红+蓝值的和值(96%)": hz04 % 10, 'hz': hz04 % 10 });
        }
        //s+g 绝杀法： 一位直接杀，两位取尾号杀，和为0杀10
        var hz05 = 0;
        if (sq_number < 10) {//小于10 加上16 和值的尾数0 则再加上16 然后用十位+个位
            hz05 = sq_number + 16;
            if (hz05 % 10 == 0) {
                hz05 += 16;
                hz05 = (hz05 % 10) + (Math.floor(hz05 / 10));
            } else {
                hz05 = (hz05 % 10) + (Math.floor(hz05 / 10));
            }
        } else {
            hz05 = (sq_number % 10) + (Math.floor(sq_number / 10));
        }
        selected_number.push({ "杀取上期十位+上期个位(98%)": hz05, 'hz': hz05 });
        //s-g 绝杀法： 用十位 - 个位
        var hz06 = 0;//Math.abs(-2)
        if (sq_number > 10) {//大于10
            var sw = Math.floor(sq_number / 10);
            var gw = sq_number % 10;
            var jdz = Math.abs(sw - gw);
            if (jdz == 0) {
                hz06 = 10;
            } else {
                hz06 = jdz;
            }
        } else {//小于10  加上16 用十位 - 个位 的绝对值
            hz06 = sq_number + 16;
            if (hz06 % 10 == 0) {
                hz06 += 16;
                hz06 = (hz06 % 10) + (Math.floor(hz06 / 10));
            } else {
                hz06 = (hz06 % 10) + (Math.floor(hz06 / 10));
            }
            hz06 = (sq_number % 10) + (Math.floor(sq_number / 10));
        }
        selected_number.push({ "杀取上期十位-上期个位(96%)": hz06, 'hz': hz06 });
        //s*g 绝杀法： 用十位*个位 
        var hz07 = 0;//Math.abs(-2)
        if (sq_number > 10) {//大于10 加上16 用十位*个位 
            var sw = Math.floor(sq_number / 10);
            var gw = sq_number % 10;
            hz07 = sw * gw;
        } else if (sq_number == 10) {
            var jia = sq_number + 16;
            var sw = Math.floor(jia / 10);
            var gw = jia % 10;
            hz07 = sw * gw;
        } else {//小于10
            hz07 = sq_number * 16;
            if (hz07 == 16) {
                hz07 = 16;
            } else {
                hz07 = hz07 % 10;
            }
        }
        selected_number.push({ "杀取上期十位*上期个位(95%)": hz07, 'hz': hz07 });
        //s/g 绝杀法： 用十位/ 个位 余数
        var hz08 = 0;//Math.abs(-2)
        if (sq_number > 10) {//大于10 加上16 用十位/ 个位 余数
            var sw = Math.floor(sq_number / 10);
            var gw = sq_number % 10;
            hz08 = sw % gw;
        } else {//小于10
            hz08 = sq_number + 16;
            if (hz08 % 10 == 0) {//如果个位为0 再加16
                hz08 += 16;
            }
            var sw = Math.floor(hz08 / 10);
            var gw = hz08 % 10;
            if (gw / sw == 0) {//如果为0 就杀10
                hz08 = 10;
            } else {
                hz08 = sw % gw;
            }
        }
        selected_number.push({ "杀取上期个位/ 上期十位(96%)": hz08, 'hz': hz08 });
        //a/g 绝杀法： 用上期篮球/ 上期篮球个位 
        var hz09 = 0;//Math.abs(-2)
        if (sq_number > 10) {//大于10 用上期篮球/ 上期篮球个位 取商 余数不要
            var gw = sq_number % 10;
            hz09 = Math.floor(sq_number / gw); //
        } else {//小于10 加16
            hz09 = sq_number + 16;
            if (hz09 % 10 == 0) {//如果个位为0 再加16
                hz09 += 16;
            }
            var gw = hz09 % 10;
            if (gw / sw == 0) {//如果为0 就杀10
                hz09 = 10;
            } else {
                hz09 = Math.floor(hz09 / gw); //
            }
        }
        selected_number.push({ "杀取上期/ 上期个位(97%)": hz09, 'hz': hz09 });
        //相乘 绝杀法： 用17/ 上期篮球 
        var hz10 = 0;//
        hz10 = qh * 11;//期号*11
        hz10 += kjhms[3] + 1;//加上第四个红球 再加一
        hz10 = hz10 % 16;//计算出16的余数
        selected_number.push({ "相乘绝杀法(100%)": hz10, 'hz': hz10 });
        var shm = [];
        for (var index = 0; index < selected_number.length; index++) {
            var element = selected_number[index];
            shm.push(element.hz);
        }

        console.log(selected_number);
        shm = unique(shm)//去重
        mp(shm)//排序
        var json = JSON.stringify(selected_number);
        var newData = { red: "", blue: json + shm, lx: $('#lx option:selected').text() }
        var oldData = table.cache['tableDate'];//从缓存中拿数据
        // console.log(oldData);
        oldData.unshift(newData)
        table_data.reload({
            // page:{curr:1},
            url: '',
            data: oldData
        })

    })
    //存入缓存
    form.on('submit(formData5)', function (res) {
        console.log(res);
        var sq_number = res.field.sq_number;
        var sq_number1 = res.field.sq_number1;
        var sq_number2 = res.field.sq_number2;
        var sq_number3 = res.field.sq_number3;
        var kjhm = res.field.kjhm;
        var qh = res.field.qh;
        var bd_zj_number = res.field.bd_zj_number;//中奖号码
        var zx_data = JSON.stringify(table.cache['tableDate1']);//自选号码
        var bqqh = res.field.bqqh;//本期期号
        window.localStorage.setItem("sq_number", sq_number);
        window.localStorage.setItem("sq_number1", sq_number1);
        window.localStorage.setItem("sq_number2", sq_number2);
        window.localStorage.setItem("sq_number3", sq_number3);
        window.localStorage.setItem("kjhm", kjhm);
        window.localStorage.setItem("qh", qh);
        window.localStorage.setItem("bd_zj_number", bd_zj_number);
        window.localStorage.setItem("zx_data", zx_data);
        window.localStorage.setItem("bqqh", bqqh);
    });
    //调用缓存
    form.on('submit(formData6)', function (res) {
        var sq_number = window.localStorage.getItem("sq_number");
        var sq_number1 = window.localStorage.getItem("sq_number1");
        var sq_number2 = window.localStorage.getItem("sq_number2");
        var sq_number3 = window.localStorage.getItem("sq_number3");
        var kjhm = window.localStorage.getItem("kjhm");
        var qh = window.localStorage.getItem("qh");
        var bd_zj_number = window.localStorage.getItem("bd_zj_number");
        var zx_data = window.localStorage.getItem("zx_data");
        var bqqh = window.localStorage.getItem("bqqh");
        $('#sq_number').val(sq_number);
        $('#sq_number1').val(sq_number1);
        $('#sq_number2').val(sq_number2);
        $('#sq_number3').val(sq_number3);
        $('#kjhm').val(kjhm);
        $('#bqqh').val(bqqh);
        $('#bd_zj_number').val(bd_zj_number);
        table_data1.reload({
            // page:{curr:1},
            url: '',
            data: JSON.parse(zx_data)
        })
        $('#bqqh').val(bqqh);
        console.log(JSON.parse(zx_data));
    });
    //添加号码到表格中放入缓存 bd_zj_number bd_xh_number
    form.on('submit(formData_bdadd)', function (res) {

        var bdhm_number = window.localStorage.getItem("sq_number");
        var bd_xh_number = res.field.bd_xh_number;//选择号码
        var bqqh = res.field.bqqh;//期号
        var arr = bd_xh_number.split('+');
        var newData = { red: arr[0], blue: arr[1], lx: bqqh }
        var oldData = table.cache['tableDate1'];//从缓存中拿数据
        oldData.unshift(newData)
        table_data1.reload({
            // page:{curr:1},
            url: '',
            data: oldData
        })
    });
    form.on('submit(formData_bddata)', function (res) {
        // odd_even(1);
        // odd_even(2);
        // odd_even(3);
        // odd_even(4);
        // khd_way();
        sqwc_way();
        //比对列表中的号码和中奖号码
        var bd_zj_number = $('#bd_zj_number').val();
        var oldData = table.cache['tableDate1'];//从缓存中拿数据
        for (let index = 0; index < oldData.length; index++) {
            const element = oldData[index];
            console.log(element);
            element.result = bd_zjhmcount(bd_zj_number, element.red + "+" + element.blue);
        }
        // var bdhm_number = window.localStorage.getItem("sq_number");
        // var bd_xh_number = res.field.bd_xh_number;//选择号码
        // var bqqh = res.field.bqqh;//期号
        // var arr = bd_xh_number.split('+');
        // var newData = { red: arr[0] , blue: arr[1], lx: bqqh}
        // var oldData = table.cache['tableDate1'];//从缓存中拿数据
        // oldData.unshift(newData)
        table_data1.reload({
            url: '',
            data: oldData
        })
    });
    form.on('submit(formData_celuedata)', function (res) {
        // odd_even(1);
        // odd_even(2);
        // odd_even(3);
        // odd_even(4);
        // khd_way();
        // sqwc_way();
        mh_cl();
        
    });
    //测试
    form.on('submit(formData_export_test)', function (res) {
        var lists = '[{"cityName":"阿克苏","flyArr":[]},{"cityName":"安康","flyArr":["K508","K262"]},{"cityName":"安陆","flyArr":[]},{"cityName":"安庆","flyArr":["G2596","G2568"]},{"cityName":"鞍山","flyArr":["G976","G4380","G3697"]},{"cityName":"安顺","flyArr":["G402"]},{"cityName":"安阳","flyArr":["K1276","K402","T146","T56","Z96","Z336","T168","K474","G1588","T50","K262","G1556","Z130","G554","G522","G56","G502","G504","G1528","Z54","G1590","G872","K600","G352","G430","G482","G1580","G388","G308","G690","G338","G422","G372","G486","G526","G340","G528","G402","K22","G664"]},{"cityName":"鳌江","flyArr":["G190"]},{"cityName":"白城","flyArr":["K1190","K498"]},{"cityName":"保定","flyArr":["K158","K1276","K402","G6706","G6710","G6712","G6714","T42","T176","G6716","Z50","Z4","G6722","T146","T56","Z96","Z336","K1116","K268","G792","C126","G1572","G682","G6726","T168","G570","G1556","K7708","G572","T50","K474","G522","Z130","G622","G502","G504","G1528","K262","G1590","K5238","G686","G524","G506","G684","G1516","G872","T290","G624","G1580","K1456","Z70","K600","C128","G626","G308","K508","G662","G1592","G618","G78","G6740","G526","G620","G674","K7726","G340","G528","K22"]},{"cityName":"宝鸡","flyArr":["G430","G674","T56"]},{"cityName":"包头","flyArr":["Z284","K42","G2492","D1072","Z338","Z352","G2494","D1074","Z184","G2496","K598","D1076","K1117","K574","K1278","K1178"]},{"cityName":"鲅鱼圈","flyArr":["G3501","G3513"]},{"cityName":"巴中","flyArr":[]},{"cityName":"北戴河","flyArr":["K340","G8924","K498","G8928","T5688","C112","D832","G8932","K7728"]},{"cityName":"北海","flyArr":["G94"]},{"cityName":"北京","flyArr":[]},{"cityName":"北屯市","flyArr":[]},{"cityName":"蚌埠","flyArr":["Z282","G2552","G2578","G114","G2556","G116","G178","G118","G302","G42","G122","G2596","G2562","G184","G2564","G322","G132","G134","G198","G138","G190","G324","G144","G146","G304","G326","G152","1462","G2568","G46","T36"]},{"cityName":"博乐","flyArr":[]},{"cityName":"苍南","flyArr":["G190"]},{"cityName":"沧州","flyArr":["Z160","T36","1462","T110","G7804","G8936","Z282","G1048","G1050","G1054","G892","G2572","G1064","K286","G1568","G1084","G1066","K1786","K102","G108","G206","G112","G114","G1086","G2586","G2556","G178","G124","G128","G170","G2562","G184","G198","G1090","G1092","G888","G190","G142","G1094","G192","G144","G1080","G326","G2588","G212","G2590","K412"]},{"cityName":"草海","flyArr":[]},{"cityName":"长春","flyArr":["G952","G3622","G922","G906","G924","G3624","G902","G3650","G3648","G928","G3608","Z158","G3606","G930","G3626","G932","G916","G904","G962","K340","K1304","Z62","Z212","K384","Z118"]},{"cityName":"常德","flyArr":[]},{"cityName":"长沙","flyArr":["T290","Z286","Z54","G502","G504","G84","G506","G812","G336","G82","G482","K158","G74","G690","G338","G80","G486","G422","G340","G78","Z502","Z162","G402","G94","T146","Z2","Z336","Z6","Z836","K600","K22","G72"]},{"cityName":"长兴","flyArr":["G176","G180","G198"]},{"cityName":"长治","flyArr":["G682","G684"]},{"cityName":"常州","flyArr":["G2","G104","G110","G112","G116","G118","G122","G128","G14","G130","G138","1462","G144","G146","G2588","G150","T110","Z282"]},{"cityName":"巢湖","flyArr":["G2596","G324","G326","G44"]},{"cityName":"潮州","flyArr":[]},{"cityName":"承德","flyArr":["K1458","4473","G3662","G972","G3504","G976","G3652","G3666","G3692","G952","G3622","G922","G924","G980","G3624","G3670","G3516","G3650","G3648","G3672","G3608","G3654","G3674","G3694","G930","G3626","G932","G3696","G3678","G962","G988","G3680","G940"]},{"cityName":"成都","flyArr":["G88","G333","G388","G308","Z50","G90"]},{"cityName":"郴州","flyArr":["G336","Z502","G340","K600"]},{"cityName":"赤壁","flyArr":["G504","G338","G340"]},{"cityName":"赤峰","flyArr":["K1190","G3662","G3666","G3670","G3672","G3674","G3678","K2560","G3680","K1458"]},{"cityName":"重庆","flyArr":["G52","G352","G388","G332","Z96","G372","Z50","Z4","K508"]},{"cityName":"滁州","flyArr":["G2578","G112","G116","G122","G180","G128","G170","G184","G198","G190","1462","G194"]},{"cityName":"大理","flyArr":[]},{"cityName":"大连","flyArr":["G3501","G3513"]},{"cityName":"丹东","flyArr":["G3692","G3694"]},{"cityName":"丹阳","flyArr":["G110","G134"]},{"cityName":"大庆","flyArr":["G928","K1304","T48"]},{"cityName":"大同","flyArr":["K574","K1278","K1178","D1102","G2532","G2534","D1108","Z284","D1112","K42","G2536","Z338","Z352","G2538","D1118","D1122","G2540","G2542","Z184","2604","K598"]},{"cityName":"达州","flyArr":["K508","Z96"]},{"cityName":"德令哈","flyArr":["Z22"]},{"cityName":"德清","flyArr":["G172","G176","G184","G190"]},{"cityName":"德阳","flyArr":["G308"]},{"cityName":"德州","flyArr":["Z160","T110","D712","Z282","G8936","G1048","G1050","K286","G1054","G892","G2572","G1062","G1064","G1568","G220","G204","K1786","G1084","K102","G172","G104","G2584","G110","G2554","G174","G176","G124","G2596","G182","G1070","G1072","G180","G128","G170","G2562","G184","G130","G322","G132","G134","G1092","G888","G190","G324","G1094","G1076","G146","G1078","G304","G1100","G152","G154","K412"]},{"cityName":"定远","flyArr":["G2578","G108","G174","G124","G180","G128","G194","G156"]},{"cityName":"东莞","flyArr":["Z182","K106"]},{"cityName":"东海县","flyArr":["G2580"]},{"cityName":"东胜","flyArr":["K574","K1117"]},{"cityName":"东营","flyArr":["K1786"]},{"cityName":"都江堰","flyArr":[]},{"cityName":"敦煌","flyArr":[]},{"cityName":"额济纳","flyArr":[]},{"cityName":"峨眉","flyArr":[]},{"cityName":"恩施","flyArr":["Z50","Z4","Z96"]},{"cityName":"鄂州","flyArr":["G492","K1276","T168"]},{"cityName":"佛山","flyArr":[]},{"cityName":"福安","flyArr":["G198"]},{"cityName":"福鼎","flyArr":["G198"]},{"cityName":"涪陵","flyArr":[]},{"cityName":"福清","flyArr":["G324"]},{"cityName":"抚顺","flyArr":[]},{"cityName":"阜新","flyArr":["G972","G3652","G3692","G952","G922","G3624","G928","G3648","G3608","G3654","G3606","G3694","G930","G932","G3696","G962","G988"]},{"cityName":"阜阳","flyArr":["K1072","Z226","K1454","K572","Z182","D746","D728","K106","G1578","D740"]},{"cityName":"福州","flyArr":["G198","G302","G324","G304","G326","G46"]},{"cityName":"抚州","flyArr":["D740"]},{"cityName":"赣州","flyArr":["G486","K1454","K572","Z182","K106","D728"]},{"cityName":"高密","flyArr":["G1086","G1088","G1094","G1078"]},{"cityName":"格尔木","flyArr":["Z22"]},{"cityName":"广安","flyArr":["Z96","K508"]},{"cityName":"光明城","flyArr":[]},{"cityName":"广通","flyArr":[]},{"cityName":"广元","flyArr":["G388","G308"]},{"cityName":"广州","flyArr":["Z503","G336","G82","G338","G80","G340","G78","K597","Z837"]},{"cityName":"谷城","flyArr":["G1590"]},{"cityName":"桂林","flyArr":["K158","G422","Z336","G94","Z6","K22","Z286"]},{"cityName":"贵阳","flyArr":["Z162","K474","G372","G74","G402","Z54","K508","G72"]},{"cityName":"古镇","flyArr":[]},{"cityName":"哈尔滨","flyArr":["G922","G924","G902","G928","Z158","G3608","G3606","G930","G932","G904","K340","K1304","K384","T48","T18"]},{"cityName":"海安县","flyArr":["G2586","Z52"]},{"cityName":"海城","flyArr":["G976"]},{"cityName":"海口","flyArr":[]},{"cityName":"海拉尔","flyArr":["K1304"]},{"cityName":"海宁","flyArr":["Z282","D712"]},{"cityName":"哈密","flyArr":["Z70"]},{"cityName":"邯郸","flyArr":["K158","K1276","K402","T146","T56","K268","Z96","G6718","T168","G1588","G1572","K474","T50","G6726","G570","G652","G572","K262","K5238","G1528","G1590","G686","T290","G506","G1516","G872","G352","K600","G430","G492","G336","G1580","K7726","G662","G1592","G422","G372","G486","G526","G78","G674","G1578","K22"]},{"cityName":"杭州","flyArr":["G172","G32","G174","G176","G2558","G178","G180","G182","G170","G184","G198","G34","G190","G192","G194","G36","Z282","G38","G40","D712"]},{"cityName":"涵江","flyArr":["G324","G326","D746"]},{"cityName":"汉口","flyArr":["G1528","G1516","G802","Z50","Z4","Z96","Z836","K600","T290","Z286","Z54","G66","G522","G68","G502","G504","G84","G524","G812","G506","G82","G492","G336","G482","G70","G74","K158","G80","G690","K1276","G338","G422","G486","G526","G86","G340","G78","G528","G94","G402","Z38","Z502","Z162","Z2","T146","Z6","Z336","T168","K22","G72"]},{"cityName":"汉中","flyArr":["G686","K262","G388","G308"]},{"cityName":"鹤壁","flyArr":["K1276","G1572","K262","G572","G502","G84","G504","G1528","G1590","G524","G506","K600","G1516","G872","G662","G1592","G690","G674","G340","G1578","G402","K158","K22"]},{"cityName":"合川","flyArr":["Z50"]},{"cityName":"合肥","flyArr":["G2552","G2554","G2556","G302","G2558","G42","G2596","G2562","G2564","G322","G324","G304","G326","G2568","T36","G46","G44","K1072","Z227"]},{"cityName":"鹤岗","flyArr":[]},{"cityName":"黑河","flyArr":[]},{"cityName":"衡山","flyArr":["G340"]},{"cityName":"衡水","flyArr":["D736","Z226","D738","D734","K1072","K1454","K572","D728","K106","1304","K1902","Z350","D740","Y506"]},{"cityName":"衡阳","flyArr":["Z286","K158","G336","G82","G422","Z336","Z6","K600","K22","T290"]},{"cityName":"菏泽","flyArr":["K1072","K1454","K572","Z182","D746","G384","D728","K106","1304","G382","K1902","D740"]},{"cityName":"淮安","flyArr":["G2582","G2584","G2586","G2588","G2590","Z156","Z52","G896"]},{"cityName":"淮北","flyArr":["G1566"]},{"cityName":"怀化","flyArr":["K268","G482","Z162","K474","G74","G690","G402","Z54","G72"]},{"cityName":"淮南","flyArr":["G2552","G2554","G2596","G2562","G324","K1072"]},{"cityName":"黄山","flyArr":["G2556","G302","G2562","G322","G324","G304","G326","G46"]},{"cityName":"黄石","flyArr":["G492","K1276","G86","T168"]},{"cityName":"华山","flyArr":["G686","G430","G388","G308","G662","G674","G664"]},{"cityName":"呼和浩特","flyArr":["K1178","D1002","G2458","G2460","D1004","G2492","Z284","D1008","D1072","K42","D1024","G2462","G2464","Z338","G2466","D1012","Z352","G2468","G2494","D1014","G2470","D1074","D1018","G2472","G2474","D1026","G2496","G2476","Z184","D1028","K598","D1022","G2478","D1076","K574","K1278"]},{"cityName":"惠州","flyArr":["Z182","K106","D728"]},{"cityName":"葫芦岛","flyArr":["D822","G498","G4380","D832"]},{"cityName":"虎门","flyArr":["Z182","K106"]},{"cityName":"湖州","flyArr":["G172","G32","G174","G180","G170","G198","G34","G190","G194"]},{"cityName":"佳木斯","flyArr":["G3608","K340"]},{"cityName":"吉安","flyArr":["G486","K1454","K572","D734","Z182","K106","D728"]},{"cityName":"江门","flyArr":[]},{"cityName":"江山","flyArr":["G178"]},{"cityName":"胶州","flyArr":["G1066","G1072"]},{"cityName":"嘉善","flyArr":[]},{"cityName":"嘉兴","flyArr":["G108","Z282","D712"]},{"cityName":"嘉峪关","flyArr":["Z70","K42"]},{"cityName":"揭阳","flyArr":[]},{"cityName":"吉林","flyArr":["G3622","G3624","G3650","G3648","G3626","G916","Z118"]},{"cityName":"济南","flyArr":["1462","K286","G1048","G1050","G1054","G384","G892","G2572","G1062","G1064","G1568","K102","G1566","G2552","G220","G2","G4","G1084","G2578","G2582","G2580","G1066","G32","G6","G172","G104","G2584","G110","G108","G2554","G8","G206","G1086","G112","G114","G2586","G2556","G174","G10","G1068","G176","G1088","G116","G178","G42","G12","G118","G302","G2558","G382","G122","G208","G124","G1070","G2596","G182","G14","G1072","G180","G128","G170","G210","G2562","G184","G16","G34","G2564","G130","G322","G132","G134","G1090","G18","G1092","G1074","G198","Z350","G138","G888","G20","G1094","G190","G142","G324","G192","G1078","G1076","G144","G22","G146","G304","G1100","G194","G1080","G36","G24","G150","G326","G2588","G152","G154","G38","G26","G46","G2568","G156","G2590","G44","K412","G896"]},{"cityName":"晋城","flyArr":["G684"]},{"cityName":"景德镇","flyArr":[]},{"cityName":"荆门","flyArr":["K268","K474","T50"]},{"cityName":"荆州","flyArr":["G1516","Z4"]},{"cityName":"金华","flyArr":["G2558","G178","G170","G190","G38"]},{"cityName":"集宁","flyArr":[]},{"cityName":"济宁","flyArr":["G384","K1903","G382"]},{"cityName":"晋江","flyArr":["G324"]},{"cityName":"锦州","flyArr":["K498","D822","G3504","G976","G4380","G3516","D832"]},{"cityName":"吉首","flyArr":["G479","K268","G687","K474"]},{"cityName":"九江","flyArr":["K1454","D736","D738","K572","D734","Z182"]},{"cityName":"酒泉","flyArr":["K42"]},{"cityName":"鸡西","flyArr":["G3606"]},{"cityName":"开封","flyArr":["G1557","1304"]},{"cityName":"凯里","flyArr":["G402"]},{"cityName":"喀什","flyArr":[]},{"cityName":"库尔勒","flyArr":[]},{"cityName":"昆明","flyArr":["Z54","G402","K474","Z162","G72"]},{"cityName":"昆山","flyArr":["G108","G114","G134","1462","G144","G152"]},{"cityName":"廊坊","flyArr":["G8906","G8912","G7804","G8910","G8936","G1048","1462","G8918","G1054","Z282","G8904","G1064","G1566","G2552","G2582","K286","G2554","G112","G1086","K1786","K102","G116","G178","G182","G128","G2562","G132","G142","G1094","G2568","G896"]},{"cityName":"兰州","flyArr":["G430","T176","Z22","Z130","Z56"]},{"cityName":"拉萨","flyArr":["Z22"]},{"cityName":"耒阳","flyArr":["G338"]},{"cityName":"梁平","flyArr":["G352"]},{"cityName":"连江","flyArr":[]},{"cityName":"连云港","flyArr":["G2580","G1100"]},{"cityName":"聊城","flyArr":["K1072","K1454","Z182","D746","K572","D728","K106","1304","K1902","Z350","D740"]},{"cityName":"辽阳","flyArr":["G976","G4380","G3697"]},{"cityName":"辽源","flyArr":["K430"]},{"cityName":"丽江","flyArr":[]},{"cityName":"临汾","flyArr":["G622","G624","K604","G626","K610","G628"]},{"cityName":"陵水","flyArr":[]},{"cityName":"临海","flyArr":["G184"]},{"cityName":"临河","flyArr":["K42","Z184","K1178"]},{"cityName":"临沂","flyArr":["G893","K1902","Z160"]},{"cityName":"六安","flyArr":["G2554","Z227"]},{"cityName":"六盘水","flyArr":["K474","Z54","Z162"]},{"cityName":"柳州","flyArr":["K158","G422","Z336","Z6","G94","K22","Z286"]},{"cityName":"溧阳","flyArr":["G2578","G172","G180","G184","G198","G190","G192","G36"]},{"cityName":"龙嘉","flyArr":[]},{"cityName":"龙岩","flyArr":["G322","K572","D740"]},{"cityName":"龙游","flyArr":["G178"]},{"cityName":"娄底","flyArr":["G812","G482","G690","Z162"]},{"cityName":"漯河","flyArr":["T146","K262","T168","T50","K600","G522","G492","G336","G486","G526","G340","K158","K1276","K402","K22"]},{"cityName":"洛阳","flyArr":["K268","T56","Z130","G652","G806","G88","K508","G872","G430","G388","G808","G308","G662","G674","G664"]},{"cityName":"罗源","flyArr":[]},{"cityName":"庐山","flyArr":["G492","G86"]},{"cityName":"吕梁","flyArr":["K1116","Z278","T176","Z70"]},{"cityName":"马鞍山","flyArr":[]},{"cityName":"满洲里","flyArr":[]},{"cityName":"美兰","flyArr":[]},{"cityName":"梅州","flyArr":[]},{"cityName":"绵阳","flyArr":["G388","G308","G90"]},{"cityName":"汨罗","flyArr":["G504"]},{"cityName":"漠河","flyArr":[]},{"cityName":"牡丹江","flyArr":["G3606","T18"]},{"cityName":"内江","flyArr":["G388"]},{"cityName":"南昌","flyArr":["D728","G170","G492","K1276","G483","T147","G86","K1454","T168","D736","K572","D738","D734","Z182","K106","D746","D740"]},{"cityName":"南城","flyArr":[]},{"cityName":"南充","flyArr":[]},{"cityName":"南丰","flyArr":[]},{"cityName":"南京","flyArr":["D712","K102","G2578","G2","G4","G172","G104","G32","G6","G108","G110","G112","G114","G8","G174","G176","G116","G10","G178","G118","G122","G12","G124","G180","G182","G128","G170","G14","G184","G130","G132","G134","G16","G34","G198","G138","G18","G190","G142","G20","G192","G144","1462","G146","G22","G194","G150","G152","G36","G24","G154","G156","G38","G26","G28","G40","T110","Z282","D706"]},{"cityName":"南宁","flyArr":["G422","Z336","Z6","G94","T290","K22","Z286"]},{"cityName":"南通","flyArr":["G2586","G888","Z52"]},{"cityName":"南阳","flyArr":["T50","G572","G52","G352","G1580","G372","K268","K474","K262"]},{"cityName":"宁波","flyArr":["G174","G180","G182","G184","G198","G36"]},{"cityName":"宁德","flyArr":["G198"]},{"cityName":"宁海","flyArr":["G180","G198"]},{"cityName":"盘锦","flyArr":["D822","G3504","G976","G4380","G3516"]},{"cityName":"攀枝花","flyArr":[]},{"cityName":"平顶山","flyArr":["K262","T50","G570","G572","G1590","G332","G372","K268"]},{"cityName":"萍乡","flyArr":["G483","T147"]},{"cityName":"平遥","flyArr":["G622","G624","K604","G628","K610"]},{"cityName":"莆田","flyArr":["G324","G326","D746"]},{"cityName":"迁安","flyArr":[]},{"cityName":"黔江","flyArr":[]},{"cityName":"潜江","flyArr":["G1516"]},{"cityName":"蕲春","flyArr":["K1454"]},{"cityName":"青城山","flyArr":[]},{"cityName":"青岛","flyArr":["G1064","G202","G1066","G204","G1068","G206","G1070","G1072","G208","Z350","G210","G1074","G1076","G1078","G1080","G1100","G212","G214"]},{"cityName":"清远","flyArr":[]},{"cityName":"青州市","flyArr":["G1062","G1066","G1068","G1070","G1090","G1074","G1080","G1078"]},{"cityName":"秦皇岛","flyArr":["Z118","K340","K430","K1304","G8924","K498","D822","G8928","T5688","C112","D832","G8926","G8932","K7728","2602"]},{"cityName":"琼海","flyArr":[]},{"cityName":"齐齐哈尔","flyArr":["G928","K381","K1304","K498","T48"]},{"cityName":"七台河","flyArr":["G3609"]},{"cityName":"泉州","flyArr":["G324","G326"]},{"cityName":"曲阜","flyArr":["G892","G2572","G2580","G172","G104","G2584","G2554","K1902","G2586","G2556","G176","G382","G124","G128","G130","G322","G132","G888","G192","G144","G146","G150","G326","G2588","G152","G2568"]},{"cityName":"曲靖","flyArr":["Z54","G402","K474","Z162"]},{"cityName":"渠县","flyArr":[]},{"cityName":"衢州","flyArr":["G178"]},{"cityName":"任丘","flyArr":["Z350","D736","K1072","K1454","K572","K106","1304","K1902","Y506"]},{"cityName":"日照","flyArr":["K1902","G1100","Z160"]},{"cityName":"如皋","flyArr":["G2586","G888","Z52"]},{"cityName":"瑞安","flyArr":["G190"]},{"cityName":"乳山","flyArr":["K412"]},{"cityName":"三门峡","flyArr":["K508","G674"]},{"cityName":"三门县","flyArr":["G184"]},{"cityName":"三明","flyArr":["G322","D746"]},{"cityName":"三亚","flyArr":["Z502"]},{"cityName":"上海","flyArr":["G2","G104","G108","G110","G6","G112","G114","G8","G116","G118","G10","G122","G124","G12","G128","G14","1462","G130","G132","G134","G16","G138","G18","G142","G144","G20","G146","G22","G150","G152","G24","G154","G156","G26","T110","G28","Z282","D706"]},{"cityName":"上海虹桥","flyArr":["G104","G108","G110","G6","G112","G114","G8","G116","G118","G10","G122","G124","G12","G130","G132","G134","G138","G18","G142","G144","G20","G146","G22","G150","G152","G24","G154","G156","G28","G2","G128","G14","1462","G16","G26","T110","Z282","D706"]},{"cityName":"商丘","flyArr":["K1454","G1568","G1557","K106","1304","G1593"]},{"cityName":"上饶","flyArr":["G302","G322","G324","G304","G326","G46"]},{"cityName":"上虞","flyArr":["G174","G184"]},{"cityName":"山海关","flyArr":["K1304","K498","K384","D822","G4380","D832"]},{"cityName":"汕头","flyArr":[]},{"cityName":"韶关","flyArr":["G336","Z502","G338","G340","K600"]},{"cityName":"绍兴","flyArr":["G174","G182","G194"]},{"cityName":"邵阳","flyArr":["G812","G402"]},{"cityName":"绅坊","flyArr":[]},{"cityName":"神木","flyArr":[]},{"cityName":"沈阳","flyArr":["K340","K430","K1304","Z118","T48","T18","K384","D822","G976","G972","G498","G978","G3692","G952","G3622","G922","G906","G924","G4380","G902","G980","G3624","G928","G3648","G3650","G3608","G3606","Z158","G3694","G930","G3626","G932","G916","G3696","G904","G962","G988","K54"]},{"cityName":"深圳","flyArr":["G336","G82","Z182","K106","G80"]},{"cityName":"石家庄","flyArr":["K610","K158","K1276","K402","Z502","Z162","Z2","Z22","Z278","G6704","G6706","G6708","G6712","T42","G6714","T176","Z6","G6716","Z50","Z4","K1116","T146","T56","Z96","G6718","Z336","G6722","G604","K268","G1588","G792","T168","G1572","G682","K7708","G6726","G570","G806","G66","K474","G1556","T50","G652","Z56","G554","G572","Z130","G522","G608","K5238","G56","G84","G622","G502","K262","G610","G52","G88","G812","G504","G1528","G1590","G686","G802","Z286","G524","G506","Z54","G684","G1516","T290","G82","G872","G352","G612","G430","G624","G492","G336","G482","G614","K1456","K600","G74","G58","Z70","G332","G1580","G616","G388","K508","G808","G80","G626","G308","G662","G1592","G618","G690","G86","G338","G422","G372","G486","K7726","G78","G6740","G526","G620","G674","G340","G628","G90","G94","G1578","G60","G528","G402","G72","K22","G664"]},{"cityName":"十堰","flyArr":["G1590","K262"]},{"cityName":"双鸭山","flyArr":[]},{"cityName":"四平","flyArr":["K384","G3622","G924","G3624","G928","G3650","G3608","G3606","G930","K340","K1304","Z212"]},{"cityName":"松江","flyArr":[]},{"cityName":"松原","flyArr":[]},{"cityName":"松滋","flyArr":[]},{"cityName":"绥德","flyArr":["T42","T176","Z70"]},{"cityName":"绥芬河","flyArr":[]},{"cityName":"遂宁","flyArr":["Z50"]},{"cityName":"随州","flyArr":["G1528"]},{"cityName":"苏州","flyArr":["G4","G104","G112","G116","G118","G124","G128","G130","G132","G16","1462","G142","G150","G24","G156","T110","Z282"]},{"cityName":"宿州","flyArr":["G2552","G172","G104","G2554","G176","G128","G2562","G132","G134","G198","G138","G324","G192"]},{"cityName":"台安","flyArr":["D822"]},{"cityName":"泰安","flyArr":["1462","G1054","K102","G1566","G172","G108","G114","G118","G302","G382","G2596","G180","G2562","G2564","G138","G142","G304","G194","G150","G154","Z160"]},{"cityName":"太姥山","flyArr":["G198"]},{"cityName":"泰宁","flyArr":["D746"]},{"cityName":"泰山","flyArr":["1462","K102","Z160","G1054","G1566","G172","G108","G114","G118","G302","G382","G2596","G180","G2562","G2564","G138","G142","G304","G194","G150","G154"]},{"cityName":"太原","flyArr":["Z22","Z278","T42","T176","K1116","G604","G792","G62","G682","Z56","G608","G622","G610","G684","G612","G624","G614","Z70","G616","G626","G618","G620","K604","G628","K610"]},{"cityName":"泰州","flyArr":["G2584","Z157","G2590"]},{"cityName":"台州","flyArr":["G174","G184","G198"]},{"cityName":"塘沽","flyArr":["C2552","C2554","C2556","C2558","C2560","C2562","C2574","C2582","C2584","C2594","Z160","T36","C2608","C2202","C2610","C2004","C2204","C2616","G8906","C2206","G8912","G7804","1462","C2008","G8910","C2622","G8936","G8918","C2624","C2014","T110","G8902","G8924","G1050","Z282","C2018","G1054","C2020","C2022","G892","G2572","G8904","C2630","C2210","C2564","G1064","G1568","G1566","C2026","C2212","G220","G498","G2578","K286","G2582","C2634","C2032","C2034","C2568","G1084","C2638","G172","C2038","C2570","G104","G2584","C2572","G110","G2554","G8928","C2216","C2218","K102","G2586","C2576","C2642","T58","C2042","C2644","G116","G4380","C2578","C2092","G178","C2048","C2648","G302","G2558","G382","C2050","G122","C2052","C2054","C2650","G1070","C2058","G1072","C2060","G180","C2652","C2654","G210","C2658","C2660","G184","G130","C2224","G134","C2226","C2662","C2062","G198","G1090","G1074","G1092","C2064","G138","G20","G8926","C2066","C2664","G324","C2070","C2668","C2670","G144","C2592","C2072","C2074","G1076","G146","C2076","G1078","C2228","G194","C2080","G1100","C2672","G150","C2082","C2084","G8932","C2086","G156","C2090","K7728","C2612","C2012","K412","G896","2602","D706","C2588","C2606","C2614","C2006","C2208","C2628","C2024","C2632","C2036","C2640","C2044","C2056","C2590","C2678","C2230"]},{"cityName":"唐家湾","flyArr":[]},{"cityName":"唐山","flyArr":["Z118","K340","T48","G8918","G8924","T18","K430","G8902","K1304","K498","K384","D822","G8928","G4380","C112","T5688","G8926","D832","G8932","K7728","2602"]},{"cityName":"滕州","flyArr":["G2572","G1568","G2580","G2596","G190","1462"]},{"cityName":"天津","flyArr":["Z160","T36","C2608","C2202","C2610","C2552","C2004","C2204","C2616","G8906","C2206","C2554","G8912","G7804","1462","C2008","G8910","C2622","C2556","G8936","G8918","C2558","C2624","C2014","T110","G8902","G8924","G1050","Z282","C2018","C2560","G1054","C2020","C2022","G892","G2572","C2562","G8904","C2630","C2210","C2564","G1064","G1568","G1566","C2026","C2212","G220","G498","G2578","K286","G2582","C2634","C2032","C2034","C2568","G1084","C2638","G172","C2038","C2570","G104","G2584","C2572","G110","G2554","G8928","C2216","C2574","C2218","K102","G2586","C2576","C2642","T58","C2042","C2644","G116","G4380","C2578","C2092","G178","C2048","C2648","G302","G2558","G382","C2050","G122","C2052","C2054","C2650","G1070","C2058","G1072","C2060","G180","C2652","C2654","C2582","G210","C2658","C2660","G184","G130","C2224","G134","C2226","C2584","C2662","C2062","G198","G1090","G1074","G1092","C2064","G138","G20","G8926","C2066","C2664","G324","C2070","C2668","C2670","G144","C2592","C2072","C2074","G1076","G146","C2076","G1078","C2594","C2228","G194","C2080","G1100","C2672","G150","C2082","C2084","G8932","C2086","G156","C2090","K7728","C2612","C2012","K412","G896","2602","D706","C2606","C2614","C2006","C2208","C2628","C2024","C2632","C2036","C2640","C2044","C2056","C2588","C2590","C2678","C2230"]},{"cityName":"天门","flyArr":["G1516"]},{"cityName":"天水","flyArr":["G430","Z130"]},{"cityName":"铁岭","flyArr":["G952","G928","G3648","G3608","G930","G3626","G932","G940"]},{"cityName":"桐城","flyArr":["K1072"]},{"cityName":"通化","flyArr":["K430"]},{"cityName":"通辽","flyArr":["K1190","K498","G3652","G3654","K2560","K1458"]},{"cityName":"铜陵","flyArr":["G2556","G2596","G324","G304","G326","G2568"]},{"cityName":"铜仁","flyArr":[]},{"cityName":"桐乡","flyArr":[]},{"cityName":"吐鲁番","flyArr":["Z70"]},{"cityName":"瓦房店","flyArr":["G3501"]},{"cityName":"万宁","flyArr":[]},{"cityName":"万源","flyArr":[]},{"cityName":"万州","flyArr":["Z96","G352","G332","G372"]},{"cityName":"潍坊","flyArr":["K286","G1062","G1064","G202","G1084","G1066","G1086","G1068","G1088","G1070","G1072","Z350","G1090","G1092","G1094","G1076","G1078","G1080","G212","K412"]},{"cityName":"威海","flyArr":["G220","G1086","G1088","G1090","G1092","K412"]},{"cityName":"渭南","flyArr":["K508","G308","G674","T56"]},{"cityName":"文昌","flyArr":[]},{"cityName":"温岭","flyArr":["G184","G198"]},{"cityName":"温州","flyArr":["G184","G198","G190","G38"]},{"cityName":"卧里屯","flyArr":[]},{"cityName":"武昌","flyArr":["Z836","K600","T290","Z286","Z54","K158","K1276","Z38","Z502","Z162","Z2","T146","Z6","Z336","T168","G66","G522","G68","G502","G504","G1528","G84","G524","G812","G506","G1516","G802","G82","G492","G336","G482","G70","G74","G80","G690","G338","G422","G486","G526","G86","G340","G78","G528","G94","G402","Z50","Z4","Z96","K22","G72"]},{"cityName":"乌海","flyArr":["K1178"]},{"cityName":"武汉","flyArr":["Z836","K600","T290","Z286","Z54","G66","G522","G68","G502","G504","G1528","G84","G524","G812","G506","G1516","G802","G82","G492","G336","G482","G70","G74","K158","G80","G690","K1276","G338","G422","G486","G526","G86","G340","G78","G528","G94","G402","Z38","Z502","Z162","Z2","T146","Z6","Z50","Z336","Z4","Z96","T168","K22","G72"]},{"cityName":"芜湖","flyArr":["G2558","G44"]},{"cityName":"乌兰浩特","flyArr":["K1190"]},{"cityName":"武隆","flyArr":[]},{"cityName":"乌鲁木齐","flyArr":["Z70"]},{"cityName":"武清","flyArr":["C2608","C2202","C2204","C2616","C2552","C2206","C2558","C2560","C2210","C2212","C2638","C2216","C2218","C2576","C2652","C2660","C2224","C2226","C2584","C2228","C2612","C2606","C2208","C2230"]},{"cityName":"五台山","flyArr":["K604"]},{"cityName":"武威","flyArr":["Z70","K42"]},{"cityName":"无锡","flyArr":["G4","G108","G110","G114","G118","G124","G132","G134","1462","G144","G2588","G154","G26","T110","Z282","D706"]},{"cityName":"无锡新区","flyArr":["G4","G108","G110","G114","G118","G124","G132","G134","1462","G144","G2588","G154","G26","T110","Z282","D706"]},{"cityName":"武夷山","flyArr":["G302","G322","G324","G304","G326","G46"]},{"cityName":"厦门","flyArr":["G322","K572","G324","G326","D746"]},{"cityName":"西安","flyArr":["Z130","G652","G56","G88","G686","G872","G430","G388","G58","G308","G662","G674","G90","G60","T42","T56","G664"]},{"cityName":"襄阳","flyArr":["G804","G1590","G352","G1580","G332","G372","K268","K474","K262","T50"]},{"cityName":"咸宁","flyArr":["G482","K158","G690","G338","G422","G486","T146"]},{"cityName":"孝感","flyArr":["G1528","G522","G502","G506","G482","K158","K1276","K22"]},{"cityName":"霞浦","flyArr":[]},{"cityName":"西昌","flyArr":[]},{"cityName":"锡林浩特","flyArr":[]},{"cityName":"邢台","flyArr":["K158","K1276","T146","T56","K268","Z96","Z336","G6722","T168","G1572","T50","G1556","G652","G554","K262","K5238","G502","G504","G1528","G506","G1516","G872","K600","G336","K508","K7726","G690","G338","G526","G528","G664"]},{"cityName":"西宁","flyArr":["T176","Z22"]},{"cityName":"新乡","flyArr":["K268","Z336","K474","T50","K262","G1556","G652","G522","G1528","Z54","K600","G1516","G352","K508","G338","G422","G86","G372","G486","G526","G674","G340","G528","K158","K1276","K22","G664"]},{"cityName":"信阳","flyArr":["T168","K600","G522","G502","G504","G84","G1528","G524","G506","G1516","G690","G338","G422","G486","G526","G340","K158","K1276","G528","T146","K22"]},{"cityName":"新余","flyArr":["G483","T147"]},{"cityName":"忻州","flyArr":["G793","K604"]},{"cityName":"许昌","flyArr":["K262","T168","G554","K600","T290","G524","G1516","G482","G690","G422","G402","K158","K1276","K402","K22"]},{"cityName":"徐州","flyArr":["Z52","T110","Z282","K102","G2572","G1568","G1566","G2552","G2578","G2580","G2582","G104","G2584","G110","G108","G2554","G112","G114","G2586","G2556","G174","G176","G116","G178","G118","G302","G2558","G122","G124","G2596","G182","G180","G128","G170","G2562","G184","G130","G322","G132","G134","G18","G138","G888","G190","G142","G324","G192","G144","G146","G22","G304","G194","G150","G326","G2588","G152","G154","G2568","G156","G2590","1462","T36","Z156","G896"]},{"cityName":"亚布力","flyArr":["G3606"]},{"cityName":"亚龙湾","flyArr":["Z502"]},{"cityName":"延安","flyArr":["T42"]},{"cityName":"盐城","flyArr":["G2582","G2586","G1100","G888","Z156","Z52"]},{"cityName":"雁荡山","flyArr":[]},{"cityName":"阳泉","flyArr":["K1116","G792","G622","G610","G684","G624","G614","Z70","G626","G620","G628"]},{"cityName":"扬州","flyArr":["G2588","G2590","G897"]},{"cityName":"延吉","flyArr":["G3650"]},{"cityName":"烟台","flyArr":["G1084","G220","G1086","G1088","G1090","G1092","G1094","K286"]},{"cityName":"宜宾","flyArr":[]},{"cityName":"宜昌","flyArr":["G1516","G802","T50","Z50","Z4","Z96"]},{"cityName":"宜春","flyArr":["G483","T147"]},{"cityName":"银川","flyArr":["K42","G873","K1178","Z275","Z278"]},{"cityName":"英德","flyArr":[]},{"cityName":"营口","flyArr":["G3516"]},{"cityName":"营山","flyArr":[]},{"cityName":"鹰潭","flyArr":["G170"]},{"cityName":"伊宁","flyArr":[]},{"cityName":"义乌","flyArr":["G2558","G178","G170"]},{"cityName":"宜兴","flyArr":["G2578","G172","G174","G178","G180","G170","G184","G192"]},{"cityName":"益阳","flyArr":[]},{"cityName":"永嘉","flyArr":[]},{"cityName":"永州","flyArr":["K158","G422","K22","T290","Z286"]},{"cityName":"尤溪","flyArr":[]},{"cityName":"乐清","flyArr":["G184"]},{"cityName":"岳阳","flyArr":["G502","G506","G336","K158","G74","G690","G338","G486","G402","Z162","T146","Z2","Z336"]},{"cityName":"余杭","flyArr":[]},{"cityName":"榆林","flyArr":["K1117"]},{"cityName":"运城","flyArr":["G622","K604","G626","G628"]},{"cityName":"余姚","flyArr":["G180","G182"]},{"cityName":"枣阳","flyArr":["G1528"]},{"cityName":"枣庄","flyArr":["G2572","G1566","G174","G302","G182","G170","G130","G134","G142","G324","G152","G156","1462"]},{"cityName":"张家界","flyArr":["G687","K268","K474"]},{"cityName":"张家口","flyArr":["K962","K598","K574","K1278","K1178","D6722","D1102","D1002","G2458","D1004","D1008","D6724","D1072","G2534","G2462","D1024","G2464","G2466","D1108","D1012","D1112","D1092","G2536","G2468","D6726","Z284","G2494","K42","D1014","G2470","Z338","D1074","G2538","D1018","G2474","Z352","D1118","D1026","G2496","G2476","D6728","D1028","D1122","G7882","G2478","D1022","D1076","G2542","K5240","Z184","2604"]},{"cityName":"章丘","flyArr":["G1072","G1090","G1074","G1094","G1078"]},{"cityName":"张掖","flyArr":["Z70","K42"]},{"cityName":"漳州","flyArr":["G322","K572"]},{"cityName":"湛江","flyArr":["K158"]},{"cityName":"昭通","flyArr":[]},{"cityName":"正定机场","flyArr":["G6712","G6714","G604","G570","G572","G608","G664"]},{"cityName":"郑州","flyArr":["Z502","Z162","Z2","K268","T146","Z6","Z50","Z96","Z336","T168","T50","K262","G96","G1588","Z836","G1572","1304","G570","G1556","G572","G652","G806","G66","G554","G68","G804","G522","G502","G56","Z286","G84","Z54","T290","G504","G1528","K600","G1590","G52","G88","G812","G686","G524","G506","G802","G1516","G872","K508","G352","G82","G430","G492","G336","G482","G98","G70","G1580","G74","G58","G332","G388","G808","G80","G308","G662","G1592","G372","G690","G338","G422","G86","G486","G526","G78","G674","G340","G1578","G90","G94","G528","G402","G60","K158","K1276","K402","K22","G72","G664"]},{"cityName":"镇江","flyArr":["G108","G114","G118","G122","G130","G132","G138","Z282"]},{"cityName":"镇远","flyArr":[]},{"cityName":"织金","flyArr":[]},{"cityName":"中山","flyArr":["G338"]},{"cityName":"中卫","flyArr":["Z56","Z70","T176","Z22","K42"]},{"cityName":"钟祥","flyArr":[]},{"cityName":"周口","flyArr":["G1572","G1578","K402"]},{"cityName":"珠海","flyArr":["G338"]},{"cityName":"诸暨","flyArr":["G176","G178","G190"]},{"cityName":"驻马店","flyArr":["T168","K600","G522","G502","G504","G1528","G524","G506","G1516","G492","G336","G526","G340","K158","G528","K1276","K22"]},{"cityName":"株洲","flyArr":["G506","G336","G338","G422"]},{"cityName":"淄博","flyArr":["K286","G1062","G1084","G204","G1066","G1068","G1088","G1072","G1090","Z350","G1074","G1092","G1078","G1076","G1080","G1100"]}]';
        //三字码
        // console.log(JSON.parse(lists));
        // var list = [];
        // list.push(...JSON.parse(lists));
        // list.unshift({ fwqd: '服务地区', sanzm: '三字码', sizm: '四字码', zwmc: '中文名称', ywmc: '英文名称' });

        // console.log(list);
        // var data = excel.filterExportData(list, [//列头顺序可以重新排列的函数
        //     'fwqd',
        //     'sanzm',
        //     'sizm',
        //     'zwmc',
        //     'ywmc',
        // ]);
        //航班
        // var list = [];
        // for (let index = 0; index < JSON.parse(lists).length; index++) {
        //     const element = JSON.parse(lists)[index];

        //     for (let index = 0; index < element.flyArr.length; index++) {
        //         const element_detail = element.flyArr[index];
        //         list.push({ cityName: element.cityName, hb: element_detail,zdz:'北京'})
        //     }

        // }
        // list.unshift({ cityName: '出发地', hb: '航班',zdz:'北京' });
        //火车
        var list = [];
        for (let index = 0; index < JSON.parse(lists).length; index++) {
            const element = JSON.parse(lists)[index];

            for (let index = 0; index < element.flyArr.length; index++) {
                const element_detail = element.flyArr[index];
                list.push({ cityName: element.cityName, cch: element_detail, zdz: '北京' })
            }

        }
        list.unshift({ cityName: '出发地', cch: '车次号', zdz: '北京' });
        console.log(list);
        var data = excel.filterExportData(list, [//列头顺序可以重新排列的函数
            'cityName',
            'cch',
            'zdz',
        ]);
        excel.setExportCellStyle(data, 'A1:D1', {
            s: {
                // fill:{},
                alignment: {
                    horizontal: 'center',
                    vertical: 'center',
                    wrapText: true,
                }

            }
        })
        excel.exportExcel({
            sheet1: data
        }, '火车.xlsx');
    });
})
//买彩票的策略



//叠连码  选1个：人工看自己看图    我这边是随机
function dlm(cd_number1, cd_number2, cd_number3, all_result_fx) {
    var dl_number = [];
    var xb = 0;
    if (cd_number1 == 1) {
        dl_number[xb] = 2
    } else if (cd_number1 == 33) {
        dl_number[xb] = 32
    } else {
        dl_number[xb] = cd_number1 - 1;
        xb += 1;
        dl_number[xb] = cd_number1 + 1;
    }
    xb += 1;
    if (cd_number2 == 1) {
        dl_number[xb] = 2
    } else if (cd_number2 == 33) {
        dl_number[xb] = 32
    } else {
        dl_number[xb] = cd_number2 - 1;
        xb += 1;
        dl_number[xb] = cd_number2 + 1;
    }
    xb += 1;
    if (cd_number3 == 1) {
        dl_number[xb] = 2
    } else if (cd_number3 == 33) {
        dl_number[xb] = 32
    } else {
        dl_number[xb] = cd_number3 - 1;
        xb += 1;
        dl_number[xb] = cd_number3 + 1;
    }
    dl_number.sort();
    dl_number = unique(dl_number);
    var cd_xb = createRand(0, dl_number.length)//重叠书随机下标
    // console.log(dl_number);
    // console.log(dl_number[cd_xb]);
    all_result_fx.push("{叠连码:" + dl_number + "}");
    // return dl_number[cd_xb];
    khd_num.push(...dl_number);
    return dl_number;
}
//同位码  一般是间隔0,1,2,3步 如果重叠码为33 最好间隔1步  则为31  这时候同位码为01,11或21 选两个
function twm_way(cd_numbers, selected_number, all_result_fx) {
    var tw_random = cd_numbers[createRand(0, cd_numbers.length)];//三个重叠码随机选一个
    var tw_selected;
    //计算同位码
    if (tw_random == 1) {
        tw_selected = 2
    } else if (tw_random == 33) {
        tw_selected = 32
    } else {
        tw_selected = tw_random - 1;
        // Math.floor(tw_selected/10);
        // tw_selected = tw_random + 1;
    }
    var twm = [tw_selected, tw_selected % 10, tw_selected % 10 + 10, tw_selected % 10 + 20] //同位码结果
    if (tw_selected % 10 <= 3) {
        twm.push(tw_selected % 10 + 30)
    }
    twm = unique(twm);
    var sj = twm[createRand(0, twm.length)];
    selected_number.push(sj);
    twm.remove_arr(sj);//删掉选出来的，下面再随机一个
    selected_number.push(twm[createRand(0, twm.length)]);
    all_result_fx.push("{同位码:" + twm + "}");
    khd_num.push(...twm);
    return twm;
}
//叠码选择
function dm_xz(selected_number, all_result_fx) {
    var szm_arr = [11, 22, 33]
    var szm_arr1 = []
    for (var index = 0; index < szm_arr.length; index++) {
        var element = szm_arr[index];
        if (selected_number.indexOf(element) > -1) {//是否存在叠码
            szm_arr1.push(element)
        }
    }
    szm_arr.remove_arr(szm_arr1[0]);//删除本身
    if (szm_arr1.length == 1) {//只有一个时候才可以选择另一个
        selected_number.push(szm_arr[createRand(0, szm_arr.length)]);//两个随机一个
    }
    if (szm_arr1.length > 0) {//大于0才有联系 才有选择意义
        all_result_fx.push("{叠码:" + szm_arr + "}");
    }
    khd_num.push(...szm_arr);
    return szm_arr;
}
//筋斗码 : 12-21  13-31等
function jdm_xz(selected_number, all_result_fx) {
    var jdm_arr = [1, 10, 2, 20, 3, 30, 12, 21, 13, 31, 23, 32]
    var jdm_selected = [];
    var map = new Map();
    map.set(1, 10); map.set(10, 1);
    map.set(2, 20); map.set(20, 2);
    map.set(3, 30); map.set(30, 3);
    map.set(12, 21); map.set(21, 12);
    map.set(13, 31); map.set(31, 13);
    map.set(23, 32); map.set(32, 23);
    for (var index = 0; index < jdm_arr.length; index++) {
        var element = jdm_arr[index];
        if (selected_number.indexOf(element) > -1) {
            jdm_selected.push(map.get(element))
        }
    }
    // for (var index = 0; index < jdm_selected.length; index++) {
    //     var element = jdm_selected[index];
    //     selected_number.push(parseInt(element))
    // }
    // selected_number.push.apply(selected_number, jdm_selected);
    selected_number.push(...jdm_selected);
    all_result_fx.push("{筋斗码:" + jdm_selected + "}");
    khd_num.push(...jdm_selected);
    return jdm_selected
}
//组合 http://www.360doc.com/content/18/1218/21/6610157_802737278.shtml
function zh_xz(selected_number, all_result_fx) {
    /**
         * 天地线：1-5-11-15-18-22-28-32
         * 水火线：3-7-9-13-20-24-26-30
         * 木雷线：2-6-10-14-19-23-27-31
         * 山泽线：4-8-12-16-17-21-25-29
         * 
         * 1-33太极：首先分出奇偶就是两仪
         * 再把两仪分化为四象
         * 一象：1-5-9-11-13-17-21-25
         * 二象：2-6-10-14-18-22-26-30
         * 三象：3-7-11-15-19-23-27-31
         * 四象：4-8-12-16-20-24-32
         * 黄金号码：6-7-12-13-16-17-20-21-24-32 
         * 黄金号码组合：
         * 9码常出：4-5-13-14-20-21-27-28-29
         * 万能11码：1-5-9-10-14-15-20-25-29-30-32
         * 
         */
    var tdx = [1, 5, 11, 15, 18, 22, 28, 32]
    var shx = [3, 7, 9, 13, 20, 24, 26, 30];
    var mlx = [2, 6, 10, 14, 19, 23, 27, 31];
    var szx = [4, 8, 12, 16, 17, 21, 25, 29];
    var tdx_pp = [];
    var shx_pp = [];
    var mlx_pp = [];
    var szx_pp = [];
    for (var index = 0; index < selected_number.length; index++) {
        var element = selected_number[index];
        if (tdx.indexOf(element) > -1) {//是否有匹配的
            tdx_pp.push(element)
        }
    }
    for (var index = 0; index < selected_number.length; index++) {
        var element = selected_number[index];
        if (shx.indexOf(element) > -1) {//是否有匹配的
            shx_pp.push(element)
        }
    }
    for (var index = 0; index < selected_number.length; index++) {
        var element = selected_number[index];
        if (mlx.indexOf(element) > -1) {//是否有匹配的
            mlx_pp.push(element)
        }
    }
    for (var index = 0; index < selected_number.length; index++) {
        var element = selected_number[index];
        if (szx.indexOf(element) > -1) {//是否有匹配的
            szx_pp.push(element)
        }
    }
    var map = new Map();
    var map1 = new Map();
    map.set(tdx_pp.length, tdx_pp)
    map.set(shx_pp.length, shx_pp)
    map.set(mlx_pp.length, mlx_pp)
    map.set(szx_pp.length, szx_pp)
    map1.set(tdx_pp.length, tdx)
    map1.set(shx_pp.length, shx)
    map1.set(mlx_pp.length, mlx)
    map1.set(szx_pp.length, szx)
    var pc = [tdx_pp, shx_pp.length, mlx_pp.length, szx_pp.length]
    mp(pc);
    var selected_arr = map.get(pc[3]);//最大的那个是最多的
    if (pc[3] < 3 && selected_arr != undefined && selected_arr.length > 0) {
        var new_arr = del_arr(map1.get(pc[3]), selected_arr);
        if (new_arr.length > 0) {
            if (new_arr.length > 1) {
                var sj01 = new_arr[createRand(0, new_arr.length)];
                selected_number.push(sj01);//生成一个随机
                new_arr.remove_arr(sj01);
                console.log(new_arr);
                var sj02 = new_arr[createRand(0, new_arr.length)];
                selected_number.push(sj02);//生成一个随机
            } else {
                var sj01 = new_arr[createRand(0, new_arr.length)];
                selected_number.push(sj01);//生成一个随机
            }
            all_result_fx.push("{组合码:" + new_arr + "}");
            khd_num.push(...new_arr);
        }
    }
   
    return new_arr;
}
/**
 * 开奖规则：
 * 比对中奖号码数量
 * 1.中奖号码
 * 2.投注号码
 * 3.把他们加入同一个数组中，如果号码个数除以2 再和原来基本号码个数比较 少几个就中了几个，篮球单独比较
 */
function bd_zjhmcount(zjnum, tznum) {
    // zjnum = '1,2,3,4,5,6+10';
    // tznum = '1,2,5,6,5,7+11';
    var returnval = "";
    if (zjnum == '') {
        returnval = '中奖号码不能为空！';
    }
    if (tznum == '') {
        returnval = '投注号码不能为空！';
    }
    if (zjnum != '' && tznum != '' && zjnum != undefined && tznum != undefined) {
        zjnum = zjnum.replace(/，/g, ',')
        tznum = tznum.replace(/，/g, ',')
        var zjnum_arr = zjnum.split('+');
        var tznum_arr = tznum.split('+');
        //红球
        var arr = [];
        var zjnum_hq = zjnum_arr[0].split(',');
        var tznum_hq = tznum_arr[0].split(',');
        zjnum_hq.forEach(element => {
            arr.push(element);
        });
        tznum_hq.forEach(element => {
            arr.push(element);
        });
        var newarr = unique(arr);
        let bznum = zjnum_hq.length * 2 - newarr.length;
        returnval += "红球比中" + bznum + "个";
        //篮球
        var zjnum_lq = zjnum_arr[1];
        var tznum_lq = tznum_arr[1];
        if (zjnum_lq == tznum_lq) {
            returnval += "蓝球比中" + 1 + "个";
        } else {
            returnval += "蓝球比中" + 0 + "个";
        }
        console.log(returnval);
    }


    return returnval;
}

//=======================第二套选号方法 20221014================================
//选号方法一：随机奇数  flag = 1 奇数  2 偶数 3 大号 4 小号
function odd_even(flag) {
    var red_number = [];
    var blue_number = [];
    var selected_red = [];
    //生成数字范围
    for (var index = 0; index < 33; index++) {
        if((index + 1) % 2 != 0 && flag == 1){
            red_number.push(index + 1)
        }else if((index + 1) % 2 == 0 && flag == 2){
            red_number.push(index + 1)
        }else if((index + 1)  > 16 && flag == 3){
            red_number.push(index + 1)
        }else if((index + 1)  <= 16 && flag == 4){
            red_number.push(index + 1)
        }
    }
    for (var index = 0; index < 16; index++) {
        // if((index + 1) % 2 !=0){
        //     blue_number.push(index + 1)
        // }else  if((index + 1) % 2 ==0){
        //     blue_number.push(index + 1)
        // }
        blue_number.push(index + 1)
    }
    var ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * red_number.length);//随机数组的下标  （下标范围就是数组的长度）
    selected_red.push(red_number[ran]);
    ran = parseInt(Math.random() * blue_number.length);//随机数组的下标  （下标范围就是数组的长度）
    mp(selected_red)
    console.log("红球："+ selected_red + "蓝球：" + blue_number[ran]);
    return "红球："+ selected_red + "蓝球：" + blue_number[ran];
}

/**
 * 
 * 看好的号码  -- 算完和值推演、重叠码推演后的 + 走势段的号码 + 基本面号码
 * 不看好的号码： 去除 推演号码 + 基本面号码
 * khd_num 推演号码 + 基本面号码
 * @param {*} khd_num_01
 */
function bkhd_way(khd_num_01){
    //推演号码
    khd_num_01 = unique(khd_num_01)
    mp(khd_num_01)
    // console.log(khd_num_01);
    var red_number = [];
    for (var index = 1; index <= 33; index++) {
        red_number.push(index)
    }
    var red_number = del_arr(red_number,khd_num_01);
    mp(red_number);
    // console.log(red_number);
    return red_number;
}

/**
 * 
 * 上两期未出来的号码 可做参考
 *kjhm 上一期，kjhm1 上两期
 * */ 
function sqwc_way(kjhm,kjhm1){
    layui.use(['jquery'],function(){
        var $ = layui.jquery;
         kjhm = kjhm.replace(/，/g, ',').split('+')[0].split(',');
         kjhm1 = kjhm1.replace(/，/g, ',').split('+')[0].split(',');
        var z_kjhm = []
        var red_number = [];
        z_kjhm.push(...kjhm);
        z_kjhm.push(...kjhm1);
        var red_number = [];
        for (var index = 0; index < 33; index++) {
            for (let index1 = 0; index1 < z_kjhm.length; index1++) {
                const element = z_kjhm[index1];
                if((index + 1) != element){
                    red_number.push(index + 1)
                }
            }
        }
        red_number = unique(red_number);//去重
        mp(red_number);//冒泡排序
        // console.log(red_number);
    })
  
}

/**
 * 需要做的：上期和上两期号码放入；重叠码写入；看看自己看好的号码手动加入yfnum.push([1,2])...
 * 
 * 买号组合策略：
 * 1.  每年有大断区出现：可以大胆分2区
 * 2. 反常思维：要么顺应上期要么反向==>上期断区，冷热、大小、奇偶     === 冷热、大小、奇偶 看网上统计
 * 3. 定尾数：比如11 尾数1 ， 12 尾数 2 ，， 定好范围 
 * 4. 对重复号果断取舍：取的原则是，既然每期开奖号码都有那么1~3个是上一期出现过的，那么就将上期的7个号码至少取用6个重新组合投注（组合三个）。
 *  舍的原则是，既然每期开奖号码只有那么1~3个是上一期出现过的，那么就将上期的7个号码全部弃用，另选其它号码重新组合投注
 * 5.
 * 6. 
 * @param {*} arr  
 * @returns 
 * 
 * 1 看重的号码就是推演出来的
 * 2 预防：根据号码基本规律-邻号、斜码、夹码、递进的1 2 3 期隔的规律等等、趋势看出来的
 * 3 排除号码:去掉推演的和看好的号码 （去掉1和2）
 * 
 * 4 开奖后总结：哪种号码中的多最近就用这几种，
 * 如果都不行==》反之，他也会把重点号码排除，在预防号码和排除号码之间选一注小复式
 * 
 * 问题： 数据有重复的要测试
 */
function mh_cl(arr){
    layui.use(['jquery'],function(){
        var $ = layui.jquery;
         //看好的号码  : 推演的 
         var good_num = khd_num;//推演的时候已经push在khd_num 中了
         console.log(good_num);
         //排除号码 : 去掉看好的号码  
         var bkh_num = bkhd_way(khd_num);
         bkh_num = unique(bkh_num);//去重
         console.log(bkh_num);
         //预防号码:上两期未出来的号码 可做参考
         var yfnum = [];
         var kjhm = $('#kjhm').val().replace(/，/g, ',').split('+')[0].split(',');
         var kjhm1 = $('#kjhm1').val().replace(/，/g, ',').split('+')[0].split(',');
         yfnum.push(...kjhm);
         yfnum.push(...kjhm1);
         var first_qh = bkhd_way(yfnum);//上两期
        // 我看好的号码-手动添加？？  yfnum.push([1,2])
        
         yfnum = unique(yfnum);//去重
         mp(yfnum);//冒泡排序
         console.log(yfnum);

        //第一个策略：大神会在重点号码中选两到三个号码作为胆码，然后随心与重点号码组合，一般五注，花费十元
        var dm = random_arg(good_num,3);
        good_num = del_arr(good_num,dm);//删除三个胆码
        console.log("随机五注:1. "+dm+","+random_arg(good_num,3)+" 2. "+dm+","+random_arg(good_num,3)+" 3. "+dm+","+random_arg(good_num,3)+" 4. "+dm+","+random_arg(good_num,3)
        +" 5. "+dm+","+random_arg(good_num,3));
        //胆码除外的重点号码自由组合，一般三注，花费六元。
        console.log("自由组合三注:1. "+random_arg(good_num,6)+" 2. "+random_arg(good_num,6)+" 3. "+random_arg(good_num,6));
        //预防号码自由组合，一般三注，花费六元。
        console.log("预防号码三注:1. "+random_arg(yfnum,6)+" 2. "+random_arg(yfnum,6)+" 3. "+random_arg(yfnum,6));
        //排除号码自由组合，一般三注，花费六元。
        console.log("排除号码三注:1. "+random_arg(bkh_num,6)+" 2. "+random_arg(bkh_num,6)+" 3. "+random_arg(bkh_num,6));

    })
   
    
}

function random_arg(arr,xb){
    var selected_red=[];
    for (let index = 0; index < xb; index++) {
        var ran = parseInt(Math.random() * arr.length);//随机数组的下标  （下标范围就是数组的长度）
        selected_red.push(arr[ran]);
    }
    return selected_red;
}

//常用方法
//数组去重
function unique(arr) {
    return Array.from(new Set(arr))
}
//生成随机数的范围
function createRand(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}
//删除数组指定元素

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove_arr = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//冒泡排序
function mp(cl_data) {
    for (var i = 0; i < cl_data.length - 1; i++) {
        for (var j = 0; j < cl_data.length - i - 1; j++) {
            if (parseInt(cl_data[j]) > parseInt(cl_data[j + 1])) {
                var temp = cl_data[j];
                cl_data[j] = cl_data[j + 1]
                cl_data[j + 1] = temp;
            }

        }
    }
}
// 从一个数组中删除另一个数组中存在的元素
function del_arr(arr, to_remove) {
    // console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < to_remove.length; j++) {
            if (arr[i] == to_remove[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr
}




