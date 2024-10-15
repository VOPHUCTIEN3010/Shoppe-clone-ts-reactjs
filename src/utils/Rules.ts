import type {RegisterOptions} from 'react-hook-form';
type Rules = {[key in 'email' | 'password']?: RegisterOptions}

export const Rules = {
  email: {
    required: 'Vui lòng nhập email',
    pattern: {
      value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      message: 'Email không h��p lệ'
    },
    maxLength: { 
        value: 160,
        message: 'Độ dài từ 5-160 kí tự'
    },
    minLength: { 
        value: 5,
        message: 'Độ dài từ 5-160 kí tự'
    }
  },
  password: {
    required: 'Vui lòng nhập Password',
    maxLength: { 
        value: 160,
        message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: { 
        value: 6,
        message: 'Độ dài từ 6-160 kí tự'
    }
  },
  confirm_password: {
    required: 'Vui lòng nhập lại Password',
    maxLength: { 
        value: 160,
        message: 'Độ dài từ 6-160 kí tự'
    },
    minLength: { 
        value: 6,
        message: 'Độ dài từ 6-160 kí tự'
    }
  }
}

