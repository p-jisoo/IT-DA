package com.tomato.donghang.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.View;

import com.tomato.donghang.model.vo.EduApplyBoardVO;

public interface EduApplyBoardService {
	void createBoard(EduApplyBoardVO vo);

	List<Map<String, Object>> findBaordList();
}
