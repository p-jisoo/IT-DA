package com.tomato.donghang.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

@Mapper
public interface EduApplyBoardMapper {

	void createBoard(EduApplyBoardVO vo);
	
	List<EduApplyBoardVO> findBoardList();

	List<EduApplyBoardVO> findBoardListByPage(Pagination pagination);

	long findAllBoardCount();
}
