import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapForm extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-dark text-center m-3'>Bài tập Form - BC30 - Nguyễn Tường Giang</h3>
                <FormSinhVien/>
                <TableSinhVien/>
            </div>
        )
    }
}
