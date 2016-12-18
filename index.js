const router = require('express').Router()
const createData = require('./fn/createData')
const Year = require('./models/Year')
const Month = require('./models/Month')
const Day = require('./models/Day')

router.get('/data', (req, res)=> {
	createData()
	res.json('ok')
})

router.get('/year', (req, res)=> {
	Year
	.find()
	.populate({path: 'child_m', 
		select: '-_id m_name child_d days',
		populate: {path: 'child_d', select: '-_id d_name d_owner'}
	})
	.exec((err, all)=> {
		if(err) return res.send(err)
		res.send(all)
	})
})

router.get('/month/:m', (req, res)=> {
	Month
	.find({m_name: req.params.m + '月'})
	.populate('m_owner', '-_id y_name')
	.populate('child_d', '-_id d_name')
	.exec((err, allm)=> {
		if(err) return res.send(err)
		res.send(allm)
	})
})

router.get('/day/:m/:d', (req, res)=> {
	Day
	.find({d_name: req.params.d + '日'})
	.populate('d_owner', '-_id m_owner m_name days', {m_name: req.params.m + '月'})
	.exec((err, alld)=> {
		if(err) return res.send(err)
		var dd = []
		alld.map((item)=> {
			if(item.d_owner != null) {
				dd.push({item})
			}
		})
		res.send(dd)
	})
})

router.get('/month/day/:d', (req, res)=> {
	Month
	.find({ }, {child_d: 0, m_owner:0})
	.where('days').equals(req.params.d)
	.exec((err,allm)=> {
		if(err) res.send(err)
		res.send(allm)
	})
})


module.exports = router