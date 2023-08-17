package com.tomato.donghang.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

@Mapper
public interface EduApplyBoardMapper {

	void createBoard(EduApplyBoardVO vo);
	
	void updateBoard(EduApplyBoardVO vo);
	
	List<EduApplyBoardVO> findBoardList();

	long findAllBoardCount();

	List<EduApplyBoardVO> findBoardListWithStatusByPage(Map<String, Object> map);

	long findBoardCountByStatus(String status);


}
