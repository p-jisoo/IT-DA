package com.tomato.donghang.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;
import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.service.EduApplyBoardService;
import com.tomato.donghang.model.vo.EduApplyBoardVO;
import com.tomato.donghang.model.vo.EduApplyCommentBoardVO;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController 
@RequiredArgsConstructor
@Slf4j
public class EduApplyBoardController {
	private final EduApplyBoardService eduApplyBoardService;
	private final EduApplyBoardMapper eduApplyBoardMapper;
	@PostMapping("/ui/testajax.do")
	public String testAjax() { 
		return "hello ajax";  
	}
	
	@GetMapping("/ui/toBoardList.do")
	public View BoardList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("/ui/eduApplyboardList.clx");
	}
	
	
	//리스트에서 게시판등록
	@GetMapping("/ui/createBoardUI.do")
	public View createBoardUI(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("/ui/createBoard.clx");
	}

	@GetMapping("/ui/eduApplyboardList")
	public View eduApplyboardList() {
		return new UIView("/ui/eduApplyboardList.clx");
	}
	@GetMapping("/ui/detailBoardUI.do")
	public View detailBoardUI() {
		return new UIView("/ui/detailBoard.clx");
	}

	@PostMapping("/ui/findBaordList.do")
	public View findBoardList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		List<Map<String, Object>> data = eduApplyBoardService.findBaordList();
		dataRequest.setResponse("ds1", data);
		return new JSONDataView();
	}
	
	@PostMapping("/ui/findBoardListByPage.do")
	public View findBoardListByPage(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm1");
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListWithStatusByPage(param);
		dataRequest.setResponse("ds1", data);
		return new JSONDataView();
	}
	@PostMapping("/ui/findBoardListWithStatusByPage.do")
	public View findBoardListWithStatusByPage(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm2");
		log.debug("param {}",param.getValue("status"));
		log.debug("nowpage {}",param.getValue("nowpage"));
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListWithStatusByPage(param);
		dataRequest.setResponse("ds3", data);
		return new JSONDataView();
	}
	@PostMapping("/ui/findBoardListPageAndSearchKeyword.do")
	public View findBoardListPageAndSearchKeyword(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm3");
//		log.debug("param {}",param.getValue("type"));
//		log.debug("nowpage {}",param.getValue("keyword"));
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListPageAndSearchKeyword(param);
		dataRequest.setResponse("ds3", data);
		dataRequest.setParameter("keyword", param.getValue("keyword"));
		log.info("data {}", data);
		return new JSONDataView();
	}
	

	@PostMapping("ui/loginCheck.do")
	public View loginSession(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		if(session==null) {
			return new JSONDataView();
		}else {
			MemberVO vo = (MemberVO) session.getAttribute("mvo");
			if (vo != null) {
				dataRequest.setResponse("name", vo.getUserName());
			}
			return new JSONDataView();
		}
	}
	
	@PostMapping("ui/likeCaculate.do")
	public View likeCaculate(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		ParameterGroup param = dataRequest.getParameterGroup("dm1");
		MemberVO memberVO =  (MemberVO) session.getAttribute("mvo");
		eduApplyBoardService.likeCaculate(memberVO.getUserId(),param.getValue("board_no"));
		log.info("like {}", param.getValue("board_no").getClass());
		return new JSONDataView();
	}
	
	
	@PostMapping("ui/applyEduBoard.do")
	public View applyEduBoard(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		ParameterGroup param = dataRequest.getParameterGroup("dm1");
		MemberVO memberVO = (MemberVO) session.getAttribute("mvo");
		eduApplyBoardService.applyEduBoard(memberVO.getUserId(),param.getValue("board_no"));
		return new JSONDataView();
	}
		@PostMapping("ui/cancelEduBoard.do")
	public View cancelEduBoard(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		ParameterGroup param = dataRequest.getParameterGroup("dm1");
		MemberVO memberVO = (MemberVO) session.getAttribute("mvo");
		eduApplyBoardService.cancelEduBoard(memberVO.getUserId(),param.getValue("board_no"));
		return new JSONDataView();
	}
	
/****************hyeok************************************/	
	//board CRUD
	@PostMapping("/ui/selectBoardByBoardNo.do")
	public View selectBoardByBoardNo(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		HttpSession session = request.getSession(false);
		Map<String, Object> dataMap=eduApplyBoardService.selectBoard(param);
		//145 여기서부터 
		long canApply = 0;
		Integer likeCount;
		long eduBoardNo = Long.parseLong(param.getValue("EDU_BOARD_NO"));
		if(session==null || session.getAttribute("mvo")==null) {
			likeCount = eduApplyBoardService.likeCount(eduBoardNo);
			canApply=100;
		}else {						
			MemberVO memberVO =  (MemberVO) session.getAttribute("mvo");
			Map<String, Object> map = new HashMap<>();
			String userId = memberVO.getUserId();
			if(userId.equals(dataMap.get("USER_ID"))) {
				canApply =2;
			}else {
				canApply = eduApplyBoardService.checkCanApply(userId,eduBoardNo);
			}
			map.put("eduBoardNo", eduBoardNo);
			map.put("userId", userId);
			likeCount = eduApplyBoardMapper.isLike(map);
		}
		dataMap.put("IsLike", likeCount);
		dataMap.put("canApply",canApply);
		dataRequest.setResponse("eduApplyBoardMap", dataMap);
		return  new JSONDataView();
	}
	@PostMapping("/ui/createBoard.do")
	public View createBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
		
		eduApplyBoardService.createBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}
	@PostMapping("/ui/updateBoard.do")
	public View updateBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
		
		eduApplyBoardService.updateBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}
	@PostMapping("/ui/deleteBoard.do")
	public View deleteBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
		
		eduApplyBoardService.deleteBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}
	//comment CRUD
	@PostMapping("/ui/selectCommentBoard.do")
	public View selectCommentBoardByBoardNo(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
        
		HttpSession session = request.getSession(false);
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		
		if(session !=null) {
			if(session.getAttribute("mvo") != null) {
				
			MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");    
			Map<String, Object> dataMap = new HashMap<>();
			dataMap.put("USER_ID", mvo1.getUserId());
			dataRequest.setResponse("commentBoardMap", dataMap);
			}
		}
		
		List<Map<String, Object>> data=eduApplyBoardService.selectCommentBoard(param);
		dataRequest.setResponse("commentListSet", data);
		return  new JSONDataView();
	}
	
	@PostMapping("/ui/createCommentBoard.do")
	public View createCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {        
		
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
		
		eduApplyBoardService.createCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx");
	}
	@PostMapping("/ui/updateCommentBoard.do")
	public View updateCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
        
		eduApplyBoardService.updateCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx");
	}
	@PostMapping("/ui/deleteCommentBoard.do")
	public View deleteCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		
        HttpSession session = request.getSession(false);
        MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");
        param.setValue(0, "USER_ID", mvo1.getUserId());
		
		eduApplyBoardService.deleteCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx"); 
	}	

//////////////////////////////////////////////////////////////////	
	@PostMapping("/ui/selectMemberCount.do")
	public View selectMemberCount(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMemeberCountMap");
		Map<String, Object> dataMap=eduApplyBoardService.selectMemberCount(param);
		dataRequest.setResponse("eduApplyBoardMemeberCountMap", dataMap);
		return  new JSONDataView();
	}
	@PostMapping("/ui/updateMemberCount.do")
	public View updateMemberCount(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMemeberCountMap");
		eduApplyBoardService.updateMemberCount(param);
		return new UIView("/ui/detailBoard.clx");
	}
	
	@PostMapping("/ui/createSessionCheck.do")
	public View createSessionCheck(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
        
		HttpSession session = request.getSession(false);
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		
		if(session !=null) {
			if(session.getAttribute("mvo") != null) {
				
			MemberVO mvo1 = (MemberVO) session.getAttribute("mvo");    
			Map<String, Object> dataMap = new HashMap<>();
			dataMap.put("USER_ID", mvo1.getUserId());
			dataRequest.setResponse("createSessionCheckMap", dataMap);
			}
		}
		return  new JSONDataView();
	}
	
	/****************hyeok************************************/
	@GetMapping("ui/mypage")
	public View mypageForm() {
		return new UIView("ui/mypage.clx");
	}
	@PostMapping("ui/appliedList.do")
	public View findAppliedListByUserId(HttpServletRequest request,HttpServletResponse response, DataRequest datarequest) {
		HttpSession session= request.getSession(false);
		MemberVO mvo = (MemberVO) session.getAttribute("mvo");
		List<Map<String, String>> data = eduApplyBoardService.findAppliedListByUserId(mvo.getUserId());
		datarequest.setResponse("ds1", data);
		
		
		return new JSONDataView();
	} 
	@PostMapping("ui/applyList.do")
	public View findAppliyingListByUserId(HttpServletRequest request,HttpServletResponse response, DataRequest datarequest) {
		HttpSession session= request.getSession(false);
		MemberVO mvo = (MemberVO) session.getAttribute("mvo");
		List<Map<String, String>> data = eduApplyBoardService.findApplyingListByUserId(mvo.getUserId());
		datarequest.setResponse("ds1", data);
		return new JSONDataView();
	} 
	@PostMapping("ui/commentList.do")
	public View findCommentListByUserIdAndBoardNo(HttpServletRequest request,HttpServletResponse response, 
			DataRequest datarequest) {
		HttpSession session= request.getSession(false);
		MemberVO mvo = (MemberVO) session.getAttribute("mvo");
		List<Map<String, String>> data = eduApplyBoardService.findCommentListByUserIdAndBoardNo(mvo.getUserId());
		datarequest.setResponse("ds1", data);
		return new JSONDataView();
	}
}
