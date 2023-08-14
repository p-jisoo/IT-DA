/************************************************
 * smpUdcSelectDatePopup_POP.js
 * Created at 2021. 12. 10. 오전 8:53:22.
 *
 * @author HANS
 ************************************************/

var msSelectOption = "";

/*
 * 캘린더에서 before-value-change 이벤트 발생 시 호출.
 * Calendar의 value를 변경하여 변경된 값이 저장되기 전에 발생하는 이벤트. 다음 이벤트로 value-change가 발생합니다.
 */
function onCal1BeforeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var vcStCal = e.control;
	var vsNewValue = e.newValue;
	var vcEdCal = app.lookup("cal2");
	vcEdCal.putValues([vsNewValue]);
	
	var vsNextMont = moment(vcEdCal.current).add(1, "month");
	vcEdCal.navigate(vsNextMont);
	
	var vaFromTime = vsNewValue.split(vcStCal.delimiter);
	var vsFromTime = vaFromTime[0];
	app.lookup("dtiFromTime").putValue(vsFromTime);
}

/*
 * 캘린더에서 before-value-change 이벤트 발생 시 호출.
 * Calendar의 value를 변경하여 변경된 값이 저장되기 전에 발생하는 이벤트. 다음 이벤트로 value-change가 발생합니다.
 */
function onCal2BeforeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.Calendar
	 */
	var vcEdCal = e.control;
	var vcStCal = app.lookup("cal1");
	var vsOldValue = e.oldValue;
	var vsDelimeter = vcEdCal.delimiter;
	
	var vsOldCheck = vsOldValue.replace(vsDelimeter, "");
	var vsNewValue = e.newValue;
	if (vsOldCheck != null && vsOldCheck != "") {
		
		vsOldValue = vsOldValue.split(vcEdCal.delimiter)[0];
		if (vsNewValue.indexOf(vcEdCal.delimiter) == -1) {
			e.preventDefault();
			
			vcStCal.putValues([vsOldValue, vsNewValue]);
			vcEdCal.putValues([vsOldValue, vsNewValue]);
			
		} else {
			vcStCal.putValue(vsNewValue);
		}
		
		vcStCal.navigate(moment(vsOldValue, vcEdCal.format));
	} else {
		e.preventDefault();
		
		if (msSelectOption != "" && msSelectOption != null) {
			if (msSelectOption == "date") {
				var vsFromDate = moment(vsNewValue, vcEdCal.format).subtract(1, 'year').format(vcEdCal.format);
				vcStCal.putValues([vsFromDate, vsNewValue]);
				vcEdCal.putValues([vsFromDate, vsNewValue]);
				vcStCal.navigate(moment(vsFromDate, vcStCal.format));
				
			} else if (msSelectOption == "dayofweek") {
				var vsFromDate = moment(vsNewValue, vcEdCal.format).subtract(364, "day").format(vcEdCal.format);
				vcStCal.putValues([vsFromDate, vsNewValue]);
				vcEdCal.putValues([vsFromDate, vsNewValue]);
				vcStCal.navigate(moment(vsFromDate, vcStCal.format));
			}
		}
	}
}

/*
 * "OK" 버튼(btnOK)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnOKClick( /* cpr.events.CMouseEvent */ e) {
	app.close(app.lookup("cal1").values);
}

/*
 * "Cancel" 버튼(btnCancel)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtnCancelClick( /* cpr.events.CMouseEvent */ e) {
	app.close();
}

/*
 * 루트 컨테이너에서 init 이벤트 발생 시 호출.
 * 앱이 최초 구성될 때 발생하는 이벤트 입니다.
 */
function onBodyInit( /* cpr.events.CEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2")
	var voInit = app.getHostProperty("initValue");
	if (voInit != null) {
		var vsSelectOption = voInit["selectOption"];
		if (vsSelectOption == "month") {
			vcStCal.calendarType = "yearmonth";
			vcEdCal.calendarType = "yearmonth";
			
		} else {
			vcStCal.calendarType = "yearmonthdate";
			vcEdCal.calendarType = "yearmonthdate";
		}
	}
	var vsSelectOption = voInit["selectOption"];
	msSelectOption = vsSelectOption;
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad( /* cpr.events.CEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	
	var vcDtiFromTime = app.lookup("dtiFromTime");
	var vcDtiToTime = app.lookup("dtiToTime");
	var voInitValue = app.getHostProperty("initValue");
	
	if (voInitValue) {
		
		var vsEnableExp = voInitValue["enableDateExp"];
		/** @type String */
		var vsFormat = voInitValue["format"];
		if (vsEnableExp != "" && vsEnableExp != null) {
			vcStCal.enabledDateExp = vsEnableExp;
			vcEdCal.enabledDateExp = vsEnableExp;
		}
		
		if (vsFormat != "" && vsFormat != null) {
			vcStCal.format = vsFormat;
			vcEdCal.format = vsFormat;
			
			//TODO should refactoring
			var vbUseTime = voInitValue["useTimeFormat"];
			if (vbUseTime) {
				vcDtiFromTime.format = vsFormat;
				vcDtiFromTime.visible = true;
				vcDtiToTime.format = vsFormat;
				vcDtiToTime.visible = true;
			} else {
				vcDtiFromTime.visible = false;
				vcDtiToTime.visible = false;
			}
		}
		
		var vsClassName = voInitValue["className"];
		if (vsClassName != "" && vsClassName != null) {
			vcStCal.style.addClass(vsClassName);
			vcEdCal.style.addClass(vsClassName);
		}
		
		var vsFromDate = voInitValue["fromDate"];
		var vsEndDate = voInitValue["toDate"];
		var vaDate = [];
		if (!(vsFromDate == null || vsFromDate == "null")) {
			vaDate.push(vsFromDate);
		}
		if (!(vsEndDate == null || vsEndDate == "null")) {
			vaDate.push(vsEndDate);
		}
		vcStCal.values = vaDate;
		vcEdCal.values = vaDate;
		
		if (vsFromDate != "" && vsFromDate != null) {
			vcStCal.navigate(moment(vsFromDate, vsFormat));
		}
		
		if (vsEndDate != "" && vsEndDate != null) {
			vcEdCal.navigate(moment(vsEndDate, vsFormat));
		}
		vcStCal.focus();
		
		/** @type Boolean */
		var vbUseAutoSelect = voInitValue["useAutoSelect"];
		var bodyLayout = app.getContainer().getLayout();
		bodyLayout.setColumnVisible(0, vbUseAutoSelect);
		
	}
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDtiFromTimeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiFromTime = e.control;
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	var vaValues = vcStCal.values;
	
	vcStCal.putValues([dtiFromTime.value, vaValues[1]]);
	vcEdCal.putValues([dtiFromTime.value, vaValues[1]]);
	vcStCal.navigate(moment(dtiFromTime.value, vcStCal.format));
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDtiToTimeValueChange( /* cpr.events.CValueChangeEvent */ e) {
	/** 
	 * @type cpr.controls.DateInput
	 */
	var dtiToTime = e.control;
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	var vaValues = vcStCal.values;
	
	vcStCal.putValues([vaValues[0], dtiToTime.value]);
	vcEdCal.putValues([vaValues[0], dtiToTime.value]);
	vcStCal.navigate(moment(vaValues[0], vcStCal.format));
}

/*
 * "금주" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	
	var sunday = sundayMaker(vcStCal);
	var saturday = saturdayMaker(vcStCal);
	vcStCal.putValues([sunday, saturday]);
	vcEdCal.putValues([sunday, saturday]);
}

function sundayMaker(vcCal) {
	var defaultDate = vcCal.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	
	//요일에 따른 월요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	
	var date;
	if (week != 0) {
		date = defaultDate.getDate() - (week);
		
		//전 달로 넘어갔는지 체크
		if (date < 1) {
			var preMaxDate = new Date(year, month - 1, 0);
			month = month - 1;
			date = preMaxDate.getDate() + date;
			
			//전 년도로 넘어갔는지 체크
			if (month == 0) {
				month = 12;
				year = year - 1;
			}
		}
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	}
	
	return year + "" + month + "" + date + "";
}

function saturdayMaker(vcCal) {
	var defaultDate = vcCal.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	
	//요일에 따른 일요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	week = 6 - week;
	
	//다음 달로 넘어갔는지 체크
	var currentMaxDate = new Date(year, month, 0).getDate();
	
	var date = defaultDate.getDate() + week;
	if (currentMaxDate < date) {
		month = month + 1;
		date = date - currentMaxDate;
	}
	
	//다음 년도로 넘어갔는지 체크
	if (month == 13) {
		year = year + 1;
		month = 1;
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	}
	
	return year + "" + month + "" + date + "";
}

/*
 * "전주" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	
	var sunday = preSundayMaker(vcStCal);
	var saturday = preSaturdayMaker(vcStCal);
	vcStCal.putValues([sunday, saturday]);
	vcEdCal.putValues([sunday, saturday]);
}

function preSundayMaker(vcCal) {
	var defaultDate = vcCal.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	
	//요일에 따른 월요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	
	var date;
	if (week != 0) {
		//전 달로 넘어갔는지 체크
		date = defaultDate.getDate() - (week) - 7;
		if (date < 1) {
			var preMaxDate = new Date(year, month - 1, 0);
			month = month - 1;
			date = preMaxDate.getDate() + date;
			
			//전 년도로 넘어갔는지 체크
			if (month == 0) {
				month = 12;
				year = year - 1;
			}
		}
	}
	
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	}
	
	return year + "" + month + "" + date + "";
}

function preSaturdayMaker(vcCal) {
	var defaultDate = vcCal.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var date;
	
	//요일에 따른 일요일 계산
	var week = defaultDate.getDay();
	if (week == 0) {
		week = 7;
	}
	week = 7 - (7 - week);
	
	//전 달로 넘어갔는지 체크
	date = defaultDate.getDate() - week - 1;
	if (date < 1) {
		var preMaxDate = new Date(year, month - 1, 0);
		month = month - 1;
		date = preMaxDate.getDate() + date;
		
		//전 년도로 넘어갔는지 체크
		if (month == 0) {
			month = 12;
			year = year - 1;
		}
	}
	
	//다음 달로 넘어갔는지 체크
	//달이 한자리 수인지 체크 (한자리 수 일 경우 앞에 0 추가)
	if (month < 10) {
		month = '0' + month;
	}
	
	return year + "" + month + "" + date + "";
}

/*
 * "당월" 버튼(btn3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn3Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	var year = vcStCal.defaultDate.getFullYear();
	var month = vcStCal.defaultDate.getMonth() + 1;
	var maxDate = new Date(year, month, 0).getDate();
	
	if (month < 10) {
		month = '0' + month;
	}
	
	var start = year + "" + month + "" + '01';
	var end = year + "" + month + "" + maxDate;
	
	vcStCal.putValues([start, end]);
	vcEdCal.putValues([start, end]);
}

/*
 * "전월" 버튼(btn4)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn4Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	var year = vcStCal.defaultDate.getFullYear();
	var month = vcStCal.defaultDate.getMonth();
	
	if (month == 0) {
		year = year - 1;
		month = 12;
	}
	
	var maxDate = new Date(year, month, 0).getDate();
	
	if (month < 10) {
		month = '0' + month;
	}
	
	var start = year + "" + month + "" + '01';
	var end = year + "" + month + "" + maxDate;
	vcStCal.putValues([start, end]);
	vcEdCal.putValues([start, end]);
}

/*
 * "당분기" 버튼(btn5)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn5Click( /* cpr.events.CMouseEvent */ e) {
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var startMonth;
	
	//분기 체크
	if (month % 3 == 0) {
		month = month - 2;
	} else if (month % 3 == 2) {
		startMonth = month - 1;
	}
	
	//month 2자리수로 만듬
	if (startMonth < 10) {
		startMonth = '0' + startMonth;
	}
	
	var endMonth = '0' + (month + 2);
	
	// month가 8월 이상일 경우 앞에 '0' 자름
	if (endMonth.length >= 3) {
		endMonth = endMonth.slice(1);
	}
	
	var maxDate = new Date(year, endMonth, 0).getDate();
	
	var start = year + '' + startMonth + '' + '01';
	var end = year + '' + endMonth + '' + maxDate;
	
	var navStart = year + '-' + startMonth + '-' + '01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}

/*
 * "전분기" 버튼(btn6)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn6Click( /* cpr.events.CMouseEvent */ e) {
	var cal1 = app.lookup("cal1");
	var cal2 = app.lookup("cal2");
	
	var defaultDate = cal1.defaultDate;
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() - 2;
	var startMonth;
	
	//전 년도로 넘어갔을 경우
	if (month < 1) {
		year = year - 1;
		month = 12 + month;
	}
	
	//분기 체크
	if (month % 3 == 0) {
		startMonth = month - 2;
	} else if (month % 3 == 2) {
		startMonth = month - 1;
	} else {
		startMonth = month;
	}
	
	var endMonth = startMonth + 2;
	
	//month 2자리수로 만듬
	if (startMonth < 10) {
		startMonth = '0' + startMonth;
	}
	
	if (endMonth < 10) {
		var endMonth = '0' + endMonth;
	}
	
	var maxDate = new Date(year, endMonth, 0).getDate();
	
	var start = year + '' + startMonth + '' + '01'
	var end = year + '' + endMonth + '' + maxDate;
	
	var navStart = year + '-' + startMonth + '-' + '01';
	
	cal1.putValues([start, end]);
	cal2.putValues([start, end]);
	cal1.navigate(new Date(navStart));
}
/*
 * "금년(전체)" 버튼(btn8)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn8Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	
	var year = vcStCal.defaultDate.getFullYear();
	var start = year + '0101';
	var end = year + '1231';
	vcStCal.putValues([start, end]);
	vcEdCal.putValues([start, end]);
	
	var navStart = year + '-01-01';
	vcStCal.navigate(new Date(navStart));
}

/*
 * "전년(전체)" 버튼(btn10)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn10Click( /* cpr.events.CMouseEvent */ e) {
	var vcStCal = app.lookup("cal1");
	var vcEdCal = app.lookup("cal2");
	
	var year = vcStCal.defaultDate.getFullYear() - 1;
	var start = year + '0101';
	var end = year + '1231';
	vcStCal.putValues([start, end]);
	vcEdCal.putValues([start, end]);
	
	var navStart = year + '-01-01';
	vcStCal.navigate(new Date(navStart));
}