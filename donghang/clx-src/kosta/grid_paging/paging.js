/************************************************
 * paging.js
 * Created at 2023. 8. 17. 오후 5:11:42.
 *
 * @author USER
 ************************************************/
/**
 * 페이지인덱서 컨트롤을 사용하여 그리드의 데이터를 페이징합니다.
 * @param {Number} vnPageRow
 */
function gridPaging(vnPageRow) {
	var vcGridSample = app.lookup("grd1");
	var vcPageIndexer = app.lookup("page");
	
	/*  입력된 수로 페이지 인덱서의 pageRowCount를 지정합니다. */
	vcPageIndexer.pageRowCount = vnPageRow;
	vcPageIndexer.redraw();

	/* 페이징의 첫번째 행 번호와 마지막 행 번호를 지정합니다. */
	var currentPageIndex = vcPageIndexer.currentPageIndex;
	var startRowIndex = (currentPageIndex - 1) * vcPageIndexer.pageRowCount;
	var endRowIndex = currentPageIndex * vcPageIndexer.pageRowCount;
	
	/* 페이징이 될 때마다 그리드의 첫번째 행의 번호를 지정해줍니다. */
	vcGridSample.rowIndexerStartNum = (startRowIndex + 1);

	/* filter 조건을 통해 그리드를 페이징합니다. */
	//DataView는 데이터셋의 데이터를 이용하여 데이터 구조의 보기형식을 변경할 수 있는 데이터 객체.
    //데이터셋의 데이터를 이용하여 필터, 정렬된 데이터 구조가 저장됩니다.
    //그렇기 때문에 그리드에 데이터셋을 바인딩 하는게 아닌 dvTest 라는 하나의 데이터뷰를 만들어서 바인딩 합니다. 주의***
	vcGridSample.setFilter(startRowIndex + " < getIndex() && getIndex() <= " + endRowIndex);
	vcGridSample.redraw();
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	// 조회를 했다는 시나리오 였습니다. 삭제하셔도됩니다 해당 스크립트는 
	//app.lookup("sms1").send();
	
	// 페이지 인덱서 컨트롤의 pageRowCount 속성을 이용하여 한페이지에 보여질 행의 수를 보낸다 default 값은 20 입니다. 한페이지에 20개씩 보인다는 의미 
	// 페이지 인덱서에 일반 속성에 totalCount를 익스프레션 바인딩으로 데이터셋의 총행의 수를 바인딩 먼저 해야합니다. 주의***
    gridPaging(app.lookup("page").pageRowCount);

}

/*
 * 페이지 인덱서에서 selection-change 이벤트 발생 시 호출.
 * Page index를 선택하여 선택된 페이지가 변경된 후에 발생하는 이벤트.
 */
function onPageSelectionChange(e){
	
	/** 
	 * @type cpr.controls.PageIndexer
	 */
      var page = e.control;
	
	gridPaging(page.pageRowCount);
}

