
mdrRestGet = function (ip, user, pass, url) {
  //console.log('less deprecated (mdr package)');
  var requrl = "https://" + ip + "/mgmt/tm" + url;
  var authString = user + ":" + pass;
  try {
    var result = HTTP.get(requrl, {auth: authString}).data;
    return result;
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestGetv2 = function (onDevice, lurl) {
  //console.log('less deprecated (mdr package)');
  var device = Devices.findOne({_id: onDevice});
  var ip = device.mgmtAddress;
  var user = device.mgmtUser;
  var pass = device.mgmtPass;
  var url = lurl.replace(/localhost/, ip);
  var authString = user + ":" + pass;
  try {
    var response = HTTP.get(url, {auth: authString}).data;
    return response;
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestPost = function (onDevice, lurl, postData) {
  //console.log('less deprecated (mdr package)');
  var device = Devices.findOne({_id: onDevice});
  var ip = device.mgmtAddress;
  var user = device.mgmtUser;
  var pass = device.mgmtPass;
  var url = lurl.replace(/localhost/, ip);
  var authString = user + ":" + pass;
  try {
    var response = HTTP.post(url, {auth: authString, data: postData});
    return response;
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestPut = function (onDevice, lurl, putData) {
  //console.log('less deprecated (mdr package)');
  var device = Devices.findOne({_id: onDevice});
  var ip = device.mgmtAddress;
  var user = device.mgmtUser;
  var pass = device.mgmtPass;
  var url = lurl.replace(/localhost/, ip);
  var authString = user + ":" + pass;
  try {
    var response = HTTP.put(url, {auth: authString, data: putData});
    return response;
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestDelete = function (onDevice, lurl) {
  //console.log('less deprecated (mdr package)');
  var device = Devices.findOne({_id: onDevice});
  var ip = device.mgmtAddress;
  var user = device.mgmtUser;
  var pass = device.mgmtPass;
  var url = lurl.replace(/localhost/, ip);
  var authString = user + ":" + pass;
  try {
    var response = HTTP.del(url, {auth: authString});
    return response;
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestGet = function (ip, user, pass, url) {
  //console.log('less deprecated (mdr package)');
  // console.log("deprecated rest get bigipRestGet");
  var requrl = "https://" + ip + "/mgmt/tm" + url;
  var authString = user + ":" + pass;
  try {
    var result = HTTP.get(requrl, {auth: authString}).data.items;
    if (typeof result !== 'undefined') {
      return result;
    }
    else {
      return [];
    }
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}

mdrBigipRestGetItems = function (onDevice, lurl) {
  //console.log('less deprecated (mdr package)');
  var device = Devices.findOne({_id: onDevice});
  var ip = device.mgmtAddress;
  var user = device.mgmtUser;
  var pass = device.mgmtPass;
  var url = lurl.replace(/localhost/, ip);
  var authString = user + ":" + pass;
  try {
    var result = HTTP.get(url, {auth: authString}).data.items;
    if (typeof result !== 'undefined') {
      return result;
    }
    else {
      return [];
    }
  } catch (e) {
    console.log(e);
    throw new Meteor.Error(e);
  }
}
