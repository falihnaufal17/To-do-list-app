const todolistmodels = require('../models/todolist')
const miscHelper = require('../helpers/helper')
const moment = require('moment')

module.exports = {
    index: (req, res) => {
        res.end('Hello this API active!')
    },
    getAllName: (req, res) => {
        todolistmodels.getAllName()
            .then((resultData) => {
                miscHelper.response(res, resultData)
            })
            .catch((error) => {
                miscHelper.response(res, error, 400, error)
                console.log(error)
            })
    },
    getTodoByName: (req, res) => {
        const nama_peserta = req.params.nama_peserta
        todolistmodels.getTodoByName(nama_peserta)
            .then((resultData) => {
                miscHelper.response(res, resultData)
            })
            .catch((error) => {
                miscHelper.response(res, error, 400, error)
                console.log(error)
            })
    },
    addTodo: (req, res) => {
        let dateNow = moment(new Date().getTime()).format('HH:mm')
        const data = {
            nama_peserta: req.body.nama_peserta,
            kegiatan: req.body.kegiatan,
            jam_awal: dateNow,
            jam_berakhir: null,
            created_at: new Date()
        }
        const dataUpdate = {
            jam_berakhir: dateNow,
            updated_at: new Date()
        }
        todolistmodels.addTodo(data)
            .then((result) => {
                miscHelper.response(res, data, 201)
                todolistmodels.updateTime(result.insertId - 1, dataUpdate)
                    .then(() => {
                        miscHelper.response(res, data)
                    })
            })
            .catch((error) => {
                miscHelper.response(res, error, 400, error)
                console.log(error)
            })
    },
}