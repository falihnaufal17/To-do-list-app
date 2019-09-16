const conn = require('../configs/db')
const moment = require('moment')
module.exports = {
    getAllName: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT DISTINCT nama_peserta FROM todo`, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getTodoByName: (nama_peserta) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM todo WHERE nama_peserta = ?`, nama_peserta, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addTodo: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO todo SET ?`, data, (err, result) => {
                console.log(result)
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateTime: (id, data) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE todo SET ? WHERE id = ?`, [data, id], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}