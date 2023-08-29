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
	
	void createBoard(ParameterGroup param);
	
	void updateBoard(ParameterGroup param);

	void deleteBoard(ParameterGroup param);
	
	Map<String, Object> selectBoard(ParameterGroup param);
	
	void createCommentBoard(ParameterGroup param);
	
	void updateCommentBoard(ParameterGroup param);
	
	void deleteCommentBoard(ParameterGroup param);
	
	Map<String, Object> selectCommentBoard(ParameterGroup param);
	
	List<Map<String, String>> findAppliedListByUserId(String id);
	
	List<Map<String, String>> findApplyingListByUserId(String id);
	
	List<Map<String,String>> findCommentListByUserIdAndBoardNo(String id);
	Integer likeCount(long eduBoardNo);
	void likeCaculate(String userId, String value);
	long checkCanApply(String userId, long eduBoardNo);
	void applyEduBoard(String userId, String value);
	void cancelEduBoard(String userId, String value);
	
}
