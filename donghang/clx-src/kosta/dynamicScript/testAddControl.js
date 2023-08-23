/************************************************
 * testUpdate.js
 * Created at 2023. 8. 17. 오후 3:03:17.
 *
 * @author USER
 ************************************************/

/*
 * "동적으로 컨트롤 추가" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	

	// 파일내에 존재하는 그룹컨트롤
	var vcGrp = app.lookup("grp1");
	
	// 컨트롤 동적생성
	var vcInput = new cpr.controls.InputBox();
	
	// 동적생성한 컨트롤을 그룹컨트롤에 추가
	vcGrp.addChild(vcInput, {
		autoSize: "height",  // 높이만 자동
		
	});
}
