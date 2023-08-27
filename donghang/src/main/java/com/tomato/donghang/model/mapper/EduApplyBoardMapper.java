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
	
	EduApplyBoardVO selectBoard(EduApplyBoardVO evo);
	
	void createCommentBoard(EduApplyCommentBoardVO ecvo);
	
	void updateCommentBoard(EduApplyCommentBoardVO ecvo);
	
	void deleteCommentBoard(EduApplyCommentBoardVO ecvo);
	
	EduApplyCommentBoardVO selectCommentBoard(EduApplyCommentBoardVO ecvo);

	Integer isLike(Map<String, Object> map);

	void addLikeCount(Map<String, Object> map);

	void deleteLikeCount(Map<String, Object> map);

	long isMyBoard(Map<String, Object> map);

	long isApply(Map<String, Object> map);

	void applyEdu(Map<String, Object> map);

	void cancelEdu(Map<String, Object> map);

	long eduMaxMember(long eduBoardNo);

	long currentMember(long eduBoardNo);

	void applyEnd(long eduBoardNo);

	void applyChange(long eduBoardNo);
}
