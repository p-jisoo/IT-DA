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
	private int eduBoardMemberCount;
	private String eduBoardStatus;
	private String eduBoardAddress;
	private String eduBoardCategory;
	private String eduBoardContent;
	//private MemberVO memberVO;
}
