/************************************************
 * I14306.js
 * Created at 2022. 9. 14. 오후 1:09:58.
 *
 * @author 
 ************************************************/

/*
 * 서브미션에서 before-submit 이벤트 발생 시 호출.
 * 통신을 시작하기전에 발생합니다.
 */
function onSms1BeforeSubmit(e){
	var sms1 = e.control;
	
	sms1.setRequestEncoder(_requestEncoder);	
	sms1.setResponseDecoder(_responseDecoder);
}


/**
 * @private
 * @param {cpr.protocols.Submission} submission
 * @param {Object} reqData
 */
function _responseDecoder(submission, resData) {
	 
	var _app = submission.getAppInstance();
	
	var resDataObj = JSON.parse(resData);
	
	var voProtocolJson = {};
	
	for (var key in resDataObj) {
		for (var subKey in resDataObj[key]) {
			voProtocolJson[subKey] = resDataObj[key][subKey];
		}
	}
	
	return {contentType : "application/json", content : voProtocolJson};
}
/**
 * 
 * @param {cpr.protocols.Submission} submission
 * @param {Object} reqData
 */
function _requestEncoder(submission, reqData) { 
	var reqDataObj = reqData["data"];
	
	if(!cpr.utils.Util.isNullOrEmpty(reqData["reqObj"])){
		reqDataObj["reqObj"] = reqData["reqObj"];		
	}
//	var reqDataObj  = req["product"];
	//var voJsonType = {"code":"1"} ;
//	var vsTemp = "{ " ;
//	var varTEmp = JSON.stringify(reqDataObj)  
//	var varTEmp1 = JSON.parse(varTEmp);
//	for (var key in reqDataObj) { 
//			for (var keySub in reqDataObj[key]) { 
//		        var vsValue = reqDataObj[key][keySub]; 
//		        vsTemp =  
//	    }  
//	}
	
	return {"content" : reqDataObj};
}
