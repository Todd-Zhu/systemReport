'use strict'

var key = window.location.href.split('=');
key = key[1] ? key[1] : '';

var app = new Vue({
	el: '#app',
	data: {
		labelsShow: false,
		typesShow: false,
		modelsShow: false,
		pricesShow: false,
		areaShow: false,
		searchCondition :{
			searchKey: '',
			labels: [
				{value:'1',name:'连锁化',checked:true},
				{value:'2',name:'性价比',checked:true},
				{value:'3',name:'智能化',checked:true},
				{value:'4',name:'Window',checked:true},
				{value:'5',name:'Android',checked:true},
				{value:'6',name:'平台对接',checked:true},
			],
			types: [
				{value:'0',name:'全部',checked:true},
				{value:'1',name:'火锅',checked:true},
				{value:'2',name:'自助',checked:true},
				{value:'3',name:'中餐',checked:true},
				{value:'4',name:'快餐',checked:true},
				{value:'5',name:'酒吧',checked:true},
				{value:'6',name:'KTV',checked:true},
				{value:'7',name:'烘培',checked:true},
				{value:'8',name:'奶茶店',checked:true},
				{value:'9',name:'零售',checked:true},
			],
			models: [
				{value:'0',name:'全部',checked:true},
				{value:'1',name:'正餐',checked:true},
				{value:'2',name:'快餐',checked:true},
				{value:'3',name:'外卖',checked:true},
				{value:'4',name:'预定',checked:true},
				{value:'5',name:'排队',checked:true},
				{value:'6',name:'微信点餐',checked:true},
				{value:'7',name:'自助点餐',checked:true},
				{value:'8',name:'会员营销',checked:true},
				{value:'9',name:'供应链',checked:true},
				{value:'10',name:'报表分析',checked:true},
				{value:'11',name:'第三方对接',checked:true},
			],
			prices: [
				{value:'0',name:'全部',checked:true},
				{value:'1',name:'0-999',checked:true},
				{value:'2',name:'1000-3000',checked:true},
				{value:'3',name:'30001-6000',checked:true},
				{value:'4',name:'60001-10000',checked:true},
				{value:'5',name:'15001-20000',checked:true},
				{value:'6',name:'20000以上的',checked:true},
			],
			areas: [
				{value:'0',name:'全部',checked:true},
				{value:'1',name:'北京',checked:true},
				{value:'2',name:'上海',checked:true},
				{value:'3',name:'广州',checked:true},
			],
		},
		// 系统
		systems:[
			{
				name: '客如云',
				url: './img/1.png',
				link: 'www.keruyun.com',
				labels: '1',
				types: '1',
				models: '1',
				prices: '1',
				prices: '1',
				areas: '1',
				show: true,
			},
			{
				name: '二维火',
				url: './img/2.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			}, 
			{
				name: '餐行健',
				url: './img/3.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			}, 
			{
				name: '天财商龍',
				url: './img/4.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			}, 
			{
				name: '有赞',
				url: './img/5.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			},
			{
				name: '有赞',
				url: './img/5.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			},
			{
				name: '有赞',
				url: './img/5.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			},
			{
				name: '有赞',
				url: './img/5.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			},
			{
				name: '有赞',
				url: './img/5.png',
				link: 'www.keruyun.com',
				labels: '2',
				types: '2',
				models: '2',
				prices: '2',
				prices: '2',
				areas: '2',
				show: true,
			},
		]
	},
	methods: {
		toggleShow: function(target){
			this[target] = !this[target]; 
		},
		open: function(link){
			window.open(link);
		}
	},
	watch: {
		searchCondition: {
	      handler: function (val, oldVal) {
	      	var systems = this.systems;
	      	var searchCondition = val;

	      	var labelsChecked = [];
	      	for(var item of searchCondition.labels){
				if(item.checked){
	      			labelsChecked.push(item.value);
	      			continue;
	      		}
	      	}
	      	var typesChecked = [];
	      	for(var item of searchCondition.types){
				if(item.checked){
	      			typesChecked.push(item.value);
	      			continue;
	      		}
	      	}
	      	var modelsChecked = [];
	      	for(var item of searchCondition.models){
				if(item.checked){
	      			modelsChecked.push(item.value);
	      			continue;
	      		}
	      	}
	      	var pricesChecked = [];
	      	for(var item of searchCondition.prices){
				if(item.checked){
	      			pricesChecked.push(item.value);
	      			continue;
	      		}
	      	}
	      	var areasChecked = [];
	      	for(var item of searchCondition.areas){
				if(item.checked){
	      			areasChecked.push(item.value);
	      			continue;
	      		}
	      	}

	      	for(var system of systems){
	      		var labels = system.labels.split(',');
	      		var types = system.types.split(',');
	      		var models = system.models.split(',');
	      		var prices = system.prices.split(',');
	      		var areas = system.areas.split(',');
 
	      		if(indexWithArray(labels,labelsChecked) 
	      			&& indexWithArray(types,typesChecked)
	      			&& indexWithArray(models,modelsChecked)
	      			&& indexWithArray(prices,pricesChecked)
	      			&& indexWithArray(areas,areasChecked)
      				&& (!searchCondition.searchKey || system.name.indexOf(searchCondition.searchKey) > -1)
	      			){
	      			system.show = true; 
	      		}else{
	      			system.show = false; 
	      		}
	      	}
	      },
	      deep: true
	    }
	}
});

app.searchCondition.searchKey = decodeURI(key);

function indexWithArray(arr,arrCondition){
	for(var item of arr){
		if(arrCondition.indexOf(item) > -1){
			return true;
		}
	}
	return false;
}