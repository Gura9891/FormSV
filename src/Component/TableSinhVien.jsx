import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    state = {
        keyword: ''
    }
    renderUserList = () => {
        let data = this.props.userList.filter(ele => {
            return (
                ele.fullname
                .toLowerCase()
                .trim()
                .indexOf(this.state.keyword.toLocaleLowerCase().trim()) !== -1
            )
        })
        return data.map((ele, index) => {
            const { id, maSV, fullname, phoneNumber, email } = ele;
            return (
                <tr key={id} className={`${index % 2 === 0 && 'bg-light'}`}>
                    <td>{maSV}</td>
                    <td>{fullname}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>
                        <button onClick={() => this.props.dispatch({
                            type: 'SET_SELECTED_USER',
                            payload: ele
                        })} className="btn btn-info me-2">Edit</button>
                        <button 
                        onClick={() => this.props.dispatch({
                            type: 'DELETE_USER',
                            payload: ele.id

                        })}
                        className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )
        });
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group mb-1 mt-3">
                            <input
                                onChange={this.handleChange}
                                name="keyword"
                                type="text"
                                placeholder="Search name..."
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <table className='table'>
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserList()}
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.userReducer,
    };
};

export default connect(mapStateToProps)(TableSinhVien);