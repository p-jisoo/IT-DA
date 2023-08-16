package com.tomato.donghang.model.vo;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class EduApplyBoardVO {
	private long eduBoardNo;
	private String eduBoardTitle;
	private String eduBoardStartPeriod;
	private String eduBoardEndPeriod;
	private String eduBoardApplyStartPeriod;
	private String eduBoardApplyEndPeriod;
	private int eduBoardApplyMemberCount;
	private String eduApplyBoardStatus;
	private String eduApplyBoardCategory;
	private String eduApplyBoardContent;
	//private MemberVO memberVO;
//	EDU_BOARD_NO NUMBER,
//	--교육 제목
//	EDU_BOARD_TITLE VARCHAR2(100),
//	--교육기간
//	--시작
//	EDU_BOARD_START_PERIOD DATE,
//	--마감
//	EDU_BOARD_END_PERIOD DATE, 
//	--모집기간
//	--시작
//	EDU_BOARD_APPLY_START_PERIOD DATE,
//	--마감
//	EDU_BOARD_APPLY_END_PERIOD DATE,
//	--모집인원 
//	EDU_BOARD_APPLY_MEMBER_COUNT NUMBER,
//	--모집상태
//	EDU_APPLY_BOARD_STATUS VARCHAR2(50) DEFAULT '모집중',
//	--교육분야
//	EDU_APPLY_BOARD_CATEGORY VARCHAR2(100),
//	--게시판내용
//	EDU_APPLY_BOARD_CONTENT CLOB,
}
