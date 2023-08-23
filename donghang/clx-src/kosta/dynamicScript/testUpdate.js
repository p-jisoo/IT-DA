/************************************************
 * testUpdate.js
 * Created at 2023. 8. 17. 오후 3:03:17.
 *
 * @author USER
 ************************************************/

/*
 * "그룹 컨트롤 크기 변경" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click2(e){
	var btn1 = e.control;
	
	// 루트컨테이너
	var rootContainer = app.getContainer();
	
	// 동적으로 변경할 컨트롤 객체
	var vcGrp = app.lookup("grp1");
	
	//루트 컨테이너 안에 그룹이 존재함으로 rootContainer의 updateConstraint 해야한다. 즉 감싸고 있는 그룹을 타겟으로 잡아야한다.
	rootContainer.updateConstraint(vcGrp, {
		height: 600
	});
}

/*
 * "그룹내 컨트롤 크기 변경" 버튼(btn3)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn3Click(e){
	var btn3 = e.control;
	
	// 동적으로 변경할 그룹내 컨트롤 객체
	var vcBtn = app.lookup("btn2");
	
	// 그룹컨트롤 객체
	var vcGrp = app.lookup("grp1");
	
	//그룹컨트롤 안의 컨트롤을 변경하려면 vcGrp의 updateConstraint 해야함, 즉 감싸고 있는 그룹을 타겟으로 잡아야한다.
	vcGrp.updateConstraint(vcBtn, {
		height: 200
	});
}
