package com.tomato.donghang.model.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class EduApplyCommentBoardVO {
	private long eduApplyCommentBoardNo;
	private String eduApplyCommentContent;
	private EduApplyBoardVO eduApplyBoardVO;
	private MemberVO memberVO; 
	public EduApplyCommentBoardVO(long eduApplyCommentBoardNo) {
		super();
		this.eduApplyCommentBoardNo = eduApplyCommentBoardNo;
	}
}

//--코멘트 번호
//EDU_APPLY_COMMENT_BOARD_NO NUMBER,
//--코멘트 내용
//EDU_APPLY_COMMENT_CONTENT CLOB,
//--게시판 번호
//EDU_BOARD_NO NUMBER,
//--사용자 아이디
//USER_ID  VARCHAR2(30),