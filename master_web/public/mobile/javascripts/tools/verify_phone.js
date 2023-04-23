// 注意格式，页面导入js直接写

// 手机号验证
function checkPhone(phone) {
  return new Promise((resolve, reject) => {
    if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
      reject(false);
    } else {
      resolve(true);
    }
  });
}

// 邮箱格式验证
function checkEmail(email) {
  return new Promise((resolve, reject) => {
    if (
      !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
        email
      )
    ) {
      reject(false);
    } else {
      resolve(true);
    }
  });
}

//  手机号或者邮箱号
function checkPhoneorEmail(PhoneorEmail) {
  return new Promise((resolve, reject) => {
    if (
      !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(
        PhoneorEmail
      ) &&
      !/^1(3|4|5|6|7|8|9)\d{9}$/.test(PhoneorEmail)
    ) {
      reject(false);
    } else {
      resolve(true);
    }
  });
}

// 密码验证
function checkPassword(password) {
  return new Promise((resolve, reject) => {
    // 密码任意字符
    if (!/^[\s\S]{6,99}$/.test(password)) {
      reject(false);
    } else {
      resolve(true);
    }
  });
}
