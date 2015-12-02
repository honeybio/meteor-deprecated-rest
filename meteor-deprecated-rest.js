// Write your package code here!
restGet: function (ip, user, pass, url) {
  console.log('deprecated');
  this.unblock();
  var requrl = "https://" + ip + "/mgmt/tm" + url;
  var authString = user + ":" + pass;
  try {
    var result = HTTP.get(requrl, {auth: authString}).data;
    return result;
  } catch (e) {
    throw new Meteor.Error(e);
  }
},
bigipRestGetv2: function (onDevice, lurl) {
  console.log('deprecated');
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
    throw new Meteor.Error(e);
  }
},
bigipRestPost: function (onDevice, lurl, postData) {
  console.log('deprecated');
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
    throw new Meteor.Error(e);
  }
},
bigipRestPut: function (onDevice, lurl, putData) {
  console.log('deprecated');
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
    throw new Meteor.Error(e);
  }
},
bigipRestDelete: function (onDevice, lurl) {
  console.log('deprecated');
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
    throw new Meteor.Error(e);
  }
},
bigipRestGet: function (ip, user, pass, url) {
  console.log('deprecated');
  // console.log("deprecated rest get bigipRestGet");
  this.unblock();
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
    throw new Meteor.Error(e);
  }
},
bigipRestGetItems: function (onDevice, lurl) {
  console.log('deprecated');
  this.unblock();
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
    throw new Meteor.Error(e);
  }
}
