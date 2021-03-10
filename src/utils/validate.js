class ValidateUtil {
  /**
   * Created by ztm on 16/11/18.
   */
  isValidUsername() {
    return true;
    // const valid_map = ['admin', 'editor']
    // return valid_map.indexOf(str.trim()) >= 0
  }

  /** 合法uri*/
  validateURL(textVal) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textVal)
  }

  /** 小写字母*/
  validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
  }

  /* 大写字母*/
  validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }

  /** 大小写字母*/
  validateAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  }
  /** 验证是否是中国大陆手机号码
   * Regex of exact mobile.
   * <p>china mobile: 134(0-8), 135, 136, 137, 138, 139, 147, 150, 151, 152, 157, 158, 159, 178, 182, 183, 184, 187, 188, 198</p>
   * <p>china unicom: 130, 131, 132, 145, 155, 156, 166, 171, 175, 176, 185, 186</p>
   * <p>china telecom: 133, 153, 173, 177, 180, 181, 189, 199</p>
   * <p>global star: 1349</p>
   * <p>virtual operator: 170</p>
   */
  isTel(str) {
    if (str.length != 11) return false
    const reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(16[6])|(17[0,1,3,5-8])|(18[0-9])|(19[8,9]))\d{8}$/
    return reg.test(str)
  }
  /**
   * 身份证验证
   * @param {String} ZH 
   */
  sfz_YZ(ZH) {
    var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 身份证号码加权因子
    var check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码
    var code = ZH + "";
    var last = ZH[17]; //最后一个
    var seventeen = code.substring(0, 17);
    // 判断最后一位校验码是否正确
    var arr = seventeen.split("");
    var len = arr.length;
    var num = 0;
    for (var i = 0; i < len; i++) {
      num = num + arr[i] * weight_factor[i];
    }
    // 获取余数
    var resisue = num % 11;
    var last_no = check_code[resisue]; //获取余数对应的效验码
    if (last_no === last) { //两者相等，则验证通过。反之不通过
      return 1;
    } else {
      return 0;
    }
  }
}

export default new ValidateUtil