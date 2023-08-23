package com.tomato.donghang.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.protocol.data.RowState;
import com.cleopatra.spring.JSONDataView;

public class TestController {
	
	//해당 예제는 데이터 맵과 데이터셋을 어떻게 서버에서 생성하고 가공해서 화면으로 내려주는지 설명하는 함수 입니다.
	//샘플 clx 파일을 생성해서 확인하시면 됩니다. 확인하실땐 네트워크 탭에서 응답데이터나 미리보기 확인
	public View testData(HttpServletRequest request,HttpServletResponse response,DataRequest dataRequest)throws Exception {
        //Controller 에서 선행데이터를 만드는 방법에 대해 설명 하겠습니다. 
		//데이터셋에 데이터를 담을 list를 생성합니다. 
		List<Map<String, String>> list = new ArrayList<>();
		
		// 반복문을 통해 데이터를 추가합니다. 
		// list에 들어갈 map을 만들어서 선행데이터를 추가했습니다. 
		for(int i=0; i<50; i++) {
			Map<String,String> map = new HashMap<>();
			
			// 선행 데이터
	        String value = "test"+i;
	        String value2 = "test2"+i;
	        
	        // 상단에서 만들었던 map에 컬럼의 키값으로 데이터를 넣어줍니다. 
	        // 주의할 점은 해당 키(예:column1,column2) 는 실제적으로 clx화면에 데이터셋에 같은 이름으로 존재해야 확인할 수 있습니다.
			map.put("column1", value);
			map.put("column2", value2);
            
			// 선행데이터로 넣은 map을 이제 리스트에 추가해줍니다. 
			// 반복문을 통해 결국엔 49행의 데이터가 추가가 됩니다.
			list.add(i,map);
		}
		
		//데이터맵의 선행데이터를 만들어서 보내는 예제 
		Map<String,String> dataMap = new HashMap<>();
		
		//데이터맵은 복수의 컬럼과 단일값을 가지고 있습니다. 그렇게 때문에 list 형식으로 내리지 않고 map 형태로 데이터를 가공해주면 됩니다.
		// 이 또한 주의 할점은 데이터맵안에 컬럼(dataMapCol,dataMapCol2) 이름을 가진 컬럼들이 존재해야합니다.
		dataMap.put("dataMapCol", "확인");
		dataMap.put("dataMapCol2", "확인2");
		
		// 여기서 담아있는 데이터를 dataRequest에 setResponse를 통해 응답데이터로 설정해야 네트워크에 표시가 됩니다. 주의 
		// 요청한 서브미션 컨트롤에 응답데이터 객체에 각각 이름들이 설정되어 있어야 실제로 데이터를 확인할 수 있습니다.
		
        // dsTest 데이터셋에 해당하는 데이터 list를 담으면 됩니다. 
		// 여기서 setResponse의 첫번째 인자값은 실제로 clx 화면에서 사용하고 있는 데이터셋의 이름과 같은 이름으로 내려줘야 합니다.
		dataRequest.setResponse("dsTest", list);
		
		// dmTest 데이터맵에 해당하는 dataMap 데이터를 추가해 줍니다.
		// 여기서도 실제 clx화면에 dmTest 라는 이름을 가진 데이터맵이 존재해야 합니다.
		dataRequest.setResponse("dmTest", dataMap);
		
		return  new JSONDataView();
		
	}
	
	// 해당 함수는 이제 저장 로직을 할때 참고할 수 있는 함수입니다.
	// 주의할 점은 역시 저장을 할땐 서브미션 요청데이터에 해당 데이터셋이나 데이터맵 컨트롤이 등록되어있어야 요청데이터로 받을 수 있습니다.
	public View save(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) throws Exception {
		
		// 변경사항이 적용된 행들만 가져온다(INSERTED,DELETED,UPDATED)
		// dsTest 라는 이름을 가진 데이터셋을 요청한 서브미션 컨트롤에 요청 데이터로 추가되어있어야합니다.
		// ParameterGroup 은 클라이언트로 받은 데이터셋 또는 데이터맵을 갖는 데이터그룹 클래스 입니다.
		ParameterGroup pg = dataRequest.getParameterGroup("dsTest");
		
       // row에 변경사항의 행들 전체를 getAllRowList를 통해서 저장(수정된것들 다 저장)
		List<Map<String, String>> row = pg.getAllRowList();
		
        //행의 사이즈만큼 돌리면서 하나씩 상태를 비교한다
        for(int i = 0; i<row.size(); i++) {
       	   //추가된 상태인경우
       	  if(pg.getRowState(i) == RowState.INSERTED) {
       		// 해당 부분은 실제 하시는거에 따라서 진행을 하시면 됩니다.
       		// sqlsession.insert("test.insertList",row.get(i));
       	  }
       		//삭제된 상태의 경우
       	  if(pg.getRowState(i) == RowState.DELETED) {
       		// sqlsession.delete("test.deleteList",row.get(i));
       	  }
       		 //수정된 상태의 경우
       	  if(pg.getRowState(i) == RowState.UPDATED) {
       		// sqlsession.update("test.updateList",row.get(i));
       	  }
       	  
        }
        
        // 다른방법
        // 상단의 방법이나 다른방법 원하는 방법으로 진행해주시면 됩니다.
//		if (pg != null) {
//			Iterator<ParameterRow> iter;
//			
//			iter = pg.getInsertedRows();
//			while (iter.hasNext()) {
//				this.DAO.insertEmp(iter.next().toMap());
//			}
//			iter = pg.getUpdatedRows();
//			while (iter.hasNext()) {
//				this.DAO.updateEmp(iter.next().toMap());
//			}
//			iter = pg.getDeletedRows();
//			while (iter.hasNext()) {
//				this.DAO.deleteEmp(iter.next().toMap());
//			}
//		}
	  
		
		return new JSONDataView();
	}
	
	//해당 예제는 검색을 예로 하는 함수입니다. 요청데이터에 dmParam이 존재 할때 해당 값을 가지고 활용하는 방법
	public View testSearch(HttpServletRequest request,HttpServletResponse response,DataRequest dataRequest)throws Exception {
		
        //데이터맵 dmParam의 데이터를 가져온다.
		ParameterGroup parameterGroup = dataRequest.getParameterGroup("dmParam");
		
		//맵을 만들어줍니다.
		Map<String, String> map = new HashMap<>();
		
		// map안에  가져올 list의 컬럼중에 where절에 활용이될 컬럼(예 EX)에 적재를해주고, 값을 요청데이터로 보낸 dmParam의 컬럼 str지정한다.
		map.put("EX", parameterGroup.getValue("str"));
		
		// 이부분에서 실제적으로 데이터를 조회해서 list로 가져옵니다
		// 인자값으로 들어가는 map은 EX 라는 key에 저희가 클라이언트에서 가져온 dmParam의 str 컬럼의 값이 세팅되서 들어갑니다.
		//List<Map<String, String>> list = Service_lcm.selectList(map);
		
		// 여기서 담아있는 데이터를 dataRequest에 setResponse를 통해 응답데이터로 설정해야 네트워크에 표시가 됩니다. 주의 
		// 요청한 서브미션 컨트롤에 응답데이터 객체에 각각 이름들이 설정되어 있어야 실제로 데이터를 확인할 수 있습니다.
		
        // dsTest 데이터셋에 해당하는 데이터 list를 담으면 됩니다. 
		// 여기서 setResponse의 첫번째 인자값은 실제로 clx 화면에서 사용하고 있는 데이터셋의 이름과 같은 이름으로 내려줘야 합니다.
		//dataRequest.setResponse("dsTest", list);
		
	
		return  new JSONDataView();
		
	}
}

