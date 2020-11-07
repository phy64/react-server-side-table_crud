import React, { useState, useEffect, useCallback, useRef, createRef } from 'react';
import { Link } from 'react-router-dom';
import AdminDataService from '../../services/AdminDataService';

const Admin = (props) => {
  const adminSeq = props.match.params.id;
  const initialAdminState = {
    id: "",
    name: "",
    tel: "",
    email: ""
  };
  const initialRefs = {
    id: createRef(),
    name: createRef(),
    tel: createRef(),
    email: createRef()
  };
  const [admin, setAdmin] = useState(initialAdminState);
  const inputRefs = useRef(initialRefs);
  const fields = [
    {
      name: 'id',
      label: '관리자 ID', 
      type: 'text', 
      maxLength: null, 
      pattern: null, 
      errorMessage: {
        empty: '관리자 ID를 입력해주세요.'
      }
    },
    {
      name: 'name', 
      label: '관리자명', 
      type: 'text', 
      maxLength: null, 
      pattern: null, 
      errorMessage: {
        empty: '관리자명을 입력해주세요.'
      }
    },
    {
      name: 'tel', 
      label: '연락처', 
      type: 'text', 
      maxLength: 13, 
      pattern: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/, 
      errorMessage: {
        empty: '연락처를 입력해주세요.',
        pattern: '연락처 형식이 잘못되었습니다.'
      }
    },
    {
      name: 'email', 
      label: '이메일', 
      type: 'text', 
      maxLength: null, 
      //eslint-disable-next-line
      pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, 
      errorMessage: {
        empty: '이메일을 입력해주세요.',
        pattern: '이메일 형식이 잘못되었습니다.'
      }
    }
  ];

  const getAdmin = useCallback(async () => {
    try {
      const response = await AdminDataService.get(adminSeq);
      const { data, status } = response.data;

      if(status === 404 || status === 500){
        props.history.replace("/error");
      } else {
        setAdmin(prevState => {
          return {
            ...prevState, 
            ...data
          };
        });
      } 
    } catch (error) { 
      console.error('error', error);
    }
  }, [props, adminSeq]);

  useEffect(() => {
    if (adminSeq !== undefined) {
      getAdmin();
    }
  }, [adminSeq, getAdmin]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    if(value.search(/\s/) !== -1){
      return false;
    };

    const val = name === 'tel' ? value.replace(/[^0-9]/g, '').replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, '$1-$2-$3') : value;

    setAdmin(prevState => {
      return {
        ...prevState, 
        [name]: val
      };
    });
  };

  const validationError = (el, message) => {
    inputRefs.current[el].current.focus();
    window.alert(message);
  };

  const validationCheck = () => {
    for (const field of fields) {
      const { name, pattern, errorMessage } = field;
      const value = admin[name];

      if (value === '' || value === null || value === undefined) {
        validationError(name, errorMessage.empty);
        return true;
      };

      if (pattern !== null && !pattern.test(value)) {
        validationError(name, errorMessage.pattern);
        return true;
      };
    };

    return false;
  };

  const createAdmin = async () => {
    if (validationCheck()) {
      return false;
    };

    try {
      const response = await AdminDataService.create({ ...admin });
      const { message } = response.data;
     
      window.alert(message);
      setAdmin(initialAdminState);
    } catch (error) { 
      console.error('error', error);
    };
  };

  const updateAdmin = async () => {
    if (validationCheck()) {
      return false;
    };
    
    try {
      const response = await AdminDataService.update(adminSeq, { ...admin });
      const { message } = response.data;
     
      window.alert(message);
    } catch (error) { 
      console.error('error', error);
    };
  };

  const deleteAdmin = async () => {
    if (window.confirm("관리자 정보를 삭제하시겠습니까?")) {
      try {
        const response = await AdminDataService.remove(adminSeq);
        const { status, message } = response.data;
  
        window.alert(message);
        
        if (status === 200) {
          props.history.push("/admin");
        };
      } catch (error) { 
        console.error('error', error);
      };
    };
  };

  return (
    <>
      {
        (adminSeq === undefined || Number(adminSeq) === admin.admin_seq) && (
          <div className="submit-form">
            {
              fields.map(({ name, label, type, maxLength }) => (
                <div
                  key={name} 
                  className="form-group"
                >
                  <label htmlFor={name}>{ label }</label>
                  <input
                    ref={inputRefs.current[name]}
                    type={type}
                    className="form-control"
                    id={name}
                    value={admin[name]}
                    onChange={handleInputChange}
                    autoComplete="off"
                    name={name}
                    maxLength={maxLength}
                  />
                </div>
              ))
            }
            {
              adminSeq !== undefined && (
                <div className="form-group">
                  <label>등록일</label>
                  <div>
                    <span>{admin.reg_date}</span>
                  </div>
                </div>
              )
            }

            <Link to={"/admin"} className="btn btn-primary">
              목록으로
            </Link>

            {
              adminSeq !== undefined ? (
                <>
                  <button onClick={deleteAdmin} className="btn btn-danger ml-1">
                    삭제
                  </button>
                  <button onClick={updateAdmin} className="btn btn-success ml-1">
                    수정
                  </button>
                </>
              ) : (
                <button onClick={createAdmin} className="btn btn-success ml-1">
                  등록
                </button>
              )
            }
          </div>
        )
      }
    </>
  );
};

export default Admin;