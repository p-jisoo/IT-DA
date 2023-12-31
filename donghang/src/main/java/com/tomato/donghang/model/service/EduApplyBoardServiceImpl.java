package com.tomato.donghang.model.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.mapper.MemberMapper;
import com.tomato.donghang.model.vo.EduApplyBoardVO;
import com.tomato.donghang.model.vo.EduApplyCommentBoardVO;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EduApplyBoardServiceImpl implements EduApplyBoardService {
	private final EduApplyBoardMapper eduApplyBoardMapper;

	@Override
	public List<Map<String, Object>> findBaordList() {
		long totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		
		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		List<EduApplyBoardVO> list = eduApplyBoardMapper.findBoardList();
		for(EduApplyBoardVO evo : list) {
			Map<String, Object> row = new HashMap<String, Object>();
			row.put("BOARD_NO", evo.getEduBoardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardApplyStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduBoardCategory());
			//STATUS
			row.put("TOTAL_BOARD_COUNT", totalBoardCount);
			data.add(row);
		}
		return data;
	}

	@Override
	public List<Map<String, Object>> findBoardListWithStatusByPage(ParameterGroup param) {
		long nowPage = 0;
		Pagination pagination;
		String PrevPage = "0";
		String NextPage = "0";
		String applyStatus =  param.getValue("status");
		long totalBoardCount = 0;	
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus= "";
			 totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		}else {
			log.debug("status{}", param.getValue("status"));
			 totalBoardCount = eduApplyBoardMapper.findBoardCountByStatus(applyStatus);
		}
		
		
		
		if(param.getValue("nowpage")==null || param.getValue("nowpage")=="") {
			 pagination = new Pagination(totalBoardCount);
		}else {
			nowPage = Long.parseLong(param.getValue("nowpage"));
			 pagination = new Pagination(totalBoardCount,nowPage);
		}
		//파리미터로 넘어온  nowpage의 값 null체크
		
		if(pagination.isPreviousPageGroup()) {
			 PrevPage = "1";
		}else{
			 PrevPage = "0";
		}
		if(pagination.isNextPageGroup()) {
			NextPage = "1";
		}else{
			NextPage = "0";
		}
		//NextPage 와 PrePage의 값 설정
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
	    map.put("status", applyStatus);
	    List<Map<String, Object>> data  = eduApplyBoardMapper.findBoardListPageAndSearchThing(map);
	    List<Map<String, Object>> newData = new ArrayList<>();
		for(Map<String, Object> evo : data) {
			evo.put("NOW_PAGE", nowPage);
			evo.put("TOTAL_BOARD_COUNT", totalBoardCount);
			evo.put("PREVPAGE", PrevPage);
			evo.put("NEXTPAGE", NextPage);
			newData.add(evo);
		}
		data = newData;
		log.info("findBoardListWithStatusByPage data {}", data);
		return data;
	}
	
	@Override
	public List<Map<String, Object>> findBoardListPageAndSearchKeyword(ParameterGroup param) {
		long nowPage = 0;
		Pagination pagination;
		String PrevPage = "0";
		String NextPage = "0";
		String type = param.getValue("type");
		String keyword = param.getValue("keyword");
		String applyStatus =  param.getValue("status");
		Map<String, String> map = new HashMap<>();
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus=null;
		}
		map.put("status", applyStatus);
		map.put("keyword", keyword);
		map.put("type", type);
		long totalBoardCount = 0;	
		   log.warn("mapkeyword {}", map);
		totalBoardCount = eduApplyBoardMapper.findBoardCountByStatusWithSearch(map);
		if(param.getValue("nowpage")==null || param.getValue("nowpage")=="") {
			 pagination = new Pagination(totalBoardCount);
		}else {
			nowPage = Long.parseLong(param.getValue("nowpage"));
			 pagination = new Pagination(totalBoardCount,nowPage);
		}
		//파리미터로 넘어온  nowpage의 값 null체크
		
		if(pagination.isPreviousPageGroup()) {
			 PrevPage = "1";
		}else{
			 PrevPage = "0";
		}
		if(pagination.isNextPageGroup()) {
			NextPage = "1";
		}else{
			NextPage = "0";
		}
		//NextPage 와 PrePage의 값 설정
		
		Map<String, Object> po = new HashMap<>();
		po.put("pagination", pagination);
	    po.put("status", applyStatus);
	    po.put("type", type);
	    po.put("keyword", keyword);
	    log.info("map {}", map);
	    List<Map<String, Object>> data  = eduApplyBoardMapper.findBoardListPageAndSearchKeyword(po);
	    log.info("총 게시물 수 {}", data);
	    if(data.size()==0) {
	    	return data;
	    }
	    List<Map<String, Object>> newData = new ArrayList<>();
		for(Map<String, Object> evo : data) {
			evo.put("NOW_PAGE", nowPage);
			evo.put("TOTAL_BOARD_COUNT", totalBoardCount);
			evo.put("PREVPAGE", PrevPage);
			evo.put("NEXTPAGE", NextPage);
			newData.add(evo);
		}
		data = newData;
		return data;
	}
	@Override
	public void likeCaculate(String userId, String value) {
		Map<String, Object> map = new HashMap<>();
		long eduBoardNo = Long.parseLong(value);
		map.put("userId", userId);
		map.put("eduBoardNo", eduBoardNo);
		log.info("map {}", map);
		Integer likeCount = eduApplyBoardMapper.isLike(map);
		log.info("likeCount {}",likeCount);
		if(likeCount==null || likeCount==0) {
			eduApplyBoardMapper.addLikeCount(map);
		}else {
			eduApplyBoardMapper.deleteLikeCount(map);
		}
	}

	@Override
	public long checkCanApply(String userId, long eduBoardNo) {
		Map<String, Object> map = new HashMap<>();
		map.put("eduBoardNo", eduBoardNo);
		map.put("userId", userId);
		long canApply = eduApplyBoardMapper.isApply(map);
		if(canApply==0) {
			return nowCount(eduBoardNo);
		}
		return canApply;
	}
	public long nowCount(long eduBoardNo) {
		long maxMember = eduApplyBoardMapper.eduMaxMember(eduBoardNo);
		long currentMember = eduApplyBoardMapper.currentMember(eduBoardNo);
		long canApply = (maxMember - currentMember) ;
		if(canApply == 0) {
			canApply= 3; // 마감되어서 꽉 찬 상태
		}else {
			canApply = 0; // 지원가능
		}
		return canApply;
	}
	@Override
	public void applyEduBoard(String userId, String value) {
		long eduBoardNo = Long.parseLong(value);
		Map<String, Object> map = new HashMap<>();
		map.put("eduBoardNo", eduBoardNo);
		map.put("userId", userId);
		long maxMember = eduApplyBoardMapper.eduMaxMember(eduBoardNo);
		long currentMember = eduApplyBoardMapper.currentMember(eduBoardNo);
		long changeStatus = (maxMember - currentMember);
		if(changeStatus==1) {
			eduApplyBoardMapper.applyEnd(eduBoardNo);
		}
		eduApplyBoardMapper.applyEdu(map);
	}

	@Override
	public void cancelEduBoard(String userId, String value) {
		long eduBoardNo = Long.parseLong(value);
		Map<String, Object> map = new HashMap<>();
		map.put("eduBoardNo", eduBoardNo);
		map.put("userId", userId);
		long maxMember = eduApplyBoardMapper.eduMaxMember(eduBoardNo);
		long currentMember = eduApplyBoardMapper.currentMember(eduBoardNo);
		long changeStatus = (maxMember - currentMember);
		if(changeStatus==0) {
			eduApplyBoardMapper.applyChange(eduBoardNo);
		}
		eduApplyBoardMapper.cancelEdu(map);
	}

	@Override
	public List<Map<String, String>> findAppliedListByUserId(String id) {
		List<Map<String, String>> data = new ArrayList<Map<String, String>>();
		List<EduApplyBoardVO> list =eduApplyBoardMapper.findAppliedListByUserId(id);
		for(EduApplyBoardVO eduboard : list) {
			Map<String, String> row = new HashMap<String, String>();
			row.put("EDU_BOARD_TITLE", eduboard.getEduBoardTitle());
			row.put("EDU_BOARD_CATEGORY", eduboard.getEduBoardCategory());
			row.put("EDU_BOARD_ADDRESS", eduboard.getEduBoardAddress());
			row.put("EDU_BOARD_CONTENT", eduboard.getEduBoardContent());
			data.add(row);
		}
		log.info("data {}",data);
		return data;
	}
	
	@Override
	public Integer likeCount(long eduBoardNo) {
		Map<String, Object> map = new HashMap<>();
		map.put("eduBoardNo", eduBoardNo);
		log.info("여기는 로그인안했을때eduApplyBoardMapper.isLike(map) {}", eduApplyBoardMapper.isLike(map));
		return eduApplyBoardMapper.isLike(map);
	}
	
	
	
	//여기까지 지원 검색 좋아요 페이지네이션  한거
	@Override
	public List<Map<String, String>> findApplyingListByUserId(String id) {
		List<Map<String, String>> data = new ArrayList<Map<String, String>>();
		List<EduApplyBoardVO> list = eduApplyBoardMapper.findApplyingListByUserId(id);
		for(EduApplyBoardVO board : list) {
			Map<String, String> row = new HashMap<String, String>();
			row.put("EDU_BOARD_TITLE", board.getEduBoardTitle());
			row.put("EDU_BOARD_CATEGORY", board.getEduBoardCategory());
			row.put("EDU_BOARD_ADDRESS", board.getEduBoardAddress());
			row.put("EDU_BOARD_CONTENT", board.getEduBoardContent());
			data.add(row);
		}
			
		return data;
	}

	@Override
	public List<Map<String, String>> findCommentListByUserIdAndBoardNo(String id) {
		List<Map<String, String>> data = new ArrayList<Map<String, String>>();
		List<EduApplyCommentBoardVO> list = eduApplyBoardMapper.findCommentListByUserIdAndBoardNo(id);
		for(EduApplyCommentBoardVO comments : list) {
			Map<String, String> row = new HashMap<String, String>();
			row.put("EDU_BOARD_TITLE", comments.getEduApplyBoardVO().getEduBoardTitle());
			row.put("EDU_APPLY_COMMENT_CONTENT", comments.getEduApplyCommentContent());
			data.add(row);
		}
		log.info("data {}",data);
		return data;
	}	
	
	
/********************hyeok***************************************/	
	//board CRUD
	@Override
	public Map<String, Object> selectBoard(ParameterGroup param) {
		System.out.println("selectBoard param "+ param );
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		//System.out.println("evo : "+evo);
		EduApplyBoardVO evo2 = eduApplyBoardMapper.selectBoard(evo);
		System.out.println("serviceImpl evo : " + evo2);
		Map<String, Object> dataMap = new HashMap<>();
		
		dataMap.put("EDU_BOARD_TITLE", evo2.getEduBoardTitle());
		dataMap.put("EDU_BOARD_START_PERIOD", evo2.getEduBoardStartPeriod());
		dataMap.put("EDU_BOARD_END_PERIOD", evo2.getEduBoardEndPeriod());
		dataMap.put("EDU_BOARD_APPLY_START_PERIOD", evo2.getEduBoardApplyStartPeriod());
		dataMap.put("EDU_BOARD_APPLY_END_PERIOD", evo2.getEduBoardApplyEndPeriod());
		dataMap.put("EDU_BOARD_MAX_MEMBER_COUNT", evo2.getEduBoardMaxMemberCount());
		dataMap.put("EDU_BOARD_ADDRESS", evo2.getEduBoardAddress());
		dataMap.put("EDU_BOARD_CATEGORY", evo2.getEduBoardCategory());
		dataMap.put("EDU_BOARD_CONTENT", evo2.getEduBoardContent());
		dataMap.put("EDU_BOARD_NO",evo2.getEduBoardNo());
		dataMap.put("EDU_BOARD_STATUS",evo2.getEduBoardStatus());
		dataMap.put("USER_ID", evo2.getMemberVO().getUserId());
		
		//System.out.println("serviceImpl MAP" + dataMap);
		System.out.println("select Board : " + dataMap);
		return dataMap;
	}

	@Override
	public void createBoard(ParameterGroup param) {
		// String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");
		log.info("USER_ID {}", USER_ID);
		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.createBoard(vo);
	}

	@Override
	public void updateBoard(ParameterGroup param) {
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");

		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardNo(Long.parseLong(eduBoardNo));
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.updateBoard(vo);
	}

	@Override
	public void deleteBoard(ParameterGroup param) {
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");

		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardNo(Long.parseLong(eduBoardNo));
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.deleteBoard(vo);
	}
	
	//comment CRUD
	@Override
	public List<Map<String, Object>> selectCommentBoard(ParameterGroup param) {
		System.out.println("selectCommentBoard param :" +param);
		
		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		if(param.getValue("USER_ID")!=null) {
			String userId = param.getValue("USER_ID");
			MemberVO mvo = new MemberVO();
			mvo.setUserId(userId);
			ecvo.setMemberVO(mvo);
		}
		ecvo.setEduApplyBoardVO(evo);
		
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		List<EduApplyCommentBoardVO> ecvoList=eduApplyBoardMapper.selectCommentBoard(ecvo);
		System.out.println("comment ecvoList : "+ecvoList);
		for(EduApplyCommentBoardVO ecvo2 : ecvoList) {
		Map<String, Object> map = new HashMap<>();
		map.put("EDU_APPLY_COMMENT_CONTENT", ecvo2.getEduApplyCommentContent());
		map.put("EDU_BOARD_NO", ecvo2.getEduApplyBoardVO().getEduBoardNo());
		if(ecvo2.getMemberVO().getUserId()!=null) {
			map.put("USER_ID", ecvo2.getMemberVO().getUserId());
		}
		list.add(map);
		}
		System.out.println("comment list : "+list);
		
		return list;
	}

	@Override
	public void createCommentBoard(ParameterGroup param) {
		System.out.println("createCommentBoard param : "+param);
		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String USER_ID = param.getValue("USER_ID");

		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
		
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		ecvo.setEduApplyBoardVO(evo);
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		ecvo.setMemberVO(mvo);

		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.createCommentBoard(ecvo);
	}

	@Override
	public void updateCommentBoard(ParameterGroup param) {
		for(Map<String, String> list :  param.getAllRowList()) {
			log.info("rowList {}", list );
		}
	
		
		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		//String eduBoardNo = param.getValue("EDU_BOARD_NO");
		//String USER_ID = param.getValue("USER_ID");
		//System.out.println("eduBoardNo " + eduBoardNo);
		//System.out.println("USER_ID "+USER_ID);
		
		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();


		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.updateCommentBoard(ecvo);
	}

	@Override
	public void deleteCommentBoard(ParameterGroup param) {
		System.out.println("delete Board param : "+param);
		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String USER_ID = param.getValue("USER_ID");
		System.out.println("delete eduBoardNo :" + eduBoardNo);
		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
		
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		ecvo.setEduApplyBoardVO(evo);
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		ecvo.setMemberVO(mvo);

		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.deleteCommentBoard(ecvo);
	}

	@Override
	public Map<String, Object> selectMemberCount(ParameterGroup param) {

		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		Map<String, Object> map = new HashMap<>();
		map.put("eduBoardNo", Long.parseLong(eduBoardNo));
		System.out.println("map " + map);
		Map<String, Object> dataMap=eduApplyBoardMapper.selectMemberCount(map);

		
		System.out.println("serviceImpl MAP : " + dataMap);
		return dataMap;
	}
	@Override
	
	public void updateMemberCount(ParameterGroup param){
	String eduBoardNo = param.getValue("EDU_BOARD_NO");
	
	Map<String, Object> map = new HashMap<>();
	map.put("eduBoardNo", Long.parseLong(eduBoardNo));
	System.out.println("map " + map);
	Map<String, Object> dataMap=eduApplyBoardMapper.updateMemberCount(map);
	map.get("TOTAL_COUNT");
	dataMap.put("TOTAL_COUNT", map.get(("TOTAL_COUNT")+1));
	
	System.out.println("serviceImpl MAP : " + dataMap);
}
	
/********************hyeok***************************************/	
}
