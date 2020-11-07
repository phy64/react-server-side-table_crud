import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminDataService from '../../services/AdminDataService'
import ReactServerSideTable from 'react-server-side-table';

class AdminList extends Component {
  constructor(props) {
    super(props);

    this.name = "";
    this.state = {
      reRenderApiRequest: {
        enabled: false
      },
      checkboxCheckedValues: []
    };
  };
  
  handleChangeName = (value) => {
    this.name = value;
  };
  
  handleSearch = () => {
    const addQueryParameters = {
      name: this.name
    };
    
    this.setState({
      addQueryParameters,
      reRenderApiRequest: {
        enabled: true
      }
    }, () => {
      this.setState({
        reRenderApiRequest: {
          enabled: false
        }
      });
    });
  };

  handleDeleteAdmin = async () => {
    const { checkboxCheckedValues: adminSeqArray } = this.state;
    
    if (adminSeqArray.length === 0) {
      window.alert('삭제할 관리자 정보를 선택해주세요.');
      return false;
    } else {
      if (window.confirm("선택한 관리자 정보를 삭제하시겠습니까?")) {
        try {
          const response = await AdminDataService.remove(adminSeqArray);
          const { message } = response.data;
    
          window.alert(message);
          
          this.setState({
            reRenderApiRequest: {
              enabled: true
            }
          }, () => {
            this.setState({
              reRenderApiRequest: {
                enabled: false
              }
            });
          });
        } catch (error) { 
          console.error('error', error);
        };
      };
    };
  };

  handleCheckboxCheckedCallback = (values) => {
    this.setState({
      checkboxCheckedValues: values
    });
  };

  render() {
    const { reRenderApiRequest, checkboxCheckedValues } = this.state;
    const url = 'https://mock-up-data.herokuapp.com/api/admins';
    const headers = [
      [
        {title: '', checkboxAll: true, column: 'admin_seq', rowSpan: 2},
        {title: 'No.', rowSpan: 2},
        {title: '관리자 정보', colSpan: 4},
        {title: <span><i className="fa fa-calendar" style={{fontSize: "14px"}}/> 등록일</span>, column: 'reg_date', sortable: true, rowSpan: 2}
      ],
      [
        {title: <span><i className="fa fa-id-card" style={{fontSize: "15px"}}/> 아이디</span>, column: 'id', sortable: true},
        {title: <span><i className="fa fa-user" style={{fontSize: "15px"}}/> 이름</span>, column: 'name', sortable: true},
        {title: <span><i className="fa fa-phone" style={{fontSize: "14px"}}/> 연락처</span>, column: 'tel', sortable: true},
        {title: <span><i className="fa fa-envelope" style={{fontSize: "14px"}}/> 이메일</span>, column: 'email', sortable: true}
      ]
    ];

    const columns = [
      {
        name: 'admin_seq',
        checkbox: true
      },
      {
        name: 'admin_seq',
        formatter: ({ dataIndex, total, from }) => {
          return total - (from - 1) - dataIndex;
        }
      },
      {
        name: 'id', 
        formatter: ({ rowData }) => {
          return (
            <Link to={`/admin/${rowData.admin_seq}`}>
              { rowData.id }
            </Link>
          )
        }
      }, 
      {
        name: 'name'
      }, 
      {
        name: 'tel'
      }, 
      {
        name: 'email'
      }, 
      {
        name: 'reg_date'
      }
    ];

    const settings = {
      colGroup: ['7%', '7%', '15%', '15%', '15%', '24%', '17%'],
      queryParameterNames: {
        search: 'id'
      },
      language: {
        search: 'Search By ID'
      },
    };

    return (
      <>     
        <ReactServerSideTable 
          url={url} 
          headers={headers} 
          columns={columns} 
          settings={settings}
          reRenderApiRequest={reRenderApiRequest}
          checkboxCheckedCallback={this.handleCheckboxCheckedCallback}
        > 
          <>
            <button className="btn btn-danger" onClick={this.handleDeleteAdmin} disabled={checkboxCheckedValues.length === 0}>삭제</button>
            <Link to={'/admin/new'} className="btn btn-success ml-2">등록</Link>
          </>
        </ReactServerSideTable>
      </>
    );
  }
};

export default AdminList;
