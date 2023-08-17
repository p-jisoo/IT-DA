package com.tomato.donghang.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

public interface EduApplyBoardService {
	void createBoard(ParameterGroup param);
	
	void updateBoard(ParameterGroup param);

	List<Map<String, Object>> findBaordList();

	List<Map<String, Object>> findBaordListBy(String value);
}
