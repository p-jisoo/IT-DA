/************************************************
 * udcExamDuoDatePicker.js
 * Created at 2021. 12. 10. 오전 8:51:15.
 *
 * @author HANS
 ************************************************/

/**
 * 날짜 선택 다이얼로그 너비 크기
 * @type {Number}
 */
var mnDpWidth = 600;

/**
 * 날짜 선택 다이얼로그 높이 크기
 * @type {Number}
 */
var mnDpHeight = 360;

/**
 * 
 * @param {String} psAppProp
 */
function getClassValid(psAppProp) {
	var result = "";
	if (psAppProp != "" && psAppProp != null) {
		psAppProp = psAppProp.trim();
		result = psAppProp;
	}
	return result;
}

exports.getClassValid = getClassValid;

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function() {
	// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
	return "";
};

exports.getValues = function() {
	var vsFromValue = app.getAppProperty("fromValue");
	var vsToValue = app.getAppProperty("toValue");
	var vsFormat = app.getAppProperty("format");
	var vsMask = app.getAppProperty("mask");
	var vsFromDate = "";
	var vsEndDate = "";
	if (vsFromValue != null && vsFromValue != "") {
		
		var voTempFrom = moment(vsFromValue, vsFormat);
		if (voTempFrom.isValid()) {
			vsFromDate = voTempFrom.format(vsMask);
		}
	}
	if (vsToValue != null && vsToValue != "") {
		
		var voTempEnd = moment(vsToValue, vsFormat);
		if (voTempEnd.isValid()) {
			vsEndDate = voTempEnd.format(vsMask);
		}
	}
	
	return [vsFromDate, vsEndDate];
}

/**
 * 현재 최상위 앱과 겹치는 영역이 있는지 확인하고,
 * 다이얼로그가 열릴 위치를 반환합니다.
 * @param {{width:Number,height:Number,top:Number,left:Number}} poDpConstraint
 * @param {cpr.geometry.Rectangle} poHostRect
 * @return {cpr.controls.layouts.Constraint}
 */
function getBoundingClientRect(poDpConstraint, poHostRect) {
	var voRootAppIns = app.getRootAppInstance();
	var vcRootCont = voRootAppIns.getContainer();
	var voRootActlRect = vcRootCont.getActualRect();
	
	var voDpHostRect = poHostRect;
	var voDpConstraint = poDpConstraint;
	
	var voNewConstraint = {
		width: voDpConstraint.width,
		height: voDpConstraint.height
	};
	
	var vnIntrsctH = voDpConstraint.top + voDpConstraint.height;
	var vnIntrsctW = voDpConstraint.left + voDpConstraint.width;
	
	if (voRootActlRect.height < vnIntrsctH) { // 높이가 벗어나는 경우
		voNewConstraint["top"] = voDpConstraint.top - voDpConstraint.height - voDpHostRect.height;
	} else {
		voNewConstraint["top"] = voDpConstraint.top;
	}
	
	if (voRootActlRect.width < vnIntrsctW) {
		voNewConstraint["right"] = voRootActlRect.width - voDpHostRect.right;
	} else {
		voNewConstraint["left"] = voDpConstraint.left;
	}
	
	return voNewConstraint;
}

/*
 * 데이트 인풋에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onDtiClick( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiFrom = e.control;
	
	var vnReadOnly = app.getHost().readOnly;
	if (vnReadOnly || e.target.getAttribute("class") == 'cl-dateinput-clear') {
		return;
	}
	var voHostRect = app.getHost().getActualRect(); // 현 UDC의 Rect
	var voDpProp = { // 다이얼로그 프롭
		width: mnDpWidth,
		height: mnDpHeight,
		top: voHostRect.bottom,
		left: voHostRect.left
	}
	
	/* 다이얼로그가 열릴 위치를 계산하여 적절한 다이얼로그를 엽니다. */
	var voReplaceConstraint = getBoundingClientRect(voDpProp, voHostRect);
	
	app.getRootAppInstance().dialogManager.openDialog("udc/exam/SelectDatePopup_POP", "DuoCalendar", voReplaceConstraint, function(dialog) {
		dialog.headerVisible = false; // 다이얼로그 헤더 visible
		dialog.resizable = false; // 다이얼로그 resize
		dialog.style.overlay.css("background-color", "transparent");
		dialog.style.setClasses("datepicker-modal");
		dialog.initValue = {
			selectOption: app.getAppProperty("selectOption")
		}
		dialog.ready(function(dialogApp) {
			//TODO 앱의 초기값을 설정하십시오.
			dialogApp.initValue = {
				fromDate: app.getAppProperty("fromValue"),
				toDate: app.getAppProperty("toValue"),
				format: app.getAppProperty("format"),
				enableDateExp: app.getAppProperty("enabledDateExp"),
				className: getClassValid(app.getAppProperty("calendarClass")),
				useTimeFormat: app.getAppProperty("useTimeFormat"),
				useAutoSelect: app.getAppProperty("useAutoSelect")
			}
			var voOpenEv = new cpr.events.CUIEvent("open");
			app.dispatchEvent(voOpenEv);
		});
		
		/* 오버레이 클릭 시 다이얼로그가 닫히며 값이 설정되도록 함 */
		dialog.addEventListener("overlay-click", function(e) {
			dialog.close();
		});
		
		/* ESC키를 누를 때 데이트피커 다이얼로그가 닫히도록 함 */
		dialog.addEventListener("keydown", function(e) {
			if (e.keyCode == cpr.events.KeyCode.ESC) {
				e.control.close();
			}
		});
		
		/* 다이얼로그가 닫혔을 때 발생하는 이벤트 정의 */
		dialog.addEventListener("close", function(e) {
			var dialog = e.control;
			
			var voCloseEv = new cpr.events.CUIEvent("close");
			app.dispatchEvent(voCloseEv);
			
			var vsRtrnVal = dialog.returnValue; // 반환 값
			if (vsRtrnVal) {
				
				var vsFromValue = app.getAppProperty("fromValue");
				var vsToValue = app.getAppProperty("toValue");
				
				var vaOldValue = [vsFromValue, vsToValue];
				var vsOldValue = vaOldValue.join(",");
				vsOldValue == "," ? null : vsOldValue;
				/** @type String[] */
				var vaNewValue = vsRtrnVal;
				var voBVCEvt = new cpr.events.CValueChangeEvent("before-value-change", {
					oldValue: vsOldValue,
					newValue: vaNewValue.join(",")
				});
				var vbIsPrevented = app.dispatchEvent(voBVCEvt);
				
				if (!voBVCEvt.defaultPrevented) {
					
					app.setAppProperty("fromValue", vsRtrnVal[0]);
					app.setAppProperty("toValue", vsRtrnVal[1]);
					
					var voVCEvt = new cpr.events.CValueChangeEvent("value-change", {
						oldValue: vsOldValue,
						newValue: vaNewValue.join(",")
					});
					app.dispatchEvent(voVCEvt);
				}
				
				app.lookup("dtiFrom").redraw();
				app.lookup("dtiTo").redraw();
			}
		});
	});
}

/*
 * "X" 버튼(btnClear)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnClearClick( /* cpr.events.CMouseEvent */ e) {
	/** 
	 * @type cpr.controls.Button
	 */
	var btnClear = e.control;
	app.lookup("dtiFrom").clear();
	app.lookup("dtiTo").clear();
	
	var voClearEvt = new cpr.events.CUIEvent("clear");
	app.dispatchEvent(voClearEvt);
}

function changeType() {
	
	var vsSelectType = app.getAppProperty("selectOption");
	
	switch (vsSelectType) {
		case "date": //과년도 동일일
			break;
		case "day":
			break;
		case "dayofweek":
			break;
		case "month":
			break;
		default:
			break;
	}
}
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad( /* cpr.events.CEvent */ e) {
	
}

/*
 * 데이트 인풋에서 clear 이벤트 발생 시 호출.
 * 인풋박스에서 esc키 또는 클리어버튼을 클릭하여 인풋의 값이 Clear될때 발생하는 이벤트
 */
function onDtiToClear( /* cpr.events.CUIEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiTo = e.control;
	
	app.lookup("dtiFrom").clear();
}