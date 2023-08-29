package com.tomato.donghang.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

public interface EduApplyBoardService {
	List<Map<String, Object>> findBaordList();
	List<Map<String, Object>> findBoardListWithStatusByPage(ParameterGroup param);
	List<Map<String, Object>> findBoardListPageAndSearchKeyword(ParameterGroup param);
	
	Map<String, Object> selectMemberCount(ParameterGroup param);
	
	void updateMemberCount(ParameterGroup param);
	
/**************************hyeok*****************************/	
	void createBoard(ParameterGroup param);
	
	void updateBoard(ParameterGroup param);

	void deleteBoard(ParameterGroup param);
	
	Map<String, Object> selectBoard(ParameterGroup param);
	
	void createCommentBoard(ParameterGroup param);
	
	void updateCommentBoard(ParameterGroup param);
	
	void deleteCommentBoard(ParameterGroup param);
	
	List<Map<String, Object>> selectCommentBoard(ParameterGroup param);
	
	/**************************hyeok*****************************/		
	
	
	
	
	
}
