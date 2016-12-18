const router = require('express').Router()
const mongoose = require('mongoose')
const Year = require('../models/Year')
const Month = require('../models/Month')
const Day = require('../models/Day')

function createData() {
	var ObjectId = mongoose.Types.ObjectId
	var y = []
	var m = []
	var m1 = [], m2 = [], m3 = [], m4 = [], 
		m5 = [], m6 = [], m7 = [], m8 = [], 
		m9 = [], m10 = [], m11 = [], m12 = []
	var mi = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12]
	var d = []
	var yearIds = [new ObjectId]
	var monthIds = []
	var dayIds = []
	for(var j=0; j<365; j++) {
		dayIds[j] = new ObjectId
		if(j<31) m1[j] = dayIds[j]
		if(j>=31 && j<59) m2[j-31] = dayIds[j]
		if(j>=59 && j<90) m3[j-59] = dayIds[j]
		if(j>=90 && j<120) m4[j-90] = dayIds[j]
		if(j>=120 && j<151) m5[j-120] = dayIds[j]
		if(j>=151 && j<181) m6[j-151] = dayIds[j]
		if(j>=181 && j<212) m7[j-181] = dayIds[j]
		if(j>=212 && j<243) m8[j-212] = dayIds[j]
		if(j>=243 && j<273) m9[j-243] = dayIds[j]
		if(j>=273 && j<304) m10[j-273] = dayIds[j]
		if(j>=304 && j<334) m11[j-304] = dayIds[j]
		if(j>=334 && j<365) m12[j-334] = dayIds[j]
	}
	for(var i=0; i<12; i++) {
		monthIds[i] = new ObjectId
		m.push({
			_id: monthIds[i],
			m_owner: yearIds[0],
			m_name: (i+1) + '月',
			days: mi[i].length,
			child_d: mi[i]
		})
	}
	for(var j=0; j<365; j++) {
		var mId, dn
		if(j<31) {mId = monthIds[0], dn = j+1 }
		if(j>=31 && j<59) {mId = monthIds[1], dn = j-30}
		if(j>=59 && j<90) {mId = monthIds[2], dn = j-58}
		if(j>=90 && j<120) {mId = monthIds[3], dn = j-89}
		if(j>=120 && j<151) {mId = monthIds[4], dn = j-119}
		if(j>=151 && j<181) {mId = monthIds[5], dn = j-150}
		if(j>=181 && j<212) {mId = monthIds[6], dn = j-180}
		if(j>=212 && j<243) {mId = monthIds[7], dn = j-211}
		if(j>=243 && j<273) {mId = monthIds[8], dn = j-242}
		if(j>=273 && j<304) {mId = monthIds[9], dn = j-272}
		if(j>=304 && j<334) {mId = monthIds[10], dn = j-303}
		if(j>=334 && j<365) {mId = monthIds[11], dn = j-333}
		d.push({
			_id: dayIds[j],
			d_owner: mId,
			d_name: dn + '日'
		})
	}
	y.push({
		_id: yearIds[0],
		y_name: 2017,
		child_m: monthIds
	})
	Year.create(y, (err, doc)=> {
		if(err) return console.log(err)
		Month.create(m, (err, doc)=> {
			if(err) return console.log(err)
			Day.create(d, (err, doc)=> {
				if(err) return console.log(err)
			})
		})
	})
}
module.exports = createData