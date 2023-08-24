package com.tomato.donghang.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.vo.EduApplyBoardVO;
import com.tomato.donghang.model.vo.EduApplyCommentBoardVO;

@Mapper
public interface EduApplyBoardMapper {
	
	List<EduApplyBoardVO> findBoardList();

	long findAllBoardCount();

	List<EduApplyBoardVO> findBoardListWithStatusByPage(Map<String, Object> map);

	long findBoardCountByStatus(String status);
	
	List<Map<String, Object>> findBoardListPageAndSearchThing(Map<String, Object> map);

	List<Map<String, Object>> findBoardListPageAndSearchKeyword(Map<String, Object> map);

	long findBoardCountByStatusWithSearch(Map<String, String> map);

	void likePlus();
	
	void createBoard(EduApplyBoardVO vo);
	
	void updateBoard(EduApplyBoardVO vo);
	
	void deleteBoard(EduApplyBoardVO vo);
	
	EduApplyBoardVO selectBoard();
	
	void createCommentBoard(EduApplyCommentBoardVO ecvo);
	
	void updateCommentBoard(EduApplyCommentBoardVO ecvo);
	
	void deleteCommentBoard(EduApplyCommentBoardVO ecvo);
	
	EduApplyCommentBoardVO selectCommentBoard();


	Map<String, Object> selectCommentBoardMap(Map<String, Object> map);

}
